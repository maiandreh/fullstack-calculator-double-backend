# Calculator Architecture and Design

## 1. Purpose

This document defines the minimal technical architecture for implementing `REQUIREMENTS.md`, `SCOPE.md`, and `SPEC.md`. Behavior remains governed by `SPEC.md`; this design must conform to it and may not redefine it. The architecture is optimized, in order, for correctness, clarity, maintainability, testability, backend parity, a small dependency surface, and the assessment's two-to-four-hour context.

## 2. Architectural Drivers

- One small REST endpoint with deterministic finite-binary64 behavior.
- Two independently implemented, interchangeable backends sharing a contract rather than code.
- A bounded expression grammar whose precedence and errors must not inherit library-specific behavior.
- An expression-oriented React UI with selectable backend and responsive interaction.
- Direct tests of domain behavior, focused transport tests, UI interaction tests, and live parity verification.
- No speculative scale, persistence, authentication, messaging, or enterprise layering.

## 3. System Context

```text
                     POST /api/calculate
Browser ──> Frontend ─────────┬────────> Backend A: Go, :8080
                              └────────> Backend B: Java, :8081
```

The browser constructs and displays expressions and chooses one backend. Only the selected backend evaluates a request. Both backends implement the same `SPEC.md` contract; neither calls the other.

## 4. Component Architecture

Each backend has only the boundaries needed to isolate transport from calculation:

```text
HTTP handler/controller → calculator evaluator → bounded parser
          │                       │
          └── API error mapping ←─┘ domain errors
```

HTTP request/response types remain at the transport boundary. The evaluator accepts expression text and returns either a binary64-compatible result or an implementation-internal domain error. No repository, persistence, messaging, gateway, authentication, or redundant application/service abstraction is introduced.

## 5. Repository Layout

```text
fullstack-calculator-double-backend/
├── AGENTS.md
├── REQUIREMENTS.md
├── SCOPE.md
├── SPEC.md
├── DESIGN.md
├── TASKS.md
├── README.md
├── .gitignore
├── docs/
│   ├── ai-prompts.md
│   └── decisions/
├── frontend/
├── backend-go/
├── backend-java/
└── compose.yaml
```

Only the architecture documents explicitly requested in this phase are created now. Application directories, manifests, `TASKS.md`, README, container files, and source files belong to later approved phases.

## 6. Go Backend Design

Backend A is the primary, assessment-aligned implementation because `CON-003` prefers Go. It uses a currently supported Go release available in the developer environment, the standard `net/http` package, `http.ServeMux`, and standard JSON encoding/decoding. Its default local port is `8080`.

The standard library is sufficient for one endpoint and keeps HTTP infrastructure and dependencies small. Gin, Echo, Fiber, Chi, and other HTTP frameworks are excluded unless a later concrete requirement demonstrates that `net/http` is insufficient. Go source will keep the HTTP handler, evaluator/parser, and domain errors independently testable without ceremony.

## 7. Java Backend Design

Backend B is an approved project extension, not an assessment requirement. It independently implements the shared contract using Java 21, Spring Boot, Maven, Spring Web, JUnit 5, MockMvc for focused HTTP tests, and JaCoCo for coverage. Its default local port is `8081`; Lombok is excluded.

The implementation remains intentionally small: controller/transport mapping, evaluator/parser, and domain errors. It has no persistence, repositories, messaging, authentication, single-implementation service interfaces, needless factories, pattern frameworks, or architecture ceremony.

## 8. Expression Evaluation Design

Each backend implements its own small custom bounded parser/evaluator; no third-party expression-evaluation library and no shared runtime parser library is used. The specification, grammar, acceptance criteria, and parity dataset are shared; source code is not.

A recursive-descent or equivalent precedence-based implementation follows the exact `SPEC-EXPR-*` grammar levels:

```text
expression     → addition/subtraction
multiplicative → multiplication/division
unary          → unary signs with the SPEC-defined exponent interaction
power          → right-associative exponentiation
postfix        → percentage
primary        → number | parenthesized expression | sqrt(...)
```

Lexing, parsing, and evaluation are separated only when that improves clarity. Direct evaluation during parsing is acceptable; an AST is not required. The design must preserve right-associative exponentiation, `-2 ^ 2 = -4`, `(-2) ^ 2 = 4`, postfix percentage, closed-token validation, 256-character enforcement, binary64-equivalent calculation, and rejection rather than permissive recovery.

This choice keeps the small grammar under project control. General expression libraries commonly differ on percentage, unary minus, exponentiation, square root, precedence, and errors; selecting different libraries would increase parity risk and dependency weight.

## 9. Error Mapping

Parser/evaluator code represents invalid grammar, division by zero, invalid real-number domain, and non-finite results with language-idiomatic typed, sentinel, or domain errors independent of HTTP. Transport code maps them to the five canonical `SPEC-ERR-*` codes, messages, and statuses. Request decoding and boundary validation map to `INVALID_REQUEST`.

Framework or dependency exception text is never copied into the public response. Unexpected failures do not expose stack traces, parser internals, or implementation details.

## 10. Frontend Design

The frontend uses React, TypeScript, and Vite; exact compatible stable dependency versions are selected during initialization. It uses browser `fetch`, local React state, Vitest, React Testing Library, and `user-event` where useful. Axios, global state libraries, routing, UI/CSS frameworks, and form libraries are excluded absent a later concrete need.

Guided component boundaries are:

```text
src/
├── App.tsx
├── main.tsx
├── api/calculatorApi.ts
├── config/backends.ts
└── components/
    ├── Calculator.tsx
    ├── Display.tsx
    ├── Keypad.tsx
    └── BackendSelector.tsx
```

