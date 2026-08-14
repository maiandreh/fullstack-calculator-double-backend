package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"
)

func TestPortFromEnvironmentDefaultsTo8080(t *testing.T) {
	t.Setenv("PORT", "")
	if err := unsetEnvironment(t, "PORT"); err != nil {
		t.Fatal(err)
	}

	port, err := portFromEnvironment()
	if err != nil {
		t.Fatalf("portFromEnvironment() error = %v", err)
	}
	if port != defaultPort {
		t.Fatalf("portFromEnvironment() = %d, want %d", port, defaultPort)
	}
}

func TestPortFromEnvironmentUsesConfiguredPort(t *testing.T) {
	t.Setenv("PORT", "9090")

	port, err := portFromEnvironment()
	if err != nil {
		t.Fatalf("portFromEnvironment() error = %v", err)
	}
	if port != 9090 {
		t.Fatalf("portFromEnvironment() = %d, want 9090", port)
	}
}

func TestPortFromEnvironmentRejectsUnusablePort(t *testing.T) {
	for _, value := range []string{"", "abc", "0", "65536"} {
		t.Run(value, func(t *testing.T) {
			t.Setenv("PORT", value)
			if _, err := portFromEnvironment(); err == nil {
				t.Fatalf("portFromEnvironment() error = nil, want an error for %q", value)
			}
		})
	}
}

func TestHealth(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "/health", nil)
	response := httptest.NewRecorder()

	routes().ServeHTTP(response, request)

	if response.Code != http.StatusOK {
		t.Fatalf("status = %d, want %d", response.Code, http.StatusOK)
	}
	if contentType := response.Header().Get("Content-Type"); contentType != "application/json" {
		t.Fatalf("Content-Type = %q, want application/json", contentType)
	}

	var body map[string]string
	if err := json.NewDecoder(response.Body).Decode(&body); err != nil {
		t.Fatalf("decode response: %v", err)
	}
	if status := body["status"]; status != "ok" {
		t.Fatalf("status body = %q, want ok", status)
	}
}

func unsetEnvironment(t *testing.T, key string) error {
	t.Helper()

	value, exists := os.LookupEnv(key)
	t.Cleanup(func() {
		if exists {
			_ = os.Setenv(key, value)
		} else {
			_ = os.Unsetenv(key)
		}
	})

	return os.Unsetenv(key)
}
