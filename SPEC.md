# Calculator Behavioral Specification

## 1. Purpose and authority

This document defines the externally observable behavior of the Calculator committed in `SCOPE.md`. It is the source of truth for behavioral correctness and is independent of architecture and implementation. Requirement references identify source requirements; “Scope” references identify approved decisions in `SCOPE.md`.

## 2. Expression language

### SPEC-EXPR-001 — Numeric model

**Trace:** REQ-F-001–REQ-F-004, REQ-O-001–REQ-O-003; Scope §§3, 7, 9.

Values are finite IEEE-754 binary64 real numbers. Numeric literals are decimal representations and calculation uses binary64-equivalent semantics. Java `double` and Go `float64` are examples of compatible representations; this observation selects neither language nor any architecture. The product does not promise arbitrary decimal precision. Complex numbers are unsupported. A successful result is always a finite JSON number; `NaN` and positive or negative infinity are never successful results.

### SPEC-EXPR-002 — Canonical transport tokens

**Trace:** REQ-BE-003, REQ-BE-004; Scope §§3, 5, 10.

The REST expression syntax admits only digits `0`–`9`, `.`, `+`, `-`, `*`, `/`, `^`, `%`, `sqrt`, `(`, `)`, and whitespace. Whitespace is insignificant between tokens but cannot split a token (for example, `sq rt` is invalid). Presentation symbols such as `×`, `÷`, `√`, and `xʸ` are not transport tokens and must be translated by the frontend before submission. The backend contract never depends on Unicode calculator symbols.

### SPEC-EXPR-003 — Decimal literals

**Trace:** REQ-BE-003, REQ-BE-004; Scope §§3, 5.

A numeric literal matches either `[0-9]+(\.[0-9]*)?` or `\.[0-9]+`, and must represent a finite binary64 value. Thus `0`, `12`, `12.5`, `0.5`, `.5`, and `12.` are syntactically valid; `.` and `1.2.3` are invalid. Scientific notation, hexadecimal, binary, octal, locale commas, and numeric separators are not admitted.

### SPEC-EXPR-004 — Grammar and closed boundary

**Trace:** REQ-BE-003, REQ-BE-004; Scope §§5, 10.

Ignoring permitted whitespace, an expression must conform completely to this behavioral grammar:

```text
expression     ::= additive
additive       ::= multiplicative (("+" | "-") multiplicative)*
multiplicative ::= unary (("*" | "/") unary)*
unary          ::= ("+" | "-") unary | power
power          ::= postfix ("^" unary)?
postfix        ::= primary ("%")*
primary        ::= number | "(" expression ")" | "sqrt" "(" expression ")"
```

`number` is defined by SPEC-EXPR-003. This is a closed allowlist, not a general-purpose evaluator. Variables, other functions, empty function arguments, arbitrary executable content, trailing operators, adjacent unary signs after a binary `+` or `-` (so `2 ++ 3` is invalid), unbalanced parentheses, and every unapproved token are invalid. In particular, `foo + 2`, `sin(1)`, `1e3`, `2 +`, `2 ++ 3`, and `sqrt()` are invalid.

### SPEC-EXPR-005 — Basic binary operations

**Trace:** REQ-F-001–REQ-F-004; Scope §3.

`a + b`, `a - b`, `a * b`, and `a / b` perform binary64 addition, subtraction, multiplication, and division. Binary `+`, `-`, `*`, and `/` are left-associative. Division by positive or negative numeric zero is invalid.

### SPEC-EXPR-006 — Exponentiation

**Trace:** REQ-O-001; Scope §§2, 3, 5.

`a ^ b` performs real-number exponentiation. It is right-associative: `2 ^ 3 ^ 2` means `2 ^ (3 ^ 2)` and yields `512`.

### SPEC-EXPR-007 — Percentage

**Trace:** REQ-O-003; Scope §§2, 3, 6.

Postfix `x%` means `x / 100` and composes normally with every approved expression operation. It has no context-sensitive consumer-calculator meaning: `20%` yields `0.2`, `150 * 20%` yields `30`, and `100 + 20%` yields `100.2`.

