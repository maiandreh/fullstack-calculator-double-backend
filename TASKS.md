# Calculator Implementation Plan

## 1. Purpose

This is the final approved planning gate before implementation. It orders small, reviewable increments that implement `REQUIREMENTS.md`, committed `SCOPE.md`, `SPEC.md`, `DESIGN.md`, and ADR-001–ADR-005. Go establishes the primary behavioral reference before the frontend and Java compatibility implementation. Correctness precedes presentation polish.

The mandatory assessment delivery is the calculator behavior, React frontend, REST backend, tests, coverage, and documentation. The second Java backend, backend selector/parity mechanism, optional-source advanced operations promoted by scope, and optional-source Docker support are committed project extensions and are labeled as such below.

## 2. Execution Rules

1. Execute tasks in listed order unless a task explicitly has no dependency; do not parallelize work that depends on an earlier behavioral reference.
2. Before each increment, record its actual development prompt in `docs/ai-prompts.md` and obtain any approval required by `AGENTS.md`.
3. Implement only approved scope. Stop and report any conflict with `SPEC.md` or `DESIGN.md`.
4. Derive tests from listed acceptance criteria, run relevant tests after every increment, and never weaken valid tests to make code pass.
5. After each implementation increment report files created/modified, tests and results, build and coverage where applicable, `git diff --stat`, remaining work, and deviations.
6. Keep generated artifacts ignored. Do not commit, push, merge, rebase, amend, or rewrite history; commit boundaries below are recommendations for the human developer.
7. Every task begins with status **Not Started**. A task is complete only when its verification and Definition of Done are satisfied.

## 3. Traceability Convention

Each task cites requirement/constraint IDs, relevant `SPEC-*` rules, scope/design/ADR authority where applicable, and the acceptance criteria it implements or verifies. Acceptance ranges use the identifiers already established in `SPEC.md`; no test-case IDs are introduced. Verification evidence will later record actual commands and results against these task IDs.

## 4. Go Backend

### TASK-GO-001 — Bootstrap primary Go backend

- **Objective:** Initialize the assessment-aligned Backend A without calculator behavior.
- **Dependencies:** Approved P006 plan.
- **References:** REQ-BE-001, REQ-Q-001–003, REQ-Q-005; CON-003–005; DESIGN §§5–6, 17–18; ADR-001.
- **Acceptance criteria:** None directly; enables later backend criteria.
- **Implementation scope:** Create `backend-go/`, a module using a currently supported installed Go release, standard-library-only production dependencies, a minimal entry point, default port `8080` configuration, and repository/build hygiene. Do not add parser behavior.
- **Verification required:** Compile; baseline `go test ./...`; `gofmt`; `go vet ./...`; inspect dependencies and changed files.
- **Definition of Done:** Module builds; baseline toolchain commands pass; formatting is clean; no unrelated functionality or non-standard production dependency exists.
- **Status:** Complete

### TASK-GO-002 — Implement lexical and parser foundation

- **Objective:** Establish bounded expression parsing independently of HTTP.
- **Dependencies:** TASK-GO-001.
- **References:** REQ-BE-003–004, REQ-Q-003, REQ-Q-005; SPEC-EXPR-002–004, 011; SPEC-ERR-003; DESIGN §§4, 8, 16; ADR-002.
- **Acceptance criteria:** AC-EXPR-017–018, AC-EXPR-020; AC-ERR-003–005.
- **Implementation scope:** Decimal literals, whitespace, parentheses, approved tokens/functions, complete consumption, closed-grammar rejection, and expression-length boundary at the appropriate non-HTTP entry. Keep calculation independent from transport.
- **Verification required:** Domain tests for valid literal forms, whitespace/parentheses, 256-character boundary, malformed numbers, unsupported tokens/functions/scientific notation, trailing input/operators, and unbalanced/empty constructs.
- **Definition of Done:** Foundation accepts and rejects the specified syntax deterministically without HTTP, arbitrary execution, or permissive recovery; relevant tests pass.
- **Status:** Complete

