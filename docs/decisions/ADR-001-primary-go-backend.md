# ADR-001 — Primary Go Backend

**Status:** Accepted

## Context

The assessment prefers Go, and the calculator exposes one small REST endpoint. The primary backend should align with that preference without making HTTP infrastructure the focus.

## Decision

Use a currently supported Go release available in the developer environment for Backend A. Use the standard `net/http` stack, `http.ServeMux`, and standard JSON support. The default local port is `8080`.

## Alternatives considered

- Java as the sole backend would not follow the explicit Go preference and would remove the approved interoperability extension.
- Go with Gin, Echo, Fiber, Chi, or another HTTP framework would add dependency and framework surface without a demonstrated need for one endpoint.

## Consequences

The primary implementation is assessment-aligned, dependency-light, and directly testable. The project owns a small amount of HTTP wiring and must use standard-library facilities carefully.