### SPEC-EXPR-008 — Square root

**Trace:** REQ-O-002; Scope §§2, 3, 7.

`sqrt(expression)` returns the non-negative real square root of its evaluated argument. It accepts compound expressions. A negative argument is outside the supported real-number domain.

### SPEC-EXPR-009 — Unary signs

**Trace:** REQ-F-002, REQ-BE-003; Scope §§3, 5.

Unary `+` and unary `-` are supported, including in contexts such as `-2`, `+2`, and `3 * -2`. Exponentiation binds through the signed exponent rule expressed by SPEC-EXPR-004: `-2 ^ 2` means `-(2 ^ 2)` and yields `-4`, while `(-2) ^ 2` yields `4`.

### SPEC-EXPR-010 — Precedence

**Trace:** REQ-F-001–REQ-F-004, REQ-O-001–REQ-O-003; Scope §§3, 5.

From highest to lowest binding, precedence is: grouping and `sqrt(...)`; postfix `%`; right-associative `^`; unary signs subject to SPEC-EXPR-009; left-associative `*` and `/`; left-associative `+` and `-`.

### SPEC-EXPR-011 — Submitted-expression boundary

**Trace:** REQ-BE-003, REQ-BE-004; Scope §§5, 10.

The submitted `expression` is required, is a JSON string, is neither empty nor whitespace-only, and contains at most 256 Unicode characters before evaluation. It must conform in full to SPEC-EXPR-002–004.

## 3. REST contract

### SPEC-API-001 — Calculation request

**Trace:** REQ-BE-001–REQ-BE-004, CON-002; Scope §§8, 9.

The calculator endpoint is `POST /api/calculate` and consumes `application/json`. A valid request has the shape `{"expression":"(2 + 3) * 4"}`. No other request member is needed for calculation.

### SPEC-API-002 — Successful response

**Trace:** REQ-BE-006; Scope §§8, 9.

A successful calculation returns HTTP `200` with a JSON object containing exactly one member, as in `{"result":20}`, where `result` is a finite JSON number. Expression echoes, metadata, backend identifiers, timestamps, and diagnostic fields are absent.

### SPEC-API-003 — Unsupported media type

**Trace:** REQ-BE-002, CON-002; Scope §9.

A request using an unsupported media type may receive server-standard HTTP `415 Unsupported Media Type`. Its response body is outside the calculator contract and need not match between backends.

## 4. Error contract

### SPEC-ERR-001 — Error envelope

**Trace:** REQ-BE-004, REQ-BE-005; Scope §§7, 9.

Every application-defined calculator error returns HTTP `400` and JSON `{"code":"ERROR_CODE","message":"Human-readable message"}` with the exact code and canonical message specified below.

### SPEC-ERR-002 — INVALID_REQUEST

**Trace:** REQ-BE-004; Scope §9.

Missing, null, non-string, empty, whitespace-only, or over-256-character `expression`, and malformed JSON that cannot be interpreted as a calculator request, return `INVALID_REQUEST` with `A non-empty expression of at most 256 characters is required`.

### SPEC-ERR-003 — INVALID_EXPRESSION

**Trace:** REQ-BE-004; Scope §§5, 10.

An expression that violates the approved grammar returns `INVALID_EXPRESSION` with `Expression is invalid`.

### SPEC-ERR-004 — DIVISION_BY_ZERO

**Trace:** REQ-F-004, REQ-BE-005; Scope §3.

Division by positive or negative numeric zero returns `DIVISION_BY_ZERO` with `Division by zero is not allowed`.

### SPEC-ERR-005 — INVALID_DOMAIN

**Trace:** REQ-O-002; Scope §7.

A mathematically unsupported real-number domain operation, including square root of a negative value, returns `INVALID_DOMAIN` with `Expression is outside the supported real-number domain`.

### SPEC-ERR-006 — NON_FINITE_RESULT and internal failures

**Trace:** REQ-BE-004; Scope §§7, 9.