### TASK-GO-003 — Implement basic arithmetic and precedence

- **Objective:** Add committed core operations with conventional precedence and domain division-by-zero errors.
- **Dependencies:** TASK-GO-002.
- **References:** REQ-F-001–004, REQ-BE-003–005, REQ-Q-005; SPEC-EXPR-001, 005, 010; SPEC-ERR-004; DESIGN §§8–9.
- **Acceptance criteria:** AC-EXPR-001–005, AC-EXPR-012–013, AC-EXPR-019; AC-ERR-001.
- **Implementation scope:** Binary64-equivalent addition, subtraction, multiplication, division, grouping, precedence, left associativity, and rejection of positive/negative-zero divisors.
- **Verification required:** Direct evaluator tests for every listed criterion and representative grouped/whitespace cases; no HTTP required.
- **Definition of Done:** All four mandatory operations and their precedence/error semantics pass domain tests with typed/idiomatic errors.
- **Status:** Complete

### TASK-GO-004 — Implement unary signs and exponentiation

- **Objective:** Add unary and power semantics without library-dependent precedence.
- **Dependencies:** TASK-GO-003.
- **References:** REQ-F-002, REQ-O-001 (committed by SCOPE §2), REQ-Q-005; SPEC-EXPR-006, 009–010; DESIGN §8; ADR-002.
- **Acceptance criteria:** AC-EXPR-006–007, AC-EXPR-014–015.
- **Implementation scope:** Unary plus/minus, signed operands, right-associative exponentiation, `-2 ^ 2 = -4`, and `(-2) ^ 2 = 4`.
- **Verification required:** Direct evaluator tests for all listed criteria plus signed exponents and grouping consistent with the exact grammar.
- **Definition of Done:** Unary and exponentiation behavior matches `SPEC.md`, including associativity and precedence, with no third-party evaluator.
- **Status:** Complete

### TASK-GO-005 — Implement percentage and square root

- **Objective:** Complete the optional-source operations committed by project scope.
- **Dependencies:** TASK-GO-004.
- **References:** REQ-O-002–003 (committed by SCOPE §2), REQ-Q-005; SPEC-EXPR-007–008, 010; SPEC-ERR-005; DESIGN §§8–9; ADR-002.
- **Acceptance criteria:** AC-EXPR-008–011, AC-EXPR-016; AC-ERR-002.
- **Implementation scope:** Postfix compositional percentage, percentage precedence, `sqrt(expression)`, compound arguments, and negative-domain error.
- **Verification required:** Direct evaluator tests for all listed criteria and representative composition; confirm `100 + 20% = 100.2`.
- **Definition of Done:** Percentage and square-root behavior, including invalid domain, conforms exactly and all domain tests pass.
- **Status:** Complete

### TASK-GO-006 — Enforce finite results

- **Objective:** Ensure successful domain results are always finite binary64 values.
- **Dependencies:** TASK-GO-005.
- **References:** REQ-BE-004, REQ-Q-005; SPEC-EXPR-001, 003; SPEC-ERR-005–006; DESIGN §§8–9, 16.
- **Acceptance criteria:** AC-ERR-011; supports AC-EXPR-005 and AC-PAR-003, 007.
- **Implementation scope:** Detect non-finite literals/results and distinguish `NON_FINITE_RESULT` from more specific division-by-zero and invalid-domain errors, including mathematically unsupported real outcomes.
- **Verification required:** Direct tests for overflow/non-finite results, invalid real domains, specific-error precedence, and finite decimal results.
- **Definition of Done:** No domain success can contain NaN or infinity; canonical domain categories are deterministic and tested.
- **Status:** Complete

### TASK-GO-007 — Expose Go REST contract

