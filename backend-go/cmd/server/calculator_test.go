package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestCalculateSuccess(t *testing.T) {
	response := performCalculateRequest(`{"expression":"(2 + 3) * 4"}`, "application/json", "")

	if response.Code != http.StatusOK {
		t.Fatalf("status = %d, want %d; body = %s", response.Code, http.StatusOK, response.Body.String())
	}
	if contentType := response.Header().Get("Content-Type"); contentType != "application/json" {
		t.Fatalf("Content-Type = %q, want application/json", contentType)
	}

	var body map[string]any
	decodeResponse(t, response, &body)
	if len(body) != 1 {
		t.Fatalf("response fields = %v, want result only", body)
	}
	if result, ok := body["result"].(float64); !ok || result != 20 {
		t.Fatalf("result = %#v, want numeric 20", body["result"])
	}
}

func TestCalculateRejectsInvalidRequests(t *testing.T) {
	tests := map[string]string{
		"missing expression":    `{}`,
		"null expression":       `{"expression":null}`,
		"non-string expression": `{"expression":20}`,
		"empty expression":      `{"expression":""}`,
		"whitespace expression": `{"expression":"   "}`,
		"long expression":       `{"expression":"` + strings.Repeat("1", 257) + `"}`,
		"malformed JSON":        `{"expression":"2 + 2"`,
		"trailing JSON":         `{"expression":"2 + 2"} {}`,
		"unknown field":         `{"expression":"2 + 2","extra":true}`,
	}

	for name, requestBody := range tests {
		t.Run(name, func(t *testing.T) {
			response := performCalculateRequest(requestBody, "application/json", "")
			assertAPIError(t, response, http.StatusBadRequest, "INVALID_REQUEST", "A non-empty expression of at most 256 characters is required")
		})
	}
}

func TestCalculateMapsDomainErrors(t *testing.T) {
	tests := []struct {
		name       string
		expression string
		code       string
		message    string
	}{
		{"invalid expression", "2 +", "INVALID_EXPRESSION", "Expression is invalid"},
		{"division by zero", "1 / 0", "DIVISION_BY_ZERO", "Division by zero is not allowed"},
		{"invalid domain", "sqrt(-1)", "INVALID_DOMAIN", "Expression is outside the supported real-number domain"},
		{"non-finite result", "10 ^ 1000", "NON_FINITE_RESULT", "Expression result is not finite"},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			response := performCalculateRequest(`{"expression":"`+test.expression+`"}`, "application/json", "")
			assertAPIError(t, response, http.StatusBadRequest, test.code, test.message)
		})
	}
}

func TestCalculateRejectsUnsupportedMediaType(t *testing.T) {
	response := performCalculateRequest(`{"expression":"2 + 2"}`, "text/plain", "")
	if response.Code != http.StatusUnsupportedMediaType {
		t.Fatalf("status = %d, want %d", response.Code, http.StatusUnsupportedMediaType)
	}
}

func TestCalculateAllowsDevelopmentOrigin(t *testing.T) {
	response := performCalculateRequest(`{"expression":"2 + 2"}`, "application/json", allowedDevelopmentOrigin)
	if origin := response.Header().Get("Access-Control-Allow-Origin"); origin != allowedDevelopmentOrigin {
		t.Fatalf("Access-Control-Allow-Origin = %q, want %q", origin, allowedDevelopmentOrigin)
	}

	disallowed := performCalculateRequest(`{"expression":"2 + 2"}`, "application/json", "https://example.com")
	if origin := disallowed.Header().Get("Access-Control-Allow-Origin"); origin != "" {
		t.Fatalf("disallowed Access-Control-Allow-Origin = %q, want empty", origin)
	}
}

func TestCalculatePreflight(t *testing.T) {
	request := httptest.NewRequest(http.MethodOptions, "/api/calculate", nil)
	request.Header.Set("Origin", allowedDevelopmentOrigin)
	request.Header.Set("Access-Control-Request-Method", http.MethodPost)
	request.Header.Set("Access-Control-Request-Headers", "Content-Type")
	response := httptest.NewRecorder()

	routes().ServeHTTP(response, request)

	if response.Code != http.StatusNoContent {
		t.Fatalf("status = %d, want %d", response.Code, http.StatusNoContent)
	}
	if origin := response.Header().Get("Access-Control-Allow-Origin"); origin != allowedDevelopmentOrigin {
		t.Fatalf("Access-Control-Allow-Origin = %q, want %q", origin, allowedDevelopmentOrigin)
	}
	if methods := response.Header().Get("Access-Control-Allow-Methods"); methods != http.MethodPost {
		t.Fatalf("Access-Control-Allow-Methods = %q, want POST", methods)
	}
	if headers := response.Header().Get("Access-Control-Allow-Headers"); headers != "Content-Type" {
		t.Fatalf("Access-Control-Allow-Headers = %q, want Content-Type", headers)
	}
}

func performCalculateRequest(body, contentType, origin string) *httptest.ResponseRecorder {
	request := httptest.NewRequest(http.MethodPost, "/api/calculate", strings.NewReader(body))
	request.Header.Set("Content-Type", contentType)
	if origin != "" {
		request.Header.Set("Origin", origin)
	}
	response := httptest.NewRecorder()
	routes().ServeHTTP(response, request)
	return response
}

func assertAPIError(t *testing.T, response *httptest.ResponseRecorder, status int, code, message string) {
	t.Helper()
	if response.Code != status {
		t.Fatalf("status = %d, want %d; body = %s", response.Code, status, response.Body.String())
	}
	if contentType := response.Header().Get("Content-Type"); contentType != "application/json" {
		t.Fatalf("Content-Type = %q, want application/json", contentType)
	}
	var body errorResponse
	decodeResponse(t, response, &body)
	if body.Code != code || body.Message != message {
		t.Fatalf("error = %#v, want code %q and message %q", body, code, message)
	}
}

func decodeResponse(t *testing.T, response *httptest.ResponseRecorder, destination any) {
	t.Helper()
	if err := json.NewDecoder(response.Body).Decode(destination); err != nil {
		t.Fatalf("decode response: %v", err)
	}
}