An evaluation that would otherwise produce `NaN` or either infinity returns `NON_FINITE_RESULT` with `Expression result is not finite`, unless SPEC-ERR-004 or SPEC-ERR-005 is more specific. Unexpected internal failures are not application-defined calculator errors; no custom HTTP 500 body is specified, and responses must not expose stack traces, implementation details, parser internals, or dependency-specific messages.

## 5. Frontend behavior

### SPEC-UI-001 — Calculator controls and expression display

**Trace:** REQ-FE-002; Scope §§3–5.

The UI provides controls for digits, decimal point, all seven committed operations, parentheses, clear/reset, and evaluate/equals, and displays the expression as it is constructed.

### SPEC-UI-002 — Keyboard input

**Trace:** REQ-FE-002; Scope §4.

Where a physical keyboard is available, digits `0`–`9`, `.`, `+`, `-`, `*`, `/`, `^`, `%`, `(`, and `)` append their canonical character; Enter evaluates; Escape clears; and Backspace removes the most recently entered expression character when one exists. Arbitrary free-form text entry is not required. Square root needs no dedicated key shortcut because approved UI controls can construct `sqrt(...)`.

### SPEC-UI-003 — Clear/reset

**Trace:** REQ-FE-002; Scope §§3, 4.

Clear/reset empties the expression and removes the displayed result and any calculator or connectivity error.

### SPEC-UI-004 — Evaluation lifecycle

**Trace:** REQ-FE-002, REQ-BE-003; Scope §§8, 9.

Evaluate submits the current non-empty expression only to the selected backend after translating presentation symbols to canonical syntax. Empty or whitespace-only input causes no request. While a request is pending, another evaluate action does not create a duplicate request.

### SPEC-UI-005 — Results and failures

**Trace:** REQ-FE-002; Scope §8.

Success displays the returned result as the latest answer. An application-defined failure displays the backend-provided calculator message. An unreachable selected backend produces a clear connectivity error. Any failed evaluation removes or clearly disassociates the prior successful result so it is not presented as the current answer.

### SPEC-UI-006 — Backend selection

**Trace:** REQ-FE-002; Scope §9.

The UI exposes exactly the two conceptual choices Backend A and Backend B. Changing selection does not evaluate or change expression semantics; subsequent evaluation targets only the selected backend. Both choices use the same calculator contract.

### SPEC-UI-007 — Responsive usability

**Trace:** REQ-FE-003; Scope §4.

At representative mobile and desktop viewport sizes, all committed controls, expression, result/error feedback, and backend selection remain visible or reachable and operable without loss of calculator functionality. Exact breakpoints and styling are not specified.

## 6. Backend parity

### SPEC-PAR-001 — Valid-request parity

**Trace:** REQ-BE-002, REQ-BE-006; Scope §9.

For the same valid request, both backends return HTTP `200`, the SPEC-API-002 structure, and numerically equivalent results. Equality is exact when results are exactly representable and equivalent; otherwise absolute difference is at most `1e-12`. This verification tolerance does not require user-visible rounding to 12 decimal places.

### SPEC-PAR-002 — Invalid-request parity

**Trace:** REQ-BE-004, REQ-BE-005; Scope §9.

For the same application-defined invalid request, both backends return the same specified status, code, and canonical message. Framework-generated bodies outside the calculator contract, including 415 bodies, need not be byte-for-byte equal.

## 7. Acceptance criteria

### Expression acceptance criteria