- **Objective:** Map the completed domain into the shared HTTP contract.
- **Dependencies:** TASK-GO-006.
- **References:** REQ-BE-001–006, CON-002; SPEC-API-001–003, SPEC-ERR-001–006; DESIGN §§4, 6, 9, 11; ADR-001.
- **Acceptance criteria:** AC-API-001–003; AC-ERR-001–012 at the appropriate transport boundary.
- **Implementation scope:** `POST /api/calculate`, strict JSON decoding/validation, expression length validation, exact success envelope, all canonical error mappings/messages/statuses, malformed JSON, safe unexpected failures, and minimal local Vite-origin CORS. Do not move parser logic into handlers.
- **Verification required:** Focused handler tests for success schema, missing/null/non-string/empty/long expressions, malformed JSON, representative domain-error mapping, CORS, and unsupported-media status behavior without duplicating all domain permutations.
- **Definition of Done:** Backend A exposes the exact calculator contract on default port `8080`; transport tests pass and leak no internal messages.
- **Status:** Complete

### TASK-GO-008 — Complete Go quality gate

- **Objective:** Establish Backend A as the verified reference before frontend/Java work.
- **Dependencies:** TASK-GO-007.
- **References:** REQ-F-001–004, REQ-O-001–003 as committed, REQ-BE-001–006, REQ-Q-001–003, REQ-Q-005–006; all SPEC-EXPR/API/ERR rules; DESIGN §§12, 14, 18.
- **Acceptance criteria:** AC-EXPR-001–020, AC-API-001–003, AC-ERR-001–012.
- **Implementation scope:** Fix only gaps found by the Go acceptance review; generate Go coverage evidence and run a live smoke request.
- **Verification required:** `gofmt`, `go vet ./...`, full `go test ./...`, Go coverage report, build, and manual success/error smoke calls against the running service.
- **Definition of Done:** All commands pass, evidence is reported, and no known committed Go/backend acceptance criterion remains uncovered.
- **Status:** Complete

## 5. Frontend

### TASK-FE-001 — Bootstrap React frontend

- **Objective:** Initialize the approved frontend/tooling shell without full calculator UI.
- **Dependencies:** TASK-GO-008.
- **References:** REQ-FE-001, REQ-Q-001–004; CON-001; DESIGN §§5, 10–11, 17–18; ADR-004.
- **Acceptance criteria:** None directly; enables AC-UI-*.
- **Implementation scope:** Create `frontend/` with React, TypeScript, Vite, Vitest, React Testing Library, `user-event` where useful, minimal app shell, environment-overridable Backend A/B configuration, and development/build/test scripts. Use native fetch later; no full calculator or evaluator.
- **Verification required:** Install reproducibly, baseline test, TypeScript/build check, and dependency review excluding unapproved libraries.
- **Definition of Done:** Minimal shell runs/builds/tests, configuration defaults to ports `8080`/`8081`, and no calculator engine or unrelated dependency exists.
- **Status:** Complete

### TASK-FE-002 — Implement display, expression state, and keypad

- **Objective:** Build the calculator's local interaction foundation without evaluation logic.
- **Dependencies:** TASK-FE-001.
- **References:** REQ-FE-002, REQ-Q-004; SPEC-UI-001, 003; SCOPE §§3–4, 8; DESIGN §10.
- **Acceptance criteria:** AC-UI-001, AC-UI-003–005.
- **Implementation scope:** Responsibility-based display/keypad/calculator components; expression, result, and error presentation state; all committed keypad controls; clear/reset; UI backspace if represented; presentation symbols and canonical-token shaping. Never compute results.
- **Verification required:** Interaction tests for construction, displayed expression, clear, backspace, and all required controls.
- **Definition of Done:** Keypad builds the supported expression and clear/display behavior is tested; no frontend evaluator exists.
- **Status:** Complete

### TASK-FE-003 — Implement keyboard and responsive behavior