`Calculator` coordinates local expression, result, error, pending, and selected-backend state. `Display` presents observable state; `Keypad` emits input actions; `BackendSelector` changes the target; the API module owns REST communication; configuration stays outside UI components. Files are created only when they have these real responsibilities.

The frontend may append approved symbols, backspace, clear, and translate presentation tokens to canonical transport syntax. It never parses for a result or duplicates the evaluator; backend results are authoritative.

## 11. Backend Selection and Configuration

The default local base URLs are `http://localhost:8080` for Backend A and `http://localhost:8081` for Backend B. Vite environment variables override both values. Environment-specific production URLs are not scattered through components.

Selection changes only the destination of the next evaluation and never triggers evaluation. During local development each API permits the Vite development origin with minimal CORS configuration. No gateway or reverse proxy is introduced merely to avoid development CORS, and container topology preserves two independently selectable backend URLs.

## 12. Testing Strategy

The test pyramid is deliberately small:

- Parser/domain tests carry most expression semantics and domain-error coverage, derived from `AC-EXPR-*` and relevant `AC-ERR-*` criteria.
- Focused Go handler and Java MockMvc tests cover decoding, validation, exact result/error schemas, status codes, and domain-to-transport mapping without repeating every parser permutation.
- React Testing Library tests exercise keypad and keyboard construction, display, evaluate, clear/backspace, backend selection, success/error/connectivity states, and duplicate-submit prevention. Network behavior is mocked at the frontend API boundary.
- Integration verification starts both backends and runs one repository-level contract dataset against both rather than duplicating parity expectations in unrelated suites.

Tests prioritize observable behavior and map to approved acceptance criteria. Valid tests are not weakened to accommodate implementation.

## 13. Cross-Backend Parity Strategy

A later lightweight repository-level script or fixture will encode representative `AC-PAR-001`–`AC-PAR-007` requests and expected status, schema, error values, and numeric comparison. It sends the identical dataset to both live base URLs. Exact results compare exactly; other finite results use the `1e-12` absolute tolerance from `SPEC-PAR-001`. Framework-generated 415 bodies remain outside byte-for-byte parity. No heavy contract-testing framework is introduced.

## 14. Coverage Strategy

Go uses built-in coverage tooling, Java uses JaCoCo, and the frontend uses Vitest coverage. Coverage supports behavioral evidence rather than an arbitrary percentage gate. Generated reports remain Git-ignored, and the future README documents commands for all three reports.

## 15. Container Architecture

Docker, optional in assessment provenance but committed by `SCOPE.md`, supplies one simple container for each frontend and backend plus a root Compose configuration that starts the full application. The browser-facing frontend retains separate configurable Backend A and Backend B destinations so the selector remains meaningful.

Docker is a delivery convenience, not the architectural center. Kubernetes, Helm, service discovery, an API gateway, and production orchestration are excluded.

## 16. Security Boundaries

Expression text is untrusted. Both backends enforce the closed grammar and length limit, never call language evaluation facilities, never invoke shells, and never dynamically execute supplied content. Controlled domain errors cross the transport boundary. Authentication, authorization, databases, and unrelated security infrastructure are outside scope.

## 17. Dependency Policy

Every production dependency requires a concrete responsibility. Go should use only its standard library; Java production dependencies are limited to Spring Boot Web/runtime needs; frontend production dependencies are the React runtime and minimal Vite application needs. Approved test/build dependencies support the stated verification strategy. Straightforward code is preferred over dependencies that merely save a few lines.

## 18. Quality and Tooling Strategy

- Go: `gofmt`, `go vet`, and `go test` with built-in coverage.
- Java: Maven compile/test lifecycle, JUnit 5, MockMvc, and JaCoCo; no Lombok, Checkstyle, or SpotBugs without later justification.
- Frontend: TypeScript compile/build checks, Vitest, and only a lightweight lint setup supplied by the chosen Vite template if valuable; no overlapping formatter/linter systems.

Tool configuration must remain proportionate to this assessment.

## 19. Trade-offs

- Two backend implementations increase delivery and parity-test cost, accepted to demonstrate contract-first interoperability.
- Spring Boot adds more runtime/build weight than a minimal Java HTTP server, accepted for conventional Java 21 REST and focused MockMvc testing while keeping application layering small.
- Custom parsers duplicate implementation effort, accepted because independent code plus a shared specification gives deterministic semantics and meaningful parity evidence.
- Container support adds delivery work, accepted as a committed convenience while remaining deliberately simple.
- Local state and native fetch reduce dependency and abstraction overhead, appropriate for a single-screen calculator.

## 20. ADR Index

- [ADR-001 — Primary Go Backend](docs/decisions/ADR-001-primary-go-backend.md)
- [ADR-002 — Shared Expression Parser Strategy](docs/decisions/ADR-002-shared-expression-parser.md)
- [ADR-003 — Secondary Java Backend](docs/decisions/ADR-003-secondary-java-backend.md)
- [ADR-004 — Frontend Stack](docs/decisions/ADR-004-frontend-stack.md)
- [ADR-005 — Containerized Delivery](docs/decisions/ADR-005-containerized-delivery.md)

## 21. Deferred Implementation Details

Patch-level dependency versions, the supported Go release available at initialization time, exact package and class/function names, whether direct parsing evaluation benefits from a small intermediate representation, exact CORS configuration values, concrete environment-variable names, container base images, health checks, and parity-script format are deferred to implementation planning or initialization. They must remain compatible with this design and `SPEC.md`.