| ID | Rule | Concrete observable criterion |
|---|---|---|
| AC-EXPR-001 | SPEC-EXPR-005 | `2 + 3` succeeds with `5`. |
| AC-EXPR-002 | SPEC-EXPR-005 | `7 - 10` succeeds with `-3`. |
| AC-EXPR-003 | SPEC-EXPR-005 | `6 * 7` succeeds with `42`. |
| AC-EXPR-004 | SPEC-EXPR-005 | `8 / 4` succeeds with `2`. |
| AC-EXPR-005 | SPEC-EXPR-001, SPEC-EXPR-003 | `0.1 + 0.2` succeeds with a finite binary64-equivalent result. |
| AC-EXPR-006 | SPEC-EXPR-006 | `2 ^ 8` succeeds with `256`. |
| AC-EXPR-007 | SPEC-EXPR-006 | `2 ^ 3 ^ 2` succeeds with `512`. |
| AC-EXPR-008 | SPEC-EXPR-008 | `sqrt(81)` succeeds with `9`. |
| AC-EXPR-009 | SPEC-EXPR-008 | `sqrt(9 + 7)` succeeds with `4`. |
| AC-EXPR-010 | SPEC-EXPR-007 | `20%` succeeds with `0.2`. |
| AC-EXPR-011 | SPEC-EXPR-007 | `150 * 20%` succeeds with `30`. |
| AC-EXPR-012 | SPEC-EXPR-010 | `2 + 3 * 4` succeeds with `14`. |
| AC-EXPR-013 | SPEC-EXPR-010 | `(2 + 3) * 4` succeeds with `20`. |
| AC-EXPR-014 | SPEC-EXPR-009 | `3 * -2` succeeds with `-6`. |
| AC-EXPR-015 | SPEC-EXPR-009, SPEC-EXPR-010 | `-2 ^ 2` succeeds with `-4`; `(-2) ^ 2` succeeds with `4`. |
| AC-EXPR-016 | SPEC-EXPR-007 | `100 + 20%` succeeds with `100.2`, not `120`. |
| AC-EXPR-017 | SPEC-EXPR-002 | `2 × 3` submitted to the API is invalid, while canonical `2 * 3` succeeds with `6`. |
| AC-EXPR-018 | SPEC-EXPR-003 | Each of `0`, `12`, `12.5`, `0.5`, `.5` is accepted; `.` and `1.2.3` are invalid. |
| AC-EXPR-019 | SPEC-EXPR-004 | `8 / 4 / 2` succeeds with `1`, demonstrating left associativity. |
| AC-EXPR-020 | SPEC-EXPR-011 | A 256-character syntactically valid expression is not rejected for length alone. |

### API acceptance criteria

| ID | Rule | Concrete observable criterion |
|---|---|---|
| AC-API-001 | SPEC-API-001 | POST `/api/calculate`, content type `application/json`, body `{"expression":"(2 + 3) * 4"}` returns `200`. |
| AC-API-002 | SPEC-API-002 | That response is the JSON object `{"result":20}`: `result` is numeric rather than a string, and no additional member is present. |
| AC-API-003 | SPEC-API-003 | A `text/plain` request may return `415`; parity checks assert status only, not its body. |

### Error acceptance criteria

| ID | Rule | Concrete observable criterion |
|---|---|---|
| AC-ERR-001 | SPEC-ERR-004 | `1 / 0` and `1 / -0` each return `400`, `DIVISION_BY_ZERO`, and the canonical message. |
| AC-ERR-002 | SPEC-ERR-005 | `sqrt(-1)` returns `400`, `INVALID_DOMAIN`, and the canonical message. |
| AC-ERR-003 | SPEC-ERR-003 | `2 +` returns `400`, `INVALID_EXPRESSION`, and the canonical message. |
| AC-ERR-004 | SPEC-ERR-003 | `sin(1)` returns the same invalid-expression response. |
| AC-ERR-005 | SPEC-ERR-003 | `1e3` returns the same invalid-expression response. |
| AC-ERR-006 | SPEC-ERR-002 | `{"expression":"   "}` returns `400`, `INVALID_REQUEST`, and the canonical message. |
| AC-ERR-007 | SPEC-ERR-002 | `{}` and `{"expression":null}` each return that invalid-request response. |
| AC-ERR-008 | SPEC-ERR-002 | `{"expression":42}` returns that invalid-request response. |
| AC-ERR-009 | SPEC-ERR-002 | A 257-character expression returns that invalid-request response before evaluation. |
| AC-ERR-010 | SPEC-ERR-002 | Malformed JSON returns that invalid-request response. |
| AC-ERR-011 | SPEC-ERR-006 | `10 ^ 1000` returns `400`, `NON_FINITE_RESULT`, and the canonical message rather than a successful infinity. |
| AC-ERR-012 | SPEC-ERR-001 | Every application-defined error body contains string `code` and `message` members. |