- **Objective:** Complete non-network input and representative viewport usability.
- **Dependencies:** TASK-FE-002.
- **References:** REQ-FE-002–003, REQ-Q-004; SPEC-UI-002, 007; DESIGN §§10, 12.
- **Acceptance criteria:** AC-UI-002, AC-UI-005, AC-UI-013–014.
- **Implementation scope:** Only approved keyboard characters/actions, Enter evaluation signal, Escape reset, Backspace behavior, mobile-first layout, and usable representative desktop layout. No arbitrary free-form editing or unrelated visual features.
- **Verification required:** Keyboard interaction tests and practical mobile/desktop viewport review verifying reachability, operability, and readable feedback.
- **Definition of Done:** Required keyboard and responsive behaviors work at representative viewports without expanding expression syntax.
- **Status:** Complete

### TASK-FE-004 — Integrate selected backend API

- **Objective:** Connect the UI to exactly one selected backend while preserving authoritative backend evaluation.
- **Dependencies:** TASK-FE-003, TASK-GO-008.
- **References:** REQ-FE-002, REQ-BE-002–003, REQ-Q-004; SPEC-EXPR-002, SPEC-API-001–002, SPEC-UI-004–006; SCOPE §§8–9; DESIGN §§10–11.
- **Acceptance criteria:** AC-UI-006–012, AC-UI-015–016; API-facing AC-API-001–002.
- **Implementation scope:** Native fetch API module, canonical payload translation, environment-based selected URL, result/application-error/connectivity handling, stale-result removal, in-flight duplicate prevention, and no request for empty input. Selection itself makes no request.
- **Verification required:** Mock-network interaction tests for canonical payload/destination, success, calculator error, connectivity failure, stale answer, duplicate evaluate, selection, and empty expression.
- **Definition of Done:** Observable API lifecycle matches `SPEC.md`; only the selected backend calculates and frontend code never evaluates expressions.
- **Status:** Not Started

### TASK-FE-005 — Complete frontend quality gate

- **Objective:** Verify every committed frontend behavior and produce quality evidence.
- **Dependencies:** TASK-FE-004.
- **References:** REQ-FE-001–003, REQ-Q-001–004, REQ-Q-006; SPEC-UI-001–007; DESIGN §§12, 14, 18.
- **Acceptance criteria:** AC-UI-001–016 and frontend-observable AC-API-001–002.
- **Implementation scope:** Add only missing behavioral coverage; avoid snapshot-primary testing and presentation work unrelated to acceptance criteria.
- **Verification required:** Full Vitest suite, coverage report, TypeScript/build verification, lightweight approved lint if configured, and practical responsive review.
- **Definition of Done:** All frontend criteria have a passing verification path and build/coverage evidence; no known committed frontend criterion remains uncovered.
- **Status:** Not Started

## 6. Java Backend

### TASK-JAVA-001 — Bootstrap secondary Java backend

- **Objective:** Initialize the committed compatibility backend without calculator behavior.
- **Dependencies:** TASK-GO-008.
- **References:** SCOPE §9 project extension; REQ-Q-001–003, REQ-Q-005; DESIGN §§5, 7, 17–18; ADR-003.
- **Acceptance criteria:** None directly; enables Java contract/parity criteria.
- **Implementation scope:** Create `backend-java/`, Java 21 Spring Boot Maven project, Maven Wrapper, Spring Web, Spring Boot Test, JaCoCo, minimal entry point, and port `8081`. No Lombok or parser behavior.
- **Verification required:** Wrapper compile/test lifecycle and dependency review.
- **Definition of Done:** Baseline project builds/tests through the wrapper with approved dependencies only and no domain functionality.
- **Status:** Not Started

### TASK-JAVA-002 — Implement Java grammar and core arithmetic

