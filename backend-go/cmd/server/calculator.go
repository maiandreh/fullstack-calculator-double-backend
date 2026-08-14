package main

import (
	"encoding/json"
	"errors"
	"io"
	"log"
	"mime"
	"net/http"

	"github.com/maiandreh/fullstack-calculator-double-backend/backend-go/internal/expression"
)

const allowedDevelopmentOrigin = "http://localhost:5173"

type calculateRequest struct {
	Expression *string `json:"expression"`
}

type calculateResponse struct {
	Result float64 `json:"result"`
}

type errorResponse struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

func calculate(response http.ResponseWriter, request *http.Request) {
	setAllowedOrigin(response, request)

	mediaType, _, err := mime.ParseMediaType(request.Header.Get("Content-Type"))
	if err != nil || mediaType != "application/json" {
		response.WriteHeader(http.StatusUnsupportedMediaType)
		return
	}

	var body calculateRequest
	decoder := json.NewDecoder(request.Body)
	decoder.DisallowUnknownFields()
	if err := decoder.Decode(&body); err != nil || body.Expression == nil || !jsonBodyComplete(decoder) {
		writeJSON(response, http.StatusBadRequest, invalidRequestResponse())
		return
	}

	result, err := expression.Evaluate(*body.Expression)
	if err != nil {
		status, mapped, ok := mapDomainError(err)
		if !ok {
			log.Printf("evaluate expression: unexpected domain error")
			http.Error(response, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		writeJSON(response, status, mapped)
		return
	}

	writeJSON(response, http.StatusOK, calculateResponse{Result: result})
}

func calculatePreflight(response http.ResponseWriter, request *http.Request) {
	setAllowedOrigin(response, request)
	if request.Header.Get("Origin") == allowedDevelopmentOrigin {
		response.Header().Set("Access-Control-Allow-Methods", http.MethodPost)
		response.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	}
	response.WriteHeader(http.StatusNoContent)
}

func jsonBodyComplete(decoder *json.Decoder) bool {
	var trailing json.RawMessage
	return decoder.Decode(&trailing) == io.EOF
}

func setAllowedOrigin(response http.ResponseWriter, request *http.Request) {
	if request.Header.Get("Origin") != allowedDevelopmentOrigin {
		return
	}
	response.Header().Set("Access-Control-Allow-Origin", allowedDevelopmentOrigin)
	response.Header().Add("Vary", "Origin")
}

func mapDomainError(err error) (int, errorResponse, bool) {
	switch {
	case errors.Is(err, expression.ErrInvalidRequest):
		return http.StatusBadRequest, invalidRequestResponse(), true
	case errors.Is(err, expression.ErrInvalidExpression):
		return http.StatusBadRequest, errorResponse{
			Code:    "INVALID_EXPRESSION",
			Message: "Expression is invalid",
		}, true
	case errors.Is(err, expression.ErrDivisionByZero):
		return http.StatusBadRequest, errorResponse{
			Code:    "DIVISION_BY_ZERO",
			Message: "Division by zero is not allowed",
		}, true
	case errors.Is(err, expression.ErrInvalidDomain):
		return http.StatusBadRequest, errorResponse{
			Code:    "INVALID_DOMAIN",
			Message: "Expression is outside the supported real-number domain",
		}, true
	case errors.Is(err, expression.ErrNonFiniteResult):
		return http.StatusBadRequest, errorResponse{
			Code:    "NON_FINITE_RESULT",
			Message: "Expression result is not finite",
		}, true
	default:
		return 0, errorResponse{}, false
	}
}

func invalidRequestResponse() errorResponse {
	return errorResponse{
		Code:    "INVALID_REQUEST",
		Message: "A non-empty expression of at most 256 characters is required",
	}
}

func writeJSON(response http.ResponseWriter, status int, body any) {
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(status)
	if err := json.NewEncoder(response).Encode(body); err != nil {
		log.Printf("write JSON response: %v", err)
	}
}