### UI acceptance criteria

| ID | Rule | Observable criterion |
|---|---|---|
| AC-UI-001 | SPEC-UI-001 | Activating keypad controls `1`, `2`, `+`, `3` constructs and displays `12+3` (presentation spacing may differ). |
| AC-UI-002 | SPEC-UI-002 | Keyboard sequence `1`, `2`, `*`, `3` constructs and displays `12*3`. |
| AC-UI-003 | SPEC-UI-001 | Each input action updates the displayed expression. |
| AC-UI-004 | SPEC-UI-003 | With expression, result, and error present, clear removes all three. |
| AC-UI-005 | SPEC-UI-002 | From `12+3`, Backspace produces `12+`; on empty input it causes no failure. |
| AC-UI-006 | SPEC-UI-004 | Enter or equals with `2+3` issues one request containing canonical `2+3`. |
| AC-UI-007 | SPEC-UI-005 | A successful response `{"result":5}` displays `5` as the latest result. |
| AC-UI-008 | SPEC-UI-005 | A calculator error displays its returned canonical message; an unreachable backend displays a connectivity error. |
| AC-UI-009 | SPEC-UI-005 | After displaying `5`, a failed evaluation no longer presents `5` as the current answer. |
| AC-UI-010 | SPEC-UI-004 | Two evaluate actions while the first request is pending issue only one request. |
| AC-UI-011 | SPEC-UI-006 | Selecting Backend B causes the next request to target only B; selection itself issues no request. |
| AC-UI-012 | SPEC-UI-004 | Evaluate on empty or whitespace-only input issues no request. |
| AC-UI-013 | SPEC-UI-007 | At a representative mobile viewport, every committed function remains reachable and operable and feedback remains readable. |
| AC-UI-014 | SPEC-UI-007 | At a representative desktop viewport, the same functionality and feedback remain usable. |
| AC-UI-015 | SPEC-UI-004 | A displayed `×`, `÷`, `√`, or `xʸ` operation is submitted using its canonical token. |
| AC-UI-016 | SPEC-UI-006 | The same expression and request contract are retained when switching A to B. |

### Parity acceptance criteria

| ID | Rule | Concrete observable criterion |
|---|---|---|
| AC-PAR-001 | SPEC-PAR-001 | Both backends return `200` and numeric `5` for `2 + 3`. |
| AC-PAR-002 | SPEC-PAR-001 | Both return `200` and numeric `20` for `(2 + 3) * 4`. |
| AC-PAR-003 | SPEC-PAR-001 | Both return `200` and numeric `512` for `2 ^ 3 ^ 2`; non-exact equivalent results differ by at most `1e-12`. |
| AC-PAR-004 | SPEC-PAR-002 | Both return the identical specified status, code, and message for `1 / 0`. |
| AC-PAR-005 | SPEC-PAR-002 | Both return the identical specified status, code, and message for `2 ++ 3`. |
| AC-PAR-006 | SPEC-PAR-002 | Both return the identical specified status, code, and message for `sqrt(-1)`. |
| AC-PAR-007 | SPEC-PAR-002 | Both return the identical specified status, code, and message for `10 ^ 1000`. |

## 8. Traceability matrices

### Requirement → Specification