- **Objective:** Independently implement the closed grammar and mandatory arithmetic in idiomatic Java.
- **Dependencies:** TASK-JAVA-001, TASK-GO-008.
- **References:** REQ-F-001–004, REQ-BE-003–005, REQ-Q-005; SPEC-EXPR-001–005, 010–011; SPEC-ERR-003–004; DESIGN §§4, 8–9; ADR-002–003.
- **Acceptance criteria:** AC-EXPR-001–005, AC-EXPR-012–013, AC-EXPR-017–020; AC-ERR-001, AC-ERR-003–005.
- **Implementation scope:** Independent bounded parser foundation, literals, whitespace, grouping, complete consumption, basic arithmetic/precedence/associativity, division-by-zero, and length/syntax boundaries. Do not copy incidental Go structure or add parser frameworks/factories/service interfaces.
- **Verification required:** Direct JUnit domain tests for every listed criterion; no MockMvc required.
- **Definition of Done:** Java core domain conforms to the specification independently and all focused tests pass.
- **Status:** Not Started

### TASK-JAVA-003 — Implement Java advanced expression semantics

- **Objective:** Complete unary, exponentiation, percentage, and square-root behavior.
- **Dependencies:** TASK-JAVA-002.
- **References:** REQ-O-001–003 as committed, REQ-Q-005; SPEC-EXPR-006–010; SPEC-ERR-005; DESIGN §8; ADR-002–003.
- **Acceptance criteria:** AC-EXPR-006–011, AC-EXPR-014–016; AC-ERR-002.
- **Implementation scope:** Unary signs, right-associative exponentiation and precedence interaction, postfix compositional percentage, compound square root, and invalid real domain.
- **Verification required:** Direct JUnit tests for all listed criteria and representative compositions.
- **Definition of Done:** All advanced committed semantics pass domain tests and match `SPEC.md`, not Go incidental details.
- **Status:** Not Started

### TASK-JAVA-004 — Enforce Java finite-result behavior

- **Objective:** Complete numeric/domain error guarantees for Java binary64 semantics.
- **Dependencies:** TASK-JAVA-003.
- **References:** REQ-BE-004, REQ-Q-005; SPEC-EXPR-001, 003; SPEC-ERR-005–006; DESIGN §§8–9.
- **Acceptance criteria:** AC-ERR-011; supports AC-EXPR-005 and AC-PAR-003, 007.
- **Implementation scope:** Reject non-finite literals/results and distinguish overflow/non-finite, division-zero, and invalid-domain errors.
- **Verification required:** Direct JUnit tests for non-finite overflow, domain boundaries, error precedence, and finite decimal results.
- **Definition of Done:** Java domain cannot return a non-finite success and exposes stable internal error categories.
- **Status:** Not Started

### TASK-JAVA-005 — Expose Java REST contract

- **Objective:** Implement the same API contract independently through Spring Web.
- **Dependencies:** TASK-JAVA-004.
- **References:** REQ-BE-001–006, CON-002; SPEC-API-001–003, SPEC-ERR-001–006; DESIGN §§4, 7, 9, 11; ADR-003.
- **Acceptance criteria:** AC-API-001–003; AC-ERR-001–012 at the appropriate transport boundary.
- **Implementation scope:** Controller/transport DTOs, JSON validation, exact result/error mapping, malformed JSON, safe unexpected failure behavior, and minimal local Vite-origin CORS. Domain remains HTTP-independent.
- **Verification required:** Focused MockMvc tests for request validation, schemas, statuses, representative error mappings, CORS, and unsupported media type; avoid duplicating the full domain suite.
- **Definition of Done:** Backend B exposes the exact shared contract on port `8081` with passing MockMvc tests and no dependency messages leaked.
- **Status:** Not Started

### TASK-JAVA-006 — Complete Java quality gate

- **Objective:** Verify the full independent compatibility backend before parity testing.
- **Dependencies:** TASK-JAVA-005.
- **References:** REQ-F-001–004, REQ-O-001–003 as committed, REQ-BE-001–006, REQ-Q-001–003, REQ-Q-005–006; all SPEC-EXPR/API/ERR rules; DESIGN §§12, 14, 18.
- **Acceptance criteria:** AC-EXPR-001–020, AC-API-001–003, AC-ERR-001–012.
- **Implementation scope:** Fix only identified acceptance gaps; generate JaCoCo evidence and run live smoke requests.
- **Verification required:** Maven Wrapper test lifecycle, build/package, JaCoCo report, and manual success/error calls against the running service.
- **Definition of Done:** All commands pass, evidence is reported, and no known committed Java/backend acceptance criterion remains uncovered.
- **Status:** Not Started

## 7. Cross-Backend Parity

### TASK-PAR-001 — Verify live backend parity

- **Objective:** Prove contract parity across independently running Go and Java implementations.
- **Dependencies:** TASK-GO-008, TASK-JAVA-006.
- **References:** SCOPE §9 project extension; REQ-BE-002–006; SPEC-PAR-001–002; DESIGN §13; ADR-002–003.
- **Acceptance criteria:** AC-PAR-001–007, with additional representative square-root and percentage requests required by the integration strategy.
- **Implementation scope:** A lightweight repository-level script/fixture with one shared HTTP dataset against both live URLs; no Pact/heavy framework. Compare status, response shape, canonical errors/messages, exact numeric values when applicable, and otherwise absolute difference `≤ 1e-12`.
- **Verification required:** Run the dataset against both live services for basic arithmetic, compound precedence, exponentiation, square root/percentage, division zero, invalid grammar/domain, and non-finite result; retain factual output evidence.
- **Definition of Done:** All representative valid and invalid cases satisfy `SPEC-PAR-*`; failures identify the differing contract observation rather than internals.
- **Status:** Not Started

## 8. Docker

### TASK-DOCKER-001 — Deliver containerized full stack

- **Objective:** Implement the optional-source Docker capability committed by project scope.
- **Dependencies:** TASK-FE-005, TASK-GO-008, TASK-JAVA-006.
- **References:** CON-007 optional source; SCOPE §9 committed extension; DESIGN §15; ADR-005.
- **Acceptance criteria:** Supports AC-UI-011, AC-UI-016 and AC-PAR-001–007 in the container topology.
- **Implementation scope:** Minimal Dockerfiles for Go, Java, and frontend plus root Compose configuration; preserve separately selectable backend destinations. No Kubernetes, Helm, service discovery, gateway, or production orchestration; no reverse proxy unless a concrete browser/runtime need is documented and approved.
- **Verification required:** Build all images; start the full Compose system; verify frontend availability, each backend, frontend evaluation through each choice, selection switching, and clean shutdown.
- **Definition of Done:** One Compose startup yields an operable three-service calculator using both backend choices, with simple documented configuration.
- **Status:** Not Started

## 9. Documentation

### TASK-DOC-001 — Write and validate delivery README

- **Objective:** Provide every assessment-required setup, usage, and design document without duplicating authoritative artifacts.
- **Dependencies:** TASK-PAR-001, TASK-DOCKER-001.
- **References:** REQ-D-001–005, REQ-Q-006; DESIGN §§19–20; SCOPE §§9–10.
- **Acceptance criteria:** Documents verification of all committed AC groups rather than implementing new behavior.
- **Implementation scope:** Overview, concise architecture, prerequisites, native setup/run for Go/Java/frontend, Compose startup, API contract/examples, test/coverage commands, design and dual-backend rationale, Go primary alignment, trade-offs, known boundaries, and links to SPEC/ADRs/prompt disclosure.
- **Verification required:** Follow commands from a clean-setup perspective, exercise API examples, check links and provenance language, and ensure generated outputs remain ignored.
- **Definition of Done:** README includes every listed deliverable accurately and links rather than copying full specification/ADR content.
- **Status:** Not Started

### TASK-DOC-002 — Finalize AI prompt disclosure

- **Objective:** Ensure the submitted audit trail truthfully covers all repository-influencing prompts.
- **Dependencies:** All implementation/documentation tasks that generated prompts; TASK-DOC-001.
- **References:** REQ-D-006, CON-006; AGENTS.md AI Prompt Audit Trail.
- **Acceptance criteria:** None behavioral; process-delivery verification.
- **Implementation scope:** Review sequential prompt IDs, exact historical prompt text, phase/objective, and factual outcomes; add missing actual prompts only and never rewrite history.
- **Verification required:** Check sequence, required fields, verbatim prompt preservation, factual outcomes, and README disclosure link.
- **Definition of Done:** Every relevant submitted-development prompt is present, ordered, unchanged historically, and has a complete factual outcome.
- **Status:** Not Started