| Requirement / scope decision | Specification rules |
|---|---|
| REQ-F-001 Addition | SPEC-EXPR-001, 005, 010 |
| REQ-F-002 Subtraction | SPEC-EXPR-001, 005, 009, 010 |
| REQ-F-003 Multiplication | SPEC-EXPR-001, 005, 010 |
| REQ-F-004 Division | SPEC-EXPR-001, 005, 010; SPEC-ERR-004 |
| REQ-O-001 Exponentiation (committed by Scope §2) | SPEC-EXPR-001, 006, 010 |
| REQ-O-002 Square root (committed by Scope §§2, 7) | SPEC-EXPR-001, 008, 010; SPEC-ERR-005 |
| REQ-O-003 Percentage (committed by Scope §§2, 6) | SPEC-EXPR-001, 007, 010 |
| REQ-FE-002 Input/results UI | SPEC-UI-001–006 |
| REQ-FE-003 Responsive design | SPEC-UI-007 |
| REQ-BE-001 Backend service | SPEC-API-001 |
| REQ-BE-002 REST API / CON-002 | SPEC-API-001, 003; SPEC-PAR-001 |
| REQ-BE-003 Operation requests | SPEC-EXPR-002, 004, 009, 011; SPEC-API-001; SPEC-UI-004 |
| REQ-BE-004 Input validation | SPEC-EXPR-002–004, 011; SPEC-ERR-001–003, 006; SPEC-PAR-002 |
| REQ-BE-005 Division by zero | SPEC-ERR-001, 004; SPEC-PAR-002 |
| REQ-BE-006 JSON results | SPEC-API-002; SPEC-PAR-001 |
| Scope §§3–7 Expression and interaction | SPEC-EXPR-001–011; SPEC-UI-001–005 |
| Scope §8 Backend-owned evaluation | SPEC-API-001–002; SPEC-UI-004–005 |
| Scope §9 Two backends and parity | SPEC-API-001–003; SPEC-UI-006; SPEC-PAR-001–002 |
| Scope §10 exclusions | SPEC-EXPR-002–004; SPEC-ERR-003 |

Requirements concerning selected frontend technology, internal quality, tests, documentation, process, effort, preferences, and optional delivery infrastructure do not themselves define additional externally observable calculator behavior and are therefore unaffected here.

### Specification → Acceptance Criteria

| Rule | Acceptance criteria |
|---|---|
| SPEC-EXPR-001 | AC-EXPR-005, AC-ERR-011, AC-PAR-003 |
| SPEC-EXPR-002 | AC-EXPR-017, AC-UI-015 |
| SPEC-EXPR-003 | AC-EXPR-005, AC-EXPR-018 |
| SPEC-EXPR-004 | AC-EXPR-019, AC-ERR-003–005, AC-PAR-005 |
| SPEC-EXPR-005 | AC-EXPR-001–005, AC-ERR-001 |
| SPEC-EXPR-006 | AC-EXPR-006–007, AC-PAR-003 |
| SPEC-EXPR-007 | AC-EXPR-010–011, AC-EXPR-016 |
| SPEC-EXPR-008 | AC-EXPR-008–009, AC-ERR-002 |
| SPEC-EXPR-009 | AC-EXPR-014–015 |
| SPEC-EXPR-010 | AC-EXPR-012–015, AC-EXPR-019 |
| SPEC-EXPR-011 | AC-EXPR-020, AC-ERR-006–009 |
| SPEC-API-001 | AC-API-001 |
| SPEC-API-002 | AC-API-002 |
| SPEC-API-003 | AC-API-003 |
| SPEC-ERR-001 | AC-ERR-012 |
| SPEC-ERR-002 | AC-ERR-006–010 |
| SPEC-ERR-003 | AC-ERR-003–005, AC-PAR-005 |
| SPEC-ERR-004 | AC-ERR-001, AC-PAR-004 |
| SPEC-ERR-005 | AC-ERR-002, AC-PAR-006 |
| SPEC-ERR-006 | AC-ERR-011, AC-PAR-007 |
| SPEC-UI-001 | AC-UI-001, AC-UI-003 |
| SPEC-UI-002 | AC-UI-002, AC-UI-005–006 |
| SPEC-UI-003 | AC-UI-004 |
| SPEC-UI-004 | AC-UI-006, AC-UI-010, AC-UI-012, AC-UI-015 |
| SPEC-UI-005 | AC-UI-007–009 |
| SPEC-UI-006 | AC-UI-011, AC-UI-016 |
| SPEC-UI-007 | AC-UI-013–014 |
| SPEC-PAR-001 | AC-PAR-001–003 |
| SPEC-PAR-002 | AC-PAR-004–007 |

## 9. Deliberately deferred architecture decisions

Backend implementation languages, frameworks, expression-evaluation approach or library, parser design, package layout, frontend tooling and internal structure, deployment, and optional Docker support remain unresolved. No behavioral question in the committed calculator contract remains dependent on choosing any of them.