## 10. Final Submission Gate

### TASK-FINAL-001 — Execute full submission verification

- **Objective:** Produce final evidence that the clean deliverable satisfies every committed requirement and extension.
- **Dependencies:** TASK-DOC-002 and every preceding task.
- **References:** All committed REQ/CON/SCOPE items, all SPEC rules and acceptance criteria, DESIGN, ADR-001–005, AGENTS.md.
- **Acceptance criteria:** AC-EXPR-001–020, AC-API-001–003, AC-ERR-001–012, AC-UI-001–016, AC-PAR-001–007.
- **Implementation scope:** Verification and narrowly scoped fixes only; any behavioral/architectural conflict returns to human approval rather than silently changing authority.
- **Verification required:** Repository hygiene (clean intended tree; no tracked build artifacts, `.idea`, `node_modules`, coverage output, secrets, or unexpected env files); Go format/vet/tests/coverage/build; Java tests/JaCoCo/build; frontend tests/coverage/build; both smoke APIs; frontend→Go and frontend→Java; switching; parity suite; all images and Compose; calculator through both container choices; README clean-setup instructions and API examples; prompt disclosure; required files; end-to-end traceability from requirement through evidence.
- **Definition of Done:** Every command and manual check passes; all deliverables exist; every committed criterion has evidence; intentional exceptions are explicit; working tree state is reviewed with the human before any commit.
- **Status:** Not Started

## 11. Recommended Commit Boundaries

The human developer may group completed, verified tasks into cohesive commits; no task performs a commit:

1. Go bootstrap — TASK-GO-001.
2. Go calculator domain — TASK-GO-002–006.
3. Go REST API and quality — TASK-GO-007–008.
4. Frontend calculator interaction — TASK-FE-001–003.
5. Frontend API integration and quality — TASK-FE-004–005.
6. Java compatible backend — TASK-JAVA-001–006.
7. Cross-backend parity — TASK-PAR-001.
8. Docker delivery — TASK-DOCKER-001.
9. Final documentation and evidence — TASK-DOC-001–002 and TASK-FINAL-001.

Several tiny, inseparable corrections may remain within one coherent boundary. No commit hash is planned in advance.

## 12. Coverage of Committed Requirements

| Requirement / Scope | Specification | Acceptance Criteria | Planned Task(s) |
|---|---|---|---|
| REQ-F-001 Addition | SPEC-EXPR-001, 005, 010 | AC-EXPR-001, 012–013 | GO-003, GO-008; JAVA-002, JAVA-006; PAR-001 |
| REQ-F-002 Subtraction/unary sign | SPEC-EXPR-001, 005, 009–010 | AC-EXPR-002, 014–015 | GO-003–004, GO-008; JAVA-002–003, JAVA-006; PAR-001 |
| REQ-F-003 Multiplication | SPEC-EXPR-001, 005, 010 | AC-EXPR-003, 012–015 | GO-003–004, GO-008; JAVA-002–003, JAVA-006; PAR-001 |
| REQ-F-004 Division | SPEC-EXPR-001, 005, 010; SPEC-ERR-004 | AC-EXPR-004, 019; AC-ERR-001 | GO-003, GO-007–008; JAVA-002, JAVA-005–006; PAR-001 |
| REQ-O-001 Exponentiation, optional source/committed scope | SPEC-EXPR-006, 009–010 | AC-EXPR-006–007, 015 | GO-004, GO-008; JAVA-003, JAVA-006; PAR-001 |
| REQ-O-002 Square root, optional source/committed scope | SPEC-EXPR-008; SPEC-ERR-005 | AC-EXPR-008–009; AC-ERR-002 | GO-005, GO-008; JAVA-003, JAVA-006; PAR-001 |
| REQ-O-003 Percentage, optional source/committed scope | SPEC-EXPR-007, 010 | AC-EXPR-010–011, 016 | GO-005, GO-008; JAVA-003, JAVA-006; PAR-001 |
| REQ-FE-001 / CON-001 React | SPEC-UI-001–007 | AC-UI-001–016 | FE-001–005, FINAL-001 |
| REQ-FE-002 Input/results UI | SPEC-UI-001–006 | AC-UI-001–012, 015–016 | FE-002–005, FINAL-001 |
| REQ-FE-003 Responsive design | SPEC-UI-007 | AC-UI-013–014 | FE-003, FE-005, FINAL-001 |
| REQ-BE-001 Backend microservice | SPEC-API-001 | AC-API-001 | GO-001, GO-007–008; JAVA-001, JAVA-005–006 |
| REQ-BE-002 / CON-002 REST API | SPEC-API-001, 003; SPEC-PAR-001 | AC-API-001, 003; AC-PAR-001–003 | GO-007–008; JAVA-005–006; PAR-001 |
| REQ-BE-003 Operation requests | SPEC-EXPR-002, 004, 009, 011; SPEC-API-001 | AC-EXPR-014, 017–020; AC-API-001 | GO-002, GO-004, GO-007–008; JAVA-002–003, JAVA-005–006 |
| REQ-BE-004 Validation | SPEC-EXPR-002–004, 011; SPEC-ERR-001–003, 006 | AC-ERR-003–012 | GO-002, GO-006–008; JAVA-002, JAVA-004–006; PAR-001 |
| REQ-BE-005 Division zero | SPEC-ERR-004; SPEC-PAR-002 | AC-ERR-001; AC-PAR-004 | GO-003, GO-007–008; JAVA-002, JAVA-005–006; PAR-001 |
| REQ-BE-006 JSON result | SPEC-API-002; SPEC-PAR-001 | AC-API-002; AC-PAR-001–003 | GO-007–008; JAVA-005–006; PAR-001 |
| REQ-Q-001–003 Quality/testability | All affected SPEC rules | All affected AC groups | GO-001–008; FE-001–005; JAVA-001–006; PAR-001; FINAL-001 |
| REQ-Q-004 Frontend tests | SPEC-UI-001–007 | AC-UI-001–016 | FE-002–005, FINAL-001 |
| REQ-Q-005 Backend tests | SPEC-EXPR/API/ERR | AC-EXPR-001–020, AC-API-001–003, AC-ERR-001–012 | GO-002–008; JAVA-002–006; FINAL-001 |
| REQ-Q-006 Coverage reports | Supporting evidence | All implemented AC groups | GO-008, FE-005, JAVA-006, DOC-001, FINAL-001 |
| REQ-D-001–005 Documentation | Published contract/design summaries | Exercise documented behavior | DOC-001, FINAL-001 |
| REQ-D-006 / CON-006 Prompt disclosure | Process authority | Not behavioral | DOC-002, FINAL-001 |
| CON-003 Go preference | Architecture selection | Backend criteria | GO-001–008, DOC-001 |
| CON-004–005 Effort/prioritization | Planning constraint | All committed criteria | All tasks; FINAL-001 |
| SCOPE §9 dual backends/selector | SPEC-UI-006; SPEC-PAR-001–002 | AC-UI-011, 016; AC-PAR-001–007 | FE-001, FE-004–005; JAVA-001–006; PAR-001; FINAL-001 |
| CON-007 optional-source Docker, committed by SCOPE §9 | Container support for approved behavior | AC-UI-011, 016; AC-PAR-001–007 | DOCKER-001, DOC-001, FINAL-001 |
| SCOPE §10 exclusions/security boundary | SPEC-EXPR-002–004; SPEC-ERR-003 | AC-EXPR-017–018; AC-ERR-003–005 | GO-002, JAVA-002, FINAL-001 |
