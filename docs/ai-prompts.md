# AI Prompt Audit Trail

## P001

### Prompt ID

P001

### Phase

Repository Governance

### Objective

Establish the Spec-Driven Development workflow, repository hygiene, and an auditable record of all AI prompts used during this technical assessment.

### Prompt

```text
Prompt ID: P001

Phase: Repository Governance

Objective:
Establish the Spec-Driven Development workflow, repository hygiene, and an auditable record of all AI prompts used during this technical assessment.

This repository is intentionally starting from a clean state.

Do NOT implement application functionality.
Do NOT initialize Go, Java, React, Docker, Maven, npm, or any application build system.
Do NOT make product or architecture decisions that have not yet been approved.

For this phase, create only:

* `.gitignore`
* `AGENTS.md`
* `docs/ai-prompts.md`

## 1. Spec-Driven Development workflow

In `AGENTS.md`, establish the mandatory lifecycle for this repository:

1. Requirements capture
2. Behavioral specification
3. Acceptance criteria
4. Architecture and design decisions
5. Implementation planning
6. Implementation
7. Automated verification
8. Integration verification
9. Human review
10. Commit

Implementation must not begin until the preceding artifacts required for that phase have been explicitly approved.

Once created, these files will have the following authority:

* `REQUIREMENTS.md`

  * records requirements and their provenance
  * distinguishes mandatory assessment requirements, optional assessment requirements, constraints, deliverables, and project-specific extensions

* `SPEC.md`

  * defines externally observable behavior
  * defines API contracts and acceptance criteria
  * is the source of truth for behavioral correctness

* `DESIGN.md`

  * records the approved technical architecture
  * records important design decisions and trade-offs

* `TASKS.md`

  * contains the ordered implementation plan
  * maps implementation work back to approved requirements/specification where practical

An implementation detail must never silently redefine a requirement or specification.

If implementation and specification conflict, stop and report the conflict.

## 2. Scope discipline

Add rules requiring agents to:

* distinguish assessment requirements from project-specific extensions
* distinguish mandatory requirements from optional requirements
* never silently convert assumptions into requirements
* avoid speculative features
* prefer the simplest design satisfying approved requirements
* avoid abstractions created only to demonstrate design patterns
* avoid dependencies without a concrete justification
* avoid unrelated file modifications
* explain architectural deviations before applying them

Optional functionality may only be implemented after it has been explicitly promoted into the approved specification.

## 3. Testing and verification discipline

Require agents to:

* derive tests from approved acceptance criteria
* prioritize externally observable behavior over implementation details
* keep domain logic independently testable where appropriate
* never weaken or remove a valid test simply to make implementation pass
* clearly report failing tests
* run relevant tests after each implementation increment
* run build/static verification where relevant
* generate required coverage reports
* treat coverage as supporting evidence rather than the primary quality objective

After an implementation increment, report:

* files created
* files modified
* tests executed
* test results
* build result where applicable
* coverage result where applicable
* `git diff --stat`
* remaining work
* any deviation from the approved specification or design

## 4. Git safety

Agents must never automatically:

* commit
* push
* merge
* rebase
* amend
* force-push
* rewrite Git history

The human developer owns commit boundaries and repository history.

Generated build artifacts must not be version controlled.

## 5. AI prompt audit trail

This repository must maintain an auditable AI prompt log in:

`docs/ai-prompts.md`

Every development prompt capable of influencing repository contents, specification, design, tests, or implementation must be recorded.

Use sequential identifiers:

`P001`, `P002`, `P003`, ...

Each prompt entry must contain:

* Prompt ID
* Phase
* Objective
* Prompt
* Outcome

The `Prompt` section must preserve the actual prompt text used for the development step.

Do not rewrite historical prompts later to make the process appear cleaner.

Corrections or superseded decisions must be documented as later prompts/decisions rather than silently rewriting the historical record.

For future prompts:

1. Record the current prompt in `docs/ai-prompts.md` before performing repository modifications.
2. Perform the approved task.
3. Update that prompt's `Outcome` section with a concise factual summary of what was actually done.
4. Do not invent prompts that were never executed.

Record this exact prompt as `P001`.

Its outcome may initially state that repository governance and prompt auditing were established.

## 6. .gitignore

Create a root `.gitignore` suitable for the technologies expected in later phases, without initializing those technologies yet.

It should cover at least:

* IntelliJ IDEA metadata
* Java/Maven generated output
* Go generated/test artifacts where appropriate
* Node dependencies
* Vite build output
* test coverage output
* environment files
* common OS/editor temporary files

Do NOT ignore:

* source code
* dependency lockfiles that should normally be version controlled
* Maven Wrapper files
* Go module files
* application configuration intended to be version controlled

## Verification

After creating the three files:

1. Show the complete contents of `.gitignore`.
2. Show the complete contents of `AGENTS.md`.
3. Show the `P001` entry created in `docs/ai-prompts.md`.
4. Show `git diff --stat`.
5. Show `git status`.
6. Explicitly confirm that no application code or build system was initialized.

Do not create any other files.

Do not commit or push.

Stop after this phase and wait for human review.
```

### Outcome

Repository governance and prompt auditing were established.

## P002

### Prompt ID

P002

### Phase

Requirements Capture

### Objective

Create a traceable requirements baseline derived strictly from the technical assessment. Separate what the assessment requires from what it merely permits or prefers, and from decisions that have not yet been made.

### Prompt

```text
Prompt ID: P002

Phase: Requirements Capture

Objective:
Create a traceable requirements baseline derived strictly from the technical assessment. Separate what the assessment requires from what it merely permits or prefers, and from decisions that have not yet been made.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `docs/ai-prompts.md`.
3. Record this exact prompt as `P002` in `docs/ai-prompts.md` before modifying any other repository file.

Do NOT implement application code.
Do NOT create `SPEC.md`, `DESIGN.md`, or `TASKS.md` yet.
Do NOT initialize any programming language, framework, dependency manager, or build system.
Do NOT make architecture decisions.

## Source material

Use the following assessment requirements as the only source of product requirements for this phase:

### Overview

Build a basic calculator application with a React frontend and a backend microservice.

The goal is to demonstrate clean design, maintainability, and testable architecture.

### Functional Requirements

The calculator must support:

Mandatory:

* Addition
* Subtraction
* Multiplication
* Division

Optional:

* Exponentiation
* Square Root
* Percentage

### Frontend Requirements

* Use React.
* Provide an intuitive UI for input and displaying results.
* Include basic responsive design.

### Backend Requirements

* Expose a REST API.
* Accept operation requests.
* Validate input.
* Handle edge cases such as division by zero.
* Return results as JSON.

### Testing

* Include unit tests for key functionality in both frontend and backend.
* Go is the preferred backend language.

### Documentation

Include a README containing:

* setup instructions
* instructions for running frontend and backend
* API usage examples
* brief design decisions

Also include:

* a test coverage report

Docker setup is optional.

### Process and evaluation guidance

* AI tools are allowed.
* Relevant prompts used during the assessment must be shared.
* Expected effort is approximately 2–4 hours.
* Prioritize correctness, clarity, and maintainability over additional features.

## Required output

Create only:

`REQUIREMENTS.md`

Use stable identifiers so later specifications, acceptance criteria, tasks, tests, and documentation can trace back to requirements.

Use these categories and identifier prefixes:

### Mandatory functional requirements

`REQ-F-###`

Capture the four mandatory calculator operations separately.

### Optional functional requirements

`REQ-O-###`

Capture exponentiation, square root, and percentage separately.

Do not promote them to mandatory requirements.

### Frontend requirements

`REQ-FE-###`

### Backend requirements

`REQ-BE-###`

### Testing and quality requirements

`REQ-Q-###`

Include clean design, maintainability, testability, unit testing, and coverage/reporting requirements where supported by the assessment.

### Documentation and delivery requirements

`REQ-D-###`

### Constraints and preferences

`CON-###`

Record facts such as:

* React is required.
* The backend must expose REST.
* Go is preferred, not required.
* Expected effort is approximately 2–4 hours.
* correctness, clarity, and maintainability take precedence over feature quantity.

Do not convert a preference into a requirement.

### Project extensions

Create a section named:

`Project Extensions`

It must initially contain:

`None approved.`

Do NOT add Java, multiple backends, backend switching, scientific-calculator UX, Docker, or any other project-specific idea to this section yet.

Those decisions have not been approved within the new SDD lifecycle.

### Open decisions

Create a section named:

`Open Decisions`

Record questions that the assessment leaves unspecified and that must be resolved during specification/design.

At minimum consider whether the source leaves these unspecified:

* exact API request shape
* exact API response/error shape
* numeric representation and precision
* semantics of percentage
* semantics and valid domain of square root
* behavior for mathematically invalid or non-finite results
* frontend interaction model
* whether optional operations will be implemented
* whether optional Docker support will be implemented
* backend implementation language, acknowledging that Go is preferred

Do not resolve these questions in this phase.

## Requirement format

Each requirement should contain, where applicable:

* ID
* Statement
* Source classification
* Priority/status
* Verification approach at a high level

Example structure:

### REQ-F-001 — Addition

**Statement:** The calculator shall support addition.

**Source:** Assessment — Functional Requirements

**Status:** Mandatory

**Verification:** Demonstrate addition through automated behavioral testing.

Do not define implementation details in the verification field.

## Traceability

At the end of `REQUIREMENTS.md`, add a compact traceability summary showing that every source requirement from the assessment has been captured.

The purpose is source coverage, not implementation traceability yet.

Do not invent implementation task IDs, test IDs, or specification IDs at this stage.

## Prompt outcome

After completing `REQUIREMENTS.md`, update the `P002` Outcome in `docs/ai-prompts.md` with:

* files created/modified
* requirement categories created
* number of requirements captured in each category
* open decisions recorded
* confirmation that no architecture or implementation decisions were made

Keep the outcome factual.

## Verification

After completing the phase:

1. Show the complete `REQUIREMENTS.md`.
2. Show the P002 entry from `docs/ai-prompts.md`.
3. Show `git diff --stat`.
4. Show `git status`.
5. Explicitly identify any source statement you could not classify without making an assumption.
6. Confirm that no application code, build configuration, specification, design, or implementation plan was created.

Do not commit.
Do not push.

Stop and wait for human review.
```

### Outcome

Created `REQUIREMENTS.md` and modified `docs/ai-prompts.md`. The baseline contains 4 mandatory functional requirements, 3 optional functional requirements, 3 frontend requirements, 6 backend requirements, 6 testing and quality requirements, 6 documentation and delivery requirements, and 7 constraints and preferences. It also records that no project extensions are approved, identifies 10 open decisions, and provides source-coverage traceability for all supplied assessment statements. No architecture or implementation decisions were made.

## P003

### Prompt ID

P003

### Phase

Product Scope Decisions

### Objective

Resolve the major product-scope decisions left open by `REQUIREMENTS.md` without selecting implementation technologies or architecture.

### Prompt

```text
Prompt ID: P003

Phase: Product Scope Decisions

Objective:
Resolve the major product-scope decisions left open by `REQUIREMENTS.md` without selecting implementation technologies or architecture.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `docs/ai-prompts.md`.
4. Record this exact prompt as `P003` in `docs/ai-prompts.md` before modifying any other repository file.

Do NOT implement application code.
Do NOT initialize Go, Java, React, Docker, Maven, npm, or any build system.
Do NOT choose expression-evaluation libraries.
Do NOT choose backend frameworks.
Do NOT create `SPEC.md`, `DESIGN.md`, or `TASKS.md` yet.

Create:

* `SCOPE.md`

Update:

* `AGENTS.md` only as needed to recognize `SCOPE.md` as an approved scope artifact.
* `docs/ai-prompts.md` with the factual outcome of P003.

Do not rewrite the historical meaning of `REQUIREMENTS.md`.

## 1. Requirement provenance must remain intact

`REQUIREMENTS.md` is the baseline of what the assessment actually states.

The following requirements remain classified as optional at their source:

* `REQ-O-001` — Exponentiation
* `REQ-O-002` — Square Root
* `REQ-O-003` — Percentage

Do not change their source classification to mandatory.

However, this project now explicitly promotes all three into the committed delivery scope.

`SCOPE.md` must clearly distinguish:

* source requirement classification
* project delivery commitment

Therefore:

* Addition is mandatory in the assessment and mandatory in delivery.
* Subtraction is mandatory in the assessment and mandatory in delivery.
* Multiplication is mandatory in the assessment and mandatory in delivery.
* Division is mandatory in the assessment and mandatory in delivery.
* Exponentiation is optional in the assessment but mandatory in this project's committed delivery scope.
* Square Root is optional in the assessment but mandatory in this project's committed delivery scope.
* Percentage is optional in the assessment but mandatory in this project's committed delivery scope.

All seven operations must therefore be delivered by the final solution.

## 2. Product interaction model

Approve an expression-oriented calculator interaction model.

The product should behave like a familiar mobile calculator rather than a form containing independent operand fields.

The user must be able to construct calculations using calculator controls in the interface.

The committed interaction scope includes:

* numeric buttons `0` through `9`
* decimal separator
* addition
* subtraction
* multiplication
* division
* exponentiation
* square root
* percentage
* parentheses
* clear/reset
* equals/evaluate

The user should also be able to enter supported expression characters using a physical keyboard on devices where a keyboard is available.

Keyboard input is an additional input mechanism, not a separate calculation model.

The application must not require typing into separate "left operand" and "right operand" fields.

## 3. Expression-based calculation model

Approve a single mathematical expression as the user-visible calculation model.

Illustrative expressions include:

* `12 + 4`
* `2 * (3 + 4)`
* `2 ^ 8`
* `sqrt(81)`
* `150 * 20%`

These examples communicate intended product behavior but do not yet define the formal API or grammar. Those belong to the behavioral specification phase.

Expressions may combine supported basic operations and parentheses.

The product must support conventional arithmetic precedence.

Parentheses are considered expression syntax, not a new calculator operation.

## 4. Percentage product semantics

Approve percentage as a postfix percentage value.

Conceptually:

`20%` represents `0.20`.

Therefore:

`150 * 20%`

evaluates to:

`30`.

This compositional behavior is preferred over defining percentage as a special binary API operation such as "20 percent of 150".

The later behavioral specification must define this precisely.

## 5. Square-root product semantics

Square root is a unary operation.

Conceptually:

`sqrt(9) = 3`

The final product is limited to real-number results.

Square root of a negative value must therefore be treated as an invalid calculation rather than introducing complex-number support.

Exact observable error behavior is deferred to `SPEC.md`.

## 6. Expression boundaries

Approve a deliberately bounded calculator expression language.

Committed capabilities:

* decimal numeric literals
* `+`
* `-`
* `*`
* `/`
* exponentiation
* square root
* percentage
* parentheses
* conventional arithmetic precedence

Explicitly out of scope:

* trigonometric functions
* logarithms
* factorial
* variables
* arbitrary user-defined functions
* constants such as π or e
* calculator memory registers
* persistent calculation history
* complex numbers
* arbitrary scripting
* executable expressions
* server-side code evaluation

The project must not be presented as a complete scientific calculator.

Use the product name/description "Calculator" or equivalent rather than claiming full scientific-calculator functionality.

## 7. Backend responsibility

Approve that mathematical expression evaluation belongs to the backend.

The frontend is responsible for:

* collecting calculator input
* constructing/displaying the expression
* submitting the expression
* displaying the returned result or error

The frontend must not become an independent implementation of the calculation engine.

Minor presentation logic such as formatting button labels does not count as calculation-engine duplication.

The exact REST contract remains unresolved until the behavioral specification phase.

## 8. Multiple backend extension

Approve the following project-specific extension:

The final application will contain two interchangeable backend implementations exposing the same externally observable calculator behavior.

The frontend will allow the user to select which backend implementation processes the calculation.

This extension exists to demonstrate:

* contract-first interoperability
* separation between frontend behavior and backend technology
* equivalent behavior across independent implementations

Do NOT select the backend implementation languages in this phase.

The assessment's preference for Go remains recorded in `CON-003` and must be considered during architecture design.

The eventual language choice belongs to the architecture phase.

## 9. Backend parity principle

Approve a product-level parity requirement for the two backend implementations.

For the same valid expression, both backends must produce semantically equivalent results.

For the same invalid expression, both backends must produce semantically equivalent externally observable error behavior.

The exact API structure, HTTP statuses, numeric tolerances, and error schema remain deferred to `SPEC.md`.

## 10. Expression-evaluation implementation decision remains open

Do NOT decide yet whether expression evaluation will use:

* a third-party expression library
* a standard-library capability
* a small custom parser/evaluator

Record this as an architecture decision still open.

The future architecture decision must evaluate candidates based on:

* correctness
* deterministic behavior
* operator support
* precedence support
* percentage semantics
* square-root behavior
* input restriction capabilities
* dependency weight
* maintainability
* equivalent behavior across both backend languages
* suitability for a 2–4 hour technical assessment

A library must not be allowed to redefine the product specification.

Specification drives library selection, not the reverse.

## 11. Docker

Docker remains optional and is not yet promoted into committed delivery scope.

Keep that decision open for the architecture/planning phase.

## 12. SCOPE.md structure

Create `SCOPE.md` with at least:

1. Purpose
2. Source Requirements vs Delivery Commitments
3. Committed Calculator Capabilities
4. User Interaction Model
5. Expression Model
6. Percentage Semantics
7. Square Root Semantics
8. Backend Responsibility
9. Approved Project Extensions
10. Explicitly Excluded Scope
11. Deferred Architecture Decisions
12. Resolved Open Decisions
13. Remaining Open Decisions

Include a compact table mapping the seven calculator requirement IDs to delivery commitment, for example:

| Requirement | Assessment classification | Delivery commitment |
| ----------- | ------------------------- | ------------------- |
| REQ-F-001   | Mandatory                 | Committed           |
| REQ-O-001   | Optional                  | Committed           |

Do not invent implementation identifiers yet.

## 13. Update AGENTS.md

Add `SCOPE.md` to artifact authority.

Its responsibility should be narrowly defined:

`SCOPE.md` records approved product-scope decisions and project extensions without changing the provenance of source requirements.

Define precedence conceptually as:

* `REQUIREMENTS.md` answers what the assessment stated.
* `SCOPE.md` answers what this project has committed to deliver.
* future `SPEC.md` answers exactly how that committed behavior is externally observable.

Do not otherwise rewrite unrelated governance rules.

## 14. Prompt outcome

After completing the phase, update P003's Outcome with:

* files created
* files modified
* optional requirements promoted into delivery scope
* project extensions approved
* major product decisions resolved
* architecture decisions deliberately left unresolved
* confirmation that no implementation technology or expression library was selected

Keep it factual.

## Verification

After completing the phase:

1. Show the complete `SCOPE.md`.
2. Show only the changed section of `AGENTS.md`.
3. Show the P003 entry from `docs/ai-prompts.md`.
4. Show `git diff --stat`.
5. Show `git status`.
6. List which Open Decisions from `REQUIREMENTS.md` were resolved by this phase.
7. List which decisions intentionally remain open.
8. Confirm that no source requirement provenance was changed.
9. Confirm that no application code or build configuration was created.

Do not commit.
Do not push.

Stop and wait for human review.
```

### Outcome

Created `SCOPE.md`; modified `AGENTS.md` and `docs/ai-prompts.md`. Exponentiation (`REQ-O-001`), square root (`REQ-O-002`), and percentage (`REQ-O-003`) remain optional by assessment provenance but were promoted into committed project delivery scope. Approved an expression-oriented calculator, postfix percentage values, unary real-only square root, a bounded expression language, backend-owned evaluation, two user-selectable interchangeable backends, and backend behavioral parity. Deferred the formal API and grammar, numeric rules, exact errors, backend languages and frameworks, expression-evaluation approach, and Docker decision. No implementation technology, backend language, framework, or expression library was selected.

## P004

### Prompt ID

P004

### Phase

Behavioral Specification and Acceptance Criteria

### Objective

Define the complete externally observable behavior of the committed Calculator scope before any architecture, library, framework, or implementation decision is made.

### Prompt

```text
Prompt ID: P004

Phase: Behavioral Specification and Acceptance Criteria

Objective:
Define the complete externally observable behavior of the committed Calculator scope before any architecture, library, framework, or implementation decision is made.

This specification must be precise enough that two independent backend implementations can be tested for behavioral parity without knowing how either is implemented.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `docs/ai-prompts.md`.
5. Record this exact prompt as `P004` in `docs/ai-prompts.md` before modifying any other repository file.

Create only:

* `SPEC.md`

Update only:

* `AGENTS.md`, if necessary to establish `SPEC.md` authority consistently with the existing artifact hierarchy.
* `docs/ai-prompts.md` with P004 and its factual Outcome.

Do NOT implement application code.
Do NOT create `DESIGN.md`.
Do NOT create `TASKS.md`.
Do NOT initialize Go, Java, React, Docker, Maven, npm, or any build system.
Do NOT choose frameworks.
Do NOT choose an expression library.
Do NOT choose an expression parser implementation.

The specification defines behavior. Future implementations must conform to it.

# 1. Traceability model

Use stable identifiers for specification rules:

* `SPEC-EXPR-###` — expression language
* `SPEC-API-###` — REST behavior
* `SPEC-ERR-###` — error behavior
* `SPEC-UI-###` — frontend interaction behavior
* `SPEC-PAR-###` — backend parity

Use acceptance criterion identifiers:

* `AC-EXPR-###`
* `AC-API-###`
* `AC-ERR-###`
* `AC-UI-###`
* `AC-PAR-###`

Every behavioral specification rule must reference the requirement(s) and/or approved scope decision it realizes.

Every acceptance criterion must reference its specification rule.

Do not invent implementation task IDs or test IDs yet.

# 2. Numeric model

Specify the product numeric model as finite IEEE-754 binary64 real numbers.

The specification must state:

* numeric literals are decimal representations
* implementations use binary64-equivalent semantics for calculation
* Java `double` and Go `float64` are examples of compatible representations, but this statement must not select Java or Go as architecture
* successful API results must always be finite JSON numbers
* `NaN`, positive infinity, and negative infinity must never be returned as successful results
* complex numbers are unsupported

Do not promise arbitrary decimal precision.

For cross-backend numeric parity, define:

* exact equality where results are exactly representable and equivalent
* otherwise absolute numeric difference no greater than `1e-12`

Document that this tolerance is for verification/parity and does not imply rounding every user-visible result to 12 decimal places.

# 3. Expression transport syntax

Define one canonical expression syntax used in the REST contract.

Canonical transport tokens:

* digits: `0` through `9`
* decimal point: `.`
* addition: `+`
* subtraction: `-`
* multiplication: `*`
* division: `/`
* exponentiation: `^`
* percentage: `%`
* square root: `sqrt(...)`
* grouping: `(` and `)`

Whitespace between tokens is permitted and semantically insignificant where it does not split a token.

The frontend may display presentation symbols such as:

* `×`
* `÷`
* `√`
* `xʸ`

but must translate them to canonical transport syntax before submission.

The backend contract must not depend on Unicode calculator symbols.

# 4. Numeric literals

Define a decimal numeric literal precisely enough to reject malformed values.

Support examples:

* `0`
* `12`
* `12.5`
* `0.5`
* `.5`

Reject malformed examples such as:

* `.`
* `1.2.3`

Scientific notation such as `1e3` is outside committed expression syntax and must be rejected.

Do not add hexadecimal, binary, octal, locale-specific commas, or numeric separators.

# 5. Operators and semantics

Define:

## Addition

`a + b`

## Subtraction

`a - b`

## Multiplication

`a * b`

## Division

`a / b`

Division by numeric zero is invalid.

This includes positive and negative zero according to binary64 semantics.

## Exponentiation

`a ^ b`

Exponentiation is right-associative.

Therefore:

`2 ^ 3 ^ 2`

means:

`2 ^ (3 ^ 2)`

and evaluates to:

`512`.

## Percentage

Percentage is unary postfix syntax.

`x%`

means:

`x / 100`.

Examples:

`20% = 0.2`

`150 * 20% = 30`

Percentage may participate compositionally in an expression.

Do not introduce context-sensitive consumer-calculator behavior such as interpreting `100 + 20%` as `120`.

Under this specification:

`100 + 20% = 100.2`.

## Square root

Canonical syntax:

`sqrt(expression)`

Square root accepts an expression argument.

Examples:

`sqrt(81) = 9`

`sqrt(9 + 7) = 4`

Square root of a negative numeric value is invalid because the product supports real numbers only.

# 6. Unary signs

Support unary `+` and unary `-`.

Examples:

`-2`
`+2`
`3 * -2`

Define the precedence interaction with exponentiation explicitly:

`-2 ^ 2`

must mean:

`-(2 ^ 2)`

and evaluate to:

`-4`.

`(-2) ^ 2`

must evaluate to:

`4`.

Do not leave this behavior library-dependent.

# 7. Precedence and associativity

Specify precedence from highest binding to lowest in a way consistent with all required examples.

The intended semantic order is:

1. grouping and function application: parentheses and `sqrt(...)`
2. postfix percentage `%`
3. exponentiation `^`
4. unary `+` and unary `-`, subject to the exponentiation rule above
5. multiplication `*` and division `/`
6. addition `+` and subtraction `-`

Binary `+`, `-`, `*`, and `/` are left-associative.

Exponentiation is right-associative.

Include acceptance criteria demonstrating precedence rather than relying only on prose.

# 8. Expression boundaries

A submitted expression:

* is required
* must be a JSON string
* must not be empty
* must not consist only of whitespace
* must contain no more than 256 characters before evaluation
* must conform entirely to the approved grammar
* must not contain variables
* must not contain unapproved functions
* must not contain arbitrary executable content

The expression language is a closed allowlist, not a general-purpose evaluator.

Examples that must be invalid include:

* `foo + 2`
* `sin(1)`
* `1e3`
* `2 +`
* `2 ++ 3`
* `sqrt()`
* unbalanced parentheses
* any token outside the approved language

Do not define backend sanitization by attempting to execute and catch arbitrary code. Unsupported syntax is invalid input.

# 9. REST contract

Define:

`POST /api/calculate`

Request content type:

`application/json`

Successful request body:

```json
{
  "expression": "(2 + 3) * 4"
}
```

Successful response:

HTTP `200`

```json
{
  "result": 20
}
```

The response must contain a finite JSON number.

No additional success fields are required.

Do not add expression echoing, metadata, backend identifiers, timestamps, or diagnostic information to the success response.

# 10. Error contract

All application-defined calculator errors must use:

```json
{
  "code": "ERROR_CODE",
  "message": "Human-readable message"
}
```

Use HTTP `400` for invalid calculation requests covered by the calculator contract.

Define this deliberately small error taxonomy:

## INVALID_REQUEST

Use when the HTTP JSON request does not contain a usable expression value, including:

* missing `expression`
* `expression` is null
* `expression` is not a string
* empty/whitespace-only expression
* expression exceeds 256 characters

Canonical message:

`A non-empty expression of at most 256 characters is required`

## INVALID_EXPRESSION

Use when the expression does not conform to the approved expression grammar.

Canonical message:

`Expression is invalid`

## DIVISION_BY_ZERO

Canonical message:

`Division by zero is not allowed`

## INVALID_DOMAIN

Use for mathematically unsupported real-number domain operations such as square root of a negative value.

Canonical message:

`Expression is outside the supported real-number domain`

## NON_FINITE_RESULT

Use when evaluation would otherwise produce `NaN`, positive infinity, or negative infinity, except when a more specific contract error such as `DIVISION_BY_ZERO` or `INVALID_DOMAIN` applies.

Canonical message:

`Expression result is not finite`

All five use HTTP `400`.

Malformed JSON that prevents the request from being interpreted as the calculator request must also produce HTTP `400` using `INVALID_REQUEST`.

Unexpected internal failures are not application-defined calculator errors and must not expose stack traces, implementation details, parser internals, or dependency-specific messages.

Do not specify a custom HTTP 500 body unless required by the assessment.

# 11. Content type

For a valid calculator request, the API consumes JSON.

A request with an unsupported media type may use the framework/server-standard HTTP `415 Unsupported Media Type`.

Do not require both backend implementations to reproduce framework-specific 415 response bodies.

Parity applies to the calculator contract, not framework-generated diagnostic bodies outside that contract.

# 12. Frontend observable behavior

Specify behavior without choosing React component structure or styling implementation.

The frontend must:

* provide calculator controls for the committed keypad scope
* display the expression being constructed
* display the latest successful result
* allow supported keyboard input where a physical keyboard is available
* provide clear/reset
* provide evaluate/equals
* allow selection between the two backend implementations
* send evaluation only to the currently selected backend
* translate presentation symbols to canonical transport syntax
* display backend-provided calculator error messages
* display a clear connectivity error when the selected backend cannot be reached
* prevent accidental duplicate evaluation while a request is already in progress
* remain usable at representative mobile and desktop viewport sizes

Define clear/reset behavior:

* clear the current expression
* clear the displayed result
* clear any displayed calculator/connectivity error

Define evaluation behavior:

* evaluating an empty expression must not issue an API request
* on successful evaluation, display the returned result
* on failed evaluation, do not leave a stale successful result presented as the current answer
* changing backend does not itself evaluate the expression

Do not define CSS, colors, component names, React state management, or responsive breakpoints yet.

# 13. Keyboard behavior

Specify only supported keyboard behavior.

At minimum:

* digits `0-9`
* `.`
* `+`
* `-`
* `*`
* `/`
* `^`
* `%`
* `(`
* `)`
* Enter as evaluate
* Escape as clear/reset
* Backspace removes the most recently entered expression character where applicable

Square root does not need a dedicated physical-keyboard shortcut beyond the ability to construct its canonical `sqrt(...)` representation through approved UI behavior.

Do not require arbitrary free-form text entry.

# 14. Backend selection

The frontend exposes two backend choices.

Do not name their languages yet.

Use specification-neutral identifiers conceptually such as:

* Backend A
* Backend B

Architecture will later assign implementation technologies.

The backend selection must not alter expression semantics.

Both backends expose the same calculator contract.

# 15. Backend parity

Specify:

For the same valid request:

* both backends return HTTP 200
* both return the same JSON response structure
* results satisfy the numeric parity rule

For the same application-defined invalid request:

* both return the same application-defined HTTP status
* both return the same error code
* both return the same canonical message where this specification defines one

Framework-generated responses outside the calculator contract, such as an unsupported-media-type body, do not require byte-for-byte parity.

# 16. Acceptance criteria

Create explicit acceptance criteria covering at minimum:

## Core operations

* addition
* subtraction
* multiplication
* division
* decimal calculation

## Advanced committed operations

* exponentiation
* right-associative exponentiation
* square root
* square root of compound expression
* percentage
* percentage composed with multiplication

## Expression semantics

* arithmetic precedence
* parentheses overriding precedence
* unary negative
* exponentiation vs unary negative
* percentage compositional semantics

## Error behavior

* division by zero
* negative square root
* malformed expression
* unsupported function
* unsupported scientific notation
* empty expression
* missing expression
* non-string expression
* expression over 256 characters
* non-finite result

## API behavior

* successful POST request
* JSON result structure
* malformed JSON
* unsupported media type at status level

## UI behavior

* keypad construction
* keyboard construction
* display expression
* clear
* backspace
* evaluate
* result display
* error display
* stale result removal
* duplicate-submit prevention
* backend selection
* no request for empty expression
* mobile usability
* desktop usability

## Backend parity

Include representative parity acceptance criteria covering:

* a basic operation
* a compound expression
* an advanced operation
* division by zero
* invalid grammar
* invalid domain
* non-finite result

Acceptance criteria must use concrete inputs and expected observable outputs wherever possible.

# 17. Traceability matrices

At the end of `SPEC.md`, include:

## Requirement → Specification

Map all requirements affected by this behavioral specification to relevant `SPEC-*` rules.

Include the optional-source requirements now committed by `SCOPE.md`.

## Specification → Acceptance Criteria

Map each `SPEC-*` rule to one or more `AC-*` identifiers.

Do not map to future implementation tasks or test filenames yet.

# 18. Do not over-specify implementation

The document must not choose or mention as selected architecture:

* Spring Boot
* Gin
* Echo
* Java backend
* Go backend
* Vite
* TypeScript
* expression-evaluation libraries
* parser algorithms
* AST structures
* repository package layout
* Docker implementation

Language names may appear only when explaining binary64 compatibility already required above, not as selected implementation technologies.

# 19. Prompt outcome

After completing `SPEC.md`, update P004's Outcome in `docs/ai-prompts.md` with:

* files created
* files modified
* number of specification rules by category
* number of acceptance criteria by category
* major previously open behavioral decisions resolved
* remaining architecture decisions
* confirmation that no implementation technology or expression library was selected

Keep the outcome factual.

# Verification

After completing the phase:

1. Show the complete `SPEC.md`.
2. Show any changed section of `AGENTS.md`.
3. Show the P004 entry from `docs/ai-prompts.md`.
4. Show `git diff --stat`.
5. Show `git status`.
6. Report the number of `SPEC-*` rules.
7. Report the number of `AC-*` acceptance criteria.
8. Confirm every committed calculator operation has explicit acceptance coverage.
9. Confirm both valid and invalid expression behavior are covered.
10. Confirm backend parity has explicit acceptance coverage.
11. Identify any behavioral question that still cannot be resolved without an architecture decision.
12. Confirm no application code, build configuration, framework, parser, or expression library was created or selected.

Do not commit.
Do not push.

Stop and wait for human review.
```

### Outcome

Created `SPEC.md`; modified `docs/ai-prompts.md`; `AGENTS.md` required no change because it already establishes `SPEC.md` authority consistently. The specification contains 11 expression rules, 3 API rules, 6 error rules, 7 UI rules, and 2 parity rules. It contains 20 expression acceptance criteria, 3 API criteria, 12 error criteria, 16 UI criteria, and 7 parity criteria. It resolves the numeric model and parity tolerance, canonical expression tokens and grammar, operator semantics and precedence, request and response contracts, error taxonomy, content-type status behavior, frontend interactions, keyboard behavior, backend selection, and valid/invalid backend parity. Backend languages and frameworks, evaluation approach or library, parser design, frontend tooling and internal structure, deployment, and optional Docker support remain architecture decisions. No implementation technology, framework, parser implementation, or expression library was selected.

## P005

### Prompt ID

P005

### Phase

Architecture and Design

### Objective

Define the technical architecture that implements the approved requirements, scope, and behavioral specification with minimal complexity, strong testability, and deterministic behavior across two backend implementations.

### Prompt

```text
Prompt ID: P005

Phase: Architecture and Design

Objective:
Define the technical architecture that implements the approved requirements, scope, and behavioral specification with minimal complexity, strong testability, and deterministic behavior across two backend implementations.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `docs/ai-prompts.md`.
6. Record this exact prompt as `P005` in `docs/ai-prompts.md` before modifying any other repository file.

Create:

* `DESIGN.md`
* `docs/decisions/ADR-001-primary-go-backend.md`
* `docs/decisions/ADR-002-shared-expression-parser.md`
* `docs/decisions/ADR-003-secondary-java-backend.md`
* `docs/decisions/ADR-004-frontend-stack.md`
* `docs/decisions/ADR-005-containerized-delivery.md`

Update:

* `AGENTS.md` only if needed to reflect approved `DESIGN.md`/ADR authority.
* `SCOPE.md` only to promote Docker from optional/open to committed delivery scope, while preserving its original assessment classification as optional.
* `docs/ai-prompts.md` with the factual P005 outcome.

Do NOT implement application code.
Do NOT initialize Go modules, Maven, npm, Docker files, or build systems yet.
Do NOT create `TASKS.md`.
Do NOT alter behavioral requirements in `SPEC.md`.

# 1. Architecture goals

The architecture must optimize for:

1. correctness
2. clarity
3. maintainability
4. testability
5. backend behavioral parity
6. small dependency surface
7. suitability for a 2–4 hour technical assessment

Do not optimize for hypothetical scale or future enterprise requirements.

# 2. Repository architecture

Approve this target repository layout:

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
│
├── docs/
│   ├── ai-prompts.md
│   └── decisions/
│
├── frontend/
├── backend-go/
├── backend-java/
└── docker-compose.yml
```

Directories/files should be created only in their implementation phase unless this prompt explicitly creates documentation.

# 3. Backend A — primary Go implementation

Select Go as the primary backend implementation because the assessment explicitly prefers Go.

Use a currently supported Go release available in the developer environment.

Prefer the Go standard library.

HTTP stack:

* `net/http`
* `http.ServeMux`
* standard JSON encoding/decoding

Do not use Gin, Echo, Fiber, Chi, or another HTTP framework unless a concrete requirement later proves the standard library insufficient.

Rationale:

* the API contains one calculator endpoint
* modern `net/http` routing is sufficient
* fewer dependencies improve clarity
* HTTP infrastructure is not the subject of the assessment

Default local port:

`8080`

# 4. Backend B — Java compatibility implementation

Select Java as the secondary backend implementation.

Purpose:

* demonstrate that the frontend depends on the shared API contract rather than backend technology
* demonstrate contract-first interoperability
* provide an independently implemented parity target

Use:

* Java 21
* Spring Boot
* Maven
* Spring Web
* JUnit 5
* MockMvc for focused HTTP contract tests
* JaCoCo for coverage

Do not use Lombok.

Default local port:

`8081`

Keep the Java implementation intentionally small.

Do not introduce:

* persistence
* repositories
* messaging
* authentication
* service interfaces with single trivial implementations
* factories without behavioral need
* Strategy/Command frameworks
* hexagonal/clean-architecture ceremony merely for demonstration

# 5. Shared architecture principle

The two backends share:

* specification
* grammar
* acceptance criteria
* API contract
* parity expectations

They do NOT share source code.

Each implementation must be idiomatic in its own language.

Do not create generated shared runtime libraries merely to force code reuse between Go and Java.

The specification is the shared artifact.

# 6. Expression evaluator decision

Select a small custom parser/evaluator for each backend.

Do NOT use a third-party expression-evaluation library.

Document the rationale:

* `SPEC.md` defines a deliberately small closed grammar
* library semantics for `%`, exponentiation, unary minus, square root, errors, and precedence may differ
* two different language libraries would create parity risk
* a bounded parser keeps product semantics under project control
* dependency count remains low
* acceptance criteria can directly drive parser tests

This is not permission to build a general-purpose parser framework.

# 7. Parser design

Use a small recursive-descent parser or equivalent precedence-based implementation.

Separate lexical/parsing/evaluation concerns only where doing so improves clarity.

Do not require an AST unless the implementation naturally benefits from one.

Direct evaluation while parsing is acceptable.

Design conceptually around grammar levels equivalent to:

```text
expression        → addition/subtraction
multiplicative    → multiplication/division
unary             → unary signs with the SPEC-defined exponent rule
power             → right-associative exponentiation
postfix           → percentage
primary           → number | parenthesized expression | sqrt(...)
```

The final exact grammar must conform to `SPEC.md`.

Important:

* Do not alter precedence to simplify implementation.
* Preserve right-associative exponentiation.
* Preserve `-2 ^ 2 = -4`.
* Preserve `(-2) ^ 2 = 4`.
* Preserve postfix percentage behavior.
* Reject unsupported syntax rather than attempting permissive recovery.

# 8. Domain/transport separation

For both backends, keep expression evaluation independent from HTTP.

Conceptually:

```text
HTTP Handler / Controller
          |
          v
   Calculator/Evaluator
          |
          v
       Parser
```

HTTP types must not leak into parser/domain logic.

Do not create unnecessary application/service layers between these components.

Domain errors should be representable independently of HTTP and mapped to the API error contract at the transport boundary.

# 9. Error architecture

Internal implementations may use language-idiomatic typed/sentinel/domain errors.

Transport code maps those errors to the canonical `SPEC.md` contract:

* INVALID_REQUEST
* INVALID_EXPRESSION
* DIVISION_BY_ZERO
* INVALID_DOMAIN
* NON_FINITE_RESULT

Dependency/framework exception messages must never become public API messages.

Unexpected internal errors must not expose stack traces or implementation details.

# 10. Frontend architecture

Select:

* React
* TypeScript
* Vite

Use the browser `fetch` API.

Do not add Axios.

Use:

* Vitest
* React Testing Library
* user-event where useful

Do not add:

* Redux
* Zustand
* MobX
* React Router
* a UI component framework
* a CSS framework
* a form library

unless a later concrete requirement justifies it.

For this application, local React state is the default.

# 11. Frontend component boundaries

Keep the frontend small but not monolithic.

A target conceptual structure may be:

```text
src/
├── App.tsx
├── main.tsx
├── api/
│   └── calculatorApi.ts
├── config/
│   └── backends.ts
├── components/
│   ├── Calculator.tsx
│   ├── Display.tsx
│   ├── Keypad.tsx
│   └── BackendSelector.tsx
└── ...
```

This structure is guidance, not a requirement to create files without responsibility.

Responsibilities:

* `Calculator` coordinates calculator UI state
* `Display` presents expression/result/error
* `Keypad` emits calculator input actions
* `BackendSelector` selects the target backend
* API module owns REST communication
* backend configuration remains outside UI components

Do not duplicate the parser/evaluator in the frontend.

# 12. Frontend expression state

The frontend stores the expression being constructed.

It may perform UI-level input shaping required to make keypad behavior usable, such as:

* appending supported symbols
* backspace
* clear
* translating display operators to canonical transport tokens

It must not independently determine the mathematical result.

Backend evaluation remains authoritative.

# 13. Backend configuration

Default local endpoints:

Go:
`http://localhost:8080`

Java:
`http://localhost:8081`

Frontend backend configuration must be overridable through Vite environment variables.

Do not hardcode environment-specific production URLs throughout UI components.

# 14. CORS

During local development, both APIs must permit the Vite development origin using minimal CORS configuration.

Do not introduce a dedicated gateway or reverse proxy merely to avoid CORS during development.

Containerized deployment may use environment-specific frontend backend URLs.

# 15. Testing architecture

Use a test pyramid appropriate to this small application.

## Parser/domain tests

Most expression semantics should be verified directly without HTTP.

Derive cases from `AC-EXPR-*` and relevant error criteria.

## HTTP contract tests

Verify:

* request decoding/validation
* API result schema
* error mapping
* HTTP status codes

Do not duplicate every parser permutation through HTTP if domain coverage already proves it.

## Frontend tests

Verify observable interaction behavior using React Testing Library:

* keypad
* keyboard
* display
* evaluate
* clear/backspace
* backend selection
* API success/error/connectivity states
* duplicate submission prevention

Mock the network at the frontend test boundary.

## Cross-backend parity verification

Create a later integration mechanism that runs the same contract dataset against both live backends.

Prefer a small repository-level script/test fixture rather than copying parity expectations manually into unrelated places.

The parity dataset must reference representative `AC-PAR-*` criteria.

Do not require a heavy contract-testing framework.

# 16. Coverage

Go:

Use built-in Go coverage tooling.

Java:

Use JaCoCo.

Frontend:

Use Vitest coverage.

Do not set arbitrary coverage percentage gates unless later justified.

README must document how to generate each report.

Generated coverage output must remain ignored by Git.

# 17. Docker promotion

Promote Docker support into committed project delivery scope.

Preserve the fact that Docker is optional in the assessment source.

The final project must include container support for:

* frontend
* Go backend
* Java backend

and a root Compose configuration capable of starting the full application.

Keep containerization simple.

Do not introduce Kubernetes, Helm, service discovery, an API gateway, or production orchestration.

Docker is a delivery convenience and assessment optional feature, not an architectural centerpiece.

# 18. Container topology

Conceptually:

```text
browser
  |
frontend
  |
  +--> Go backend
  |
  +--> Java backend
```

The frontend must still support selecting the desired backend.

Do not hide the two backend implementations behind a single API that would eliminate the selector extension.

# 19. Static quality tools

Use language/toolchain-native formatting and static checks where practical.

Go:

* `gofmt`
* `go vet`
* `go test`

Java:

* Maven compile/test lifecycle
* do not add Checkstyle/SpotBugs merely to increase tooling unless later justified

Frontend:

* TypeScript compile/build checks
* use the linting setup created by the chosen Vite template if lightweight
* do not add multiple overlapping lint/format systems

Avoid tooling whose configuration is larger than the value it provides to this assessment.

# 20. Dependency policy

Every third-party production dependency must have a concrete reason.

Expected production dependencies should remain minimal:

Go:

* ideally standard library only

Java:

* Spring Boot Web/runtime dependencies

Frontend:

* React runtime

Testing/build dependencies are permitted where required by the approved testing strategy.

Do not add a dependency merely to avoid writing a few lines of straightforward code.

# 21. Security posture

This is not an authentication/security assessment, but expression input is untrusted input.

Architectural safeguards:

* use only the closed parser grammar
* never use language `eval`
* never invoke shell commands
* never dynamically execute user-supplied code
* enforce the expression-length requirement from SPEC
* return controlled errors

Do not add authentication, authorization, database security, or unrelated security infrastructure.

# 22. ADR requirements

Create concise ADRs.

Each ADR must contain:

* Title
* Status: Accepted
* Context
* Decision
* Alternatives considered
* Consequences

## ADR-001 — Primary Go Backend

Record:

* Go selected because the assessment prefers it
* standard `net/http` selected over an HTTP framework

Alternatives:

* Java as sole backend
* Go with third-party HTTP framework

## ADR-002 — Shared Expression Parser Strategy

Record:

* custom bounded parser in each backend
* specification is shared, code is not
* no expression library

Alternatives:

* third-party library in each language
* custom parser in only one backend
* frontend evaluation

## ADR-003 — Secondary Java Backend

Record:

* Java 21 + Spring Boot + Maven
* purpose is contract/interoperability demonstration

Alternative:

* only the required/preferred single Go backend

Explicitly acknowledge that the second backend is a project extension and increases delivery cost.

## ADR-004 — Frontend Stack

Record:

* React + TypeScript + Vite
* native fetch
* local state
* lightweight component decomposition

Alternatives:

* React JavaScript
* Axios
* global state library

## ADR-005 — Containerized Delivery

Record:

* Docker support promoted into project delivery scope
* Compose for local full-stack startup

Alternative:

* documented native-only startup

# 23. DESIGN.md structure

Include at minimum:

1. Purpose
2. Architectural Drivers
3. System Context
4. Component Architecture
5. Repository Layout
6. Go Backend Design
7. Java Backend Design
8. Expression Evaluation Design
9. Error Mapping
10. Frontend Design
11. Backend Selection
12. Testing Strategy
13. Cross-Backend Parity Strategy
14. Coverage Strategy
15. Container Architecture
16. Security Boundaries
17. Dependency Policy
18. Quality/Tooling Strategy
19. Trade-offs
20. ADR Index
21. Deferred Implementation Details

Use small diagrams in Mermaid or text only where they improve clarity.

Avoid documentation volume for its own sake.

# 24. Deferred details

Do not unnecessarily pin patch-level framework versions in architecture documentation.

Exact dependency versions should be selected during project initialization from current stable releases compatible with the approved platform versions.

Do not decide implementation class/function names except illustrative examples.

# 25. Update SCOPE.md

Update only the Docker-related scope decision:

* Docker remains optional in the assessment source.
* Docker is now committed in this project's delivery scope.

Record this as an architecture/delivery decision without changing requirement provenance.

# 26. Prompt outcome

After completion, update P005 Outcome with:

* files created
* files modified
* architecture technologies selected
* expression-evaluation approach selected
* Docker promotion
* ADRs created
* major alternatives rejected
* confirmation that no application code/build project was initialized

Keep it factual.

# Verification

After completing the phase:

1. Show `DESIGN.md`.
2. Show each ADR.
3. Show the Docker-related `SCOPE.md` change.
4. Show any changed `AGENTS.md` section.
5. Show the P005 entry from `docs/ai-prompts.md`.
6. Show `git diff --stat`.
7. Show `git status`.
8. Confirm Go is the primary assessment-aligned backend.
9. Confirm Java is documented as an optional project extension rather than an assessment requirement.
10. Confirm expression libraries were rejected intentionally.
11. Confirm the parser architecture conforms to SPEC rather than redefining it.
12. Confirm Docker source provenance remains optional while delivery commitment is now mandatory.
13. Confirm no application source code, dependency manifest, build configuration, Dockerfile, or Compose file was created.

Do not commit.
Do not push.

Stop and wait for human review.
```

### Outcome

Created `DESIGN.md` and five accepted ADRs under `docs/decisions/`; modified `SCOPE.md` and `docs/ai-prompts.md`; `AGENTS.md` required no change because it already defines `DESIGN.md` authority. Selected a primary Go backend using standard `net/http`, a secondary Java 21 backend using Spring Boot, Maven, Spring Web, JUnit 5, MockMvc, and JaCoCo, and a React/TypeScript/Vite frontend using native `fetch`, local state, Vitest, React Testing Library, and `user-event` where useful. Selected independent small custom bounded parsers conforming to `SPEC.md`, with specification and parity fixtures shared but no runtime source sharing or third-party expression library. Promoted Docker from optional assessment provenance to committed project delivery scope with three containers and root Compose planned. Created ADRs for the primary Go backend, parser strategy, secondary Java backend, frontend stack, and containerized delivery. Rejected unnecessary Go HTTP frameworks, third-party expression libraries, frontend evaluation, a single-backend delivery, Axios/global state libraries, and native-only delivery for the documented reasons. No application source code, dependency manifest, build configuration, Dockerfile, Compose file, or build project was created or initialized.

## P006

### Prompt ID

P006

### Phase

Implementation Planning

### Objective

Translate the approved requirements, committed scope, behavioral specification, acceptance criteria, and architecture into a small, ordered, traceable implementation plan.

### Prompt

```text
Prompt ID: P006

Phase: Implementation Planning

Objective:
Translate the approved requirements, committed scope, behavioral specification, acceptance criteria, and architecture into a small, ordered, traceable implementation plan.

This is the final planning gate before implementation begins.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read all accepted ADRs under `docs/decisions/`.
7. Read `docs/ai-prompts.md`.
8. Record this exact prompt as `P006` in `docs/ai-prompts.md` before modifying any other repository file.

Create only:

* `TASKS.md`

Update only:

* `docs/ai-prompts.md` with P006 and its factual Outcome.
* `AGENTS.md` only if needed to clarify task execution/traceability rules already established.

Do NOT initialize Go.
Do NOT initialize Java.
Do NOT initialize React/npm.
Do NOT create Dockerfiles.
Do NOT implement application code.
Do NOT create tests yet.
Do NOT modify behavioral requirements or architecture decisions.

# 1. Planning principles

The implementation plan must:

* be incremental
* keep commits reviewable
* make each task small enough for focused human review
* map work to approved specification/acceptance criteria
* avoid parallel implementation where earlier behavior should establish a reference
* prioritize correctness before presentation polish
* avoid speculative work
* respect the assessment's approximately 2–4 hour scope guidance
* explicitly distinguish required delivery work from project extensions

Do not create one task per source file.

Tasks represent coherent engineering increments.

# 2. Task identifiers

Use stable task identifiers grouped by phase:

* `TASK-GO-###`
* `TASK-FE-###`
* `TASK-JAVA-###`
* `TASK-PAR-###`
* `TASK-DOCKER-###`
* `TASK-DOC-###`
* `TASK-FINAL-###`

Each task must include:

* ID
* Objective
* Dependencies
* Requirement/specification references
* Acceptance criteria covered
* Implementation scope
* Verification required
* Definition of Done
* Status

Initial status for every task:

`Not Started`

Do not invent test-case IDs yet unless an accepted artifact already defines them.

# 3. Phase 1 — Go project bootstrap

Create a task for initializing the primary backend.

It must cover:

* Go module under `backend-go/`
* currently supported Go release available in the development environment
* standard-library-only production dependencies unless a later demonstrated need arises
* basic application entry point
* configuration for default port `8080`
* repository/build hygiene
* initial compile/test verification

Do not combine expression-parser implementation into the bootstrap task.

Definition of Done must require:

* module builds
* baseline tests/toolchain command runs
* `gofmt`
* `go vet`
* no unrelated functionality

# 4. Phase 2 — Go expression domain

Break the domain implementation into coherent increments.

At minimum plan tasks covering:

## Core lexical/parser foundation

Support the approved expression grammar foundation:

* decimal literals
* whitespace
* parentheses
* expression length handling at the appropriate boundary
* complete input consumption
* invalid syntax detection

## Basic arithmetic

* addition
* subtraction
* multiplication
* division
* conventional precedence
* left associativity where specified
* division by zero

## Unary and exponentiation semantics

* unary plus
* unary minus
* exponentiation
* right associativity
* SPEC-defined interaction:

`-2 ^ 2 = -4`

`(-2) ^ 2 = 4`

## Percentage and square root

* postfix percentage
* compositional percentage semantics
* `sqrt(...)`
* compound square-root argument
* invalid real-number domain handling

## Finite-result enforcement

* reject NaN
* reject positive/negative infinity
* map mathematically unsupported outcomes into approved domain errors

These may be separate tasks if doing so improves reviewability.

Every domain task must derive verification from relevant `AC-EXPR-*` / `AC-ERR-*` criteria.

Parser/domain verification must not require HTTP.

# 5. Phase 3 — Go REST API

Create separate tasks for transport behavior.

Cover:

* `POST /api/calculate`
* JSON request decoding
* request validation
* expression length requirement
* successful JSON response
* application error mapping
* canonical error codes/messages
* malformed JSON
* CORS needed for local frontend development

Keep HTTP concerns separate from expression evaluation.

Verification must include focused HTTP contract tests based on `AC-API-*` and relevant `AC-ERR-*`.

Do not duplicate every parser behavior through HTTP if it is already sufficiently covered at domain level.

# 6. Phase 4 — Go quality verification

Create a task that completes the Go backend quality gate.

Require:

* `gofmt`
* `go vet`
* full Go test suite
* Go coverage report
* review against all Go-relevant acceptance criteria
* manual smoke request against the running backend

Definition of Done must explicitly state that no known committed Go/backend acceptance criterion remains uncovered.

# 7. Phase 5 — Frontend bootstrap

Create a task for:

* React
* TypeScript
* Vite
* approved testing stack
* minimal app shell
* backend configuration mechanism
* development/build scripts
* baseline test/build verification

Do not implement the full calculator UI in the bootstrap task.

# 8. Phase 6 — Frontend calculator interaction

Plan focused tasks covering:

## Display and expression state

* expression display
* result display
* error display
* no frontend calculation engine

## Keypad

Controls for:

* digits
* decimal
* arithmetic operators
* exponentiation
* percentage
* square root
* parentheses
* clear
* equals
* backspace where represented through UI if approved

Presentation symbols may differ from canonical transport tokens.

## Keyboard

Implement only the keyboard behavior required by `SPEC.md`.

Do not create arbitrary free-form expression editing beyond the approved behavior.

## Responsive behavior

Implement mobile-first calculator usability and representative desktop behavior.

Do not introduce visual features unrelated to acceptance criteria.

# 9. Phase 7 — Frontend API integration

Create a separate task for REST communication.

Cover:

* native `fetch`
* canonical expression transport
* selected-backend URL resolution
* success result handling
* application error handling
* connectivity errors
* stale-result handling
* duplicate-submit prevention
* no request for empty expression

The frontend must not calculate results independently.

# 10. Phase 8 — Frontend tests and quality

Plan tests deriving from relevant `AC-UI-*` and API-facing criteria.

Cover at minimum:

* keypad input
* keyboard input
* clear/reset
* backspace
* evaluate
* result
* backend error
* connectivity error
* stale result removal
* duplicate submission prevention
* backend selection
* empty-expression behavior
* canonical request payload
* responsive usability verification at a practical level

Require:

* Vitest suite
* coverage report
* TypeScript/build verification

Do not use snapshot tests as the primary behavior verification method.

# 11. Phase 9 — Java project bootstrap

Create a task for:

* `backend-java/`
* Java 21
* Spring Boot
* Maven
* Maven Wrapper
* Spring Web
* Spring Boot Test
* JaCoCo
* port `8081`

No Lombok.

Do not implement parser/domain behavior in the bootstrap task.

# 12. Phase 10 — Java expression domain

Plan Java domain tasks mirroring the behavior covered by the Go implementation, not necessarily its source structure.

Java must independently implement the same `SPEC.md`.

Plan equivalent domain verification for:

* grammar
* arithmetic
* precedence
* unary semantics
* right-associative exponentiation
* postfix percentage
* square root
* invalid domain
* division by zero
* non-finite result

Do not copy Go implementation patterns where they are non-idiomatic in Java.

Do not add unnecessary service interfaces, factories, strategies, or parser frameworks.

# 13. Phase 11 — Java REST API

Plan:

* shared REST contract
* JSON validation
* error mapping
* CORS
* focused MockMvc contract tests

Java observable behavior must match the specification, not the Go implementation's incidental details.

# 14. Phase 12 — Java quality verification

Require:

* Maven test lifecycle
* build
* JaCoCo report
* all relevant acceptance criteria
* manual smoke request

Definition of Done must explicitly state that no known committed Java/backend acceptance criterion remains uncovered.

# 15. Phase 13 — Cross-backend parity

This is a distinct project-extension phase.

Plan a small repository-level parity mechanism.

Prefer:

* a lightweight script or test fixture
* a shared dataset of HTTP requests and expected contract behavior
* live Go and Java backends

Do not introduce Pact or another heavyweight contract framework.

Cover representative `AC-PAR-*` criteria including:

* basic arithmetic
* compound precedence
* exponentiation
* square root or percentage
* division by zero
* invalid grammar
* invalid domain
* non-finite result

Verify:

* status parity
* response-schema parity
* canonical error parity
* numeric parity tolerance from `SPEC.md`

The parity mechanism should test behavior, not implementation internals.

# 16. Phase 14 — Docker

Plan committed Docker delivery.

Include:

* Go backend Dockerfile
* Java backend Dockerfile
* frontend Dockerfile
* root Compose configuration

Compose must run:

* frontend
* Go backend
* Java backend

Do not introduce:

* Kubernetes
* reverse-proxy infrastructure unless concretely necessary
* service discovery tooling
* production orchestration

Verification must include successful container builds and full-stack startup.

# 17. Phase 15 — Documentation

Create documentation tasks covering all assessment deliverables.

README must include:

* project overview
* architecture summary
* prerequisites
* native setup
* running Go backend
* running Java backend
* running frontend
* Docker/Compose startup
* API contract
* API examples
* testing commands
* coverage commands
* design rationale
* two-backend extension rationale
* explicit note that Go is the primary assessment-aligned backend
* trade-offs
* known scope boundaries
* AI usage/prompt disclosure link

Do not duplicate the complete specification or ADR content in README.

Link to detailed artifacts where appropriate.

# 18. AI prompt disclosure

Plan a final verification task for `docs/ai-prompts.md`.

The prompt audit trail must contain the prompts relevant to the submitted implementation.

Do not rewrite historical prompts.

Ensure outcomes are factual and complete.

# 19. Final quality gate

Create a final task that must happen before submission.

It must verify:

## Repository hygiene

* clean working tree
* no build artifacts tracked
* no `.idea`
* no `node_modules`
* no generated coverage directories
* no secrets
* no unexpected environment files

## Go

* format
* vet
* tests
* coverage
* build

## Java

* tests
* coverage
* build

## Frontend

* tests
* coverage
* build

## Integration

* Go smoke test
* Java smoke test
* frontend → Go
* frontend → Java
* backend switching
* parity suite

## Docker

* image builds
* Compose starts full system
* calculator works through both backend choices

## Documentation

* README instructions validated from a clean setup perspective
* API examples exercised
* prompts disclosed
* required deliverables present

## Traceability

Confirm every committed requirement maps through:

Requirement
→ Specification
→ Acceptance Criterion
→ Implementation Task
→ Verification evidence

Identify any intentional exceptions explicitly.

# 20. Commit boundaries

TASKS.md may recommend commit boundaries, but must not perform commits.

Recommend cohesive commits similar in intent to:

* Go bootstrap
* Go calculator domain
* Go REST API
* frontend calculator interaction
* frontend API integration
* Java compatible backend
* parity verification
* Docker delivery
* final documentation

Do not require one commit per task if several tiny tasks form one coherent, verified increment.

Do not include commit hashes because no implementation commits exist yet.

# 21. TASKS.md structure

Use:

1. Purpose
2. Execution Rules
3. Traceability Convention
4. Go Backend
5. Frontend
6. Java Backend
7. Cross-Backend Parity
8. Docker
9. Documentation
10. Final Submission Gate
11. Recommended Commit Boundaries
12. Coverage of Committed Requirements

At the end, include a compact matrix:

| Requirement / Scope | Specification | Acceptance Criteria | Planned Task(s) |

This matrix must demonstrate that every committed capability has planned implementation/verification coverage.

Do not falsely map requirements that are not implemented by a specific task.

# 22. Plan granularity

Aim for a practical plan.

Do not create dozens of microtasks merely to maximize traceability.

Prefer approximately 15–25 meaningful implementation tasks total.

If the plan exceeds 30 implementation tasks, simplify it unless there is a strong reason.

Remember the assessment expects approximately 2–4 hours.

# 23. Prompt outcome

After completing TASKS.md, update P006 Outcome with:

* files created
* files modified
* task count by phase
* total task count
* implementation order
* confirmation that committed requirements have planned coverage
* confirmation that no implementation was performed

Keep the outcome factual.

# Verification

After completing the phase:

1. Show complete `TASKS.md`.
2. Show P006 from `docs/ai-prompts.md`.
3. Show `git diff --stat`.
4. Show `git status`.
5. Report number of tasks by task-prefix.
6. Report total number of tasks.
7. Confirm every committed calculator operation maps to implementation and verification work.
8. Confirm frontend, both backends, parity, Docker, documentation, and final verification are planned.
9. Identify any acceptance criterion without a planned verification path.
10. Identify any planned task not traceable to an approved requirement, scope extension, specification, architecture decision, or delivery need.
11. Confirm no application code, dependency manifest, Dockerfile, Compose file, or build project was created.

Do not commit.
Do not push.

Stop and wait for human review.
```

### Outcome

Created `TASKS.md` and modified `docs/ai-prompts.md`; `AGENTS.md` required no change. The plan contains 8 Go tasks, 5 frontend tasks, 6 Java tasks, 1 cross-backend parity task, 1 Docker task, 2 documentation tasks, and 1 final-submission task, for 24 tasks total. The ordered implementation establishes and verifies the primary Go backend first, then the frontend, independent Java compatibility backend, live parity, container delivery, documentation, prompt disclosure, and the final quality gate. The traceability matrix plans implementation and verification coverage for every committed calculator operation, frontend behavior, both backend contracts, parity extension, Docker commitment, quality/coverage requirement, and documentation deliverable. No application code, tests, dependency manifest, Dockerfile, Compose file, build configuration, or build project was created or initialized.

## P007

### Prompt ID

P007

### Phase

Implementation — Go Backend Bootstrap

### Objective

Execute only `TASK-GO-001` from `TASKS.md`: initialize the primary Go backend as a minimal, buildable, testable service shell without implementing calculator behavior.

### Prompt

```text
Prompt ID: P007

Phase: Implementation — Go Backend Bootstrap

Objective:
Execute only `TASK-GO-001` from `TASKS.md`: initialize the primary Go backend as a minimal, buildable, testable service shell without implementing calculator behavior.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-001 and any other ADR directly referenced by `TASK-GO-001`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P007` in `docs/ai-prompts.md` before modifying any application file.

Implement only:

`TASK-GO-001 — Bootstrap primary Go backend`

Do NOT implement:

* expression parsing
* calculator operations
* REST calculator endpoint
* request/response DTOs
* calculator error mapping
* frontend code
* Java code
* Docker
* parity scripts

Do NOT modify `SPEC.md`, `DESIGN.md`, `SCOPE.md`, or `REQUIREMENTS.md`.

If implementation reveals a conflict with an approved artifact, stop and report it instead of changing the artifact.

## 1. Create the Go project

Create:

`backend-go/`

Initialize a Go module.

Use the currently installed/supported Go version available in the developer environment.

Before selecting the module/toolchain declaration, inspect:

`go version`

Use a module path appropriate for the GitHub repository:

`github.com/maiandreh/fullstack-calculator-double-backend/backend-go`

Do not add third-party production dependencies.

The resulting production dependency graph should use only the Go standard library.

## 2. Minimal application entry point

Create the smallest useful Go application entry point.

Requirements:

* application starts an HTTP server
* default port is `8080`
* port must be configurable through an environment variable
* use a small, explicit configuration approach
* use `net/http`
* do not introduce a configuration library

Use a clear environment variable name such as:

`PORT`

If `PORT` is absent, default to:

`8080`

If the supplied port value is unusable, fail fast with a clear startup error rather than silently falling back.

Do not implement `/api/calculate` yet.

## 3. Minimal health endpoint

A minimal infrastructure health endpoint is permitted for bootstrap verification:

`GET /health`

It may return:

HTTP `200`

with a small JSON response such as:

```json
{
  "status": "ok"
}
```

This endpoint is infrastructure-only and must not be presented as calculator functionality.

Do not create elaborate health-check abstractions.

## 4. Application structure

Keep the bootstrap intentionally small.

A reasonable target may be conceptually equivalent to:

```text
backend-go/
├── go.mod
├── cmd/
│   └── server/
│       └── main.go
└── internal/
    └── ...
```

However, do not create empty directories or placeholder abstractions merely to match an imagined future structure.

Prefer the smallest structure that is clear today.

Do not introduce:

* interfaces without an actual substitution requirement
* dependency injection frameworks
* router frameworks
* service layers
* repository layers
* domain packages before domain behavior exists
* configuration frameworks

## 5. HTTP server quality

Use idiomatic standard-library server setup.

Avoid calling `http.ListenAndServe` with a nil/default mux if a small explicit server/mux structure is clearer.

Set reasonable server timeouts suitable for a small HTTP service if this can be done without unnecessary complexity.

Do not introduce production infrastructure beyond what is proportionate to the assessment.

## 6. Tests

Add only bootstrap-level tests.

Test behavior that exists in this increment, for example:

* health endpoint returns HTTP 200
* health response has the expected JSON structure
* default/configured port logic if extracted into directly testable code

Do not create calculator tests.

Do not create parser tests.

Do not create acceptance tests for functionality that does not exist yet.

## 7. Repository hygiene

Ensure generated Go artifacts are already covered by the repository `.gitignore`.

Do not modify `.gitignore` unless a concrete Go-generated artifact from this increment is missing.

If `.gitignore` must change, explain why.

Do not commit generated binaries.

## 8. Task tracking

Update only the status/details related to `TASK-GO-001` in `TASKS.md`.

Mark `TASK-GO-001` complete only if its Definition of Done is fully satisfied:

* module builds
* baseline tests pass
* formatting is clean
* `go vet` passes
* no unrelated functionality exists
* no unapproved production dependency exists

Do not alter the status of any other task.

## 9. Verification commands

Run from `backend-go/` as applicable:

```bash
gofmt -w .
go test ./...
go vet ./...
go build ./...
```

Also inspect:

```bash
go list -m all
```

Confirm no unapproved third-party production dependency was added.

Run the server and verify the health endpoint manually:

```bash
curl -i http://localhost:8080/health
```

Stop the server after verification.

## 10. Required report

After implementation, report:

* installed Go version used
* files created
* files modified
* module path
* production dependencies
* tests executed
* test results
* `go vet` result
* build result
* manual `/health` smoke-test result
* `git diff --stat`
* `git status`
* remaining work
* any deviation from `SPEC.md`, `DESIGN.md`, ADRs, or `TASKS.md`

## 11. Prompt audit outcome

Update the P007 entry in `docs/ai-prompts.md` with a factual Outcome including:

* `TASK-GO-001` executed
* Go version selected
* files created/modified
* verification commands and results
* whether the task was marked complete
* confirmation that no calculator behavior was implemented
* confirmation that no third-party production dependency was introduced

Do not rewrite the P007 prompt text.

## Final constraints

Do not implement anything from `TASK-GO-002` or later.

Do not commit.
Do not push.

Stop after `TASK-GO-001` and wait for human review.
```

### Outcome

Attempted `TASK-GO-001` and stopped before application-file modification because `go version` failed with `go: command not found`. Read-only checks of `PATH`, `/usr/local/go/bin/go`, `/usr/bin/go`, `/snap/bin/go`, `/opt/go/bin/go`, and available package metadata found no installed Go toolchain. This conflicts with the approved design/task assumption that a currently supported Go release is available in the developer environment, so no Go version or module/toolchain declaration was selected. Created no `backend-go/` files and ran no Go formatting, tests, vet, build, dependency-list, server, or health-smoke verification because those commands require the missing toolchain. `TASK-GO-001` remains `Not Started`. No calculator behavior and no third-party production dependency were introduced; only `docs/ai-prompts.md` was modified to record P007 and this outcome.

## P007-R1

### Prompt ID

P007-R1

### Phase

Implementation — Go Backend Bootstrap / Resume

### Objective

Resume the previously blocked P007 execution of `TASK-GO-001` now that the Go toolchain has been installed.

### Prompt

```text
Prompt ID: P007-R1

Phase: Implementation — Go Backend Bootstrap / Resume

Objective:
Resume the previously blocked P007 execution of `TASK-GO-001` now that the Go toolchain has been installed.

This is a continuation of P007, not a new implementation phase.

Before modifying application files:

1. Read `AGENTS.md`.
2. Read the P007 entry and blocked Outcome in `docs/ai-prompts.md`.
3. Read `TASK-GO-001` in `TASKS.md`.
4. Run:

`go version`

5. Confirm that a supported Go toolchain is now available on PATH.
6. Record this exact continuation prompt as `P007-R1` in `docs/ai-prompts.md`.

Do not delete, rewrite, or conceal the original blocked P007 outcome.

The prompt history must show:

P007 attempted
→ environment prerequisite missing
→ execution stopped safely
→ Go installed by the human developer
→ P007-R1 resumed the same approved task

If Go is still unavailable, stop again without modifying application files.

If Go is available, execute the original P007 instructions for `TASK-GO-001` exactly as previously approved.

In particular:

* create only the Go backend bootstrap
* initialize the approved Go module
* use standard-library-only production dependencies
* default to port 8080
* support PORT configuration
* add the minimal `/health` infrastructure endpoint
* add only bootstrap-level tests
* do not implement calculator behavior
* do not implement parser behavior
* do not implement `/api/calculate`
* do not start any later task

Run:

`gofmt -w .`

`go test ./...`

`go vet ./...`

`go build ./...`

`go list -m all`

Start the server and manually verify:

`curl -i http://localhost:8080/health`

Stop the server after the smoke test.

If all Definition of Done conditions for `TASK-GO-001` are satisfied:

* mark only `TASK-GO-001` as complete
* leave every later task unchanged

Update the P007-R1 Outcome with factual verification evidence.

Do not alter the original P007 blocked Outcome.

Report:

* Go version
* module path
* files created/modified
* dependencies
* tests and results
* vet result
* build result
* health smoke-test result
* task status
* `git diff --stat`
* `git status`

Do not commit.
Do not push.

Stop after TASK-GO-001.
```

### Outcome

P007-R1 attempted to resume the same approved `TASK-GO-001`, but the prerequisite check again failed: `go version` returned `go: command not found` in the execution environment. In accordance with this continuation prompt, execution stopped before modifying application files. The original blocked P007 outcome remains unchanged; no Go version or module path declaration was selected, `backend-go/` was not created, no verification commands or health smoke test could run, and `TASK-GO-001` remains `Not Started`. No calculator/parser behavior or third-party production dependency was introduced. Only `docs/ai-prompts.md` was modified to record this continuation and factual outcome.

## P007-R2

### Prompt ID

P007-R2

### Phase

Implementation — Go Backend Bootstrap / Resume

### Objective

Resume the previously blocked execution of `TASK-GO-001` now that the Go toolchain is available in the Codex environment.

### Prompt

```text
Prompt ID: P007-R2

Phase: Implementation — Go Backend Bootstrap / Resume

Objective:
Resume the previously blocked execution of `TASK-GO-001` now that the Go toolchain is available in the Codex environment.

This is a continuation of P007 and P007-R1, not a new implementation phase.

Before modifying application files:

1. Read `AGENTS.md`.
2. Read `TASKS.md`.
3. Read P007 and P007-R1 in `docs/ai-prompts.md`.
4. Run:

   * `go version`
   * `which go`
5. Confirm that Go is available on PATH.
6. Record this exact prompt as `P007-R2` in `docs/ai-prompts.md`.

Do not rewrite or delete the original P007 or P007-R1 blocked outcomes.

The audit trail must preserve this sequence:

P007
→ blocked because Go was unavailable

P007-R1
→ blocked because Go was still unavailable in the Codex environment

P007-R2
→ resumed after environment setup

If Go is still unavailable, stop without modifying application files.

If Go is available, execute only:

`TASK-GO-001 — Bootstrap primary Go backend`

Follow the previously approved P007 scope.

Create `backend-go/` and:

* initialize the module:
  `github.com/maiandreh/fullstack-calculator-double-backend/backend-go`
* use only Go standard-library production dependencies
* create a minimal HTTP application
* default to port `8080`
* allow the port to be configured using `PORT`
* fail clearly if `PORT` is unusable
* use `net/http`
* create the minimal infrastructure endpoint:
  `GET /health`
* return HTTP 200 with JSON equivalent to:
  `{"status":"ok"}`

Do not implement:

* `/api/calculate`
* expression parsing
* calculator operations
* calculator DTOs
* calculator error mapping
* frontend
* Java
* Docker
* parity tooling

Keep the project structure intentionally small.

Do not create speculative packages, interfaces, services, repositories, or dependency-injection abstractions.

Add only bootstrap-level tests for behavior implemented in this task.

Run:

`gofmt -w .`

`go test ./...`

`go vet ./...`

`go build ./...`

`go list -m all`

Start the service and verify:

`curl -i http://localhost:8080/health`

Stop the service after the smoke test.

If all Definition of Done conditions are satisfied:

* mark only `TASK-GO-001` as complete
* leave every later task unchanged

Update the P007-R2 Outcome with factual evidence including:

* Go version
* executable path
* module path
* files created/modified
* production dependencies
* test result
* vet result
* build result
* health smoke-test result
* TASK-GO-001 status
* confirmation that no calculator behavior was implemented
* confirmation that no third-party production dependency was introduced

Report:

* `git diff --stat`
* `git status`
* remaining work
* any deviation from approved artifacts

Do not commit.
Do not push.

Stop after TASK-GO-001.
```

### Outcome

Resumed the previously blocked `TASK-GO-001` after confirming `go version go1.26.5 linux/amd64` at `/usr/local/go/bin/go`. Created module `github.com/maiandreh/fullstack-calculator-double-backend/backend-go` with `backend-go/go.mod`, `backend-go/cmd/server/main.go`, and `backend-go/cmd/server/main_test.go`; modified `TASKS.md` to mark only `TASK-GO-001` complete and modified this audit file to record P007-R2. Production uses only the Go standard library (`net/http`, standard JSON/configuration/logging packages); `go list -m all` listed only the module itself. `gofmt -w .` completed. With `GOCACHE=/tmp/fullstack-calculator-go-cache` because the sandbox home cache is read-only, `go test ./...` passed (`cmd/server`, 0.004s), `go vet ./...` passed, and `go build ./...` passed; the generated untracked `backend-go/server` binary was removed afterward. The service started on default port `8080`; `curl -i http://localhost:8080/health` returned `HTTP/1.1 200 OK`, `Content-Type: application/json`, and `{"status":"ok"}`, after which the service was stopped. `TASK-GO-001` is complete, and every later task remains unchanged. No calculator endpoint, expression parsing, calculator operations, calculator DTOs, calculator error mapping, frontend, Java, Docker, or parity tooling was implemented. No third-party production dependency was introduced. There was no deviation from the approved requirements, scope, specification, design, ADR-001, or TASK-GO-001; only sandbox-specific writable-cache and localhost permissions were needed for verification.

## P008

### Prompt ID

P008

### Phase

Implementation — Go Expression Parser Foundation

### Objective

Execute only `TASK-GO-002` from `TASKS.md`: implement the bounded lexical/parser foundation for the approved expression language, independently from HTTP and before arithmetic semantics are introduced.

### Prompt

```text
Prompt ID: P008

Phase: Implementation — Go Expression Parser Foundation

Objective:
Execute only `TASK-GO-002` from `TASKS.md`: implement the bounded lexical/parser foundation for the approved expression language, independently from HTTP and before arithmetic semantics are introduced.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and any other ADR directly referenced by `TASK-GO-002`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P008` in `docs/ai-prompts.md` before modifying application files.

Implement only:

`TASK-GO-002 — Implement lexical and parser foundation`

Do NOT implement:

* addition semantics
* subtraction semantics
* multiplication semantics
* division semantics
* exponentiation semantics
* unary plus/minus semantics
* percentage evaluation
* square-root evaluation
* finite-result enforcement
* `/api/calculate`
* HTTP calculator request/response handling
* frontend
* Java
* Docker
* parity tooling

Do NOT modify:

* `REQUIREMENTS.md`
* `SCOPE.md`
* `SPEC.md`
* `DESIGN.md`
* accepted ADRs

If implementation exposes a conflict with approved artifacts, stop and report it.

## 1. Domain boundary

Create the smallest appropriate package under `backend-go/` for expression parsing/evaluation groundwork.

The parser must remain independent from:

* `net/http`
* JSON request/response types
* server configuration
* transport errors

Do not introduce a service/application layer.

A direct domain package is sufficient.

## 2. Closed expression language

Implement lexical/parser support for the approved syntax foundation.

Recognize only the canonical language from `SPEC.md`:

* decimal numeric literals
* `+`
* `-`
* `*`
* `/`
* `^`
* `%`
* `(`
* `)`
* canonical square-root token/function syntax
* permitted whitespace

The parser must treat the language as a closed allowlist.

Unsupported identifiers or characters must be rejected.

Do not use regular-expression-based evaluation.
Do not use `eval`.
Do not execute arbitrary code.
Do not add an expression library.

## 3. Numeric literal handling

Support the approved decimal literal forms, including:

* `0`
* `12`
* `12.5`
* `0.5`
* `.5`

Reject malformed numeric forms, including:

* `.`
* `1.2.3`

Reject unsupported scientific notation such as:

`1e3`

Reject locale-specific commas and unsupported numeric syntaxes.

Do not introduce arbitrary precision or decimal libraries.

## 4. Whitespace

Whitespace permitted by `SPEC.md` must be ignored where semantically insignificant.

Examples that should lex/parse equivalently at the foundation level include:

* `12`
* `12`
* `( 12 )`

Do not allow whitespace to split a token into a different valid token accidentally.

## 5. Parentheses and structure

Implement the foundation needed to recognize balanced grouping syntax.

Support nested parentheses structurally.

Reject:

* unmatched opening parenthesis
* unmatched closing parenthesis
* empty parenthesized constructs where the approved grammar does not permit them
* incomplete/trailing syntax

The parser must require complete input consumption.

No valid prefix followed by trailing unsupported content may be silently accepted.

## 6. Expression length boundary

Enforce the `SPEC.md` maximum expression length of 256 characters at the appropriate non-HTTP domain/parser entry boundary.

The domain/parser must be safe to call directly without relying on the future HTTP layer to enforce this.

Test:

* valid expression at the boundary where practical
* expression longer than 256 characters

Use the approved error category from `SPEC.md`.

Do not create a second conflicting length rule.

## 7. Parser architecture

Use the custom bounded parser architecture approved in ADR-002.

A small recursive-descent parser or equivalent precedence-based parser is appropriate.

However, for this task, implement only enough structure to support deterministic syntactic recognition and later arithmetic extensions.

Do not build a general compiler framework.

Do not introduce:

* parser-generator tools
* visitor frameworks
* generic AST frameworks
* token interfaces with unnecessary polymorphism
* dependency-injection abstractions

An internal token representation is acceptable if it clearly simplifies the parser.

An AST is optional and should not be created unless it provides concrete value for the already approved future grammar.

Direct parsing infrastructure is preferred.

## 8. Error model

Introduce domain-level error categories required by this task only.

At minimum, syntax-related failures must be distinguishable from valid parsing.

Reuse the canonical error concepts from `SPEC.md`.

Do not introduce HTTP status codes into the domain.

Do not expose parser-internal diagnostic strings as public API messages.

Internal errors may contain useful developer context if they remain internal.

Do not implement division-by-zero, invalid-domain, or non-finite-result behavior yet except for shared error types only if concretely necessary.

## 9. Tests

Derive tests from the acceptance criteria listed in `TASK-GO-002`.

Add direct parser/domain tests covering at minimum:

### Valid foundation cases

* integer literal
* decimal literal
* leading-dot decimal
* surrounding whitespace
* parenthesized value
* nested parentheses
* complete-input success

### Invalid foundation cases

* `.`
* `1.2.3`
* `1e3`
* unsupported identifier such as `foo`
* unsupported function such as `sin(1)`
* trailing operator such as `2 +`
* malformed repeated operator case required by `SPEC.md`, such as `2 ++ 3`
* unbalanced opening parenthesis
* unbalanced closing parenthesis
* empty grouping where invalid
* unsupported trailing content
* expression longer than 256 characters

Also cover canonical `sqrt(...)` token recognition structurally if `TASK-GO-002`/`SPEC.md` requires it at this stage, but do not evaluate square root yet.

Do not write HTTP tests.

Do not test private helper implementation details.

Prefer table-driven tests where they improve clarity.

## 10. Important staging rule

This task establishes syntax/parser infrastructure, not calculator semantics.

If the parser architecture requires recognizing operators in order to validate syntax, that is allowed.

It must not yet return evaluated arithmetic results.

A structural representation, parse success result, or equivalent internal form is acceptable.

Do not sneak arithmetic evaluation into this increment merely because it makes parsing easier.

## 11. Existing bootstrap preservation

Do not regress `TASK-GO-001`.

The Go backend must still:

* build
* pass bootstrap tests
* expose `/health`
* use standard-library-only production dependencies

Do not alter the health endpoint unless a concrete regression fix is required.

## 12. Verification

Run:

`gofmt -w .`

`go test ./...`

`go vet ./...`

`go build ./...`

`go list -m all`

Report:

* number of Go tests run
* passing/failing result
* vet result
* build result
* module/dependency result

Confirm no third-party production dependency exists.

## 13. Task tracking

Update only:

* `TASK-GO-002`

Mark it Complete only if its Verification and Definition of Done from `TASKS.md` are fully satisfied.

Do not change later tasks.

Do not retroactively alter completed TASK-GO-001 except to correct a demonstrated factual error.

## 14. Prompt audit outcome

Update P008 Outcome in `docs/ai-prompts.md` with:

* TASK-GO-002 execution result
* files created/modified
* parser structure introduced
* test categories implemented
* test command/result
* vet result
* build result
* dependency result
* task status
* confirmation that no arithmetic evaluation was implemented
* confirmation that no HTTP calculator contract was implemented
* confirmation that no third-party expression library was introduced

Do not rewrite previous prompts or outcomes.

## 15. Required report

After implementation, show:

1. files created/modified
2. concise parser structure explanation
3. representative parser/domain tests
4. `go test ./...` result
5. `go vet ./...` result
6. `go build ./...` result
7. `go list -m all` result
8. `git diff --stat`
9. `git status`
10. remaining work beginning with `TASK-GO-003`
11. any deviation/conflict with SPEC, DESIGN, ADRs, or TASKS

Do not commit.
Do not push.

Stop after TASK-GO-002 and wait for human review.
```

### Outcome

Completed `TASK-GO-002`. Created `backend-go/internal/expression/parser.go` and `backend-go/internal/expression/parser_test.go`; modified only `TASKS.md` to mark TASK-GO-002 complete and `docs/ai-prompts.md` to record P008 and this outcome. The domain package exposes `Parse(string) error` and canonical domain sentinels for invalid request boundaries and invalid expression syntax. Internally it uses a rune-aware closed-allowlist lexer and a small recursive-descent recognizer following the approved additive, multiplicative, unary, power, postfix, and primary grammar levels, with complete-input consumption and a 256-Unicode-character boundary. It produces no value and performs no arithmetic. Tests cover approved integer/decimal forms, whitespace, grouping/nesting, every canonical operator structurally, `sqrt(...)` recognition, complete consumption, malformed numbers, scientific/locale/unsupported syntax, split or unsupported identifiers/functions, malformed operators, unbalanced/empty constructs, trailing content, the valid 256-character boundary, overlength input, and Unicode character counting. The full suite contains 8 top-level Go tests and 35 table-driven subtests. With the sandbox-required writable cache `GOCACHE=/tmp/fullstack-calculator-go-cache`, `go test ./...` passed for `cmd/server` and `internal/expression`, `go vet ./...` passed, and `go build ./...` passed. `go list -m all` listed only `github.com/maiandreh/fullstack-calculator-double-backend/backend-go`; no third-party production dependency or expression library was introduced. TASK-GO-002 is Complete and later tasks remain unchanged. No arithmetic evaluation, finite-result behavior, calculator HTTP contract, or `/api/calculate` endpoint was implemented, and the existing health bootstrap was not changed. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-002, or TASKS.md.

## P009

### Prompt ID

P009

### Phase

Implementation — Go Core Arithmetic

### Objective

Execute only `TASK-GO-003` from `TASKS.md`: implement the four mandatory arithmetic operations, grouping, precedence, left associativity, and division-by-zero behavior in the Go expression domain.

### Prompt

```text
Prompt ID: P009

Phase: Implementation — Go Core Arithmetic

Objective:
Execute only `TASK-GO-003` from `TASKS.md`: implement the four mandatory arithmetic operations, grouping, precedence, left associativity, and division-by-zero behavior in the Go expression domain.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and any other ADR directly referenced by `TASK-GO-003`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P009` in `docs/ai-prompts.md` before modifying application files.

Implement only:

`TASK-GO-003 — Implement basic arithmetic and precedence`

Do NOT implement:

* exponentiation
* unary plus/minus semantics beyond what is strictly required by the already-approved basic grammar foundation
* percentage
* square root
* non-finite-result enforcement beyond what is strictly needed for this task
* `/api/calculate`
* HTTP calculator request/response handling
* frontend
* Java
* Docker
* parity tooling

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the existing parser foundation conflicts with `SPEC.md`, stop and report the conflict instead of silently changing behavior.

## 1. Arithmetic behavior

Implement:

* addition
* subtraction
* multiplication
* division

Use binary64-equivalent semantics as defined by `SPEC.md`.

The evaluator must operate independently of HTTP.

## 2. Precedence

Implement conventional precedence:

* multiplication and division bind more tightly than addition and subtraction
* parentheses override default precedence

Required examples include:

`2 + 3 * 4 = 14`

`(2 + 3) * 4 = 20`

`12 / 3 + 2 = 6`

`12 / (3 + 1) = 3`

Do not introduce exponentiation precedence yet.

## 3. Associativity

Binary:

* `+`
* `-`
* `*`
* `/`

must be left-associative.

Required examples include:

`10 - 3 - 2 = 5`

`20 / 5 / 2 = 2`

Do not implement right-associative operators in this task.

## 4. Division by zero

Division by numeric zero must produce the approved domain error category.

Treat both:

`0.0`

and binary64 negative zero

as zero divisors.

Do not return infinity.

Do not convert the error to HTTP here.

The domain error must remain transport-independent.

## 5. Evaluation architecture

Extend the parser foundation created in TASK-GO-002.

Prefer direct evaluation during recursive descent if that remains clear and consistent with DESIGN/ADR-002.

Do not introduce an AST merely because arithmetic now exists unless the current implementation demonstrates a concrete need.

Do not introduce:

* strategy classes/interfaces
* operator registries
* visitor patterns
* expression libraries
* parser generators

Keep the implementation bounded and idiomatic.

## 6. Invalid syntax preservation

Do not regress syntax rejection implemented by TASK-GO-002.

Previously invalid expressions must remain invalid, including representative cases such as:

* malformed numeric literals
* unsupported identifiers/functions
* trailing operators
* unbalanced parentheses
* unsupported scientific notation
* unapproved trailing input

Arithmetic implementation must not make the grammar more permissive.

## 7. Tests

Derive tests from the acceptance criteria listed in TASK-GO-003.

Add direct domain/evaluator tests covering at minimum:

### Addition

* integers
* decimals

### Subtraction

* integers
* decimals

### Multiplication

* integers
* decimals

### Division

* exact division
* decimal result

### Precedence

* multiplication before addition
* division before subtraction/addition where applicable
* grouped expression overriding precedence

### Associativity

* chained subtraction
* chained division

### Division by zero

* positive zero
* negative zero if representable through the evaluator entry path

### Regression

* representative syntax-invalid cases from TASK-GO-002 still fail

Prefer table-driven tests when they improve readability.

Do not add HTTP tests.

## 8. Error behavior

Use the approved domain error model.

Division by zero must be distinguishable from syntax-invalid expressions.

Do not introduce public API messages here unless they already belong to the domain contract defined by SPEC/DESIGN.

Do not implement HTTP status mapping.

## 9. Existing task preservation

Do not regress TASK-GO-001 or TASK-GO-002.

The backend must still:

* build
* pass `/health` bootstrap tests
* use standard-library-only production dependencies
* preserve closed grammar behavior

## 10. Verification

Run:

`gofmt -w .`

`go test ./...`

`go vet ./...`

`go build ./...`

`go list -m all`

Report:

* number of tests run
* test result
* vet result
* build result
* dependency result

Confirm no third-party production dependency exists.

## 11. Task tracking

Update only:

`TASK-GO-003`

Mark it Complete only if its Definition of Done is fully satisfied.

Do not change TASK-GO-004 or later tasks.

Do not retroactively rewrite completed task outcomes.

## 12. Prompt audit

Update P009 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-GO-003 result
* files created/modified
* arithmetic semantics implemented
* precedence/associativity behavior implemented
* division-by-zero handling
* tests executed/results
* vet result
* build result
* dependency result
* task status
* confirmation that exponentiation, percentage, square root, REST calculator API, frontend, and Java were not implemented

Do not rewrite earlier prompts/outcomes.

## 13. Required report

After implementation show:

1. files created/modified
2. concise evaluator structure explanation
3. representative arithmetic tests
4. representative precedence/associativity tests
5. division-by-zero test/result
6. `go test ./...`
7. `go vet ./...`
8. `go build ./...`
9. `go list -m all`
10. `git diff --stat`
11. `git status`
12. remaining work beginning with TASK-GO-004
13. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-GO-003 and wait for human review.
```

### Outcome

Completed `TASK-GO-003`. Created `backend-go/internal/expression/evaluator_test.go`; modified `backend-go/internal/expression/parser.go` to add the transport-independent `Evaluate(string) (float64, error)` domain entry point and `ErrDivisionByZero`, modified `TASKS.md` to mark only TASK-GO-003 complete, and modified `docs/ai-prompts.md` to record P009 and this outcome. The existing recursive-descent parser now performs direct float64 evaluation in evaluation mode while `Parse` remains syntax-only. Addition/subtraction and multiplication/division are evaluated at their existing grammar levels, preserving multiplication/division precedence, grouping override, and left associativity. Numeric lexemes are converted with the Go standard library to binary64 values. Division checks the evaluated divisor with `right == 0`, which rejects positive zero, negative zero, and calculated zero using the distinct domain sentinel without returning infinity or introducing HTTP mapping. Tests cover integer, decimal, and explicit binary64 arithmetic; required precedence/grouping examples; chained subtraction/division and mixed multiplicative associativity; positive, negative, decimal, and calculated zero divisors; and representative TASK-GO-002 syntax regressions. The full suite contains 12 top-level Go tests and 65 table-driven subtests. With the sandbox-required writable cache `GOCACHE=/tmp/fullstack-calculator-go-cache`, `go test ./...` passed for `cmd/server` and `internal/expression`, `go vet ./...` passed, and `go build ./...` passed. `go list -m all` listed only `github.com/maiandreh/fullstack-calculator-double-backend/backend-go`; no third-party production dependency or expression library was introduced. TASK-GO-003 is Complete and TASK-GO-004 and later remain unchanged. Exponentiation, percentage, square-root evaluation, general finite-result enforcement, the REST calculator API, frontend, Java, Docker, and parity tooling were not implemented. The existing health endpoint and closed grammar behavior remain unchanged. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-002, or TASKS.md.

## P010

### Prompt ID

P010

### Phase

Implementation — Go Unary and Exponentiation Semantics

### Objective

Execute only `TASK-GO-004` from `TASKS.md`: implement unary plus/minus and exponentiation semantics in the Go expression evaluator while preserving the exact precedence and associativity defined by `SPEC.md`.

### Prompt

```text
Prompt ID: P010

Phase: Implementation — Go Unary and Exponentiation Semantics

Objective:
Execute only `TASK-GO-004` from `TASKS.md`: implement unary plus/minus and exponentiation semantics in the Go expression evaluator while preserving the exact precedence and associativity defined by `SPEC.md`.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and any other ADR directly referenced by `TASK-GO-004`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P010` in `docs/ai-prompts.md` before modifying application files.

Implement only:

`TASK-GO-004 — Implement unary signs and exponentiation`

Do NOT implement:

* percentage
* square root
* REST calculator API
* frontend
* Java
* Docker
* parity tooling

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the existing parser structure cannot satisfy the approved precedence semantics cleanly, stop and explain the conflict before changing architecture.

## 1. Unary signs

Support unary:

* `+`
* `-`

Examples:

`-2 = -2`

`+2 = 2`

`3 * -2 = -6`

Unary signs must participate according to the exact precedence rules in `SPEC.md`.

Do not treat repeated invalid syntax as valid merely because unary signs exist.

In particular, preserve any `SPEC.md` rule that classifies forms such as:

`2 ++ 3`

as invalid.

## 2. Exponentiation

Implement:

`a ^ b`

using binary64-equivalent exponentiation semantics.

Exponentiation must be right-associative.

Therefore:

`2 ^ 3 ^ 2`

must evaluate as:

`2 ^ (3 ^ 2)`

and return:

`512`

Do not implement exponentiation as left-associative.

## 3. Unary-minus precedence

This behavior is mandatory and must not be library-dependent.

Required:

`-2 ^ 2 = -4`

because it means:

`-(2 ^ 2)`

Required:

`(-2) ^ 2 = 4`

because grouping explicitly makes the base negative.

Add direct tests proving both cases.

## 4. Signed exponents

Support valid signed exponents where permitted by the grammar.

Representative behavior:

`2 ^ -2 = 0.25`

Ensure this behavior does not break the required precedence relationship between unary signs and exponentiation.

If the currently approved grammar makes any signed-exponent form ambiguous, follow `SPEC.md` exactly and report the interpretation used.

Do not change the specification.

## 5. Parser structure

Extend the current recursive-descent/equivalent precedence structure minimally.

The resulting implementation must make the precedence model visible and maintainable.

Do not introduce:

* expression libraries
* parser generators
* generic operator registries
* strategy/factory patterns
* AST/visitor infrastructure without a demonstrated need

Direct evaluation during parsing remains acceptable.

## 6. Existing semantics preservation

Do not regress:

* decimal literals
* whitespace behavior
* parentheses
* closed grammar
* complete input consumption
* addition
* subtraction
* multiplication
* division
* left associativity of basic binary operators
* arithmetic precedence
* division-by-zero behavior

Previously invalid expressions must remain invalid unless `SPEC.md` explicitly makes them valid through unary syntax.

## 7. Exponentiation domain behavior

This task implements exponentiation syntax and numeric calculation.

Do not prematurely complete the later finite-result task.

However:

* do not intentionally return an invalid parser state
* preserve language-native floating-point behavior internally
* leave comprehensive NaN/Infinity classification to `TASK-GO-006`

If exponentiation naturally exposes a mathematically unsupported real-domain case that `SPEC.md` already classifies, preserve a deterministic domain error if required, but do not broaden this task beyond what is necessary.

Report any such overlap explicitly.

## 8. Tests

Derive tests from `TASK-GO-004` acceptance criteria.

Add direct evaluator tests covering at minimum:

### Unary

* unary negative
* unary positive
* unary negative in multiplication or equivalent valid position

### Exponentiation

* simple exponentiation: `2 ^ 3 = 8`
* zero exponent where supported: `5 ^ 0 = 1`
* decimal result where appropriate

### Right associativity

* `2 ^ 3 ^ 2 = 512`

### Unary/power precedence

* `-2 ^ 2 = -4`
* `(-2) ^ 2 = 4`

### Signed exponent

* `2 ^ -2 = 0.25`

### Regression

* representative existing precedence behavior
* representative existing syntax-invalid behavior
* division-by-zero behavior remains unchanged

Prefer table-driven tests where useful.

Do not add HTTP tests.

## 9. Error behavior

Do not introduce HTTP-specific errors.

Parser/domain errors must remain transport-independent.

Do not expose implementation-specific math/parser diagnostics as future API messages.

## 10. Existing tasks

Do not regress:

* TASK-GO-001
* TASK-GO-002
* TASK-GO-003

Do not modify later task statuses.

## 11. Verification

Run:

`gofmt -w .`

`go test ./...`

`go vet ./...`

`go build ./...`

`go list -m all`

Report:

* number of tests
* test result
* vet result
* build result
* dependency result

Confirm no third-party production dependency exists.

## 12. Task tracking

Update only:

`TASK-GO-004`

Mark it Complete only when its Definition of Done is fully satisfied.

Do not change TASK-GO-005 or later tasks.

## 13. Prompt audit

Update P010 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-GO-004 result
* files created/modified
* unary semantics implemented
* exponentiation semantics implemented
* associativity behavior
* `-2 ^ 2` behavior
* `(-2) ^ 2` behavior
* signed exponent behavior
* tests/results
* vet result
* build result
* dependency result
* task status
* confirmation that percentage, square root, REST calculator API, frontend, Java, Docker, and parity tooling were not implemented

Do not rewrite previous prompts/outcomes.

## 14. Required report

After implementation show:

1. files created/modified
2. concise explanation of the parser precedence structure
3. test/result for `2 ^ 3 ^ 2`
4. test/result for `-2 ^ 2`
5. test/result for `(-2) ^ 2`
6. test/result for `2 ^ -2`
7. representative regression results
8. `go test ./...`
9. `go vet ./...`
10. `go build ./...`
11. `go list -m all`
12. `git diff --stat`
13. `git status`
14. remaining work beginning with TASK-GO-005
15. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-GO-004 and wait for human review.
```

### Outcome

Completed `TASK-GO-004`. Modified `backend-go/internal/expression/parser.go` to evaluate exponentiation with the Go standard library `math.Pow` and modified `backend-go/internal/expression/evaluator_test.go` with direct unary, exponentiation, associativity, and precedence tests; modified `TASKS.md` to mark only TASK-GO-004 complete and modified `docs/ai-prompts.md` to record P010 and this outcome. No new application file or package was created. The existing recursive-descent structure was preserved: additive calls multiplicative, multiplicative calls unary, unary applies a leading sign to the complete power result, power parses a postfix base and recursively obtains an optional exponent through unary, and grouping remains primary syntax. This implements unary plus/minus and signed multiplicative operands, makes exponentiation right-associative, permits signed exponents, and preserves the specified unary/power relationship. Direct tests passed for `2 ^ 3 ^ 2 = 512`, `-2 ^ 2 = -4`, `(-2) ^ 2 = 4`, and `2 ^ -2 = 0.25`, along with simple/zero/decimal powers and unary `-2`, `+2`, and `3 * -2`. Existing arithmetic precedence, left associativity, division-by-zero, closed grammar, and `2 ++ 3` rejection tests also passed. The full suite contains 13 top-level Go tests and 75 table-driven subtests. With the sandbox-required writable cache `GOCACHE=/tmp/fullstack-calculator-go-cache`, `go test ./...` passed for `cmd/server` and `internal/expression`, `go vet ./...` passed, and `go build ./...` passed. An auxiliary `go test -list` inventory was initially invoked from the repository root and failed because that directory is outside the Go module; rerunning it from `backend-go/` succeeded and listed all 13 tests. `go list -m all` listed only `github.com/maiandreh/fullstack-calculator-double-backend/backend-go`; no third-party production dependency or expression library was introduced. TASK-GO-004 is Complete and TASK-GO-005 and later remain unchanged. `math.Pow` currently preserves native float64 NaN/infinity behavior for unsupported real-domain and overflow cases; their comprehensive classification is deliberately deferred to the approved TASK-GO-006 rather than implemented prematurely. Percentage, square-root evaluation, the REST calculator API, frontend, Java, Docker, and parity tooling were not implemented. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-002, or TASKS.md.

## P011

### Prompt ID

P011

### Phase

Implementation — Go Percentage and Square Root

### Objective

Execute only `TASK-GO-005` from `TASKS.md`: implement postfix percentage semantics and unary square-root semantics in the Go expression evaluator, preserving the exact behavior defined by `SPEC.md`.

### Prompt

```text
Prompt ID: P011

Phase: Implementation — Go Percentage and Square Root

Objective:
Execute only `TASK-GO-005` from `TASKS.md`: implement postfix percentage semantics and unary square-root semantics in the Go expression evaluator, preserving the exact behavior defined by `SPEC.md`.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and any other ADR directly referenced by `TASK-GO-005`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P011` in `docs/ai-prompts.md` before modifying application files.

Implement only:

`TASK-GO-005 — Implement percentage and square root`

Do NOT implement:

* REST calculator API
* request/response DTOs
* HTTP error mapping
* frontend
* Java
* Docker
* parity tooling
* the complete non-finite-result quality gate from TASK-GO-006

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the current parser structure cannot satisfy the approved semantics cleanly, stop and report the conflict before changing architecture.

## 1. Postfix percentage semantics

Implement percentage as unary postfix syntax.

The exact semantics are:

`x% = x / 100`

Required examples:

`20% = 0.2`

`150 * 20% = 30`

`100 + 20% = 100.2`

Do NOT implement consumer-calculator context-sensitive percentage behavior.

Specifically:

`100 + 20%`

must NOT become `120`.

Percentage must remain compositional expression syntax.

## 2. Percentage precedence

Preserve the precedence defined by `SPEC.md`.

Postfix `%` binds to the immediately preceding valid expression/primary according to the approved grammar.

Representative examples should behave consistently with the specification.

Do not allow percentage handling to redefine arithmetic or exponentiation precedence.

If repeated postfix percentages such as:

`20%%`

are not explicitly permitted by `SPEC.md`, reject them rather than inventing semantics.

Follow `SPEC.md` exactly.

## 3. Square root

Implement canonical:

`sqrt(expression)`

Square root is unary and accepts a full expression argument.

Required:

`sqrt(81) = 9`

`sqrt(9 + 7) = 4`

Nested/compound grouping must continue to behave according to the approved grammar.

Do not introduce alternate backend syntax such as Unicode `√`.

The frontend may later present `√`, but the backend canonical expression remains `sqrt(...)`.

## 4. Square-root domain behavior

The calculator supports real numbers only.

If the evaluated square-root argument is negative, return the approved transport-independent domain error category corresponding to `INVALID_DOMAIN`.

Required invalid behavior:

`sqrt(-1)`

must fail with the approved domain category.

Do not return NaN as a successful result.

Do not implement complex numbers.

Do not map this error to HTTP yet.

## 5. Parser architecture

Extend the current bounded parser minimally.

Preserve:

* right-associative exponentiation
* unary sign precedence
* postfix percentage precedence
* grouping
* complete input consumption
* closed grammar

Do not introduce:

* expression libraries
* parser generators
* generic AST frameworks
* visitor patterns
* function registries for unsupported future functions

Square root may be recognized explicitly as the only approved function token.

Do not generalize function parsing for hypothetical future functions unless the current code structure makes a minimal generic mechanism clearly simpler.

## 6. Existing semantics preservation

Do not regress:

* decimal literals
* whitespace
* parentheses
* invalid syntax rejection
* addition
* subtraction
* multiplication
* division
* division-by-zero behavior
* unary plus/minus
* exponentiation
* exponentiation right associativity
* `-2 ^ 2 = -4`
* `(-2) ^ 2 = 4`
* signed exponent behavior

## 7. Tests

Derive tests from TASK-GO-005 acceptance criteria.

Add direct evaluator/domain tests covering at minimum:

### Percentage

* `20% = 0.2`
* `150 * 20% = 30`
* `100 + 20% = 100.2`
* percentage participating with other approved operators where useful

### Square root

* `sqrt(81) = 9`
* `sqrt(9 + 7) = 4`
* square root of a decimal where useful
* nested/grouped argument where relevant

### Invalid domain

* `sqrt(-1)` returns the approved domain error category

### Syntax

* malformed `sqrt` syntax
* unsupported function behavior remains rejected
* malformed percentage syntax remains rejected according to SPEC

### Regression

Include representative checks for:

* arithmetic precedence
* right-associative exponentiation
* unary/power precedence
* division by zero
* invalid syntax

Prefer table-driven tests where they improve readability.

Do not add HTTP tests.

## 8. Error handling

Use transport-independent domain error categories.

Square-root negative domain must be distinguishable from:

* invalid expression syntax
* division by zero

Do not expose implementation-specific `math` diagnostics as future API messages.

Do not implement HTTP status mapping.

## 9. Finite-result boundary

TASK-GO-006 remains responsible for the complete non-finite-result guarantee.

However, this task must not intentionally allow `sqrt(-1)` to escape as successful NaN.

Use the more specific invalid-domain category as required by SPEC.

Do not prematurely mark TASK-GO-006 complete.

## 10. Existing task preservation

Do not regress TASK-GO-001 through TASK-GO-004.

Do not modify later task statuses.

## 11. Verification

Run:

`gofmt -w .`

`go test ./...`

`go vet ./...`

`go build ./...`

`go list -m all`

Report:

* number of tests
* test result
* vet result
* build result
* dependency result

Confirm no third-party production dependency exists.

## 12. Task tracking

Update only:

`TASK-GO-005`

Mark it Complete only if its Definition of Done is fully satisfied.

Do not change TASK-GO-006 or later tasks.

## 13. Prompt audit

Update P011 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-GO-005 execution result
* files created/modified
* percentage semantics implemented
* `20%` result
* `150 * 20%` result
* `100 + 20%` result
* square-root semantics implemented
* compound square-root result
* negative-domain behavior
* tests/results
* vet result
* build result
* dependency result
* task status
* confirmation that REST calculator API, frontend, Java, Docker, and parity tooling were not implemented

Do not rewrite previous prompts/outcomes.

## 14. Required report

After implementation show:

1. files created/modified
2. concise parser changes
3. result/test for `20%`
4. result/test for `150 * 20%`
5. result/test for `100 + 20%`
6. result/test for `sqrt(81)`
7. result/test for `sqrt(9 + 7)`
8. invalid-domain result for `sqrt(-1)`
9. representative regression results
10. `go test ./...`
11. `go vet ./...`
12. `go build ./...`
13. `go list -m all`
14. `git diff --stat`
15. `git status`
16. remaining work beginning with TASK-GO-006
17. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-GO-005 and wait for human review.
```

### Outcome

Completed `TASK-GO-005`. Modified `backend-go/internal/expression/parser.go` to implement postfix percentage and explicit square-root evaluation, modified `backend-go/internal/expression/evaluator_test.go` with direct percentage, square-root, invalid-domain, malformed-syntax, and regression tests, modified `TASKS.md` to mark only TASK-GO-005 complete, and modified `docs/ai-prompts.md` to record P011 and this outcome. No new application file, package, dependency, DTO, or transport layer was created. At the existing postfix grammar level, every `%` divides the current value by 100, preserving precedence and compositional semantics: `20% = 0.2`, `150 * 20% = 30`, and `100 + 20% = 100.2`, not 120. Because SPEC-EXPR-004 explicitly defines `postfix ::= primary ("%")*`, repeated percentages are permitted and tested (`20%% = 0.002`). The existing explicit `sqrt` primary now evaluates its complete expression argument with `math.Sqrt`; `sqrt(81) = 9`, `sqrt(9 + 7) = 4`, decimal/grouped/nested arguments pass, and negative evaluated arguments return the distinct transport-independent `ErrInvalidDomain` rather than successful NaN. Malformed `sqrt`, unsupported functions and Unicode square root, leading/misplaced percentage, and invalid trailing percentage content remain `ErrInvalidExpression`. Existing arithmetic precedence, right-associative exponentiation, unary/power precedence, signed exponents, division-by-zero, closed grammar, and health tests also passed. The full suite contains 16 top-level Go tests and 94 table-driven subtests. With the sandbox-required writable cache `GOCACHE=/tmp/fullstack-calculator-go-cache`, `go test ./...` passed for `cmd/server` and `internal/expression`, `go vet ./...` passed, and `go build ./...` passed. `go list -m all` listed only `github.com/maiandreh/fullstack-calculator-double-backend/backend-go`; no third-party production dependency or expression library was introduced. TASK-GO-005 is Complete and TASK-GO-006 and later remain unchanged. The complete non-finite-result guarantee remains deliberately deferred to TASK-GO-006. The REST calculator API, request/response DTOs, HTTP error mapping, frontend, Java, Docker, and parity tooling were not implemented. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-002, or TASKS.md.

## P012

### Prompt ID

P012

### Phase

Implementation — Go Finite Result Enforcement

### Objective

Execute only `TASK-GO-006` from `TASKS.md`: guarantee that the Go expression domain never returns NaN or infinity as a successful result and that non-finite outcomes are classified according to `SPEC.md`.

### Prompt

```text
Prompt ID: P012

Phase: Implementation — Go Finite Result Enforcement

Objective:
Execute only `TASK-GO-006` from `TASKS.md`: guarantee that the Go expression domain never returns NaN or infinity as a successful result and that non-finite outcomes are classified according to `SPEC.md`.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and any other ADR directly referenced by `TASK-GO-006`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P012` in `docs/ai-prompts.md` before modifying application files.

Implement only:

`TASK-GO-006 — Enforce finite results`

Do NOT implement:

* `/api/calculate`
* JSON request/response handling
* HTTP error mapping
* frontend
* Java
* Docker
* parity tooling

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the current evaluator exposes a conflict with `SPEC.md`, stop and report it rather than silently changing the contract.

## 1. Finite success invariant

The evaluator must guarantee:

A successful evaluation result is always a finite binary64 value.

Successful evaluation must never return:

* NaN
* positive infinity
* negative infinity

Use idiomatic Go standard-library checks.

Do not add dependencies.

## 2. Error precedence

Preserve more specific approved domain errors.

Examples:

* division by zero → division-by-zero domain category
* square root of a negative value → invalid-domain category

These must not be replaced by a generic non-finite-result error merely because the underlying floating-point operation could produce infinity or NaN.

Only use the non-finite-result category when no more specific approved error applies.

## 3. Non-finite result cases

Add deterministic handling for expressions whose otherwise valid evaluation would result in a non-finite binary64 value.

Representative cases may include:

* overflow from exponentiation
* overflow from multiplication
* any other finite-input computation that produces infinity

Do not depend on an exact parser implementation detail for classification.

The evaluator boundary should enforce the invariant regardless of which operation produced the non-finite result.

## 4. Literal handling

If `SPEC.md` prohibits non-finite numeric literals or unsupported numeric forms, preserve that rule.

Do not add support for textual values such as:

* `NaN`
* `Inf`
* `Infinity`

Do not add scientific notation if it remains outside the approved grammar.

## 5. Architecture

Keep finite-result validation within the domain/evaluator boundary.

Do not implement this only in the future HTTP layer.

The same domain must remain safely callable by direct unit tests and by the future REST handler.

Avoid duplicating non-finite checks across many operators if one clear evaluator boundary can enforce the invariant.

Use the simplest design consistent with existing code.

## 6. Existing semantics preservation

Do not regress:

* numeric literal behavior
* whitespace
* parentheses
* closed grammar
* arithmetic
* precedence
* left associativity
* division-by-zero handling
* unary plus/minus
* exponentiation
* right associativity
* `-2 ^ 2 = -4`
* `(-2) ^ 2 = 4`
* signed exponents
* percentage
* square root
* invalid square-root domain

## 7. Tests

Derive tests from `TASK-GO-006` and relevant `SPEC.md` acceptance criteria.

Add direct evaluator tests covering at minimum:

### Finite success

* representative normal arithmetic remains finite
* representative decimal result remains finite

### Non-finite result

* exponentiation overflow producing infinity is rejected
* another representative overflow path if practical

### Specific error precedence

* division by zero still returns the specific division-by-zero category
* negative square root still returns the specific invalid-domain category

### Invalid literal/syntax preservation

* unsupported textual non-finite values remain invalid expressions
* unsupported scientific notation remains invalid if required by SPEC

### Regression

Representative existing operation and precedence cases still pass.

Do not add HTTP tests.

## 8. Error model

Use the existing transport-independent error model.

Ensure the non-finite category can later map cleanly to:

`NON_FINITE_RESULT`

without introducing HTTP concerns now.

Do not expose Go `math` internals or raw runtime messages as future API messages.

## 9. Task preservation

Do not regress TASK-GO-001 through TASK-GO-005.

Do not modify later task statuses.

## 10. Verification

Run:

`gofmt -w .`

`go test ./...`

`go vet ./...`

`go build ./...`

`go list -m all`

Report:

* number of tests
* test result
* vet result
* build result
* dependency result

Confirm no third-party production dependency exists.

## 11. Task tracking

Update only:

`TASK-GO-006`

Mark it Complete only if its Verification and Definition of Done are fully satisfied.

Do not change TASK-GO-007 or later tasks.

## 12. Prompt audit

Update P012 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-GO-006 execution result
* files created/modified
* finite-result invariant introduced
* representative overflow behavior
* error-precedence behavior
* tests/results
* vet result
* build result
* dependency result
* task status
* confirmation that REST calculator API, frontend, Java, Docker, and parity tooling were not implemented

Do not rewrite earlier prompts/outcomes.

## 13. Required report

After implementation show:

1. files created/modified
2. concise explanation of where the finite-result invariant is enforced
3. representative overflow test/result
4. division-by-zero precedence test/result
5. negative-square-root precedence test/result
6. representative regression results
7. `go test ./...`
8. `go vet ./...`
9. `go build ./...`
10. `go list -m all`
11. `git diff --stat`
12. `git status`
13. remaining work beginning with TASK-GO-007
14. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-GO-006 and wait for human review.
```

### Outcome

Completed `TASK-GO-006`. Modified `backend-go/internal/expression/parser.go` to add the transport-independent `ErrNonFiniteResult` category and enforce the finite-success invariant once at the completed evaluator boundary with standard-library `math.IsNaN` and `math.IsInf`; modified `backend-go/internal/expression/evaluator_test.go` with finite-success, overflow, specific-error-precedence, unsupported non-finite syntax, and regression tests; modified `TASKS.md` to mark only TASK-GO-006 complete; and modified `docs/ai-prompts.md` to record P012 and this outcome. No new application file, package, dependency, DTO, or transport layer was created. A successful `Evaluate` call can no longer return NaN or positive/negative infinity. Parser/domain errors occur before the boundary check, so `(10 ^ 1000) / 0` remains `ErrDivisionByZero` and `sqrt(-(10 ^ 1000))` remains `ErrInvalidDomain`; `math.Pow` NaN from an unsupported real exponent such as `(-1) ^ 0.5` is also classified specifically as `ErrInvalidDomain`. Valid exponentiation overflow (`10 ^ 1000`), multiplication overflow (`(10 ^ 200) * (10 ^ 200)`), and negative overflow return `ErrNonFiniteResult`. Textual `NaN`, `Inf`, `Infinity`, and scientific notation remain `ErrInvalidExpression`. The first test run had one failing test because its proposed 200-digit “non-finite literal” fixture is actually the finite value `1e200`; that invalid expectation was corrected into a positive test proving a maximum-length 256-digit literal remains finite, while operation-based overflow tests were retained. After correction, the full suite contains 20 top-level Go tests and 109 table-driven subtests. With the sandbox-required writable cache `GOCACHE=/tmp/fullstack-calculator-go-cache`, `gofmt -w .`, `go test ./...`, `go vet ./...`, and `go build ./...` each completed with exit code 0; tests passed for `cmd/server` and `internal/expression`. `go list -m all` listed only `github.com/maiandreh/fullstack-calculator-double-backend/backend-go`; no third-party production dependency or expression library was introduced. TASK-GO-006 is Complete and TASK-GO-007 and later remain unchanged. The REST calculator API, JSON handling, HTTP error mapping, frontend, Java, Docker, and parity tooling were not implemented. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-002, or TASKS.md.

## P013

### Prompt ID

P013

### Phase

Implementation — Go REST API

### Objective

Execute only `TASK-GO-007` from `TASKS.md`: expose the completed Go calculator domain through the shared REST contract defined in `SPEC.md`, with strict request validation, canonical error mapping, safe JSON handling, and minimal local-development CORS.

### Prompt

```text
Prompt ID: P013

Phase: Implementation — Go REST API

Objective:
Execute only `TASK-GO-007` from `TASKS.md`: expose the completed Go calculator domain through the shared REST contract defined in `SPEC.md`, with strict request validation, canonical error mapping, safe JSON handling, and minimal local-development CORS.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-001, ADR-002, and any other ADR directly referenced by `TASK-GO-007`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P013` in `docs/ai-prompts.md` before modifying application files.

Implement only:

`TASK-GO-007 — Expose Go REST contract`

Do NOT implement:

* frontend
* Java
* Docker
* cross-backend parity tooling
* later Go quality-gate-only work beyond what is necessary to verify this task

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the current domain API cannot support the approved REST contract without changing semantics, stop and report the conflict before modifying behavior.

## 1. Calculator endpoint

Implement exactly:

`POST /api/calculate`

Request content type:

`application/json`

Request body:

```json
{
  "expression": "(2 + 3) * 4"
}
```

Successful response:

HTTP `200`

```json
{
  "result": 20
}
```

Do not add:

* backend name
* expression echo
* timestamp
* metadata
* diagnostics
* tracing fields

The response must contain only the approved success contract.

## 2. Request model

Use a small transport-specific request type equivalent to:

* `expression` as a string

Do not expose transport DTOs inside the parser/domain package.

The HTTP layer must decode the request and pass only the expression value into the domain evaluator.

## 3. Strict JSON decoding

Decode the request deliberately.

Reject malformed JSON.

Reject request bodies that cannot represent the approved calculator request.

Where practical using the standard library, reject unexpected trailing JSON content rather than silently accepting multiple JSON values.

Do not attempt to repair malformed JSON.

Do not log raw untrusted request bodies unnecessarily.

## 4. INVALID_REQUEST behavior

Map the following to the canonical application error:

Code:

`INVALID_REQUEST`

Message:

`A non-empty expression of at most 256 characters is required`

HTTP:

`400`

Include at least:

* missing `expression`
* `expression: null`
* `expression` not a string
* empty string
* whitespace-only expression
* expression longer than 256 characters
* malformed JSON that prevents interpreting the request

Preserve the domain-level length invariant as defense in depth.

Do not create a conflicting transport-only length rule.

## 5. Domain error mapping

Map existing transport-independent domain errors to the exact API contract.

### Invalid expression

HTTP `400`

```json
{
  "code": "INVALID_EXPRESSION",
  "message": "Expression is invalid"
}
```

### Division by zero

HTTP `400`

```json
{
  "code": "DIVISION_BY_ZERO",
  "message": "Division by zero is not allowed"
}
```

### Invalid real-number domain

HTTP `400`

```json
{
  "code": "INVALID_DOMAIN",
  "message": "Expression is outside the supported real-number domain"
}
```

### Non-finite result

HTTP `400`

```json
{
  "code": "NON_FINITE_RESULT",
  "message": "Expression result is not finite"
}
```

Do not expose parser error text, Go error strings, math-library diagnostics, stack traces, or implementation details.

## 6. Error response structure

All application-defined calculator errors use exactly:

```json
{
  "code": "ERROR_CODE",
  "message": "Human-readable message"
}
```

Set:

`Content-Type: application/json`

for application-defined JSON responses.

Use one small helper for JSON response writing if it improves consistency.

Do not build a generic response framework.

## 7. Unexpected errors

Unexpected internal failures must not expose internal details.

Use a safe HTTP 500 response if an unexpected error genuinely occurs.

Do not create new public calculator error codes outside `SPEC.md`.

Do not leak raw error messages.

Keep logging concise and server-side only.

## 8. Method behavior

The calculator endpoint must accept POST.

Use the method-aware standard-library routing approach approved in architecture where supported by the selected Go toolchain.

Do not introduce a third-party router.

For unsupported methods, standard `net/http` behavior is acceptable unless `SPEC.md` defines something more specific.

Do not invent custom calculator error JSON for unrelated framework/server method behavior.

## 9. Content type

The endpoint consumes JSON.

Unsupported content types may return:

HTTP `415 Unsupported Media Type`

as permitted by `SPEC.md`.

Do not require a custom application error JSON body for 415.

Keep behavior deterministic.

## 10. CORS

Add only the minimal local-development CORS behavior approved by DESIGN.

Allow the expected Vite development origin.

Support the browser preflight needed for POST JSON requests.

Do not:

* allow arbitrary origins in a production-oriented way
* add credentials unless required
* add a reverse proxy
* introduce a CORS dependency

Use standard-library handling.

If configuration is introduced for allowed origin, keep it minimal and explicit.

## 11. Existing health endpoint

Preserve:

`GET /health`

Do not change its existing contract unless a concrete defect is discovered.

Keep calculator and infrastructure endpoints conceptually separate.

## 12. Transport/domain separation

The HTTP layer may:

* validate transport shape
* decode JSON
* map domain errors
* encode JSON
* handle CORS

The domain layer remains responsible for:

* expression grammar
* calculation semantics
* division-by-zero detection
* domain validity
* finite-result invariant

Do not move calculation logic into handlers.

Do not make the domain depend on `net/http`.

## 13. HTTP tests

Add focused HTTP-level tests using `net/http/httptest`.

Derive them from `AC-API-*` and applicable `AC-ERR-*`.

Cover at minimum:

### Successful request

* valid POST returns 200
* response JSON contains `result`
* result is correct for a representative compound expression

### Request validation

* missing expression
* null expression
* non-string expression
* empty expression
* whitespace-only expression
* expression > 256 characters
* malformed JSON

### Domain error mapping

* invalid grammar
* division by zero
* negative square root
* non-finite result

### HTTP behavior

* content type on calculator JSON responses
* unsupported media type returns 415 where implemented
* representative CORS preflight
* allowed development origin behavior

Do not duplicate the entire domain expression test matrix through HTTP.

## 14. JSON number behavior

Successful results must serialize as finite JSON numbers.

Do not stringify numeric results.

Do not round results merely for presentation.

Do not change the numeric parity semantics defined in SPEC.

## 15. Server wiring

Wire the calculator handler into the existing explicit `http.ServeMux`/server structure.

Keep main/server construction clear and testable.

If necessary, extract a small router/handler construction function so HTTP tests do not need to start a real listening socket.

Do not introduce dependency injection frameworks.

## 16. Existing behavior preservation

Do not regress TASK-GO-001 through TASK-GO-006.

All existing:

* parser tests
* arithmetic tests
* exponentiation tests
* percentage tests
* square-root tests
* finite-result tests
* health tests

must continue passing.

## 17. Verification

Run:

`gofmt -w .`

`go test ./...`

`go vet ./...`

`go build ./...`

`go list -m all`

Then start the server and manually smoke-test at minimum:

### Success

```bash
curl -i \
  -X POST http://localhost:8080/api/calculate \
  -H 'Content-Type: application/json' \
  -d '{"expression":"(2 + 3) * 4"}'
```

Expected observable behavior:

* HTTP 200
* JSON result 20

### Division by zero

```bash
curl -i \
  -X POST http://localhost:8080/api/calculate \
  -H 'Content-Type: application/json' \
  -d '{"expression":"1 / 0"}'
```

Expected:

* HTTP 400
* code `DIVISION_BY_ZERO`
* canonical message

### Invalid syntax

```bash
curl -i \
  -X POST http://localhost:8080/api/calculate \
  -H 'Content-Type: application/json' \
  -d '{"expression":"2 +"}'
```

Expected:

* HTTP 400
* code `INVALID_EXPRESSION`

Stop the server after smoke testing.

## 18. Task tracking

Update only:

`TASK-GO-007`

Mark it Complete only if its full Definition of Done is satisfied.

Do not mark TASK-GO-008 complete.

Do not modify later task statuses.

## 19. Prompt audit

Update P013 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-GO-007 execution result
* files created/modified
* endpoint implemented
* request validation implemented
* domain error mappings implemented
* CORS behavior implemented
* HTTP tests and results
* total Go test result
* vet result
* build result
* dependency result
* manual smoke-test results
* task status
* confirmation that frontend, Java, Docker, and parity tooling were not implemented
* any deviation from approved artifacts

Do not rewrite prior prompts/outcomes.

## 20. Required report

After implementation show:

1. files created/modified
2. concise HTTP architecture explanation
3. request/response DTO definitions
4. domain-error mapping structure
5. representative HTTP tests
6. successful curl result
7. division-by-zero curl result
8. invalid-expression curl result
9. `go test ./...`
10. `go vet ./...`
11. `go build ./...`
12. `go list -m all`
13. `git diff --stat`
14. `git status`
15. remaining work beginning with TASK-GO-008
16. any deviation/conflict with SPEC, DESIGN, ADRs, or TASKS

Do not commit.
Do not push.

Stop after TASK-GO-007 and wait for human review.
```

### Outcome

Completed `TASK-GO-007`. Created `backend-go/cmd/server/calculator.go` for the transport-only calculator request, success response, and error response DTOs; strict single-value JSON decoding with unknown-field rejection; `application/json` media-type validation; canonical domain-error mapping; JSON response writing; and an explicit local-development CORS allowlist for `http://localhost:5173` with POST/Content-Type preflight support. Created `backend-go/cmd/server/calculator_test.go` with focused `httptest` coverage for the exact success envelope, numeric result, missing/null/non-string/empty/whitespace/overlength expressions, malformed and trailing JSON, unknown fields, every canonical domain error, unsupported media type, allowed/disallowed origins, and preflight behavior. Modified `backend-go/cmd/server/main.go` to register method-aware `POST /api/calculate` and `OPTIONS /api/calculate` routes while preserving `GET /health`; modified only TASK-GO-007 in `TASKS.md` to Complete; and recorded P013 and this outcome in `docs/ai-prompts.md`. The handler passes only the decoded expression string to the existing transport-independent evaluator; no calculation semantics moved into HTTP and the domain package was unchanged. All 148 Go test cases/subtests passed. With `GOCACHE=/tmp/fullstack-calculator-go-cache`, `gofmt -w .`, `go test ./...`, `go vet ./...`, and `go build ./...` completed successfully with exit code 0. `go list -m all` listed only `github.com/maiandreh/fullstack-calculator-double-backend/backend-go`, confirming no third-party production dependency. Manual smoke tests against the running port-8080 service returned HTTP 200 with `{"result":20}` for `(2 + 3) * 4`, HTTP 400 with the canonical `DIVISION_BY_ZERO` response for `1 / 0`, and HTTP 400 with the canonical `INVALID_EXPRESSION` response for `2 +`; the service was stopped afterward. TASK-GO-007 is Complete and TASK-GO-008 and later remain unchanged. Frontend, Java, Docker, cross-backend parity tooling, and later Go quality-gate work were not implemented. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-001, ADR-002, or TASKS.md.

## P014

### Prompt ID

P014

### Phase

Verification — Go Backend Quality Gate

### Objective

Execute only `TASK-GO-008` from `TASKS.md`: perform a complete acceptance, quality, coverage, build, and smoke verification of the Go backend and fix only demonstrated gaps within the already approved specification.

### Prompt

```text
Prompt ID: P014

Phase: Verification — Go Backend Quality Gate

Objective:
Execute only `TASK-GO-008` from `TASKS.md`: perform a complete acceptance, quality, coverage, build, and smoke verification of the Go backend and fix only demonstrated gaps within the already approved specification.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-001 and ADR-002.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P014` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-GO-008 — Complete Go quality gate`

Do NOT:

* add new calculator features
* expand expression syntax
* modify the approved API contract
* implement frontend
* implement Java
* implement Docker
* implement parity tooling
* alter approved requirements, scope, specification, design, or ADRs

If verification exposes a conflict with an approved artifact, stop and report it rather than silently redefining behavior.

## 1. Acceptance review

Review all Go-relevant acceptance criteria in `SPEC.md`.

At minimum, verify coverage for:

* all `AC-EXPR-*`
* all `AC-API-*`
* all `AC-ERR-*`

Create a compact checklist in the P014 report showing each acceptance criterion or grouped criterion range and the concrete verification path that proves it.

Do not claim acceptance coverage without a corresponding test or explicit smoke verification.

## 2. Gap policy

If a committed acceptance criterion is not currently covered:

* add the smallest necessary test and/or implementation correction
* do not broaden scope
* do not refactor unrelated code
* do not introduce new dependencies unless explicitly approved

If behavior already satisfies the criterion but lacks a test, prefer adding the missing test.

If implementation behavior contradicts `SPEC.md`, fix the implementation.

Do not change `SPEC.md` to accommodate existing code.

## 3. Formatting and static verification

Run:

`gofmt -w .`

Then verify no formatting drift remains.

Run:

`go vet ./...`

Any vet failure must be resolved before this task is complete.

Do not suppress valid vet findings merely to pass the gate.

## 4. Full test suite

Run the complete Go test suite.

Use:

`go test ./...`

Also run a verbose form if useful for reporting:

`go test -v ./...`

Report:

* packages tested
* total tests where practical
* failures
* skipped tests
* final result

No failing committed-behavior test may remain.

## 5. Coverage

Generate Go coverage evidence using built-in tooling.

Use an appropriate command such as:

`go test -coverprofile=coverage.out ./...`

Then inspect:

`go tool cover -func=coverage.out`

Report:

* total statement coverage
* relevant package-level coverage where useful
* notable uncovered areas

Do not create an arbitrary coverage threshold.

Coverage is supporting evidence, not the objective.

The generated coverage artifact must remain ignored by Git.

If coverage output appears in `git status`, fix repository hygiene rather than commit the generated report.

## 6. Build verification

Run:

`go build ./...`

The backend must build successfully with the approved Go toolchain.

Do not leave generated binaries tracked.

## 7. Dependency verification

Run:

`go list -m all`

Confirm the production dependency graph still uses only the Go standard library, aside from the module itself.

If any unexpected module appears, investigate and report it.

Do not add dependencies during this gate unless a concrete approved requirement proves they are necessary.

## 8. Live smoke verification

Start the Go backend on the default local port.

Verify at minimum:

### Health

`GET /health`

Expected:

* HTTP 200
* expected health JSON

### Basic calculation

`POST /api/calculate`

Request:

```json
{
  "expression": "2 + 3 * 4"
}
```

Expected:

* HTTP 200
* result `14`

### Advanced calculation

Use at least one committed advanced expression, for example:

```json
{
  "expression": "sqrt(81) + 150 * 20%"
}
```

Verify the result according to `SPEC.md`.

### Exponentiation semantics

Verify:

`2 ^ 3 ^ 2`

returns:

`512`

### Unary/exponent precedence

Verify:

`-2 ^ 2`

returns:

`-4`

and:

`(-2) ^ 2`

returns:

`4`

### Division by zero

Verify canonical `DIVISION_BY_ZERO`.

### Invalid grammar

Verify canonical `INVALID_EXPRESSION`.

### Invalid domain

Verify canonical `INVALID_DOMAIN`.

### Non-finite result

Verify canonical `NON_FINITE_RESULT` using a deterministic expression already supported by tests.

Stop the server after smoke verification.

## 9. HTTP contract review

Review the live/httptest behavior for:

* POST-only calculator contract
* JSON request decoding
* result schema
* error schema
* canonical error codes/messages
* HTTP statuses
* unsupported media type status
* CORS needed by the future Vite frontend
* safe unexpected-error behavior

Do not over-test framework/server behaviors outside the approved calculator contract.

## 10. Domain/transport separation review

Inspect the Go implementation and confirm:

* parser/evaluator has no dependency on `net/http`
* HTTP handlers do not implement calculator semantics
* domain errors are mapped at the transport boundary
* no raw parser/internal diagnostics leak into API responses
* `/health` remains infrastructure-only

If this separation has regressed, make only the smallest correction needed.

## 11. Architecture discipline review

Confirm the Go implementation still satisfies approved architecture:

* standard-library HTTP stack
* no third-party expression evaluator
* no parser generator
* no speculative service/repository layers
* no unnecessary interfaces
* no frontend calculation engine
* no unrelated infrastructure

Report any deviation.

## 12. Repository hygiene

After all verification commands, inspect:

`git status --short`

Confirm generated outputs such as:

* coverage files
* binaries
* temporary test artifacts

are ignored/untracked appropriately.

Do not commit generated verification output.

If `.gitignore` needs a concrete correction for a generated Go artifact, make the smallest necessary change and explain it.

## 13. TASK-GO-008 status

Mark `TASK-GO-008` Complete only if:

* all Go-relevant acceptance criteria have a verification path
* full test suite passes
* gofmt is clean
* `go vet` passes
* build passes
* coverage evidence is generated
* live smoke tests pass
* no known committed Go/backend acceptance gap remains

Do not modify frontend, Java, parity, Docker, documentation, or final-task statuses.

## 14. Prompt audit outcome

Update the P014 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-GO-008 status
* files modified, if any
* acceptance gaps found/fixed
* test commands/results
* coverage command and total result
* vet result
* build result
* dependency result
* smoke-test results
* architecture/separation review result
* repository-hygiene result
* confirmation that no new feature was introduced
* confirmation that no frontend, Java, Docker, or parity implementation was started

Do not rewrite previous prompts or outcomes.

## 15. Required final report

Report:

1. acceptance-criteria coverage summary
2. files modified during the quality gate
3. gaps found and fixes made
4. `gofmt` result
5. `go test ./...` result
6. coverage result
7. `go vet ./...` result
8. `go build ./...` result
9. `go list -m all` result
10. health smoke result
11. basic-expression smoke result
12. advanced-expression smoke result
13. exponentiation smoke result
14. unary/exponent precedence smoke result
15. division-by-zero smoke result
16. invalid-expression smoke result
17. invalid-domain smoke result
18. non-finite-result smoke result
19. domain/transport separation review
20. dependency/architecture review
21. `git diff --stat`
22. `git status`
23. TASK-GO-008 final status
24. remaining work beginning with TASK-FE-001
25. any unresolved deviation/conflict

Do not commit.
Do not push.

Stop after TASK-GO-008 and wait for human review.
```

### Outcome

Completed `TASK-GO-008`. The acceptance review found no implementation defect or specification conflict, but found four verification-evidence gaps: the exact AC-EXPR-006 `2 ^ 8` fixture, the exact AC-EXPR-019 `8 / 4 / 2` fixture, HTTP-level AC-EXPR-017 canonical-versus-presentation-token behavior, and HTTP-level AC-ERR-001/004/005 cases for negative zero, `sin(1)`, and `1e3`. Added only those focused tests in `backend-go/internal/expression/evaluator_test.go` and `backend-go/cmd/server/calculator_test.go`; no production code or behavior changed. Modified `TASKS.md` to mark only TASK-GO-008 Complete and recorded P014 and this outcome in `docs/ai-prompts.md`.

Acceptance evidence checklist:

- AC-EXPR-001–005: `TestEvaluateBasicArithmetic` covers the four basic operations and binary64 decimal addition.
- AC-EXPR-006–007: `TestEvaluateUnaryAndExponentiation` covers `2 ^ 8 = 256` and right-associative `2 ^ 3 ^ 2 = 512`.
- AC-EXPR-008–011 and 016: `TestEvaluatePercentageAndSquareRoot` covers both square-root fixtures and all specified percentage results.
- AC-EXPR-012–015 and 019: `TestEvaluatePrecedenceGroupingAndAssociativity` and `TestEvaluateUnaryAndExponentiation` cover precedence, grouping, signed multiplication, both unary/power fixtures, and exact left-associative `8 / 4 / 2 = 1`.
- AC-EXPR-017: `TestCalculateEnforcesCanonicalTransportTokens` proves HTTP acceptance of `2 * 3 = 6` and rejection of `2 × 3`.
- AC-EXPR-018: `TestParseAcceptsApprovedSyntaxFoundation` and `TestParseRejectsInvalidSyntax` cover every listed valid and invalid literal.
- AC-EXPR-020: `TestParseEnforcesSubmittedExpressionBoundary` proves a syntactically valid 256-character expression is accepted.
- AC-API-001–002: `TestCalculateSuccess` proves POST JSON, HTTP 200, exact one-member response, and numeric result 20.
- AC-API-003: `TestCalculateRejectsUnsupportedMediaType` proves HTTP 415 for `text/plain`.
- AC-ERR-001–005 and 011: `TestCalculateMapsDomainErrors` proves positive/negative-zero division, negative square root, trailing syntax, unsupported function, scientific notation, and non-finite overflow with exact HTTP 400 codes/messages.
- AC-ERR-006–010: `TestCalculateRejectsInvalidRequests` proves whitespace, missing/null/non-string, 257-character, and malformed JSON requests with the exact canonical response.
- AC-ERR-012: `assertAPIError` verifies the string `code`/`message` envelope and application/json content type across every application-defined error category.

With `GOCACHE=/tmp/fullstack-calculator-go-cache`, `gofmt -w .` completed and `gofmt -d .` showed no formatting drift. `go test ./...` and `go test -count=1 -v ./...` passed for `cmd/server` and `internal/expression`; 154 test cases/subtests passed, none failed, and none were skipped. `go test -count=1 -coverprofile=coverage.out ./...` passed with package statement coverage of 80.3% for `cmd/server` and 98.3% for `internal/expression`; `go tool cover -func=coverage.out` reported 93.4% total statement coverage. Notable uncovered code is primarily the real listening `main` function and defensive response-write/unexpected-error branches; no arbitrary threshold was imposed. `go vet ./...` and `go build ./...` passed. `go list -m all` listed only `github.com/maiandreh/fullstack-calculator-double-backend/backend-go`, confirming standard-library-only production dependencies.

Live port-8080 smoke verification returned HTTP 200 `{"status":"ok"}` for health; HTTP 200 result 14 for `2 + 3 * 4`; HTTP 200 result 39 for `sqrt(81) + 150 * 20%`; HTTP 200 result 512 for `2 ^ 3 ^ 2`; HTTP 200 results -4 and 4 for `-2 ^ 2` and `(-2) ^ 2`; and exact HTTP 400 canonical responses for `DIVISION_BY_ZERO`, `INVALID_EXPRESSION`, `INVALID_DOMAIN`, and `NON_FINITE_RESULT`. The server was stopped afterward.

Architecture and separation review confirmed the expression package has no `net/http` dependency; handlers delegate calculation to the domain and map sentinel errors only at the transport boundary; responses expose only canonical messages; `/health` remains infrastructure-only; routing, JSON, CORS, and server behavior use the Go standard library; and there is no expression library, parser generator, speculative service/repository/interface layer, frontend calculation engine, or unrelated infrastructure. `coverage.out` is covered by the existing root `.gitignore` and did not appear in Git status; no binary or temporary test artifact was left visible. No new feature was introduced, and no frontend, Java, Docker, or parity implementation was started. TASK-GO-008 is Complete; later tasks remain unchanged. There is no unresolved deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-001, ADR-002, or TASKS.md.

## P015

### Prompt ID

P015

### Phase

Implementation — Frontend Bootstrap

### Objective

Execute only `TASK-FE-001` from `TASKS.md`: initialize the frontend using the architecture already approved for the project, producing a minimal buildable and testable React application without implementing calculator behavior.

### Prompt

```text
Prompt ID: P015

Phase: Implementation — Frontend Bootstrap

Objective:
Execute only `TASK-FE-001` from `TASKS.md`: initialize the frontend using the architecture already approved for the project, producing a minimal buildable and testable React application without implementing calculator behavior.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-004 and any other ADR directly referenced by `TASK-FE-001`.
8. Read `docs/ai-prompts.md`.
9. Inspect the installed environment:
   - `node --version`
   - `npm --version`
10. Record this exact prompt as `P015` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-FE-001 — Bootstrap frontend`

Do NOT implement:

- calculator keypad
- calculator expression behavior
- keyboard calculator interaction
- mathematical evaluation
- API calls
- backend switching behavior
- Java backend
- Docker
- parity tooling

Do NOT modify:

- REQUIREMENTS.md
- SCOPE.md
- SPEC.md
- DESIGN.md
- accepted ADRs

If the installed Node/npm environment is incompatible with the selected stable frontend toolchain, stop and report the incompatibility rather than installing system software or silently changing architecture.

# 1. Initialize frontend

Create:

`frontend/`

Use:

- React
- TypeScript
- Vite

Select current stable dependency versions compatible with the installed Node.js version.

Use npm as the package manager.

Do not add application dependencies beyond those justified by the approved frontend architecture.

# 2. Testing stack

Configure the approved lightweight testing stack:

- Vitest
- React Testing Library
- DOM testing environment required by Vitest
- user-event if useful for upcoming interaction tests

Do not introduce:

- Jest
- Cypress
- Playwright
- Redux
- Zustand
- Axios
- React Router
- UI frameworks
- CSS frameworks
- form libraries

unless an approved artifact explicitly requires them.

# 3. Minimal application

Keep the application intentionally minimal.

The application must render successfully, but do not build calculator functionality yet.

A small application shell identifying the project is sufficient.

Remove unnecessary Vite demonstration content such as:

- counter examples
- demo logos
- instructional boilerplate

Do not replace that boilerplate with speculative calculator components.

# 4. Project structure

Establish only directories/files that have an immediate responsibility.

Do not pre-create the complete future component tree with empty files.

At this stage, a small structure centered around:

- application entry point
- App component
- test setup
- minimal styling

is sufficient.

Future calculator components will be introduced by later tasks.

# 5. Backend configuration

Establish the minimal configuration mechanism approved by DESIGN for future backend URLs.

Use Vite environment variables.

Provide defaults appropriate for native local development:

Go backend:
`http://localhost:8080`

Java backend:
`http://localhost:8081`

Do not implement backend selection yet.

Do not make API requests yet.

Do not scatter backend URLs through UI components.

If an example environment file is appropriate, it must contain no secrets.

# 6. TypeScript

Use strict TypeScript configuration appropriate to the generated Vite project.

Do not weaken type checking to make the bootstrap pass.

Do not introduce `any` unnecessarily.

# 7. Linting

Use the lightweight lint configuration supplied/recommended by the selected Vite React TypeScript setup if present.

Do not add overlapping formatting/linting systems.

Do not add Prettier merely for tooling volume.

# 8. Bootstrap tests

Add only tests appropriate to behavior that exists in this increment.

At minimum verify that the application shell renders.

Do not create calculator tests before calculator behavior exists.

The bootstrap test must test observable rendering, not implementation details.

# 9. Scripts

Ensure package scripts provide clear commands for:

- development
- build
- test
- coverage
- lint if linting is configured

Do not create repository-root orchestration scripts yet unless TASK-FE-001 explicitly requires them.

# 10. Coverage configuration

Configure Vitest coverage so the later frontend quality gate can generate a report.

Do not impose an arbitrary percentage threshold.

Generated coverage output must not be committed.

Ensure repository ignore rules cover generated frontend artifacts such as:

- node_modules
- dist
- coverage

Modify the root `.gitignore` only if necessary.

Do not create redundant nested ignore rules without a reason.

# 11. Dependency review

After initialization inspect:

`npm ls --depth=0`

Report direct dependencies and explain their purpose by category:

- runtime
- build
- test
- lint

Identify any scaffold dependency that is unnecessary and remove it where doing so improves the assessment project without destabilizing the standard setup.

Do not optimize dependencies merely for minimum count.

# 12. Verification

From `frontend/`, run:

`npm test -- --run`

`npm run build`

`npm run lint`

`npm run coverage`

If script syntax differs because of the selected stable tool versions, use the correct equivalent and report it.

All commands must succeed before TASK-FE-001 can be marked Complete.

Inspect:

`git status --short`

Generated:

- node_modules/
- dist/
- coverage/

must not appear as files to commit.

# 13. Existing Go preservation

Do not modify `backend-go/`.

The completed Go reference backend is outside this task.

Do not run automated refactors across the repository.

# 14. Task tracking

Update only:

`TASK-FE-001`

Mark it Complete only if its complete Definition of Done in TASKS.md is satisfied.

Do not change TASK-FE-002 or any later task.

# 15. Prompt audit

Update P015 Outcome in `docs/ai-prompts.md` with factual evidence including:

- TASK-FE-001 result
- Node version
- npm version
- React/Vite/TypeScript versions selected
- files/directories created or modified
- direct dependency summary
- test result
- build result
- lint result
- coverage command/result
- task status
- confirmation that no calculator behavior was implemented
- confirmation that no API communication was implemented
- confirmation that backend-go was not modified

Do not rewrite previous prompts or outcomes.

# 16. Required report

After implementation report:

1. Node and npm versions
2. frontend dependency versions
3. files/directories created
4. resulting frontend structure
5. direct dependency summary
6. test result
7. build result
8. lint result
9. coverage result
10. repository-ignore verification
11. `git diff --stat`
12. `git status`
13. TASK-FE-001 status
14. remaining work beginning with TASK-FE-002
15. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-FE-001 and wait for human review.
```

### Outcome

Completed `TASK-FE-001`. The installed environment is Node.js `v22.23.2` with npm `10.9.8`, which satisfies the selected stable toolchain engine ranges. Created `frontend/` as a minimal React 19.2.8, React DOM 19.2.8, TypeScript 6.0.3, and Vite 8.2.1 application. TypeScript 6.0.3 was selected as the newest stable TypeScript release compatible with the current `typescript-eslint` 8.67.0 peer range (`>=4.8.4 <6.1.0`), rather than incompatible TypeScript 7.0.2. Created `package.json` and `package-lock.json`; strict application and Node TypeScript configurations; Vite/Vitest configuration; the Vite HTML entry; the lightweight Vite-style ESLint flat configuration; `.env.example`; a centralized `src/config.ts` using `VITE_GO_BACKEND_URL` and `VITE_JAVA_BACKEND_URL` with native-development defaults `http://localhost:8080` and `http://localhost:8081`; the React entry point; a minimal `App` shell and stylesheet; Vite ambient declarations; Vitest setup; and one observable shell-rendering test. Modified only TASK-FE-001 in `TASKS.md` to Complete and recorded P015 and this outcome in `docs/ai-prompts.md`.

Runtime dependencies are only `react` and `react-dom`. Build dependencies are TypeScript, Vite, `@vitejs/plugin-react`, and React/Node type declarations. Test dependencies are Vitest, `@vitest/coverage-v8`, jsdom, React Testing Library, jest-dom matchers, and user-event for the approved upcoming interaction-test stack. Lint dependencies are ESLint, `@eslint/js`, `typescript-eslint`, React Hooks/Refresh plugins, and browser globals. `npm install` added 250 packages, audited 251 packages, and reported zero vulnerabilities. `npm ls --depth=0` completed successfully with all direct dependencies resolved at their pinned versions.

The first verification run passed tests, lint, and coverage but `npm run build` exposed two standard bootstrap configuration omissions: missing Vite ambient types for CSS/import-meta environment declarations and an explicit `.tsx` extension rejected by the strict application compiler settings. Added `src/vite-env.d.ts` with the standard `vite/client` reference and changed the application import to its extensionless form. No type checking was weakened. After correction, `npm test -- --run` passed one test in one test file; `npm run build` passed TypeScript project compilation and Vite production build; `npm run lint` passed; and `npm run coverage` passed with 100% of the single bootstrap statement and function covered. No coverage threshold was introduced. The existing root `.gitignore` already ignores `node_modules/`, `dist/`, and `coverage/`; all three generated directories were confirmed ignored and are absent from normal Git status, so `.gitignore` was not modified.

The application renders only the project-identifying shell `Full-stack Calculator` and `Frontend foundation ready.` No keypad, expression behavior, keyboard calculator interaction, mathematical evaluation, API request, backend-switching behavior, Java backend, Docker, or parity tooling was implemented. `backend-go/` was not modified. TASK-FE-001 is Complete and TASK-FE-002 and all later tasks remain unchanged. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-004, or TASKS.md.

## P016

### Prompt ID

P016

### Phase

Implementation — Frontend Calculator Interaction

### Objective

Execute only `TASK-FE-002` from `TASKS.md`: implement the calculator display, expression state, and complete keypad interaction without performing mathematical evaluation or calling any backend.

### Prompt

```text
Prompt ID: P016

Phase: Implementation — Frontend Calculator Interaction

Objective:
Execute only `TASK-FE-002` from `TASKS.md`: implement the calculator display, expression state, and complete keypad interaction without performing mathematical evaluation or calling any backend.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-004 and any other ADR directly referenced by `TASK-FE-002`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P016` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-FE-002 — Implement display, expression state, and keypad`

Do NOT implement:

* REST API calls
* backend selection behavior beyond any already-existing inert/bootstrap representation
* result calculation
* expression evaluation in JavaScript
* keyboard handling
* responsive/mobile refinements assigned to TASK-FE-003
* Java backend
* Docker
* cross-backend parity tooling

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If current frontend bootstrap structure conflicts with approved DESIGN, stop and report the conflict instead of silently changing architecture.

## 1. Calculator UI model

Replace the bootstrap-only application shell with the approved calculator interaction model.

The application must visually behave like a familiar calculator rather than separate operand fields.

The calculator must contain:

* expression display
* result display area
* error display area
* keypad
* calculator controls

Do not implement calculation results yet.

The result area may remain empty until backend integration is implemented.

## 2. Component boundaries

Use the lightweight component decomposition approved by DESIGN.

Prefer responsibilities conceptually equivalent to:

* `Calculator` — owns/coordin­ates calculator UI state
* `Display` — renders expression/result/error state
* `Keypad` — emits calculator input actions

Do not create components merely for individual buttons unless there is a concrete maintainability benefit.

Do not introduce:

* global state
* React Context
* Redux
* custom state-management frameworks
* service interfaces
* frontend domain evaluator

Local React state is sufficient.

## 3. Expression state

The frontend must maintain the calculator expression being constructed.

The expression state represents canonical backend syntax.

Canonical tokens include:

* digits `0-9`
* `.`
* `+`
* `-`
* `*`
* `/`
* `^`
* `%`
* `(`
* `)`
* `sqrt(` and matching `)`

The frontend may display user-friendly symbols:

* `×`
* `÷`
* `√`
* `xʸ`

but the underlying expression state must remain compatible with the canonical syntax defined in `SPEC.md`.

Do not evaluate the expression locally.

## 4. Keypad controls

Provide controls for all committed calculator input capabilities:

### Numeric

* `0`
* `1`
* `2`
* `3`
* `4`
* `5`
* `6`
* `7`
* `8`
* `9`
* decimal point

### Basic operators

* addition
* subtraction
* multiplication
* division

### Advanced operations

* exponentiation
* square root
* percentage

### Grouping

* opening parenthesis
* closing parenthesis

### Editing/action

* clear/reset
* equals/evaluate
* backspace if included in the approved UI interaction

The equals control must exist visually but must not perform calculation yet.

It may emit an evaluation action/event that will be connected in TASK-FE-004.

Do not fake a result.

## 5. Display behavior

The display must:

* show the current expression
* show a reasonable empty/default state when no expression exists
* support displaying the latest result when that state exists in later tasks
* support displaying an error state when that state exists in later tasks

Do not calculate or synthesize result/error behavior now.

Keep the component ready for later states without speculative complexity.

## 6. Input shaping

This task may perform presentation/input shaping only.

Allowed examples:

* clicking `×` appends canonical `*`
* clicking `÷` appends canonical `/`
* clicking `xʸ` appends canonical `^`
* clicking `√` appends canonical `sqrt(`
* clicking `%` appends `%`
* clicking `(` or `)` appends that token
* digits append digits
* decimal appends `.`

Do not attempt to fully validate mathematical correctness in the frontend.

The backend remains authoritative for grammar and evaluation.

Do not silently prevent every potentially invalid sequence; the frontend is not the parser.

Minor usability guards are acceptable only when they do not duplicate backend grammar semantics.

## 7. Clear behavior

Clear/reset must:

* clear the expression
* clear result state
* clear error state

Even if result/error are not yet produced by this task, design the state transition consistently.

## 8. Backspace

If backspace is included as a visible control in the approved UI:

* remove the most recently entered expression unit
* do not calculate
* clear stale result/error state if necessary

For canonical multi-character UI tokens such as `sqrt(`, prefer UX behavior that treats a single square-root keypad action coherently rather than leaving awkward partial text when practical.

Keep the implementation simple.

## 9. Equals behavior

The equals button must be present.

At this stage:

* it must not evaluate locally
* it must not call the API yet
* it may invoke a placeholder callback/action boundary needed by the future API integration
* avoid fake loading or fake success behavior

Do not introduce networking in this task.

## 10. Accessibility

Use semantic HTML controls.

Buttons must have accessible labels that make their purpose clear.

Do not rely solely on symbols where an accessible label is needed, especially for:

* square root
* exponentiation
* multiplication
* division
* clear
* equals
* backspace

The expression/result region should be understandable to assistive technology.

Do not over-engineer ARIA when native semantics are sufficient.

## 11. Styling

Create a clean calculator-like layout.

Priorities:

* recognizable calculator interface
* strong visual hierarchy for display
* clear keypad grouping
* easy-to-hit buttons
* readable expression
* obvious equals/clear controls

Do not spend this phase on elaborate visual polish.

Responsive/mobile-specific refinements belong primarily to TASK-FE-003, although the base CSS must not make later responsiveness difficult.

Do not add a CSS framework.

## 12. Tests

Derive tests from TASK-FE-002 acceptance criteria.

Use React Testing Library and user-event.

Cover at minimum:

### Keypad construction

* digit entry
* decimal entry
* addition
* subtraction
* multiplication presentation → canonical `*`
* division presentation → canonical `/`
* exponentiation presentation → canonical `^`
* percentage
* parentheses
* square root presentation → canonical `sqrt(`

### Display

* current expression is visible
* expression updates in entered order

### Clear

* clear removes the current expression
* clear resets result/error state where represented

### Backspace

* removes the most recent user-entered expression unit if implemented

### No evaluation

* pressing equals does not perform local arithmetic
* no network request is made in this task

Tests must verify observable behavior rather than component internals.

Do not use snapshots as the primary test strategy.

## 13. No frontend calculator engine

Explicitly verify during review that no code:

* parses the expression mathematically
* computes arithmetic results
* reproduces backend precedence rules
* evaluates percentages
* evaluates square root
* evaluates exponentiation

The frontend constructs expression syntax only.

If any utility begins resembling an evaluator, remove or simplify it.

## 14. Existing bootstrap preservation

Do not regress TASK-FE-001.

The frontend must continue to:

* build
* test
* lint
* generate coverage
* use approved dependencies only

Do not modify `backend-go/`.

## 15. Verification

Run from `frontend/`:

`npm test -- --run`

`npm run build`

`npm run lint`

`npm run coverage`

Report:

* total tests
* failures
* build result
* lint result
* coverage summary

Inspect:

`npm ls --depth=0`

Confirm no unapproved dependency was introduced.

## 16. Task tracking

Update only:

`TASK-FE-002`

Mark it Complete only if its full Definition of Done is satisfied.

Do not modify TASK-FE-003 or later task statuses.

## 17. Prompt audit outcome

Update P016 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-FE-002 result
* files created/modified
* component structure introduced
* expression-state approach
* keypad capabilities implemented
* display behavior
* clear/backspace behavior
* tests/results
* build result
* lint result
* coverage result
* dependency result
* task status
* confirmation that no mathematical evaluation was implemented
* confirmation that no API communication was implemented
* confirmation that backend-go was not modified

Do not rewrite previous prompts/outcomes.

## 18. Required report

After implementation report:

1. files created/modified
2. resulting component structure
3. concise expression-state explanation
4. mapping between presentation buttons and canonical expression tokens
5. representative keypad tests
6. clear/backspace tests
7. evidence that equals does not evaluate locally
8. test result
9. build result
10. lint result
11. coverage result
12. dependency summary
13. `git diff --stat`
14. `git status`
15. TASK-FE-002 status
16. remaining work beginning with TASK-FE-003
17. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-FE-002 and wait for human review.
```

### Outcome

Completed `TASK-FE-002`. Created `frontend/src/components/Calculator.tsx`, `Display.tsx`, and `Keypad.tsx`; modified `frontend/src/App.tsx` to render the calculator, `frontend/src/App.css` with a clean calculator-style display/keypad layout, and `frontend/src/App.test.tsx` with focused observable interaction tests. Modified only TASK-FE-002 in `TASKS.md` to Complete and recorded P016 and this outcome in `docs/ai-prompts.md`.

`Calculator` owns local React state for the canonical expression plus nullable future result/error display state; `Display` renders accessible expression, result, and error regions; `Keypad` emits fixed input, clear, backspace, and evaluate actions through props. No global state, context, service layer, evaluator, or individual-button components were introduced. All digits, decimal point, addition, subtraction, multiplication, division, exponentiation, percentage, parentheses, square root, clear, backspace, and equals controls are present as semantic buttons with accessible names. Presentation buttons shape input only: `×` appends `*`, `÷` appends `/`, `xʸ` appends `^`, and `√` appends `sqrt(`; other approved tokens append directly. Expression order is preserved without frontend grammar validation. Empty expression displays `0`; result and error areas remain empty and ready for later integration.

Clear resets expression, result, and error state. Backspace removes the latest character and treats a trailing `sqrt(` inserted by one keypad action as one coherent unit. Equals invokes an intentionally inert action boundary: it neither changes the expression/result nor performs arithmetic or network communication. Tests explicitly stub global `fetch`, press equals after constructing `2+3`, and prove the canonical expression remains `2+3`, the result stays empty, and fetch is never called.

`npm test -- --run` passed one test file with six tests and zero failures. The tests cover the complete keypad, default/current display, ordered digit/decimal/basic input, every presentation-to-canonical mapping, clear, character and square-root-unit backspace, and no-evaluation/no-network equals behavior. `npm run build` passed strict TypeScript compilation and the Vite production build. `npm run lint` passed. `npm run coverage` passed with 100% statements (25/25), branches (4/4), functions (12/12), and lines (24/24); no threshold was added. `npm ls --depth=0` passed with the same approved direct dependency set from TASK-FE-001 and no new dependency.

Production-source review found no `fetch`, XMLHttpRequest, Axios, `eval`, dynamic Function, numeric parsing, reduction, or `Math` calculation. No mathematical parsing/evaluation, precedence, percentage, square-root, exponentiation, REST call, backend selection, keyboard handling, TASK-FE-003 responsive refinement, Java, Docker, or parity tooling was implemented. Generated `node_modules`, `dist`, and `coverage` remain ignored. `backend-go/` was not modified. TASK-FE-002 is Complete and TASK-FE-003 and later remain unchanged. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-004, or TASKS.md.

## P017

### Prompt ID

P017

### Phase

Implementation — Frontend Keyboard and Responsive Behavior

### Objective

Execute only `TASK-FE-003` from `TASKS.md`: add the approved physical-keyboard interaction and responsive/mobile usability to the existing calculator UI without introducing backend communication or local mathematical evaluation.

### Prompt

```text
Prompt ID: P017

Phase: Implementation — Frontend Keyboard and Responsive Behavior

Objective:
Execute only `TASK-FE-003` from `TASKS.md`: add the approved physical-keyboard interaction and responsive/mobile usability to the existing calculator UI without introducing backend communication or local mathematical evaluation.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-004 and any other ADR directly referenced by `TASK-FE-003`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P017` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-FE-003 — Implement keyboard and responsive behavior`

Do NOT implement:

* REST API calls
* backend selection communication
* mathematical evaluation in the frontend
* Java backend
* Docker
* parity tooling

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If current frontend behavior conflicts with `SPEC.md`, stop and report the conflict rather than silently redefining it.

## 1. Keyboard interaction

Implement only the keyboard behavior approved by `SPEC.md`.

Supported physical-keyboard inputs must include:

* digits `0` through `9`
* `.`
* `+`
* `-`
* `*`
* `/`
* `^`
* `%`
* `(`
* `)`
* Enter
* Escape
* Backspace

Do not accept arbitrary free-form text.

Unsupported keys must not mutate the expression.

## 2. Keyboard action mapping

Map keys as follows:

* digits append their corresponding digit
* `.` appends the decimal token
* arithmetic/operator keys append their canonical token
* `(` and `)` append grouping tokens
* Enter triggers the same evaluate action boundary as the equals button
* Escape performs the same clear/reset action as the clear button
* Backspace performs the same deletion behavior as the visible backspace control

Do not duplicate action logic between keyboard and keypad.

Prefer routing both input sources through the same calculator actions/state transitions.

## 3. Square root keyboard behavior

Per `SPEC.md`, a dedicated square-root physical-key shortcut is not required.

Do not add arbitrary alphabetic free-form entry merely to allow users to type `sqrt`.

Square root remains available through the approved calculator control.

Do not broaden keyboard syntax beyond the specification.

## 4. Evaluate boundary

Enter and the equals button must share one evaluation boundary.

At this stage that boundary must still not:

* perform arithmetic locally
* make an API request

Networking belongs to TASK-FE-004.

If the existing equals action is represented by a callback/event, reuse it.

Do not create fake results.

## 5. Focus and event behavior

Keyboard handling must work predictably without creating duplicate input when focus is on calculator controls.

Avoid global event handling that:

* interferes with browser shortcuts unnecessarily
* processes the same event twice
* captures unrelated keys

Use a clear lifecycle for attaching/removing keyboard listeners if global listeners are used.

Do not leak event listeners on rerender/unmount.

## 6. Accessibility

Preserve and improve accessibility where necessary.

Ensure:

* calculator controls remain keyboard-focusable
* visible focus state is not removed
* semantic buttons remain buttons
* display regions remain understandable to assistive technology
* keyboard support supplements rather than replaces accessible controls

Do not use tabindex hacks or custom keyboard navigation when native behavior is sufficient.

## 7. Responsive/mobile behavior

Implement the responsive behavior required by `SPEC.md` and TASK-FE-003.

Use a mobile-first approach.

The calculator must remain usable at representative widths such as approximately:

* 320px
* 375px
* 768px
* desktop width

These are verification examples, not mandatory hardcoded breakpoints.

Priorities:

* calculator fits without horizontal scrolling
* keypad controls remain comfortably tappable
* expression/result text remains readable
* long expressions do not destroy layout
* backend selector placeholder/region does not interfere with calculator controls
* visual hierarchy remains clear
* calculator does not expand to an unreasonable width on desktop

Do not build separate mobile and desktop component trees.

## 8. Long expression display

Ensure the expression display remains usable when content grows.

Choose a simple behavior consistent with calculator UX, such as:

* wrapping where appropriate, or
* horizontal overflow/scrolling within the display

Do not allow long expressions to push the keypad outside the usable viewport horizontally.

Do not truncate expression state internally merely for presentation.

## 9. Touch targets

Use reasonable button sizing and spacing for mobile interaction.

Do not over-optimize to a specific device.

Do not add a UI framework.

## 10. Visual refinement scope

This task may refine CSS necessary for responsive usability.

Allowed:

* responsive grid sizing
* spacing
* font sizing
* max width
* display overflow
* touch-target dimensions
* focus-visible styles

Do not add:

* themes
* animations
* dark-mode system
* decorative illustration
* design-system infrastructure
* unrelated visual features

Keep the UI professional and restrained.

## 11. Tests

Derive tests from TASK-FE-003 and relevant `AC-UI-*`.

Using React Testing Library/user-event or appropriate DOM keyboard events, cover at minimum:

### Keyboard construction

* digits
* decimal
* `+`
* `-`
* `*`
* `/`
* `^`
* `%`
* parentheses

### Keyboard actions

* Escape clears
* Backspace deletes
* Enter invokes evaluate boundary

### Unsupported input

* unsupported alphabetic key does not alter expression
* representative unsupported symbol does not alter expression

### Shared behavior

* keyboard and keypad produce the same canonical expression for equivalent inputs
* Enter and equals use the same evaluation boundary
* Escape and clear produce equivalent state
* Backspace keyboard and control produce equivalent state

Do not test CSS implementation details by class name where avoidable.

## 12. Responsive verification

Automated DOM tests do not prove visual responsiveness.

Perform a practical visual review at representative viewport sizes.

Report observations for:

* small mobile
* typical mobile
* tablet/narrow desktop
* desktop

If browser automation is not part of the approved tooling, do not add it solely for this task.

Manual browser/DevTools viewport verification is acceptable.

Do not add Playwright/Cypress.

## 13. No evaluation engine

Review the code after implementation and confirm:

* keyboard handlers only construct/edit expression state
* no JavaScript arithmetic evaluator exists
* no parser equivalent exists in frontend
* result calculation remains a backend responsibility

Do not introduce `eval`, `Function`, math-expression libraries, or hand-written frontend calculation.

## 14. Existing behavior preservation

Do not regress:

* TASK-FE-001 bootstrap
* TASK-FE-002 keypad
* expression display
* clear
* backspace
* canonical-token construction
* accessibility labels
* build/test/lint/coverage configuration

Do not modify `backend-go/`.

## 15. Verification

From `frontend/`, run:

`npm test -- --run`

`npm run build`

`npm run lint`

`npm run coverage`

Also inspect:

`npm ls --depth=0`

Report:

* test count/result
* build result
* lint result
* coverage summary
* dependency result

Confirm no new unapproved dependency was added.

## 16. Task tracking

Update only:

`TASK-FE-003`

Mark it Complete only if:

* required keyboard behavior works
* responsive behavior has been practically verified
* tests pass
* build passes
* lint passes
* coverage generation passes
* no frontend evaluator exists

Do not change TASK-FE-004 or later task statuses.

## 17. Prompt audit

Update P017 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-FE-003 result
* files modified
* keyboard mappings implemented
* shared keypad/keyboard action approach
* responsive changes
* representative viewport review
* tests/results
* build result
* lint result
* coverage result
* dependency result
* task status
* confirmation that no API communication or mathematical evaluation was implemented
* confirmation that backend-go was not modified

Do not rewrite prior prompts/outcomes.

## 18. Required report

After implementation report:

1. files modified
2. keyboard-action architecture
3. supported key mapping
4. unsupported-key behavior
5. representative keyboard tests
6. shared keyboard/keypad behavior evidence
7. responsive CSS/design changes
8. viewport verification results
9. accessibility observations
10. test result
11. build result
12. lint result
13. coverage result
14. dependency summary
15. `git diff --stat`
16. `git status`
17. TASK-FE-003 status
18. remaining work beginning with TASK-FE-004
19. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-FE-003 and wait for human review.
```

### Outcome

Completed `TASK-FE-003`. Modified `frontend/src/components/Calculator.tsx` to add the approved keyboard behavior through one lifecycle-managed `window` keydown listener and a shared optional evaluation callback; modified `frontend/src/App.css` with mobile-first sizing, overflow, touch-target, and restrained desktop-width refinements; modified `frontend/src/App.test.tsx` with keyboard, shared-action, unsupported-key, focused-control, and long-expression tests. Modified only TASK-FE-003 in `TASKS.md` to Complete and recorded P017 and this outcome in `docs/ai-prompts.md`.

Digits `0`–`9`, `.`, `+`, `-`, `*`, `/`, `^`, `%`, `(`, and `)` append their canonical key directly through the same `appendToken` action used by keypad input. Enter calls the same `evaluate` boundary passed to the equals button; Escape calls the same `clear` action as Clear; Backspace calls the same coherent deletion action as the visible backspace button. Ctrl, Meta, and Alt modified shortcuts are ignored, as are unsupported alphabetic and symbol keys. Supported calculator keys call `preventDefault` once, including when a semantic calculator button has focus, preventing native button activation from duplicating the event. The effect removes its listener on dependency change and unmount. Square root remains keypad-only and no alphabetic free-form input was enabled.

The CSS now applies universal border-box sizing, fluid mobile-first page padding, a 100%-fluid calculator capped at 24rem, a minimum 3.25rem button height increased to 3.5rem from 40rem viewport width, preserved `focus-visible` outlines, and a bounded expression area with wrapping, word breaking, and vertical scrolling. Expression state is never truncated; a test proves all 256 entered characters remain present. Practical local Chrome screenshots were generated outside the repository and visually inspected at 320×568, 375×667, 768×900, and 1440×1000. At 320px there is no horizontal overflow and the shortest viewport uses normal vertical page scrolling to keep the final keypad row reachable; at 375px the complete calculator fits the viewport with comfortable controls; at 768px the layout is centered with larger touch targets and ample spacing; at desktop width the 24rem cap prevents unreasonable expansion. At all four widths the display remains readable, hierarchy is clear, and the absent future backend-selector region does not interfere.

`npm test -- --run` passed one test file with 13 tests and zero failures. New tests cover all supported character keys; Escape, Backspace, and Enter; unsupported `a` and `@`; ignored modified shortcuts; keyboard/keypad canonical equivalence; Escape/Clear and keyboard/control Backspace equivalence; Enter/equals evaluation-boundary equivalence; prevention of duplicate activation with a focused control; and preservation of a 256-character expression. `npm run build` passed strict TypeScript compilation and Vite production build. `npm run lint` passed. `npm run coverage` passed with 100% statements (43/43), branches (13/13), functions (15/15), and lines (41/41), with no threshold added. `npm ls --depth=0` passed with the unchanged approved direct dependencies and no new package.

Semantic buttons, native focusability, visible focus outlines, and accessible display labels remain intact; keyboard support supplements rather than replaces controls. Production-source review found no fetch/XMLHttpRequest/Axios, `eval`, dynamic Function, math operation, numeric parsing, reduction, parser, or frontend evaluator. No REST communication, backend selection communication, mathematical evaluation, Java, Docker, or parity tooling was implemented. Generated outputs remain ignored and the temporary screenshots were written only under `/tmp`. `backend-go/` was not modified. TASK-FE-003 is Complete and TASK-FE-004 and later remain unchanged. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-004, or TASKS.md.

## P018

### Prompt ID

P018

### Phase

Implementation — Frontend API Integration

### Objective

Execute only `TASK-FE-004` from `TASKS.md`: connect the calculator UI to the selected backend using the approved REST contract, while preserving the backend as the authoritative calculation engine.

### Prompt

```text
Prompt ID: P018

Phase: Implementation — Frontend API Integration

Objective:
Execute only `TASK-FE-004` from `TASKS.md`: connect the calculator UI to the selected backend using the approved REST contract, while preserving the backend as the authoritative calculation engine.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-004 and any other ADR directly referenced by `TASK-FE-004`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P018` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-FE-004 — Integrate selected backend API`

Do NOT implement:

* Java backend
* Docker
* cross-backend parity tooling
* mathematical evaluation in frontend
* parser/evaluator logic in frontend
* new calculator operations
* unrelated visual redesign

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the existing UI structure conflicts with the approved API contract, stop and report the conflict before changing behavior.

## 1. Backend selection

Implement the two approved backend choices.

Use neutral UI/configuration concepts consistent with the current architecture, but the visible labels may reflect the approved implementation plan:

* Go
* Java

Default local endpoints:

Go:
`http://localhost:8080`

Java:
`http://localhost:8081`

Read them from Vite environment configuration with these values as local-development defaults.

Do not hardcode URLs throughout UI components.

Keep backend configuration isolated.

## 2. API client

Create or complete a small API module responsible for calculator HTTP communication.

Use native browser `fetch`.

Do not add Axios or another HTTP client dependency.

The API module must receive:

* selected backend
* canonical expression

and call:

`POST /api/calculate`

with:

```json
{
  "expression": "(2 + 3) * 4"
}
```

and:

`Content-Type: application/json`

## 3. Success handling

For HTTP 200, read the approved response:

```json
{
  "result": 20
}
```

Validate at runtime that:

* response JSON is an object
* `result` exists
* `result` is a finite JavaScript number

Do not blindly trust a TypeScript type assertion.

If a nominally successful response has an invalid shape, surface a generic safe backend-response error.

Do not add a schema-validation library for this.

## 4. Calculator error handling

For application-defined error responses, read:

```json
{
  "code": "ERROR_CODE",
  "message": "Human-readable message"
}
```

When a valid application error body is available, display the backend-provided canonical message.

Do not reimplement domain-specific error rules in the frontend.

Do not inspect expression syntax locally to determine backend error codes.

## 5. Connectivity failures

If the selected backend cannot be reached, show a clear user-facing connectivity error.

The message should identify the selected backend sufficiently for the user to understand what failed.

Do not expose low-level browser/network diagnostics.

The Java backend is not implemented yet, so selecting Java and evaluating must fail cleanly as a connectivity error.

Do not disable Java selection merely because it is not running.

## 6. Backend selector UI

Expose a clear backend selector in the calculator interface.

Prefer a small segmented/radio-style control.

Requirements:

* Go and Java choices are visible
* one backend is selected at a time
* changing backend does not evaluate the current expression
* changing backend does not clear the expression
* the selected backend is the only backend contacted on evaluation

Keep it visually secondary to the calculator itself.

## 7. Evaluate behavior

Connect:

* equals button
* Enter key

to the same API-backed evaluation path.

If the expression is empty or whitespace-only:

* do not make a network request
* preserve the behavior defined in `SPEC.md`

When evaluation starts:

* prevent duplicate submissions
* expose minimal loading state
* clear stale error state appropriately

On success:

* display the returned result
* clear stale error state

On failure:

* display the error
* remove any stale previous successful result

Do not calculate locally.

## 8. Stale result behavior

If a previous calculation succeeded and the next one fails, the old result must not remain presented as the current answer.

When the user changes the expression after a result:

follow the behavior already approved in SPEC/UI state; do not invent a new result-history model.

Do not introduce persistent calculation history.

## 9. Duplicate submission prevention

While a request is in progress:

* equals must not trigger a second request
* Enter must not trigger a second request
* provide minimal loading/disabled feedback

Do not introduce queues, cancellation frameworks, or request-management libraries.

## 10. Canonical expression transport

The UI may display friendly symbols, but the request must use canonical expression syntax.

Examples:

display:
`2 × 3`

transport:
`2 * 3`

display:
`√(81)`

transport:
`sqrt(81)`

Do not send Unicode-only calculator symbols to the backend.

Reuse the expression-state/canonical-token design already implemented where possible.

## 11. Frontend architecture

Keep HTTP concerns outside presentation components as approved in DESIGN.

A small structure conceptually equivalent to:

* calculator state/UI
* backend config
* calculator API module

is sufficient.

Do not introduce:

* repository/service-interface layers
* global state
* context solely for API access
* generic networking framework

## 12. Tests

Use Vitest, React Testing Library, and user-event.

Mock `fetch` directly using Vitest capabilities.

Do not add a network mocking framework unless a demonstrated need exists.

Cover at minimum:

### Success

* Go selected by default or according to approved UI behavior
* evaluation sends correct POST
* request URL matches selected Go endpoint
* payload contains canonical expression
* successful result is displayed

### Backend selection

* switching to Java changes target URL
* switching backend alone does not make a request
* expression remains intact when backend changes

### Application errors

* backend error message is displayed
* division-by-zero canonical message is displayed where represented by a mocked response
* stale previous result is removed on failure

### Connectivity

* rejected fetch produces clear connectivity message
* selected backend is reflected appropriately

### Empty input

* equals with empty expression does not call fetch
* Enter with empty expression does not call fetch

### Duplicate submission

* repeated equals during in-flight request sends only one request
* Enter during in-flight request does not send a duplicate request

### Response validation

* malformed success response does not produce a fake result
* non-finite result response is rejected as invalid backend response

### Shared evaluate path

* Enter and equals both use the same API-backed behavior

Do not depend on a running backend for component/unit tests.

## 13. Existing behavior preservation

Do not regress:

* keypad construction
* keyboard construction
* clear/reset
* backspace
* display behavior
* responsive layout
* accessibility labels
* frontend build/lint/coverage setup

Do not modify `backend-go/`.

## 14. Manual integration verification

After automated tests pass, run the actual Go backend and frontend locally.

Verify through the browser:

### Go

* select Go
* evaluate a simple expression
* evaluate a compound expression
* evaluate an advanced expression
* verify backend error display

### Java

* select Java
* evaluate
* verify controlled connectivity error because Java is not implemented/running yet

Use browser DevTools Network if useful to confirm destination URLs.

Do not implement Java to make this test pass.

## 15. Verification commands

From `frontend/`, run:

`npm test -- --run`

`npm run build`

`npm run lint`

`npm run coverage`

Inspect:

`npm ls --depth=0`

Report:

* test result
* build result
* lint result
* coverage result
* dependency result

Confirm no unapproved dependency was introduced.

## 16. Task tracking

Update only:

`TASK-FE-004`

Mark it Complete only if its full Definition of Done is satisfied.

Do not modify TASK-FE-005 or later task statuses.

## 17. Prompt audit

Update P018 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-FE-004 result
* files created/modified
* backend configuration approach
* API client structure
* backend selector behavior
* request contract
* success/error/connectivity behavior
* duplicate-submit handling
* runtime response validation
* automated tests/results
* manual Go integration result
* manual Java connectivity-error result
* build result
* lint result
* coverage result
* dependency result
* task status
* confirmation that no frontend evaluator was implemented
* confirmation that Java backend, Docker, and parity tooling were not implemented
* confirmation that backend-go was not modified

Do not rewrite prior prompts/outcomes.

## 18. Required report

After implementation report:

1. files created/modified
2. backend configuration structure
3. API client structure
4. request payload example
5. backend selector behavior
6. success handling
7. calculator error handling
8. connectivity handling
9. stale-result behavior
10. duplicate-submit behavior
11. runtime response validation
12. representative tests
13. test result
14. build result
15. lint result
16. coverage result
17. dependency summary
18. manual Go browser integration result
19. manual Java connectivity result
20. `git diff --stat`
21. `git status`
22. TASK-FE-004 status
23. remaining work beginning with TASK-FE-005
24. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-FE-004 and wait for human review.
```

### Outcome

Completed `TASK-FE-004`. Created `frontend/src/api/calculator.ts` as the only production native-fetch boundary and `frontend/src/components/BackendSelector.tsx` as a semantic Go/Java radio selector. Modified `frontend/src/config.ts` to export the centralized backend type and labels while retaining the Vite-configured defaults `http://localhost:8080` and `http://localhost:8081`; modified `Calculator.tsx` with selected-backend, loading, success, error, stale-output, and synchronous in-flight state; modified `Display.tsx` to display numeric results and minimal `Calculating…` feedback; modified `Keypad.tsx` to disable and mark Equals busy during requests; modified `App.css` only for the secondary segmented selector and disabled control state; and expanded `App.test.tsx` with direct fetch-mock integration tests. Modified only TASK-FE-004 in `TASKS.md` to Complete and recorded P018 and this outcome in `docs/ai-prompts.md`.

The API client receives a `Backend` and canonical expression, selects its URL from the isolated Vite configuration, and sends `POST {backendUrl}/api/calculate` with `Content-Type: application/json` and `JSON.stringify({ expression })`. Successful bodies are treated as `unknown` and accepted only when they are a non-array object containing exactly one `result` member whose value is a finite JavaScript number. Invalid JSON, missing/string/non-finite results, arrays/null, or an extra success member yield only `The backend returned an invalid response`. Valid non-success objects with string `code` and `message` surface only the backend message. Fetch rejection yields `Unable to reach the Go backend` or `Unable to reach the Java backend` without low-level diagnostics.

Go is selected by default. Switching the radio selection makes no request and preserves expression state; the selected backend is resolved only when evaluation occurs. Enter and Equals call the same asynchronous `evaluate` action. Empty/whitespace expressions return before fetch. A ref-based guard is set synchronously before fetch so repeated Equals or Enter events cannot queue duplicates; Equals is disabled and the result region shows `Calculating…` while pending. Evaluation start clears stale result/error. Success displays the numeric result; failure displays the safe/canonical error and leaves no previous answer. Editing, clear, or backspace clears a prior answer/error. A submitted-expression snapshot prevents a late response from being shown after expression edits. No history model was added.

The first verification pass had 23 passing tests, passing build and coverage, but ESLint correctly rejected synchronizing the stale-expression ref during render. Moved that synchronization into a React effect without suppressing the rule. After adding explicit result-on-edit coverage, the final `npm test -- --run` passed one file with 24 tests and zero failures. Tests cover default Go selection and exact URL/method/header/canonical payload; successful numeric rendering; Java-only targeting without selection-side requests or expression loss; canonical division-by-zero display and stale-result removal; selected-Java connectivity feedback without diagnostic leakage; empty Equals/Enter; shared Enter/Equals API behavior; synchronous duplicate prevention during a deferred request; malformed, string, non-finite, and extra-field success rejection; and clearing the prior answer on expression edits, while preserving all earlier keypad/keyboard/responsive tests. `npm run build` passed strict TypeScript and Vite production build. `npm run lint` passed. `npm run coverage` passed with 97.67% statements (84/86), 91.48% branches (43/47), 100% functions (21/21), and 97.61% lines (82/84); the uncovered paths are defensive invalid-JSON/unknown-thrown-value fallbacks, and no threshold was added. `npm ls --depth=0` passed with the unchanged approved dependency set and no new dependency.

Manual integration used the actual Go server on port 8080, Vite on port 5173, and the locally installed headless Chrome DevTools protocol without adding project tooling. In the browser, the default Go selection returned result 5 for `2+3`, result 20 for `(2+3)*4`, and result 39 for `sqrt(81)+150*20%`; `1/0` displayed the backend canonical `Division by zero is not allowed` message. Switching to Java preserved the UI, targeted `http://localhost:8081/api/calculate`, and displayed the controlled `Unable to reach the Java backend` connectivity message because Java is intentionally absent. Captured browser network events contained only the configured `localhost:8080` and `localhost:8081` calculator URLs, including normal CORS preflight traffic. An initial temporary browser driver run completed its first Go request but failed to locate Clear because it searched only explicit aria-label attributes; the temporary driver was corrected to honor native visible button names and the complete integration run then passed. All Go, Vite, and Chrome processes were stopped; temporary browser files remained outside the repository under `/tmp`.

Production review found exactly one `fetch` call, confined to `src/api/calculator.ts`, and no `eval`, dynamic Function, `Math` calculation, numeric parsing, reduction, expression parser, or frontend evaluator. Java backend, Docker, parity tooling, new operations, and unrelated redesign were not implemented. Generated outputs remain ignored. `backend-go/` was not modified. TASK-FE-004 is Complete and TASK-FE-005 and later remain unchanged. There was no deviation or conflict with REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-004, or TASKS.md.

## P019 — Frontend Quality Gate

### Phase

Verification — Frontend Quality Gate

### Objective

Execute only `TASK-FE-005` from `TASKS.md`: perform a complete acceptance, quality, coverage, build, lint, responsive, accessibility, and integration verification of the React frontend and fix only demonstrated gaps within the already approved specification.

### Prompt

```text
Prompt ID: P019

Phase: Verification — Frontend Quality Gate

Objective:
Execute only `TASK-FE-005` from `TASKS.md`: perform a complete acceptance, quality, coverage, build, lint, responsive, accessibility, and integration verification of the React frontend and fix only demonstrated gaps within the already approved specification.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-004.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P019` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-FE-005 — Complete frontend quality gate`

Do NOT:

* add new calculator features
* change expression semantics
* modify the REST contract
* implement Java
* implement Docker
* implement parity tooling
* add frontend mathematical evaluation
* alter approved requirements, scope, specification, design, or ADRs

If verification exposes a conflict with an approved artifact, stop and report it rather than silently redefining behavior.

## 1. Acceptance review

Review all frontend-relevant acceptance criteria in `SPEC.md`.

At minimum, verify coverage for all:

* `AC-UI-*`

and any frontend-observable:

* `AC-API-*`

used by the approved UI integration.

Create a compact acceptance checklist in the final report showing each criterion or grouped range and its concrete verification path.

Do not claim coverage without a test or explicit manual verification path.

## 2. Gap policy

If an approved frontend criterion is not currently verified:

* add the smallest necessary test or implementation correction
* do not broaden scope
* do not refactor unrelated working code
* do not add a dependency unless a concrete approved need exists

If behavior already satisfies the criterion but lacks a test, prefer adding the test.

If implementation contradicts `SPEC.md`, fix implementation rather than changing the specification.

## 3. Automated test suite

Run the complete frontend test suite.

Use the correct project script, expected to be equivalent to:

`npm test -- --run`

or the configured Vitest command.

Report:

* number of test files
* total tests
* passed tests
* failed tests
* skipped tests
* final result

No committed behavior test may remain failing.

Do not use snapshot tests as the primary evidence of calculator behavior.

## 4. Coverage

Generate frontend coverage using the configured Vitest coverage tooling.

Run:

`npm run coverage`

Report:

* statement coverage
* branch coverage
* function coverage
* line coverage
* notable uncovered behavior, if any

Do not create an arbitrary percentage threshold.

Coverage is supporting evidence.

Generated coverage output must remain ignored by Git.

If coverage output appears in `git status`, fix repository hygiene rather than commit generated reports.

## 5. TypeScript/build verification

Run:

`npm run build`

The production build must succeed.

Do not weaken TypeScript configuration or introduce unsafe casts merely to pass the build.

Review compile warnings/errors and resolve legitimate issues.

## 6. Lint verification

Run:

`npm run lint`

Resolve legitimate lint findings.

Do not disable rules broadly to make the gate pass.

Do not add an additional overlapping formatter/linter stack.

## 7. Dependency verification

Run:

`npm ls --depth=0`

Review direct dependencies.

Confirm:

* React runtime dependencies are justified
* Vite/TypeScript build tooling is justified
* Vitest/Testing Library/user-event tooling is justified
* no Axios
* no Redux/Zustand/MobX
* no React Router unless actually approved
* no expression/math-evaluation library
* no UI/CSS framework
* no unapproved dependency

Report any deviation.

## 8. No frontend evaluator review

Inspect the frontend implementation and explicitly confirm that it does not:

* parse mathematical expressions for evaluation
* compute arithmetic results
* reproduce precedence rules
* implement exponentiation mathematically
* implement percentage mathematically
* implement square root mathematically
* use `eval`
* use `Function`
* use an expression-evaluation library

The frontend may only construct and transport canonical expression syntax.

If evaluation logic has leaked into the frontend, remove it and restore backend authority.

## 9. Keypad verification

Verify all committed keypad capabilities:

* digits 0–9
* decimal point
* addition
* subtraction
* multiplication
* division
* exponentiation
* percentage
* square root
* opening parenthesis
* closing parenthesis
* clear/reset
* equals/evaluate
* backspace if included in the approved UI

Verify that presentation symbols map to canonical transport syntax.

Do not verify only that buttons exist; verify observable expression construction.

## 10. Keyboard verification

Verify:

* digits
* `.`
* `+`
* `-`
* `*`
* `/`
* `^`
* `%`
* `(`
* `)`
* Enter
* Escape
* Backspace

Also verify:

* unsupported alphabetic input does not mutate the expression
* representative unsupported symbols do not mutate expression state
* keyboard and keypad share the same underlying actions where applicable

## 11. Clear and state lifecycle

Verify:

Clear/reset:

* clears expression
* clears result
* clears error

Successful evaluation:

* displays current result
* removes stale errors

Failed evaluation:

* displays current error
* does not present stale previous result as current answer

Backend change:

* does not evaluate automatically
* does not clear the current expression

Empty expression:

* equals does not issue a request
* Enter does not issue a request

## 12. Duplicate-submit behavior

Verify that an in-flight request cannot be duplicated via:

* repeated equals
* repeated Enter
* Enter plus equals combination

Loading state must be minimally visible/understandable.

Do not add request-queue infrastructure.

## 13. Backend selection verification

Verify:

* Go and Java choices are visible
* exactly one backend is selected
* selected backend controls destination URL
* Go maps to default `http://localhost:8080`
* Java maps to default `http://localhost:8081`
* Vite environment variables can override these defaults
* backend switching itself performs no request
* current expression is preserved across backend switching

## 14. API contract verification

Using mocked fetch behavior, verify:

Request:

`POST /api/calculate`

JSON body:

```json
{
  "expression": "..."
}
```

Headers include:

`Content-Type: application/json`

Verify successful response handling:

```json
{
  "result": 20
}
```

Verify application error handling:

```json
{
  "code": "DIVISION_BY_ZERO",
  "message": "Division by zero is not allowed"
}
```

Verify malformed nominal success responses are rejected safely.

Do not duplicate backend validation rules in frontend.

## 15. Connectivity behavior

Verify rejected/unreachable fetch results in:

* controlled user-facing connectivity error
* no low-level browser exception text
* no stale result
* selected backend identification where useful

Java may still be unavailable locally at this phase; that must be handled cleanly rather than treated as a frontend defect.

## 16. Accessibility review

Review the calculator for practical accessibility.

At minimum confirm:

* controls are semantic buttons/inputs where appropriate
* controls have understandable accessible names
* symbols such as square root/exponentiation/multiplication/division are not accessible by symbol alone when ambiguous
* visible keyboard focus is preserved
* expression/result/error regions are understandable to assistive technology
* error state is announced appropriately where practical
* native semantics are preferred over excessive ARIA

Fix only concrete issues found.

## 17. Responsive/manual viewport review

Perform practical browser/DevTools verification at representative viewports.

At minimum review approximately:

* 320px width
* 375px width
* 768px width
* desktop width

Verify:

* no horizontal page scrolling caused by calculator layout
* keypad remains usable
* buttons remain comfortably tappable
* display remains readable
* long expressions remain contained
* backend selector remains usable
* result/error feedback remains visible
* calculator width remains sensible on desktop

Do not add browser automation tooling just for this review.

Document the manual observations factually.

## 18. Live Go integration

Run the already completed Go backend and the frontend locally.

Verify through the actual browser:

### Basic expression

`2 + 3 * 4`

Expected result:
`14`

### Parentheses

`(2 + 3) * 4`

Expected:
`20`

### Exponentiation

`2 ^ 3 ^ 2`

Expected:
`512`

### Square root / percentage

Use at least one valid advanced expression.

### Division by zero

Verify canonical backend message displays correctly.

### Invalid expression

Verify canonical error displays correctly.

Use Network DevTools if useful to confirm:

* target URL
* POST method
* JSON payload
* response

Do not modify Go to accommodate a frontend bug unless an actual backend contract defect is demonstrated.

## 19. Java-unavailable integration behavior

Select Java while it is still unavailable/not running.

Verify:

* frontend remains functional
* expression is preserved
* evaluation fails with controlled connectivity feedback
* switching back to Go restores working evaluation

This is expected behavior at this stage.

## 20. Repository hygiene

After all commands:

`git status --short`

Confirm generated artifacts such as:

* `node_modules/`
* `dist/`
* `coverage/`

are ignored.

Confirm no:

* `.env` containing secrets
* editor metadata
* temporary logs
* generated reports

are staged or unintentionally tracked.

If root `.gitignore` needs a concrete correction, make the smallest necessary change and report it.

## 21. TASK-FE-005 completion

Mark `TASK-FE-005` Complete only if:

* all relevant acceptance criteria have a verification path
* tests pass
* coverage generation passes
* build passes
* lint passes
* dependency review passes
* no frontend evaluator exists
* responsive review passes
* accessibility review passes
* live Go integration passes
* Java unavailable behavior is controlled
* no known committed frontend criterion remains uncovered

Do not modify Java, parity, Docker, documentation, or final-task statuses.

## 22. Prompt audit

Update P019 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-FE-005 status
* files modified
* acceptance gaps found and fixed
* automated test result
* coverage metrics
* build result
* lint result
* dependency review
* no-evaluator review
* accessibility review
* responsive viewport observations
* live Go integration results
* Java-unavailable behavior
* repository hygiene result
* confirmation that no new feature was introduced
* confirmation that Java, Docker, and parity implementation were not started

Do not rewrite earlier prompts/outcomes.

## 23. Required final report

Report:

1. acceptance-criteria coverage summary
2. files modified during the quality gate
3. gaps found and fixes made
4. test files/test count/results
5. coverage metrics
6. build result
7. lint result
8. dependency summary
9. no-frontend-evaluator review
10. keypad verification
11. keyboard verification
12. state lifecycle verification
13. duplicate-submit verification
14. backend-selection verification
15. API contract verification
16. connectivity verification
17. accessibility review
18. 320px viewport observation
19. 375px viewport observation
20. 768px viewport observation
21. desktop viewport observation
22. live Go basic-expression result
23. live Go compound-expression result
24. live Go advanced-expression result
25. live backend-error result
26. Java-unavailable connectivity result
27. repository hygiene result
28. `git diff --stat`
29. `git status`
30. TASK-FE-005 final status
31. remaining work beginning with TASK-JAVA-001
32. any unresolved deviation/conflict

Do not commit.
Do not push.

Stop after TASK-FE-005 and wait for human review.
```

### Outcome

Completed `TASK-FE-005`. Modified `frontend/src/App.test.tsx` to add the smallest missing acceptance evidence for step-by-step keypad construction, the exact keyboard construction sequence, empty-state backspace, canonical submission of multiplication/division/exponentiation/square-root presentation controls, the complete Java request contract, clear-after-success and clear-after-error state, and repeated-Enter duplicate prevention. Added `frontend/src/config.test.ts` for documented default backend URLs and Vite environment overrides. Practical browser review exposed one real desktop-layout gap: the bounded calculator remained left-aligned while its heading was centered. Added only `justify-items: center` to `frontend/src/App.css`; the repeated browser review then showed the 384px calculator centered at 768px and 1440px. Modified only TASK-FE-005 in `TASKS.md` to Complete and recorded P019 and this outcome here.

The final `npm test -- --run` passed 2 test files with 35 tests, 35 passed, 0 failed, and 0 skipped. These tests provide a verification path for AC-UI-001–012 and AC-UI-015–016 plus frontend-observable AC-API-001–002; manual browser measurement and visual inspection provide the viewport path for AC-UI-013–014. No snapshot-primary tests were added. `npm run coverage` passed with 97.67% statements (84/86), 91.48% branches (43/47), 100% functions (21/21), and 97.61% lines (82/84). The two uncovered API-client lines are defensive invalid-JSON and unknown-thrown-value fallbacks; no arbitrary threshold was added. `npm run build` passed strict TypeScript and Vite 8.2.1 production compilation. `npm run lint` passed without suppression. `npm ls --depth=0` passed with React 19.2.8/React DOM 19.2.8 and the existing justified Vite, TypeScript, ESLint, Vitest, jsdom, V8 coverage, Testing Library, and user-event development toolchain. There is no Axios, state framework, router, expression evaluator, UI/CSS framework, or new dependency.

Source review found exactly one production `fetch` call, confined to `src/api/calculator.ts`, and no expression parsing, arithmetic calculation, precedence implementation, `eval`, dynamic `Function`, `Math` calculation, numeric parsing/reduction, or expression/math library. Keypad and keyboard construct canonical syntax only. Accessibility browser inspection confirmed semantic type-button controls, two semantic radios with exactly one checked, explicit accessible names for multiplication/division/exponentiation/square root, `output` expression/result regions, a polite error live region, and a visible 3px focus outline. Native semantics remain primary.

Live integration used the completed Go server on port 8080, Vite on port 5173, and the installed headless Chrome DevTools protocol without adding project tooling. The browser observed POST requests with canonical JSON payloads to `http://localhost:8080/api/calculate`. Go returned 14 for `2+3*4`, 20 for `(2+3)*4`, 512 for `2^3^2`, and 39 for `sqrt(81)+150*20%`. `1/0` displayed `Division by zero is not allowed`; `2+` displayed `Expression is invalid`, with no stale result. Selecting Java preserved `2+`, targeted `http://localhost:8081/api/calculate`, and displayed `Unable to reach the Java backend`; switching back to Go preserved the expression and restored the canonical Go invalid-expression response. An initial temporary driver attempt used the non-approved `127.0.0.1` frontend origin and timed out because the backend intentionally allows the approved localhost Vite origin; rerunning from `http://localhost:5173` passed without an application change.

At measured widths 320px, 375px, 768px, and 1440px, page scroll width equaled viewport width, the backend selector remained contained, a 256-character expression remained present and contained in the scrolling display, and all keypad controls remained rendered. Minimum control dimensions were 57.59×52px, 70.25×52px, 78×56px, and 78×56px respectively. The calculator occupied 294.41px at 320px, 345px at 375px, and a centered bounded 384px at 768px and 1440px. Screenshots were visually reviewed for keypad reachability, readable display, visible selector, touch targets, and sensible desktop width. Go, Vite, and Chrome were stopped after verification; temporary browser files remained under `/tmp`.

Repository hygiene passed: `frontend/node_modules/`, `frontend/dist/`, and `frontend/coverage/` are ignored and do not appear as commit candidates; no secret environment file, generated report, editor metadata, or temporary log was introduced. `git diff --check` passed. No new calculator feature or expression semantic was introduced. `backend-go/` was not modified, and Java, Docker, and parity implementation were not started. TASK-FE-005 is Complete; remaining implementation begins with TASK-JAVA-001. No unresolved conflict or deviation exists against REQUIREMENTS.md, SCOPE.md, SPEC.md, DESIGN.md, ADR-004, or TASKS.md.

## P019-R1 — Frontend UX Human-Review Correction

### Phase

Human Review Correction — Frontend UX

### Objective

Correct the calculator layout and visual hierarchy after manual human review revealed that the current keypad arrangement is functionally usable but does not present a deliberate, familiar calculator experience.

### Prompt

```text
Prompt ID: P019-R1

Phase: Human Review Correction — Frontend UX

Objective:
Correct the calculator layout and visual hierarchy after manual human review revealed that the current keypad arrangement is functionally usable but does not present a deliberate, familiar calculator experience.

This is a corrective frontend increment derived from human review.

Before modifying files:

1. Read `AGENTS.md`.
2. Read `SCOPE.md`.
3. Read `SPEC.md`.
4. Read `DESIGN.md`.
5. Read `TASKS.md`.
6. Read ADR-004.
7. Read previous frontend prompt outcomes in `docs/ai-prompts.md`.
8. Record this exact prompt as `P019-R1` before modifying application files.

Do NOT modify backend code.
Do NOT modify API behavior.
Do NOT introduce calculator evaluation in the frontend.
Do NOT introduce new product functionality.
Do NOT change the approved expression grammar.
Do NOT add dependencies.

The objective is layout, usability, visual hierarchy, and responsive refinement only.

## Human review finding

The current calculator has the following UX defects:

* numeric buttons are not arranged in conventional calculator order
* actions, operators, and digits are visually mixed
* the backspace icon is not immediately recognizable
* the display does not clearly distinguish expression from result
* the keypad looks generated from an arbitrary list rather than intentionally designed
* the current hierarchy is weaker than expected for a polished technical-assessment submission

Correct these issues without broadening scope.

## 1. Keypad layout

Use a four-column calculator grid with this exact conceptual arrangement:

Row 1:

* Clear
* Backspace
* `(`
* `)`

Row 2:

* square root
* exponentiation
* percentage
* division

Row 3:

* `7`
* `8`
* `9`
* multiplication

Row 4:

* `4`
* `5`
* `6`
* subtraction

Row 5:

* `1`
* `2`
* `3`
* addition

Row 6:

* `0`, spanning two columns
* decimal point
* equals

The rendered visual symbols should be familiar:

* multiplication: `×`
* division: `÷`
* exponentiation: `xʸ`
* square root: `√`
* backspace: use a recognizable representation such as `⌫`

The canonical expression tokens must remain unchanged internally.

Do not duplicate the `0` button merely to fill two grid cells.

## 2. Button categories

Create clear visual hierarchy between:

### Numeric buttons

* digits
* decimal point

### Operators

* `+`
* `−`
* `×`
* `÷`
* `xʸ`
* `%`
* `√`

### Secondary controls

* parentheses
* backspace

### Destructive control

* Clear

### Primary action

* Equals

Do not require dramatically different colors for every category.

Use restrained styling.

Equals should be the strongest primary action.

Clear may have a danger/destructive treatment but must not visually dominate the entire calculator.

## 3. Display redesign

The display should visually behave like a calculator display.

Use two conceptual levels:

### Expression

* smaller
* visually secondary
* right aligned
* capable of handling long expressions without breaking the layout

### Result

* larger
* visually primary
* right aligned

When no result exists, provide a sensible neutral display state without pretending a calculation occurred.

Error feedback must remain clearly visible but should not permanently consume the main result hierarchy.

Do not calculate any result locally.

## 4. Backend selector

Keep the Go/Java selector near the top of the calculator.

Make it compact and visually secondary to the calculator display and keypad.

Requirements remain:

* both choices visible
* selected backend obvious
* accessible labels
* changing selection does not evaluate
* expression is preserved

Do not redesign it into a large navigation control.

## 5. Mobile-first sizing

The calculator should look intentional around common mobile widths.

Target practical usability around:

* 320px
* 375px
* 390–430px

It should also remain visually balanced on desktop.

Use:

* sensible max-width
* full available width on small screens
* consistent button gaps
* buttons large enough for touch
* no horizontal page overflow

Do not create separate mobile and desktop markup.

## 6. Long-expression behavior

Ensure long expressions:

* remain visible/readable
* do not resize the entire calculator horizontally
* do not move keypad controls
* use a contained overflow or scrolling strategy where appropriate

Preserve the complete underlying expression.

## 7. Accessibility

Ensure every symbolic button has a clear accessible name.

At minimum:

* `×` → Multiply
* `÷` → Divide
* `xʸ` → Exponentiation
* `√` → Square root
* `⌫` → Backspace
* `=` → Evaluate
* `C` or Clear → Clear

Preserve keyboard focus indication.

Do not replace native buttons with non-semantic clickable elements.

## 8. Architecture restraint

Do not introduce:

* component libraries
* Tailwind
* Bootstrap
* CSS-in-JS framework
* icon package merely for backspace
* animation library
* design-system infrastructure

Use the existing React/CSS approach.

If the existing Keypad implementation is data-driven, it may remain data-driven, but the ordering and layout metadata must make the deliberate calculator structure explicit.

Do not encode layout through fragile nth-child selectors if a clearer semantic approach exists.

## 9. Behavior preservation

Do not regress:

* canonical token construction
* keypad behavior
* keyboard behavior
* clear
* backspace
* equals
* backend selection
* API integration
* loading behavior
* application errors
* connectivity errors
* duplicate-submit protection

This is not permission to rewrite working application logic.

## 10. Tests

Update/add only tests needed to protect behavior affected by the correction.

Verify at minimum:

* all required keypad controls still exist
* digits remain semantically ordered/usable
* zero exists exactly once
* zero remains functional despite spanning two columns
* symbolic operator buttons retain correct accessible names
* presentation symbols still append correct canonical tokens
* clear/backspace/evaluate behavior remains unchanged
* backend selector behavior remains unchanged

Do not write brittle tests that assert CSS class ordering for every button.

Visual layout should primarily be reviewed manually.

## 11. Verification

Run:

`npm test -- --run`

`npm run build`

`npm run lint`

`npm run coverage`

Report all results.

Confirm no dependency changes unless required; ideally package manifests should not change.

## 12. Manual visual verification

Perform or prepare the application for human verification at:

* approximately 320px
* approximately 375px
* approximately 768px
* desktop

Report whether:

* numeric keypad order is conventional
* no horizontal scrolling exists
* 0 spans two columns
* expression/result hierarchy is clear
* controls are comfortably tappable
* backend selector remains clear but secondary
* long expression behavior remains contained

If actual browser visual inspection is not available to the agent, state that clearly and leave final visual approval to the human reviewer.

Do not claim visual verification that did not happen.

## 13. Task tracking

Do not create a new product task.

Treat this as a human-review correction associated with the frontend quality gate.

Update TASK-FE-005 only if its current status/evidence needs a factual correction because of this review.

Do not mark unrelated tasks.

## 14. Prompt audit outcome

Update P019-R1 Outcome with:

* human-review issue addressed
* files modified
* keypad layout correction
* display hierarchy correction
* backend-selector refinement
* accessibility corrections
* responsive changes
* tests/results
* build/lint/coverage results
* dependency status
* whether manual visual inspection was actually performed
* confirmation that no product scope or calculation semantics changed
* confirmation that no backend files were modified

Do not rewrite historical prompts.

## 15. Required report

After implementation report:

1. files modified
2. final keypad row structure
3. display hierarchy
4. button-category styling strategy
5. backend selector changes
6. accessibility changes
7. responsive changes
8. tests added/updated
9. test result
10. build result
11. lint result
12. coverage result
13. dependency changes, if any
14. manual visual-verification status
15. `git diff --stat`
16. `git status`
17. any remaining UX concern

Do not commit.
Do not push.

Stop for human visual review.
```

### Outcome

Completed the P019-R1 human-review correction associated with `TASK-FE-005`. Modified `frontend/src/components/Keypad.tsx`, `frontend/src/components/Display.tsx`, `frontend/src/App.css`, and `frontend/src/App.test.tsx`; recorded P019-R1 and this outcome in `docs/ai-prompts.md`. `TASKS.md` required no additional status change because TASK-FE-005 remains Complete and this correction restores its human-review evidence. No backend file, API client, calculator state, backend configuration, package manifest, or lockfile was modified.

The keypad remains data-driven but now declares a deliberate row model and renders the exact requested four-column arrangement: Clear/Backspace/open parenthesis/close parenthesis; square root/exponentiation/percentage/division; 7/8/9/multiplication; 4/5/6/subtraction; 1/2/3/addition; and one zero spanning two columns/decimal/evaluate. Numeric, operator, secondary, destructive, and primary-action categories have restrained semantic classes rather than positional `nth-child` styling. Numbers use neutral slate controls, operators use a consistent indigo treatment, secondary controls remain subdued, Clear uses a contained dark-red treatment, and Evaluate uses the strongest indigo plus a restrained shadow. Canonical tokens remain `*`, `/`, `^`, and `sqrt(`.

The display now contains a distinct main hierarchy: the expression is a muted, right-aligned 16px single line with contained horizontal scrolling, while the result is a right-aligned primary value scaling from 28px on 320px to 36px on larger screens. Empty result state remains neutral and does not synthesize an answer. Error feedback remains in its separate polite live region beneath the main display hierarchy. Chrome overflow behavior was corrected so short results show no scrollbar, and long-expression scrollbars use a small restrained thumb. The compact Go/Java selector remains above the display; its uppercase 11px legend and smaller segmented choices make it visually secondary while retaining native labeled radios and obvious selection.

Accessible names were corrected to `Multiply`, `Divide`, `Exponentiation`, `Square root`, `Backspace`, and `Evaluate`; Clear retains its native visible accessible name. Every control remains a native type-button, backend choices remain native radios, and existing focus-visible outlines are preserved. The backspace control uses the dedicated `⌫` glyph with both an accessible name and title. No non-semantic clickable element or dependency was introduced.

`frontend/src/App.test.tsx` now verifies conventional semantic digit order `7,8,9,4,5,6,1,2,3,0`, exactly one zero control, functional zero input despite its two-column presentation, and explicit accessible names paired with the visible `×`, `÷`, `xʸ`, `√`, `⌫`, and `=` symbols. Existing tests continue to verify all controls, canonical presentation-token mapping, clear, backspace, API-backed Evaluate behavior, keyboard input, backend selection, loading, application/connectivity errors, response validation, and duplicate-submit prevention. The final `npm test -- --run` passed 2 files with 42 tests and zero failures. `npm run build` passed strict TypeScript and Vite production build. `npm run lint` passed. `npm run coverage` passed with 97.75% statements (87/89), 92.15% branches (47/51), 100% functions (21/21), and 97.70% lines (85/87). `npm ls --depth=0` passed with the unchanged approved dependency graph; `package.json` and `package-lock.json` did not change.

Actual browser visual inspection was performed with the installed headless Chrome at 320px, 375px, 768px, and 1440px, using the unchanged Go backend to display `(2+3)*4 = 20`. Browser measurements confirmed the exact six visual rows, one zero spanning two columns, right-aligned expression/result hierarchy, visible backend selector, and no horizontal page overflow at every width. The calculator was 296px wide at 320px, 351px at 375px, and a centered capped 400px at 768px and 1440px; minimum button heights were 56px on mobile and 60px on larger viewports. Screenshots were visually inspected and showed conventional numeric order, distinct action/operator/number categories, a clear but secondary backend selector, comfortable controls, and balanced desktop presentation. A separate browser scenario preserved all 256 expression characters in the horizontally scrolling display, kept the keypad width fixed, and produced no page overflow. The temporary Vite and Chrome processes were stopped after inspection; temporary evidence remained under `/tmp`.

No product scope, expression grammar, calculation semantic, frontend evaluation, API behavior, backend-selection behavior, or networking behavior changed. No dependency was added. No backend file was modified. The correction introduces no unresolved conflict with SCOPE.md, SPEC.md, DESIGN.md, ADR-004, or TASKS.md. Final visual approval remains with the human reviewer.

## P020 — Java Backend Bootstrap

### Phase

Implementation — Java Backend Bootstrap

### Objective

Execute only `TASK-JAVA-001` from `TASKS.md`: initialize the secondary Java backend as a minimal, buildable, testable Spring Boot service shell without implementing calculator behavior.

### Prompt

```text
Prompt ID: P020

Phase: Implementation — Java Backend Bootstrap

Objective:
Execute only `TASK-JAVA-001` from `TASKS.md`: initialize the secondary Java backend as a minimal, buildable, testable Spring Boot service shell without implementing calculator behavior.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-003 and any other ADR directly referenced by `TASK-JAVA-001`.
8. Read `docs/ai-prompts.md`.
9. Inspect the local Java environment:

   * `java -version`
   * `javac -version`
   * `mvn -version` if Maven is available
10. Record this exact prompt as `P020` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-JAVA-001 — Bootstrap secondary Java backend`

Do NOT implement:

* expression parsing
* arithmetic operations
* calculator domain behavior
* `/api/calculate`
* calculator request/response DTOs
* calculator error mapping
* frontend changes
* Docker
* parity tooling

Do NOT modify:

* `REQUIREMENTS.md`
* `SCOPE.md`
* `SPEC.md`
* `DESIGN.md`
* accepted ADRs

If Java 21 is unavailable or the environment cannot satisfy the approved architecture, stop and report the environment blocker instead of changing the approved Java version.

## 1. Project location

Create:

`backend-java/`

Use the approved technology stack:

* Java 21
* Spring Boot
* Maven
* Maven Wrapper
* Spring Web
* Spring Boot Test
* JaCoCo
* JUnit 5 through the approved Spring testing stack

Do not add Lombok.

Do not add dependencies unrelated to this bootstrap.

## 2. Maven coordinates

Use repository-appropriate Maven coordinates.

Use:

`groupId`:
`io.github.maiandreh`

Use an artifact/name clearly representing the Java calculator backend, for example:

`calculator-java-backend`

Use packages rooted under:

`io.github.maiandreh.calculator`

Do not use:

`com.example`

Do not use a company-owned namespace.

## 3. Spring Boot version

Select a current stable Spring Boot release compatible with Java 21 at implementation time.

Do not modify DESIGN merely to record a patch version.

The selected concrete version belongs in `pom.xml`.

Report the selected version and compatibility rationale factually.

## 4. Maven Wrapper

Include the Maven Wrapper so the backend can be built and tested without requiring a globally installed Maven version.

The intended project commands must use:

`./mvnw`

Do not depend on a developer-specific Maven installation.

Ensure wrapper files that should be version controlled are not ignored.

## 5. Application entry point

Create the minimal Spring Boot application entry point.

Do not create calculator controllers, services, parsers, or DTOs yet.

The application must start successfully.

## 6. Port configuration

Configure Java backend default port:

`8081`

Keep configuration simple.

Prefer standard Spring Boot application configuration.

Do not add a custom configuration framework.

## 7. Health endpoint

A minimal infrastructure health endpoint is permitted for bootstrap verification.

Implement:

`GET /health`

Expected:

HTTP `200`

and a small JSON response equivalent to:

```json
{
  "status": "ok"
}
```

Do not add Spring Boot Actuator merely for this endpoint.

Do not add a new dependency for health checking.

A minimal controller/handler is sufficient.

This endpoint is infrastructure-only and is not calculator functionality.

## 8. Project structure

Keep the bootstrap intentionally small.

A reasonable result may be conceptually similar to:

```text
backend-java/
├── pom.xml
├── mvnw
├── mvnw.cmd
├── .mvn/
└── src/
    ├── main/
    │   ├── java/
    │   │   └── io/github/maiandreh/calculator/
    │   │       ├── CalculatorApplication.java
    │   │       └── health/
    │   │           └── HealthController.java
    │   └── resources/
    │       └── application.properties
    └── test/
        └── java/
            └── ...
```

Do not create future domain/parser packages as placeholders.

Do not introduce:

* repositories
* service interfaces
* service implementations
* factories
* strategies
* command patterns
* dependency-injection abstractions beyond normal Spring constructor injection when needed
* persistence
* messaging
* authentication

## 9. Health endpoint test

Add only bootstrap-level tests for behavior that exists now.

At minimum verify:

* `/health` returns HTTP 200
* response JSON contains the expected status

Use a focused Spring MVC/MockMvc test if appropriate.

Do not create calculator tests.

Do not create parser tests.

Do not create acceptance tests for functionality that does not exist yet.

## 10. JaCoCo

Configure JaCoCo in Maven so coverage can be generated later.

Do not add an arbitrary coverage threshold.

Generated coverage artifacts must remain ignored by Git.

Do not commit `target/`.

## 11. Repository hygiene

Verify the root `.gitignore` already excludes Maven-generated output:

`target/`

Also verify IntelliJ metadata remains ignored.

Do not create or commit IDE project metadata.

Modify `.gitignore` only if a concrete missing generated artifact requires it.

## 12. Dependency review

After initialization, inspect Maven dependencies using an appropriate Wrapper command such as:

`./mvnw dependency:tree`

Report direct/important dependencies by category:

* Spring runtime
* test
* build/coverage

Confirm:

* no Lombok
* no database driver
* no persistence dependency
* no expression library
* no unnecessary production dependency

## 13. Verification

From `backend-java/`, run:

`./mvnw test`

`./mvnw package`

Generate/confirm JaCoCo coverage using the configured Maven lifecycle or appropriate goal.

Also confirm the application starts successfully.

Then manually verify:

```bash
curl -i http://localhost:8081/health
```

Expected observable behavior:

* HTTP 200
* JSON health response

Stop the application after verification.

## 14. Existing project preservation

Do not modify:

* `backend-go/`
* `frontend/`

Do not run repository-wide automatic refactors.

The completed Go reference backend and frontend are outside this task.

## 15. Task tracking

Update only:

`TASK-JAVA-001`

Mark it Complete only if its Definition of Done is fully satisfied:

* Java 21 project created
* Spring Boot/Maven bootstrap complete
* Maven Wrapper works
* port 8081 configured
* health behavior works
* tests pass
* build/package passes
* JaCoCo generation works
* approved dependencies only
* no calculator domain behavior exists

Do not modify TASK-JAVA-002 or later task statuses.

## 16. Prompt audit

Update P020 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-JAVA-001 result
* Java version
* javac version
* Spring Boot version selected
* Maven Wrapper version where available
* files created/modified
* package namespace
* dependency summary
* test result
* build/package result
* JaCoCo result
* health smoke-test result
* task status
* confirmation that no calculator/parser behavior was implemented
* confirmation that no expression library or Lombok was introduced
* confirmation that frontend and Go backend were not modified

Do not rewrite previous prompts or outcomes.

## 17. Required report

After implementation report:

1. Java version
2. javac version
3. Spring Boot version
4. project coordinates
5. resulting backend-java structure
6. files created/modified
7. dependency summary
8. health test result
9. Maven test result
10. package/build result
11. JaCoCo result
12. manual `/health` result
13. repository hygiene result
14. `git diff --stat`
15. `git status`
16. TASK-JAVA-001 status
17. remaining work beginning with TASK-JAVA-002
18. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-JAVA-001 and wait for human review.
```

### Outcome

Completed `TASK-JAVA-001`. The available toolchain was Eclipse Temurin OpenJDK 21.0.12 LTS (`java` and `javac` 21.0.12), with global Maven 3.9.16. Created `backend-java/` as `io.github.maiandreh:calculator-java-backend:0.0.1-SNAPSHOT`, using packages rooted at `io.github.maiandreh.calculator`, Spring Boot 3.5.16, Java 21, Maven Wrapper 3.9.16 generated by Maven Wrapper Plugin 3.3.4 in `only-script` mode, Spring Web, Spring Boot Test with JUnit Jupiter 5.12.2, and JaCoCo 0.8.15. Spring Boot 3.5.16 was selected from the current stable 3.5 line because the initially inspected Spring Boot 4.1.0 starter resolves JUnit Jupiter 6, conflicting with this prompt's explicit JUnit 5 requirement; 3.5.16 supports Java 21 and satisfies both approved constraints.

Created `backend-java/pom.xml`, `backend-java/mvnw`, `backend-java/mvnw.cmd`, `backend-java/.mvn/wrapper/maven-wrapper.properties`, `backend-java/src/main/java/io/github/maiandreh/calculator/CalculatorApplication.java`, `backend-java/src/main/java/io/github/maiandreh/calculator/health/HealthController.java`, `backend-java/src/main/resources/application.properties`, and `backend-java/src/test/java/io/github/maiandreh/calculator/health/HealthControllerTest.java`. Modified only `TASKS.md` to mark TASK-JAVA-001 Complete and `docs/ai-prompts.md` for the required P020 audit trail. The application defaults to port 8081 and exposes only the infrastructure endpoint `GET /health`, returning HTTP 200 and `{"status":"ok"}`. The focused Spring Boot HTTP test verifies the status, JSON content type, and exact body.

`./mvnw test` passed with 1 test, 0 failures, 0 errors, and 0 skipped. `./mvnw package` passed and produced the executable Spring Boot jar under ignored `target/`. `./mvnw verify` passed and JaCoCo generated `target/site/jacoco/` after analyzing 2 production classes; coverage recorded 10/15 instructions, 3/5 lines, and 3/4 methods, with no threshold introduced. `./mvnw dependency:tree` passed. The only direct dependencies are `spring-boot-starter-web` at compile scope and `spring-boot-starter-test` at test scope; JaCoCo and Spring Boot Maven plugins are build tooling. No Lombok, database driver, persistence starter, or calculator expression dependency was introduced. Spring Framework's transitive `spring-expression` module is part of the required Spring Web framework and is not used as a calculator evaluator.

The packaged application started successfully on the configured default port 8081. `curl -i http://localhost:8081/health` returned HTTP 200, `Content-Type: application/json`, and `{"status":"ok"}`; the application then completed a graceful shutdown. Root `.gitignore` already ignores `target/`, `.idea/`, and `*.iml`, so no ignore-file change was necessary and generated Maven/JaCoCo output is absent from Git status. TASK-JAVA-001 is Complete; TASK-JAVA-002 and all later tasks remain unchanged. No parser, arithmetic, calculator domain behavior, `/api/calculate`, calculator DTO, or calculator error mapping was implemented. No frontend or Go-backend file was modified, and no Docker or parity work was started. No approved artifact was changed or contradicted.

## P021 — Java Grammar and Core Arithmetic

### Phase

Implementation — Java Grammar and Core Arithmetic

### Objective

Execute only `TASK-JAVA-002` from `TASKS.md`: independently implement the bounded expression grammar foundation and mandatory arithmetic semantics in Java, without HTTP concerns and without copying the Go implementation structure.

### Prompt

```text
Prompt ID: P021

Phase: Implementation — Java Grammar and Core Arithmetic

Objective:
Execute only `TASK-JAVA-002` from `TASKS.md`: independently implement the bounded expression grammar foundation and mandatory arithmetic semantics in Java, without HTTP concerns and without copying the Go implementation structure.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and ADR-003.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P021` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-JAVA-002 — Implement Java grammar and core arithmetic`

Do NOT implement:

* exponentiation
* unary sign semantics beyond what is strictly necessary for the approved grammar foundation
* percentage
* square root evaluation
* finite-result quality gate
* REST calculator endpoint
* request/response DTOs
* HTTP error mapping
* frontend changes
* Go changes
* Docker
* parity tooling

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the Java implementation exposes a conflict with `SPEC.md`, stop and report it rather than changing the specification.

## 1. Domain boundary

Create the smallest appropriate Java package structure for expression parsing/evaluation.

Keep the domain independent from:

* Spring MVC
* HTTP
* JSON
* controllers
* transport DTOs

Do not create a service wrapper merely to separate the domain from HTTP.

A direct calculator/evaluator domain package is sufficient.

## 2. Independent Java implementation

Implement the same approved behavior as the Go reference, but do not copy Go source structure mechanically.

Use idiomatic Java 21.

The shared artifact is `SPEC.md`, not source code.

Do not inspect Go code merely to reproduce implementation details unless needed to diagnose a parity issue later.

## 3. Closed grammar foundation

Support the approved canonical syntax foundation:

* decimal numeric literals
* whitespace
* `+`
* `-`
* `*`
* `/`
* `^`
* `%`
* parentheses
* canonical `sqrt(...)` recognition where structurally required
* complete input consumption

The language remains a closed allowlist.

Reject unsupported syntax deterministically.

Do not use:

* script engines
* JavaScript engines
* `ScriptEngine`
* SpEL
* expression-evaluation libraries
* parser generators

## 4. Numeric literals

Support the approved decimal forms:

* `0`
* `12`
* `12.5`
* `0.5`
* `.5`

Reject:

* `.`
* `1.2.3`
* `1e3`
* locale comma forms
* unsupported numeric formats

Use Java `double` semantics consistent with the approved binary64 model.

Do not use `BigDecimal` for evaluation.

## 5. Parentheses and input consumption

Support balanced and nested grouping.

Reject:

* unmatched opening parenthesis
* unmatched closing parenthesis
* invalid empty grouping
* incomplete/trailing syntax
* valid prefix followed by unsupported content

Require complete expression consumption.

## 6. Expression length

Preserve the `SPEC.md` maximum expression length of 256 characters at the direct domain/evaluator entry boundary.

The Java domain must remain safe when invoked directly without HTTP.

Do not rely solely on future controller validation.

## 7. Basic arithmetic

Implement:

* addition
* subtraction
* multiplication
* division

Required representative behavior:

`2 + 3 = 5`

`7 - 2 = 5`

`4 * 5 = 20`

`10 / 4 = 2.5`

## 8. Precedence

Implement conventional precedence:

* multiplication/division bind tighter than addition/subtraction
* parentheses override precedence

Required:

`2 + 3 * 4 = 14`

`(2 + 3) * 4 = 20`

`12 / 3 + 2 = 6`

`12 / (3 + 1) = 3`

Do not implement exponentiation semantics yet.

## 9. Associativity

Binary:

* `+`
* `-`
* `*`
* `/`

must be left-associative.

Required:

`10 - 3 - 2 = 5`

`20 / 5 / 2 = 2`

## 10. Division by zero

Division by numeric zero must produce the approved transport-independent domain error category.

Treat positive and negative zero as zero divisors according to Java binary64 semantics.

Do not return infinity.

Do not map the error to HTTP yet.

## 11. Parser architecture

Use a small custom parser consistent with ADR-002.

A recursive-descent or equivalent precedence parser is appropriate.

Keep it small.

Do not introduce:

* parser frameworks
* visitor frameworks
* generic AST infrastructure
* strategy/factory patterns
* operator registries
* reflection-based dispatch

An AST is optional and should only exist if it materially simplifies this bounded grammar.

Direct evaluation while parsing is acceptable.

## 12. Error model

Introduce only domain error categories required by this task.

At minimum distinguish:

* invalid expression
* division by zero

Keep them transport-independent.

Do not include HTTP status codes.

Do not expose internal parser diagnostics as future public API messages.

Internal developer-facing details may exist if clearly separated from canonical public messages.

## 13. Spring independence

Direct domain tests must instantiate/use the evaluator without:

* loading Spring
* starting an application context
* using MockMvc
* opening a server port

The expression domain must be testable as plain Java.

## 14. Tests

Use JUnit 5.

Derive tests from `TASK-JAVA-002` and the referenced acceptance criteria.

Cover at minimum:

### Valid literals

* integer
* decimal
* leading-dot decimal
* whitespace
* grouped value
* nested groups

### Invalid grammar

* `.`
* `1.2.3`
* `1e3`
* unsupported identifier
* unsupported function
* trailing operator
* `2 ++ 3` if invalid per SPEC
* unbalanced parentheses
* invalid empty grouping
* unsupported trailing content
* > 256-character expression

### Arithmetic

* addition
* subtraction
* multiplication
* division
* decimal results

### Precedence

* multiplication before addition
* grouping overriding precedence

### Associativity

* chained subtraction
* chained division

### Division by zero

* positive zero
* negative zero where constructible through the approved expression syntax

Prefer parameterized/table-style JUnit tests where they improve clarity.

Do not write MockMvc tests.

## 15. Existing bootstrap preservation

Do not regress TASK-JAVA-001.

The backend must continue to:

* build through `./mvnw`
* start on port 8081
* expose `/health`
* pass bootstrap tests
* generate JaCoCo output
* use approved dependencies only

Do not modify `backend-go/` or `frontend/`.

## 16. Dependency discipline

Do not add a production dependency.

The parser must use Java/JDK functionality only.

After implementation inspect:

`./mvnw dependency:tree`

Confirm no expression/parser library or unrelated dependency appeared.

## 17. Verification

From `backend-java/`, run:

`./mvnw test`

`./mvnw package`

Generate/confirm JaCoCo report.

Also inspect:

`./mvnw dependency:tree`

Report:

* number of tests where practical
* failures/errors
* Maven result
* package/build result
* coverage result
* dependency result

## 18. Task tracking

Update only:

`TASK-JAVA-002`

Mark it Complete only if its complete Verification and Definition of Done are satisfied.

Do not modify TASK-JAVA-003 or later tasks.

## 19. Prompt audit

Update P021 Outcome in `docs/ai-prompts.md` with factual evidence including:

* TASK-JAVA-002 result
* files created/modified
* parser/evaluator structure
* grammar foundation implemented
* basic arithmetic implemented
* precedence behavior
* associativity behavior
* division-by-zero handling
* tests/results
* package/build result
* JaCoCo result
* dependency result
* task status
* confirmation that exponentiation, percentage, square root evaluation, REST calculator API, Docker, and parity tooling were not implemented
* confirmation that frontend and Go backend were not modified

Do not rewrite previous prompts/outcomes.

## 20. Required report

After implementation report:

1. files created/modified
2. resulting Java domain structure
3. concise parser design explanation
4. representative grammar tests
5. arithmetic tests
6. precedence tests
7. associativity tests
8. division-by-zero test
9. `./mvnw test` result
10. `./mvnw package` result
11. JaCoCo result
12. dependency tree summary
13. `git diff --stat`
14. `git status`
15. TASK-JAVA-002 status
16. remaining work beginning with TASK-JAVA-003
17. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-JAVA-002 and wait for human review.
```

### Outcome

Completed `TASK-JAVA-002`. Added the plain-Java domain package `io.github.maiandreh.calculator.domain` with `ExpressionEvaluator` and `CalculationException`, plus direct JUnit 5 coverage in `ExpressionEvaluatorTest`. The evaluator uses a small recursive-descent parser that evaluates while parsing: additive and multiplicative loops implement precedence and left associativity, primary parsing handles decimal literals and nested parentheses, and the minimal unary stage needed by the approved grammar permits signed zero detection. The entry boundary rejects null, blank, over-256-Unicode-character, incomplete, malformed, unsupported, or trailing input. Domain exceptions distinguish `INVALID_EXPRESSION` from `DIVISION_BY_ZERO` without HTTP concepts or parser diagnostics.

Implemented Java `double` addition, subtraction, multiplication, and division. Verified `2 + 3 = 5`, `7 - 2 = 5`, `4 * 5 = 20`, `10 / 4 = 2.5`, binary64 decimal behavior, multiplication/division precedence, parenthesized precedence overrides, and left-associative subtraction/division. Both `1 / 0` and `1 / -0` produce the division-by-zero category. Valid decimal forms, whitespace, grouping, nested grouping, full consumption, a valid 256-character expression, and the overlength boundary are covered. Invalid cases include `.`, `1.2.3`, `1e3`, locale commas, identifiers, unsupported functions, `2 +`, `2 ++ 3`, unbalanced/empty grouping, trailing content, and advanced operators whose evaluation is intentionally deferred.

Final `./mvnw test` passed 43 tests: 42 plain domain cases and the preserved health integration test, with 0 failures, 0 errors, and 0 skipped. `./mvnw package` and `./mvnw verify` both completed with BUILD SUCCESS. JaCoCo 0.8.15 generated its report after analyzing 6 compiled classes, recording 95.81% instruction coverage (343/358), 92.39% line coverage (85/92), 58/64 branches, and 86.79% method coverage (46/53), with no threshold. `./mvnw dependency:tree` passed and the dependency graph is unchanged: Spring Boot Web is the sole direct production dependency and Spring Boot Test is test-scoped; no parser or calculator-expression dependency was added. Spring's transitive framework `spring-expression` module is not used by the domain.

`TASK-JAVA-002` is Complete and `TASK-JAVA-003` remains Not Started. Exponentiation, percentage, square-root evaluation, the comprehensive finite-result gate, `/api/calculate`, transport DTOs, HTTP error mapping, Docker, and parity tooling were not implemented. No frontend or Go-backend file was modified. The implementation was derived from `SPEC.md` and the Java ADRs without inspecting or copying Go source. No conflict or deviation from the approved artifacts was found.

## P022 — Java Advanced Expression Semantics

### Phase

Implementation — Java Advanced Expression Semantics

### Objective

Execute only `TASK-JAVA-003` from `TASKS.md`: complete the advanced expression semantics in the Java domain while preserving the exact behavior defined by `SPEC.md` and without introducing HTTP concerns.

### Prompt

```text
Prompt ID: P022

Phase: Implementation — Java Advanced Expression Semantics

Objective:
Execute only `TASK-JAVA-003` from `TASKS.md`: complete the advanced expression semantics in the Java domain while preserving the exact behavior defined by `SPEC.md` and without introducing HTTP concerns.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and ADR-003.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P022` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-JAVA-003 — Implement Java advanced expression semantics`

Do NOT implement:

- finite-result quality gate beyond what is strictly necessary for specific domain errors
- REST calculator endpoint
- request/response DTOs
- HTTP error mapping
- frontend changes
- Go changes
- Docker
- parity tooling

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the current Java parser structure cannot satisfy the approved precedence/associativity semantics cleanly, stop and report the conflict before changing architecture.

## 1. Unary signs

Support unary:

- `+`
- `-`

Required examples:

`-2 = -2`

`+2 = 2`

`3 * -2 = -6`

Preserve the approved grammar restriction that malformed repeated operators such as `2 ++ 3` remain invalid where required by SPEC.

Do not broadly accept repeated operators merely because unary operators exist.

## 2. Exponentiation

Implement:

`a ^ b`

using Java `double` / binary64-equivalent semantics.

Exponentiation must be right-associative.

Required:

`2 ^ 3 ^ 2 = 512`

because it means:

`2 ^ (3 ^ 2)`

Do not implement left-associative exponentiation.

## 3. Unary-minus and exponentiation precedence

This behavior must exactly match SPEC.

Required:

`-2 ^ 2 = -4`

Required:

`(-2) ^ 2 = 4`

Required:

`2 ^ -2 = 0.25`

The implementation must not let a convenience parser structure redefine these cases.

Add direct tests proving each one.

## 4. Percentage

Implement postfix percentage syntax.

Exact semantics:

`x% = x / 100`

Required:

`20% = 0.2`

`150 * 20% = 30`

`100 + 20% = 100.2`

Do not implement context-sensitive consumer-calculator percentage semantics.

`100 + 20%` must not become `120`.

Do not invent semantics for repeated postfix `%` if SPEC does not allow them.

## 5. Square root

Implement canonical:

`sqrt(expression)`

Required:

`sqrt(81) = 9`

`sqrt(9 + 7) = 4`

Square root must accept a full expression argument according to the approved grammar.

Do not add Unicode `√` as backend syntax.

The frontend presentation layer may later use `√`, but transport/domain syntax remains canonical `sqrt(...)`.

## 6. Invalid real-number domain

The product supports real-number results only.

For:

`sqrt(-1)`

return the approved transport-independent invalid-domain error category.

Do not return NaN as a successful domain result for this case.

Do not introduce complex numbers.

Do not map the error to HTTP yet.

## 7. Parser structure

Extend the existing bounded custom parser minimally.

Preserve:

- closed grammar
- complete input consumption
- decimal literals
- grouping
- basic arithmetic precedence
- left associativity of +, -, *, /
- right associativity of ^
- postfix percentage semantics
- unary/power precedence

Do not introduce:

- expression libraries
- parser generators
- generic function registries for hypothetical functions
- AST/visitor frameworks without concrete need
- strategy/factory abstractions
- reflection-based operator dispatch

Direct evaluation during parsing remains acceptable.

## 8. Function recognition

Square root is the only approved function.

If the parser already has a minimal identifier mechanism, restrict it to `sqrt`.

Otherwise, implement the smallest explicit recognition needed.

Unsupported functions such as:

`sin(1)`

must remain invalid.

Do not generalize for future functions.

## 9. Existing semantics preservation

Do not regress:

- numeric literal rules
- scientific-notation rejection
- whitespace
- parentheses
- expression length
- syntax rejection
- addition
- subtraction
- multiplication
- division
- division by zero
- arithmetic precedence
- left associativity

Representative existing domain tests must remain green.

## 10. Tests

Use direct JUnit 5 domain tests.

Derive them from `TASK-JAVA-003` and referenced acceptance criteria.

Cover at minimum:

### Unary
- `-2`
- `+2`
- `3 * -2`

### Exponentiation
- `2 ^ 3 = 8`
- `5 ^ 0 = 1`
- `2 ^ -2 = 0.25`

### Associativity
- `2 ^ 3 ^ 2 = 512`

### Unary/power precedence
- `-2 ^ 2 = -4`
- `(-2) ^ 2 = 4`

### Percentage
- `20% = 0.2`
- `150 * 20% = 30`
- `100 + 20% = 100.2`

### Square root
- `sqrt(81) = 9`
- `sqrt(9 + 7) = 4`
- a representative decimal square root if useful

### Invalid domain
- `sqrt(-1)` returns the approved invalid-domain category

### Invalid syntax
- malformed sqrt syntax
- unsupported function still rejected
- malformed percentage syntax remains rejected according to SPEC

### Regression
- representative core arithmetic
- arithmetic precedence
- division by zero
- malformed expression rejection

Prefer parameterized tests where they improve readability.

Do not add MockMvc tests.

## 11. Domain errors

Keep errors transport-independent.

At minimum, preserve distinct categories for:

- invalid expression
- division by zero
- invalid real-number domain

Do not introduce HTTP status codes or REST messages here.

Do not leak Java math/parser implementation details into future public messages.

## 12. Finite-result task boundary

TASK-JAVA-004 remains responsible for the complete guarantee that successful results are finite.

However, this task must not allow `sqrt(-1)` to become a successful NaN.

Use the more specific INVALID_DOMAIN category as required by SPEC.

Do not mark TASK-JAVA-004 complete.

## 13. Existing bootstrap preservation

Do not regress TASK-JAVA-001 or TASK-JAVA-002.

The Java backend must continue to:

- build through Maven Wrapper
- start on port 8081
- expose `/health`
- pass bootstrap/domain tests
- generate JaCoCo
- use approved dependencies only

Do not modify `backend-go/` or `frontend/`.

## 14. Dependency discipline

Do not add production dependencies.

After implementation run:

`./mvnw dependency:tree`

Confirm no:

- expression library
- parser library
- Lombok
- unrelated dependency

was introduced.

## 15. Verification

From `backend-java/`, run:

`./mvnw test`

`./mvnw package`

Generate/confirm JaCoCo report.

Run:

`./mvnw dependency:tree`

Report:

- total tests where practical
- failures/errors
- package/build result
- JaCoCo result
- dependency result

## 16. Task tracking

Update only:

`TASK-JAVA-003`

Mark it Complete only if its full Definition of Done is satisfied.

Do not modify TASK-JAVA-004 or later task statuses.

## 17. Prompt audit

Update P022 Outcome in `docs/ai-prompts.md` with factual evidence including:

- TASK-JAVA-003 result
- files created/modified
- unary semantics
- exponentiation semantics
- right associativity
- unary/exponent precedence
- signed exponent behavior
- percentage semantics
- square-root semantics
- invalid-domain behavior
- tests/results
- package/build result
- JaCoCo result
- dependency result
- task status
- confirmation that REST calculator API, Docker, and parity tooling were not implemented
- confirmation that frontend and Go backend were not modified

Do not rewrite prior prompts/outcomes.

## 18. Required report

After implementation report:

1. files created/modified
2. concise parser changes
3. result/test for `2 ^ 3 ^ 2`
4. result/test for `-2 ^ 2`
5. result/test for `(-2) ^ 2`
6. result/test for `2 ^ -2`
7. result/test for `20%`
8. result/test for `150 * 20%`
9. result/test for `100 + 20%`
10. result/test for `sqrt(81)`
11. result/test for `sqrt(9 + 7)`
12. invalid-domain test for `sqrt(-1)`
13. representative regression results
14. `./mvnw test`
15. `./mvnw package`
16. JaCoCo result
17. dependency tree summary
18. `git diff --stat`
19. `git status`
20. TASK-JAVA-003 status
21. remaining work beginning with TASK-JAVA-004
22. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-JAVA-003 and wait for human review.
```

### Outcome

Completed `TASK-JAVA-003`. Modified `backend-java/src/main/java/io/github/maiandreh/calculator/domain/ExpressionEvaluator.java`, `backend-java/src/main/java/io/github/maiandreh/calculator/domain/CalculationException.java`, and `backend-java/src/test/java/io/github/maiandreh/calculator/domain/ExpressionEvaluatorTest.java`; updated only TASK-JAVA-003 in `TASKS.md` and recorded P022 in this audit trail. The existing direct-evaluation recursive-descent parser was extended minimally with explicit `power`, `postfix`, and `sqrt` primary stages. No AST, parser framework, function registry, reflection, service layer, or dependency was introduced.

Unary plus/minus now support `-2`, `+2`, and `3 * -2`. Exponentiation uses `Math.pow`, parses its exponent through the unary level, and is right-associative: `2 ^ 3 ^ 2 = 512`, `-2 ^ 2 = -4`, `(-2) ^ 2 = 4`, and `2 ^ -2 = 0.25`. Postfix percentage is compositional division by 100: `20% = 0.2`, `150 * 20% = 30`, and `100 + 20% = 100.2`. Repeated postfix percentage remains accepted because the approved SPEC grammar explicitly defines `postfix ::= primary ("%")*`. Square root is recognized explicitly as the sole function, accepts a full expression, and yields `sqrt(81) = 9` and `sqrt(9 + 7) = 4`; Unicode square-root syntax, split identifiers, unsupported functions, and malformed calls remain invalid.

Added the transport-independent `INVALID_DOMAIN` category. `sqrt(-1)` returns that category instead of successful NaN; `Math.pow` NaN outcomes are likewise classified as invalid real-domain operations, while comprehensive infinity/non-finite-result enforcement remains deferred to TASK-JAVA-004. Existing invalid-expression and division-by-zero categories are preserved, including `2 ++ 3` rejection and positive/negative-zero divisor handling.

Final `./mvnw test` passed 68 tests: 67 direct domain cases and the preserved health integration test, with 0 failures, 0 errors, and 0 skipped. `./mvnw package` and `./mvnw verify` completed with BUILD SUCCESS. JaCoCo 0.8.15 analyzed 6 compiled classes and reported 96.25% instruction coverage (436/453), 92.50% branch coverage (74/80), 94.07% line coverage (111/118), and 89.06% method coverage (57/64), with no threshold. `./mvnw dependency:tree` passed with the unchanged direct dependency graph: Spring Boot Web at compile scope and Spring Boot Test at test scope. No expression/parser library, Lombok, or unrelated dependency was introduced; Spring Framework's transitive `spring-expression` module is not used by the calculator domain.

`TASK-JAVA-003` is Complete and `TASK-JAVA-004` remains Not Started. The Maven Wrapper build, port 8081 configuration, `/health`, core grammar/arithmetic behavior, and bootstrap test remain intact. The REST calculator API, request/response DTOs, HTTP mapping, comprehensive finite-result gate, Docker, and parity tooling were not implemented. No frontend or Go-backend file was modified. No deviation or conflict with SPEC, DESIGN, ADR-002, ADR-003, or TASKS was found.

## P023 — Java Finite Result Enforcement

### Phase

Implementation — Java Finite Result Enforcement

### Objective

Execute only `TASK-JAVA-004` from `TASKS.md`: guarantee that the Java expression domain never returns NaN or infinity as a successful result and that non-finite outcomes are classified according to `SPEC.md`.

### Prompt

```text
Prompt ID: P023

Phase: Implementation — Java Finite Result Enforcement

Objective:
Execute only `TASK-JAVA-004` from `TASKS.md`: guarantee that the Java expression domain never returns NaN or infinity as a successful result and that non-finite outcomes are classified according to `SPEC.md`.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and ADR-003.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P023` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-JAVA-004 — Enforce Java finite-result behavior`

Do NOT implement:

- REST calculator endpoint
- request/response DTOs
- HTTP error mapping
- frontend changes
- Go changes
- Docker
- parity tooling

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the current evaluator exposes a conflict with `SPEC.md`, stop and report it instead of changing the contract.

## 1. Finite success invariant

The evaluator must guarantee:

A successful evaluation result is always a finite Java `double`.

Successful evaluation must never return:

- `NaN`
- positive infinity
- negative infinity

Use idiomatic Java/JDK checks such as `Double.isFinite`.

Do not add dependencies.

## 2. Error precedence

Preserve the more specific approved domain errors.

Examples:

- division by zero → division-by-zero category
- square root of a negative value → invalid-domain category

These must not be replaced by a generic non-finite-result error merely because Java floating-point operations could otherwise produce infinity or NaN.

Use the non-finite-result category only when no more specific approved domain error applies.

## 3. Non-finite result cases

Handle valid expressions whose numeric evaluation would otherwise produce a non-finite binary64 result.

Representative examples may include:

- exponentiation overflow
- multiplication overflow
- another finite-input operation resulting in infinity

The evaluator boundary should enforce the finite-success invariant regardless of which operator caused the result.

Do not scatter unnecessary finite checks through every parser method if one clear evaluation boundary provides the guarantee.

## 4. Non-finite exponentiation/domain cases

Be careful to distinguish:

### Overflow
A valid real-valued expression whose result exceeds finite binary64 range.

Expected category:
`NON_FINITE_RESULT`

### Unsupported real-number domain
A mathematically unsupported real result, where `SPEC.md` requires domain rejection.

Expected category:
`INVALID_DOMAIN`

Do not rely only on whether `Math.pow` happens to return NaN or infinity; preserve the specification's semantic category where it defines one.

## 5. Literal handling

Do not add support for textual non-finite values such as:

- `NaN`
- `Infinity`
- `Inf`

Do not add scientific notation.

Previously invalid literal forms must remain invalid expressions.

## 6. Domain error model

Ensure the Java domain has a distinct transport-independent category corresponding to:

`NON_FINITE_RESULT`

It must remain distinguishable from:

- invalid expression
- division by zero
- invalid domain

Do not add HTTP status codes or REST messages here.

The future transport layer will map domain categories to the canonical API contract.

## 7. Architecture

Keep finite-result enforcement inside the domain/evaluator boundary.

The domain must remain safe when called directly by tests without Spring MVC.

Do not implement finite validation only in a future controller.

Do not introduce:

- service wrappers
- validation frameworks
- expression libraries
- new architecture layers

## 8. Existing semantics preservation

Do not regress:

- numeric literals
- whitespace
- grouping
- expression length
- invalid grammar rejection
- basic arithmetic
- precedence
- associativity
- division by zero
- unary signs
- exponentiation
- right associativity
- `-2 ^ 2 = -4`
- `(-2) ^ 2 = 4`
- `2 ^ -2 = 0.25`
- percentage
- square root
- invalid square-root domain

## 9. Tests

Use direct JUnit 5 domain tests.

Derive them from `TASK-JAVA-004` and relevant acceptance criteria.

Cover at minimum:

### Finite success
- representative integer arithmetic
- representative decimal result
- representative advanced-operation result

### Non-finite result
- deterministic exponentiation overflow
- another representative overflow path if practical

### Error precedence
- division by zero still returns division-by-zero category
- negative square root still returns invalid-domain category

### Invalid input preservation
- textual `NaN` remains invalid
- textual `Infinity` remains invalid
- scientific notation remains invalid

### Regression
- representative arithmetic precedence
- right-associative exponentiation
- percentage
- square root

Do not add MockMvc tests.

## 10. JaCoCo

The new finite-result paths must be represented in the domain coverage report.

Do not introduce a percentage coverage threshold.

Coverage remains supporting evidence.

## 11. Dependency discipline

Do not add production dependencies.

After implementation run:

`./mvnw dependency:tree`

Confirm no new dependency appeared.

## 12. Existing bootstrap preservation

Do not regress TASK-JAVA-001 through TASK-JAVA-003.

The backend must continue to:

- build via Maven Wrapper
- start on port 8081
- expose `/health`
- pass all existing tests
- generate JaCoCo
- use only approved dependencies

Do not modify `backend-go/` or `frontend/`.

## 13. Verification

From `backend-java/`, run:

`./mvnw test`

`./mvnw package`

Generate/confirm JaCoCo report.

Run:

`./mvnw dependency:tree`

Report:

- number of tests where practical
- failures/errors
- package/build result
- JaCoCo result
- dependency result

## 14. Task tracking

Update only:

`TASK-JAVA-004`

Mark it Complete only if:

- every successful domain result is finite
- overflow/non-finite cases are deterministic
- specific error precedence remains correct
- tests pass
- build/package passes
- coverage generation passes
- no new dependency exists

Do not modify TASK-JAVA-005 or later task statuses.

## 15. Prompt audit

Update P023 Outcome in `docs/ai-prompts.md` with factual evidence including:

- TASK-JAVA-004 result
- files created/modified
- finite-result invariant
- representative overflow handling
- non-finite domain category
- division-zero error precedence
- invalid-domain error precedence
- tests/results
- package/build result
- JaCoCo result
- dependency result
- task status
- confirmation that REST calculator API, Docker, and parity tooling were not implemented
- confirmation that frontend and Go backend were not modified

Do not rewrite prior prompts/outcomes.

## 16. Required report

After implementation report:

1. files created/modified
2. where the finite-result invariant is enforced
3. representative exponentiation-overflow test/result
4. another overflow test/result if implemented
5. division-by-zero precedence test/result
6. negative-square-root precedence test/result
7. representative regression tests
8. `./mvnw test`
9. `./mvnw package`
10. JaCoCo result
11. dependency tree summary
12. `git diff --stat`
13. `git status`
14. TASK-JAVA-004 status
15. remaining work beginning with TASK-JAVA-005
16. any deviation/conflict with approved artifacts

Do not commit.
Do not push.

Stop after TASK-JAVA-004 and wait for human review.
```

### Outcome

Completed `TASK-JAVA-004`. Modified `backend-java/src/main/java/io/github/maiandreh/calculator/domain/ExpressionEvaluator.java`, `backend-java/src/main/java/io/github/maiandreh/calculator/domain/CalculationException.java`, and `backend-java/src/test/java/io/github/maiandreh/calculator/domain/ExpressionEvaluatorTest.java`; updated only TASK-JAVA-004 in `TASKS.md` and recorded P023 in this audit trail. Added the distinct transport-independent `NON_FINITE_RESULT` domain category without HTTP status or message concerns.

The finite-success invariant is enforced once at the public `ExpressionEvaluator.evaluate` boundary, after parsing and complete-input validation and immediately before returning the result. `Double.isFinite` rejects either infinity or NaN that reaches that boundary, regardless of the operation that produced it. Parser/domain exceptions occur first, preserving the more specific `DIVISION_BY_ZERO` result for positive or negative zero divisors and `INVALID_DOMAIN` for negative square roots and other unsupported real-number power domains.

Direct JUnit coverage verifies deterministic exponentiation overflow (`10 ^ 1000`), negative infinity (`-10 ^ 1000`), and multiplication overflow from finite operands (`10 ^ 200 * 10 ^ 200`) as `NON_FINITE_RESULT`. It also verifies finite integer, decimal, exponentiation, percentage, and square-root successes; division-zero and negative-square-root precedence; rejection of textual `NaN`, `Infinity`, `Inf`, and scientific notation; and the existing arithmetic, precedence, associativity, unary/power, percentage, square-root, length, and syntax behavior.

Final `./mvnw test` passed 80 tests: 79 direct domain cases and the preserved health integration test, with 0 failures, 0 errors, and 0 skipped. `./mvnw package` and `./mvnw verify` completed with BUILD SUCCESS. JaCoCo 0.8.15 analyzed 6 compiled classes and reported 96.36% instruction coverage (450/467), 92.68% branch coverage (76/82), 94.21% line coverage (114/121), and 89.23% method coverage (58/65), with no threshold. `./mvnw dependency:tree` passed with the unchanged dependency graph: Spring Boot Web is the only direct production dependency and Spring Boot Test is test-scoped. No new dependency, expression/parser library, validation framework, or architecture layer was added.

`TASK-JAVA-004` is Complete and `TASK-JAVA-005` remains Not Started. The Maven Wrapper build, port 8081 configuration, `/health`, and all earlier Java domain semantics remain intact. The REST calculator API, request/response DTOs, HTTP error mapping, Docker, and parity tooling were not implemented. No frontend or Go-backend file was modified. No deviation or conflict with SPEC, DESIGN, ADR-002, ADR-003, or TASKS was found.

## P024 — Java REST API

### Prompt ID

P024

### Phase

Implementation — Java REST API

### Objective

Execute only `TASK-JAVA-005` from `TASKS.md`: expose the completed Java calculator domain through the shared REST contract defined in `SPEC.md`, preserving exact observable parity with the approved API contract and keeping HTTP concerns separate from domain evaluation.

### Prompt

````text
Prompt ID: P024

Phase: Implementation — Java REST API

Objective:
Execute only `TASK-JAVA-005` from `TASKS.md`: expose the completed Java calculator domain through the shared REST contract defined in `SPEC.md`, preserving exact observable parity with the approved API contract and keeping HTTP concerns separate from domain evaluation.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-003 and any other ADR directly referenced by `TASK-JAVA-005`.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P024` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-JAVA-005 — Expose Java REST contract`

Do NOT implement:

- new calculator semantics
- parser changes unless required to fix a demonstrated defect
- frontend changes
- Go changes
- Docker
- cross-backend parity tooling
- final Java quality-gate work beyond what is necessary to verify this task

Do NOT modify approved requirements, scope, specification, design, or ADRs.

If the Java domain cannot support the approved REST contract without changing semantics, stop and report the conflict instead of silently altering the domain or specification.

## 1. Calculator endpoint

Implement exactly:

`POST /api/calculate`

Request:

```json
{
  "expression": "(2 + 3) * 4"
}
```
````

### Outcome

Completed `TASK-JAVA-005`. Added the Java transport boundary under `backend-java/src/main/java/io/github/maiandreh/calculator/api/`: request, success-response, and error DTOs; `CalculatorController`; and a narrowly scoped malformed-request exception handler. Modified `CalculatorApplication` only to expose the existing HTTP-independent `ExpressionEvaluator` as a Spring bean. Added focused MockMvc coverage in `CalculatorControllerTest`, updated only TASK-JAVA-005 in `TASKS.md`, and recorded P024 in this audit trail. No parser or calculator semantics changed.

`POST /api/calculate` consumes JSON and returns the exact one-member numeric success envelope. The controller rejects missing, null, non-string, empty, whitespace-only, and over-256-Unicode-character expressions as canonical `INVALID_REQUEST`; malformed JSON uses the same response. Strict JSON-node inspection prevents Jackson scalar-to-string coercion. Domain categories map exhaustively to the canonical `INVALID_EXPRESSION`, `DIVISION_BY_ZERO`, `INVALID_DOMAIN`, and `NON_FINITE_RESULT` codes/messages with HTTP 400. Unexpected exceptions are not converted to application-defined calculator errors, so dependency/parser messages are not copied into a custom response. Unsupported media remains framework-standard HTTP 415.

Minimal CORS permits only `http://localhost:5173` for the calculator endpoint and supports the POST/Content-Type preflight. Focused tests verify the exact success schema, numeric result type, all request-boundary cases, the 256-character boundary, malformed JSON, representative mappings for every domain category, exact two-member error schemas, allowed/disallowed origins, preflight behavior, and unsupported media type.

The first `./mvnw test` run exposed and demonstrated Jackson's undesired numeric-to-string coercion (`{"expression":42}` returned 200); the transport DTO was corrected to retain the JSON node type. The final `./mvnw test`, `./mvnw package`, and `./mvnw verify` runs each passed 89 tests with 0 failures, 0 errors, and 0 skipped, including 9 REST tests, 79 domain cases, and the preserved health test. JaCoCo 0.8.15 analyzed 11 classes and reported 96.76% instruction coverage (568/587), 91.84% branch coverage (90/98), 95.24% line coverage (140/147), and 97.06% method coverage (33/34), with no threshold. `./mvnw dependency:tree` passed with the unchanged direct dependencies: Spring Boot Web at compile scope and Spring Boot Test at test scope; no dependency was added.

`TASK-JAVA-005` is Complete and `TASK-JAVA-006` remains Not Started. Backend B remains configured on port 8081 and `/health` remains intact. No frontend, Go backend, Docker, parity tooling, approved requirements, scope, specification, design, or ADR was modified. No deviation or conflict with the approved artifacts was found.

## P025 — Java Backend Quality Gate

### Prompt ID

P025

### Phase

Verification — Java Backend Quality Gate

### Objective

Execute only `TASK-JAVA-006` from `TASKS.md`: perform a complete acceptance, quality, coverage, build, dependency, and smoke verification of the Java backend and fix only demonstrated gaps within the already approved specification.

### Prompt

```text
Prompt ID: P025

Phase: Verification — Java Backend Quality Gate

Objective:
Execute only `TASK-JAVA-006` from `TASKS.md`: perform a complete acceptance, quality, coverage, build, dependency, and smoke verification of the Java backend and fix only demonstrated gaps within the already approved specification.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and ADR-003.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P025` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-JAVA-006 — Complete Java quality gate`

Do NOT:

- add new calculator features
- alter expression grammar
- change the REST contract
- modify frontend
- modify Go
- implement Docker
- implement cross-backend parity tooling
- alter approved requirements, scope, specification, design, or ADRs

If verification exposes a conflict with an approved artifact, stop and report it rather than changing the authority document.

## 1. Acceptance review

Review all Java/backend-relevant acceptance criteria in `SPEC.md`.

At minimum verify coverage for:

- all `AC-EXPR-*`
- all `AC-API-*`
- all `AC-ERR-*`

Create a compact checklist in the final report showing each criterion or grouped criterion range and the concrete verification path proving it.

Do not claim criterion coverage without a test or explicit smoke verification.

## 2. Gap policy

If a committed criterion is not currently verified:

- add the smallest necessary test and/or implementation correction
- do not broaden scope
- do not refactor unrelated code
- do not add dependencies unless an approved requirement clearly requires one

If behavior is correct but lacks a test, prefer adding the test.

If implementation conflicts with `SPEC.md`, fix the implementation rather than changing the specification.

## 3. Full test suite

Run:

`./mvnw test`

Report:

- number of tests
- failures
- errors
- skipped tests
- final Maven result

No committed-behavior test may remain failing.

## 4. Build/package verification

Run:

`./mvnw package`

The Java backend must package successfully.

Do not skip tests just to obtain a successful package.

## 5. Coverage

Generate/confirm JaCoCo coverage using the existing Maven configuration.

Report at minimum:

- total instruction/line coverage where available
- package-level observations where useful
- notable uncovered behavior

Do not add an arbitrary threshold.

Coverage is supporting evidence, not the goal.

Generated `target/` output must remain ignored.

## 6. Dependency review

Run:

`./mvnw dependency:tree`

Confirm the production dependency surface remains consistent with the approved architecture.

Verify specifically:

- Spring Boot Web/runtime only as justified
- no Lombok
- no persistence/JPA
- no database driver
- no expression/parser library
- no mapping library
- no unapproved dependency

Report deviations if any.

## 7. Domain/transport separation review

Inspect the implementation and confirm:

- parser/evaluator has no Spring MVC dependency
- domain logic has no HTTP dependency
- controller remains thin
- domain errors are mapped at the transport boundary
- raw parser/Java exception messages do not leak into the public API
- health endpoint remains infrastructure-only

If separation regressed, make only the smallest necessary correction.

## 8. Expression semantics review

Verify representative cases for:

### Core arithmetic
- `2 + 3 = 5`
- `7 - 2 = 5`
- `4 * 5 = 20`
- `10 / 4 = 2.5`

### Precedence
- `2 + 3 * 4 = 14`
- `(2 + 3) * 4 = 20`

### Associativity
- `10 - 3 - 2 = 5`
- `20 / 5 / 2 = 2`

### Exponentiation
- `2 ^ 3 = 8`
- `2 ^ 3 ^ 2 = 512`
- `2 ^ -2 = 0.25`

### Unary/power precedence
- `-2 ^ 2 = -4`
- `(-2) ^ 2 = 4`

### Percentage
- `20% = 0.2`
- `150 * 20% = 30`
- `100 + 20% = 100.2`

### Square root
- `sqrt(81) = 9`
- `sqrt(9 + 7) = 4`

## 9. Error review

Verify canonical domain/API behavior for:

### Division by zero
Expression:
`1 / 0`

Expected:
- HTTP 400
- code `DIVISION_BY_ZERO`
- canonical message

### Invalid expression
Expression:
`2 +`

Expected:
- HTTP 400
- `INVALID_EXPRESSION`

### Invalid domain
Expression:
`sqrt(-1)`

Expected:
- HTTP 400
- `INVALID_DOMAIN`

### Non-finite result
Use a deterministic supported expression that overflows binary64.

Expected:
- HTTP 400
- `NON_FINITE_RESULT`

### Invalid request
Verify representative:
- missing expression
- null expression
- non-string expression
- empty expression
- >256 characters
- malformed JSON

## 10. HTTP contract review

Verify:

- POST `/api/calculate`
- JSON request body
- successful JSON number response
- canonical application error structure
- application-defined 400 statuses
- unsupported media type returns 415
- CORS supports the approved local Vite origin
- no internal diagnostic leakage

Do not over-test framework behavior outside the calculator contract.

## 11. Live smoke verification

Start the Java backend on port 8081.

Verify at minimum:

### Health
`GET /health`

Expected:
HTTP 200

### Basic
`2 + 3 * 4`

Expected:
14

### Parenthesized
`(2 + 3) * 4`

Expected:
20

### Exponentiation
`2 ^ 3 ^ 2`

Expected:
512

### Unary precedence
`-2 ^ 2`
Expected:
-4

`(-2) ^ 2`
Expected:
4

### Advanced
`sqrt(81) + 150 * 20%`

Verify expected result from SPEC.

### Errors
- division by zero
- invalid expression
- invalid domain
- non-finite result

Stop the application after smoke verification.

## 12. Architecture discipline

Confirm:

- no third-party expression evaluator
- no parser generator
- no unnecessary service interfaces
- no repository/persistence layer
- no Strategy/Factory ceremony
- no Lombok
- no unrelated infrastructure
- Java remains an independent implementation of SPEC, not a structural clone requirement of Go

Report any deviation.

## 13. Repository hygiene

Run:

`git status --short`

Confirm generated artifacts such as:

- `target/`
- JaCoCo reports
- temporary build files

are ignored and not staged.

Confirm no `.idea`, secrets, logs, or unexpected env files are being tracked.

If `.gitignore` needs a concrete correction, make the smallest required change and explain it.

## 14. TASK-JAVA-006 completion

Mark `TASK-JAVA-006` Complete only if:

- all Java/backend acceptance criteria have a verification path
- tests pass
- package/build passes
- JaCoCo generation succeeds
- dependency review passes
- domain/transport separation is intact
- smoke tests pass
- no known committed Java/backend acceptance gap remains

Do not modify parity, Docker, documentation, or final-task statuses.

## 15. Prompt audit

Update P025 Outcome in `docs/ai-prompts.md` with factual evidence including:

- TASK-JAVA-006 status
- files modified
- gaps found/fixed
- test result
- package/build result
- JaCoCo result
- dependency review
- domain/transport separation review
- architecture review
- smoke-test results
- repository-hygiene result
- confirmation that no new feature was introduced
- confirmation that frontend, Go, Docker, and parity implementation were not modified/started

Do not rewrite prior prompts/outcomes.

## 16. Required final report

Report:

1. acceptance-criteria coverage summary
2. files modified
3. gaps found and fixes made
4. test count/results
5. package/build result
6. JaCoCo result
7. dependency summary
8. domain/transport separation review
9. architecture-discipline review
10. health smoke result
11. basic-expression result
12. parenthesized-expression result
13. exponentiation result
14. unary-precedence results
15. advanced-expression result
16. division-by-zero result
17. invalid-expression result
18. invalid-domain result
19. non-finite-result result
20. repository hygiene result
21. `git diff --stat`
22. `git status`
23. TASK-JAVA-006 final status
24. remaining work beginning with TASK-PAR-001
25. any unresolved deviation/conflict

Do not commit.
Do not push.

Stop after TASK-JAVA-006 and wait for human review.
```

### Outcome

Completed `TASK-JAVA-006` and marked only that task Complete. Modified `TASKS.md` and `docs/ai-prompts.md`; no Java source or test file required modification because the acceptance review found no unverified committed Java/backend behavior and all existing verification passed. No feature, grammar rule, REST behavior, dependency, or architecture layer was introduced.

All `AC-EXPR-001`–`AC-EXPR-020` have direct JUnit verification in `ExpressionEvaluatorTest`: numeric/literal behavior, core arithmetic, precedence, grouping, associativity, unary/power interaction, right-associative exponentiation, signed exponents, percentage, square root, canonical-token rejection, invalid grammar, and the 256-character boundary. `AC-API-001`–`AC-API-003` and the transport aspects of `AC-ERR-001`–`AC-ERR-012` have focused MockMvc verification in `CalculatorControllerTest`, combined with the domain-category assertions for all specified expression errors. The health endpoint has its independent integration test.

`./mvnw test` passed 89 tests (9 REST, 79 domain, 1 health), with 0 failures, 0 errors, and 0 skipped. `./mvnw package` completed with BUILD SUCCESS without skipping tests. `./mvnw verify` completed with BUILD SUCCESS and generated the JaCoCo report for 11 classes. Aggregate coverage was 96.76% instructions (568/587), 95.24% lines (140/147), 91.84% branches (90/98), and 97.06% methods (33/34). The small uncovered portion consists of incidental bootstrap/defensive paths rather than a known committed-behavior gap; no arbitrary threshold was added.

`./mvnw dependency:tree` passed. Direct dependencies remain only Spring Boot Web at compile scope and Spring Boot Test at test scope. There is no Lombok, persistence/JPA, database driver, expression/parser library, mapping library, or unapproved direct dependency. Spring's transitive `spring-expression` module is not used by the calculator evaluator.

Architecture inspection confirmed that `domain/` imports no Spring MVC, HTTP, servlet, or network type; the evaluator and typed domain errors remain directly testable and transport-independent. The controller performs request validation, invokes the evaluator, and maps domain categories to canonical DTOs. Raw exception/parser messages are never placed in calculator responses. The health controller remains an infrastructure-only constant status endpoint. No service interface, repository/persistence layer, Strategy/Factory framework, parser generator, third-party evaluator, Lombok, or unrelated infrastructure exists. Java remains an independent recursive-descent implementation of `SPEC.md`.

The packaged application started successfully on port 8081 for live smoke verification after the sandbox socket restriction required an approved unsandboxed local run. Live observations were: `GET /health` → HTTP 200 `{"status":"ok"}`; `2 + 3 * 4` → HTTP 200 `{"result":14.0}`; `(2 + 3) * 4` → 20.0; `2 ^ 3 ^ 2` → 512.0; `-2 ^ 2` → -4.0; `(-2) ^ 2` → 4.0; and `sqrt(81) + 150 * 20%` → 39.0. Error requests returned HTTP 400 with exact canonical envelopes: `1 / 0` → `DIVISION_BY_ZERO`; `2 +` → `INVALID_EXPRESSION`; `sqrt(-1)` → `INVALID_DOMAIN`; `10 ^ 1000` → `NON_FINITE_RESULT`. The service was stopped cleanly afterward.

Repository hygiene passed: `backend-java/target/` and its JaCoCo report are ignored, no generated artifact is staged or tracked, no `.idea`, secret, log, coverage, `node_modules`, or unexpected environment file is tracked, and the tracked `frontend/.env.example` is an intentional example configuration. An ignored local `.idea/` directory exists but is neither tracked nor reported by `git status`. `git diff --check` passed.

No approved artifact conflict or architecture deviation was found. Frontend, Go, Docker, and cross-backend parity implementation were not modified or started. Remaining work begins with `TASK-PAR-001`.

## P026 — Cross-Backend Parity

### Prompt ID

P026

### Phase

Integration Verification — Cross-Backend Parity

### Objective

Execute only `TASK-PAR-001` from `TASKS.md`: verify live behavioral parity between the independently implemented Go and Java calculator backends using one shared contract dataset.

### Prompt

````text
Prompt ID: P026

Phase: Integration Verification — Cross-Backend Parity

Objective:
Execute only `TASK-PAR-001` from `TASKS.md`: verify live behavioral parity between the independently implemented Go and Java calculator backends using one shared contract dataset.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read ADR-002 and ADR-003.
8. Read `docs/ai-prompts.md`.
9. Record this exact prompt as `P026` in `docs/ai-prompts.md` before modifying repository files.

Execute only:

`TASK-PAR-001 — Verify live backend parity`

Do NOT:

- change calculator semantics
- add new calculator features
- modify frontend behavior
- implement Docker
- rewrite either backend merely to make incidental implementation details match
- alter approved requirements, scope, specification, design, or ADRs

If parity reveals a behavioral conflict:

- identify which implementation violates SPEC
- fix only the non-conforming implementation
- do not redefine SPEC to match existing code
- report every correction explicitly

## 1. Parity mechanism

Create a lightweight repository-level parity verification mechanism.

Prefer a small script under a clear location such as:

`tools/`
or
`scripts/`

Do not introduce:

- Pact
- contract-testing frameworks
- Postman/Newman dependency
- external testing libraries
- new runtime dependency for either backend

A small script using a language already available in the project environment is sufficient.

Prefer Python standard library if Python is available, otherwise use another lightweight already-installed tool.

Do not require users to install an additional package merely for parity verification.

## 2. Live backend targets

The parity verifier must target:

Go:
`http://localhost:8080`

Java:
`http://localhost:8081`

Make URLs configurable through environment variables or simple command-line options if this can be done without unnecessary complexity.

Use sensible local defaults.

## 3. Shared dataset

Use one shared dataset of calculator requests.

Do not maintain separate expected datasets for Java and Go.

Each parity case should define:

- name
- expression/request
- expected status
- expected response type
- expected result or error contract

The same case must run against both services.

## 4. Required valid cases

Include at minimum representative cases covering:

### Basic arithmetic
- addition
- subtraction
- multiplication
- division

### Decimal
- a decimal-result calculation

### Precedence
`2 + 3 * 4`
expected:
`14`

### Parentheses
`(2 + 3) * 4`
expected:
`20`

### Exponentiation
`2 ^ 3`
expected:
`8`

### Right-associative exponentiation
`2 ^ 3 ^ 2`
expected:
`512`

### Unary precedence
`-2 ^ 2`
expected:
`-4`

`(-2) ^ 2`
expected:
`4`

### Signed exponent
`2 ^ -2`
expected:
`0.25`

### Percentage
`20%`
expected:
`0.2`

`150 * 20%`
expected:
`30`

`100 + 20%`
expected:
`100.2`

### Square root
`sqrt(81)`
expected:
`9`

`sqrt(9 + 7)`
expected:
`4`

### Compound advanced expression
Use one expression combining multiple approved capabilities.

## 5. Required invalid cases

Include at minimum:

### Division by zero
`1 / 0`

Expected:
- HTTP 400
- code `DIVISION_BY_ZERO`
- canonical message

### Invalid grammar
`2 +`

Expected:
- HTTP 400
- code `INVALID_EXPRESSION`

### Unsupported function
`sin(1)`

Expected:
- HTTP 400
- code `INVALID_EXPRESSION`

### Unsupported scientific notation
`1e3`

Expected:
- HTTP 400
- code `INVALID_EXPRESSION`

### Invalid domain
`sqrt(-1)`

Expected:
- HTTP 400
- code `INVALID_DOMAIN`

### Non-finite result
Use the same deterministic overflow expression accepted by the backend quality gates.

Expected:
- HTTP 400
- code `NON_FINITE_RESULT`

### Invalid request body
Include representative request-level cases where practical, such as:
- missing expression
- empty expression

Expected:
- HTTP 400
- canonical `INVALID_REQUEST`

Do not include framework-specific 415 response-body parity unless SPEC requires it.

## 6. Numeric comparison

Use the numeric parity rule from `SPEC.md`.

For results exactly representable and equal, exact equality is acceptable.

For floating-point results where representation may differ:

absolute difference must be:

`<= 1e-12`

Do not compare numeric results as formatted strings.

Do not round backend outputs to force equality.

## 7. Response parity

For valid calculator requests verify both backends produce:

- HTTP 200
- same success response schema
- finite numeric `result`
- result satisfying the numeric parity rule

For application-defined invalid requests verify both produce:

- same HTTP status
- same `code`
- same canonical `message`

Do not require byte-for-byte JSON serialization order.

Compare semantics, not textual JSON ordering.

## 8. Failure reporting

When a parity case fails, report clearly:

- case name
- expression/request
- Go observed status/body
- Java observed status/body
- expected contract
- exact parity mismatch

Do not hide failures.

Return a non-zero process exit code if any parity case fails.

Return zero only when all cases pass.

## 9. Backend availability

Before running the dataset:

- check that Go backend is reachable
- check that Java backend is reachable

If either is unavailable:

- fail clearly
- identify which backend is unavailable
- do not classify this as semantic parity failure

Do not start or stop backend processes implicitly unless TASKS/DESIGN explicitly allows orchestration.

Document how the human should start both services.

## 10. No implementation coupling

The parity verifier must use HTTP only.

It must not:

- import Go calculator packages
- import Java classes
- inspect backend source internals
- call internal functions
- rely on backend-specific test fixtures

The API contract is the integration boundary.

## 11. Corrections policy

If the dataset identifies a real SPEC violation:

1. identify the violated `SPEC-*` / `AC-*`
2. fix only the non-conforming backend
3. run that backend's relevant test suite
4. run the full parity suite again
5. document the correction in P026 Outcome

Do not change both implementations merely to make them agree if one is wrong.

Agreement is not sufficient; both must conform to SPEC.

## 12. Verification workflow

Before parity:

Go:
- confirm full Go tests still pass
- confirm Go build still passes

Java:
- confirm Maven tests still pass
- confirm Java package/build still passes

Then run the parity verifier against both live services.

Report:

- total parity cases
- passed
- failed
- result

## 13. Representative manual confirmation

After automated parity succeeds, manually verify through curl at least one identical request against both backends.

Example:

Go:

`POST http://localhost:8080/api/calculate`

Java:

`POST http://localhost:8081/api/calculate`

with:

```json
{
  "expression": "sqrt(81) + 150 * 20%"
}
```
````

### Outcome

Completed `TASK-PAR-001`. Created `scripts/check-parity.py`, updated only TASK-PAR-001 in `TASKS.md`, and recorded P026 in this audit trail. No backend, frontend, Docker, requirement, scope, specification, design, or ADR file was modified. No behavioral mismatch or SPEC violation was found, so no implementation correction was made.

The parity verifier uses only Python 3 standard-library HTTP/JSON facilities and one shared immutable dataset for both live services. Defaults are `http://localhost:8080` and `http://localhost:8081`, overridable through `GO_BACKEND_URL` and `JAVA_BACKEND_URL`. It checks both `/health` endpoints before classifying parity, reports an unavailable backend separately with exit code 2, runs all calculator cases exclusively through `POST /api/calculate`, prints detailed expected and observed values for failures, returns 1 for semantic failures, and returns 0 only when every case passes. It imports no backend package/class, reads no backend fixture, and adds no dependency.

The 26 shared cases comprise 18 valid and 8 invalid requests. Valid coverage includes all four basic operations, a decimal result, precedence, parentheses, exponentiation, right associativity, both unary/power cases, signed exponent, three percentage cases, two square-root cases, and the compound `sqrt(81) + 150 * 20% = 39`. Invalid coverage includes division zero, incomplete grammar, unsupported function, unsupported scientific notation, invalid square-root domain, deterministic `10 ^ 1000` overflow, missing expression, and empty expression. Success checks require HTTP 200, the exact one-member schema, a finite JSON number, the specified expected result, and Go/Java absolute difference at most `1e-12`. Error checks require HTTP 400, the exact two-member schema, and identical canonical code/message matching SPEC. JSON member order and formatted numeric strings are not compared; 415 body parity is excluded.

Preflight verification passed after sandbox runtime restrictions required the Go commands to run with approved elevated execution: `gofmt -l .` produced no paths, `go test ./...` passed both Go packages, and `go build ./...` passed. Java `./mvnw test` passed 89 tests with 0 failures, errors, or skips, and `./mvnw package` completed with BUILD SUCCESS without skipping tests.

The live parity run reported `total=26 passed=26 failed=0` and exited zero. Port 8080 was already occupied by a reachable Go service, so it was used and left running rather than replaced or stopped. The packaged Java service was started on port 8081 for the approved integration run and stopped cleanly afterward. Manual curl sent the identical `sqrt(81) + 150 * 20%` request to both services: Go returned HTTP 200 `{"result":39}` and Java returned HTTP 200 `{"result":39.0}`; both are finite numeric results with exact semantic equality.

`TASK-PAR-001` is Complete. No unresolved parity deviation or approved-artifact conflict remains. Remaining work begins with `TASK-DOCKER-001`.
## P027 — Containerized Full Stack

### Prompt ID

P027

### Phase

Delivery — Containerized Full Stack

### Objective

Execute only `TASK-DOCKER-001` from `TASKS.md`: provide a minimal, production-conscious Docker setup capable of building and running the React frontend, Go backend, and Java backend together while preserving the already verified application behavior and cross-backend parity.

### Prompt

```text
Prompt ID: P027

Phase: Delivery — Containerized Full Stack

Objective:
Execute only `TASK-DOCKER-001` from `TASKS.md`: provide a minimal, production-conscious Docker setup capable of building and running the React frontend, Go backend, and Java backend together while preserving the already verified application behavior and cross-backend parity.

Before doing anything:

1. Read `AGENTS.md`.
2. Read `REQUIREMENTS.md`.
3. Read `SCOPE.md`.
4. Read `SPEC.md`.
5. Read `DESIGN.md`.
6. Read `TASKS.md`.
7. Read all accepted ADRs relevant to deployment/runtime boundaries.
8. Read `docs/ai-prompts.md`.
9. Inspect the existing:
   - frontend build configuration
   - Go build/runtime structure
   - Java Maven build/runtime structure
   - backend URL configuration
   - CORS configuration
   - health endpoints
10. Verify Docker availability:
    - `docker --version`
    - `docker compose version`
11. Record this exact prompt as `P027` in `docs/ai-prompts.md` before modifying application files.

Execute only:

`TASK-DOCKER-001`

Do NOT:

- change calculator semantics
- change the REST contract
- add calculator features
- alter the verified parity dataset
- refactor backend domain implementations
- introduce Kubernetes
- introduce cloud deployment configuration
- introduce a reverse proxy unless it is concretely necessary for the approved frontend runtime design
- alter approved requirements, specification, design, or ADRs merely to accommodate Docker

If containerization reveals an actual architectural/configuration conflict, report it before changing approved behavior.

## 1. Containerization goals

The complete application must be runnable from the repository root with a command equivalent to:

`docker compose up --build`

The stack must contain exactly the application services required for this project:

- frontend
- backend-go
- backend-java

Do not add:

- database
- Redis
- message broker
- service discovery
- API gateway
- observability stack
- infrastructure unrelated to the application

## 2. Go Dockerfile

Create a Dockerfile for `backend-go`.

Use a multi-stage build.

Build stage:

- use an appropriate official Go image
- download dependencies reproducibly
- compile the application

Runtime stage:

- use a materially smaller runtime image
- contain only what is necessary to execute the service
- do not ship the Go compiler/toolchain

Preserve:

- port 8080
- `/health`
- `/api/calculate`

Prefer running as a non-root user where practical.

Do not alter Go calculator behavior.

## 3. Java Dockerfile

Create a Dockerfile for `backend-java`.

Use a multi-stage build.

Build stage:

- use an appropriate Java 21 build environment
- build through the repository's Maven Wrapper
- package the application

Runtime stage:

- use an appropriate Java 21 JRE/runtime image
- do not ship Maven or the complete build environment
- run the packaged Spring Boot application

Preserve:

- port 8081
- `/health`
- `/api/calculate`

Prefer running as a non-root user where practical.

Do not skip tests merely to make the Docker build succeed unless the approved Docker strategy explicitly separates verified build/test stages. Prefer preserving test execution when reasonable.

## 4. Frontend Dockerfile

Create a multi-stage frontend Dockerfile.

Build stage:

- use an appropriate Node version compatible with the existing project
- install dependencies reproducibly using the lockfile
- build the Vite application

Runtime stage:

- serve only the built static assets
- do not ship Node development tooling unnecessarily

Use a small established static-file serving approach.

Do not introduce a large application server.

Do not convert the frontend into SSR.

## 5. Browser networking constraint

Remember:

The frontend JavaScript runs in the user's browser.

Docker Compose service names such as:

`backend-go`
`backend-java`

are not automatically valid browser destinations.

Do not incorrectly configure browser fetch requests to use internal Compose DNS names unless a deliberate proxy architecture makes them browser-accessible.

Preserve a correct browser-visible routing strategy.

For the default local Docker experience, the browser must be able to reach:

Go backend:
`http://localhost:8080`

Java backend:
`http://localhost:8081`

Configure Vite build-time environment appropriately.

Do not hardcode Docker-only URLs throughout React components.

## 6. Frontend exposed port

Expose the containerized frontend on a clear host port.

Prefer:

`3000`

unless an existing approved artifact specifies another port.

The intended Docker experience should therefore be conceptually:

Frontend:
`http://localhost:3000`

Go:
`http://localhost:8080`

Java:
`http://localhost:8081`

Do not conflict with the Vite development workflow on port 5173.

## 7. CORS

Because the Docker frontend origin may be:

`http://localhost:3000`

verify both backends permit the approved local frontend origins required by:

- Vite development
- Dockerized frontend

Do not use unrestricted `*` merely for convenience if explicit origins are practical.

If CORS configuration must change, make the smallest explicit configuration change and add/update relevant tests.

This is an infrastructure compatibility correction, not a calculator semantic change.

## 8. Docker Compose

Create a root Compose file using current Docker Compose syntax.

Do not include an obsolete top-level `version` field unless required by the installed Compose implementation.

Define:

- frontend
- backend-go
- backend-java

Configure:

- builds
- host port mappings
- service names
- environment/build arguments where required
- healthchecks where practical

Do not add unnecessary custom networks if the default Compose network is sufficient.

Do not use `container_name` unless there is a demonstrated need.

## 9. Health checks

Use the existing backend `/health` endpoints for container health where practical.

Do not install large tooling solely for health checks.

If a minimal runtime image lacks curl/wget, choose a reasonable health-check strategy rather than bloating the image substantially.

Do not add Spring Actuator.

## 10. Build contexts

Use narrow, deliberate build contexts.

Create `.dockerignore` files where appropriate.

Exclude at minimum relevant generated/local artifacts such as:

- `.git`
- `.idea`
- `node_modules`
- frontend `dist`
- Java `target`
- coverage output
- editor metadata
- temporary files

Do not accidentally exclude required Maven Wrapper or Go module files.

## 11. Reproducibility

Use existing lock/module/build files:

Frontend:
- package lockfile with reproducible install (`npm ci`)

Go:
- `go.mod`
- `go.sum` if present

Java:
- Maven Wrapper
- `pom.xml`

Do not generate alternative package managers or lockfiles.

## 12. Secrets

No secret should be baked into:

- Dockerfiles
- images
- Compose
- frontend build output

Do not introduce fake credential infrastructure when the application requires no secrets.

## 13. Image discipline

Review the final images conceptually for:

- multi-stage builds
- minimal runtime contents
- no compiler/build tools in runtime where avoidable
- no source tree copied unnecessarily into runtime
- explicit working directories
- clear entrypoints/commands
- non-root execution where practical

Do not optimize image size at the expense of obscure or fragile configuration.

## 14. Native workflow preservation

Docker must be additive.

Existing native workflows must continue to work:

Go:
`go run ./cmd/server`

Java:
`./mvnw spring-boot:run`

Frontend:
`npm run dev`

Do not force Docker for development.

## 15. Pre-container regression verification

Before validating Compose, verify existing project quality gates remain green.

Go:
- `gofmt -l .`
- `go test ./...`
- `go build ./...`

Java:
- `./mvnw test`
- `./mvnw package`

Frontend:
- `npm test -- --run`
- `npm run build`
- `npm run lint`

Do not mask pre-existing failures as Docker problems.

## 16. Docker build verification

From repository root run:

`docker compose build`

All three images must build successfully.

Report the result for:

- frontend
- backend-go
- backend-java

If supported and useful, report final image sizes, but do not treat size as an acceptance requirement.

## 17. Full-stack startup

Run:

`docker compose up -d`

Then inspect:

`docker compose ps`

All required services must be running.

Backend health checks, if configured, should become healthy.

## 18. Containerized smoke verification

Verify:

### Go health
`GET http://localhost:8080/health`

### Java health
`GET http://localhost:8081/health`

### Frontend
`GET http://localhost:3000`

must return the built frontend successfully.

### Go calculation
POST a representative expression to:
`http://localhost:8080/api/calculate`

### Java calculation
POST the same expression to:
`http://localhost:8081/api/calculate`

Use:
`sqrt(81) + 150 * 20%`

Both must succeed semantically.

## 19. Containerized parity

Run the existing:

`python3 scripts/check-parity.py`

against the containerized backends.

All previously passing parity cases must remain passing.

Do not create a separate Docker parity dataset.

The existing shared parity verifier remains the authority.

## 20. Browser verification

Open:

`http://localhost:3000`

Verify manually:

- calculator renders correctly
- Go can be selected
- Go calculation succeeds
- Java can be selected
- Java calculation succeeds
- switching backend preserves expression according to approved behavior
- canonical backend errors display correctly
- no CORS failure occurs
- browser console has no material runtime/network error during normal use

Do not claim browser verification if the agent cannot actually perform it.

If browser interaction is unavailable, report it as requiring human verification.

## 21. Shutdown verification

Run:

`docker compose down`

Confirm the application containers stop cleanly.

Do not remove unrelated Docker resources.

Do not use destructive global cleanup commands such as:

`docker system prune`

## 22. Repository hygiene

Run:

`git status --short`

Confirm no generated artifacts, image exports, build output, or local Docker state are accidentally tracked.

Do not commit:

- `target/`
- `node_modules/`
- `dist/`
- coverage output
- logs
- temporary files

## 23. Task tracking

Update only:

`TASK-DOCKER-001`

Mark it Complete only if:

- all three images build
- Compose starts all services
- backend health checks succeed
- frontend is served
- both APIs work from host
- browser-visible backend URLs are correct
- CORS supports the Docker frontend
- existing parity suite passes against containers
- native development workflow remains valid
- Compose shuts down cleanly

Do not modify final documentation task statuses.

## 24. Prompt audit

Update P027 Outcome in `docs/ai-prompts.md` with factual evidence including:

- TASK-DOCKER-001 result
- files created/modified
- base/build/runtime image choices
- multi-stage build approach
- frontend browser URL strategy
- CORS changes if any
- Compose service/port structure
- healthcheck approach
- regression verification results
- image build results
- Compose startup result
- smoke-test results
- containerized parity result
- browser verification status
- shutdown result
- repository hygiene
- task status
- confirmation that calculator semantics and REST contract were not changed

Do not rewrite prior prompts/outcomes.

## 25. Required final report

Report:

1. files created/modified
2. Go image design
3. Java image design
4. frontend image design
5. `.dockerignore` strategy
6. Compose topology
7. host port mapping
8. frontend backend-URL strategy
9. CORS configuration/result
10. Go regression result
11. Java regression result
12. frontend regression result
13. Docker build results
14. Compose startup/health result
15. Go container smoke result
16. Java container smoke result
17. frontend HTTP result
18. containerized parity result
19. browser verification status/result
20. shutdown result
21. repository hygiene result
22. `git diff --stat`
23. `git status`
24. TASK-DOCKER-001 status
25. remaining work beginning with the next task in TASKS.md
26. any unresolved deviation/conflict

Do not commit.
Do not push.

Stop after TASK-DOCKER-001 and wait for human review.
```

### Outcome

Completed `TASK-DOCKER-001`. Created `backend-go/Dockerfile`, `backend-go/.dockerignore`, `backend-java/Dockerfile`, `backend-java/.dockerignore`, `frontend/Dockerfile`, `frontend/.dockerignore`, and root `compose.yaml`. Modified only the infrastructure-compatible CORS allowlists and focused tests in `backend-go/cmd/server/calculator.go`, `backend-go/cmd/server/calculator_test.go`, `backend-java/src/main/java/io/github/maiandreh/calculator/api/CalculatorController.java`, and `backend-java/src/test/java/io/github/maiandreh/calculator/api/CalculatorControllerTest.java`; updated only TASK-DOCKER-001 in `TASKS.md` and recorded this prompt/outcome. No calculator domain implementation, calculator semantics, REST contract, parity dataset, approved requirement, specification, design, or ADR was changed.

The Go multi-stage image uses `golang:1.26-alpine` to download modules and compile a stripped, static Linux binary, then copies only that binary into `alpine:3.23`; the runtime has no Go toolchain and runs as the non-root `calculator` user. The Java multi-stage image uses `eclipse-temurin:21-jdk-alpine`, the repository Maven Wrapper, a dependency-cache layer, and `./mvnw package` with tests enabled; it copies only the executable Spring Boot JAR into `eclipse-temurin:21-jre-alpine` and runs as non-root. The frontend uses `node:24-alpine`, `npm ci`, and the Vite build with explicit localhost backend build arguments; its `alpine:3.23` runtime contains only the static assets plus the small `busybox-extras` HTTP server and runs as non-root. Initial frontend startup exposed that base Alpine's BusyBox omitted the `httpd` applet; the image-only correction installed `busybox-extras` and invoked `/usr/sbin/httpd`, after which host HTTP verification passed.

Each service has its own narrow build context and `.dockerignore`, excluding relevant generated output, dependencies, coverage, IDE/editor metadata, logs, and temporary files while retaining Go module files, the Maven Wrapper/POM, and the frontend lockfile. Compose defines exactly `frontend`, `backend-go`, and `backend-java`, uses the default network without `container_name` or an obsolete version field, and publishes frontend `3000:8080`, Go `8080:8080`, and Java `8081:8081`. Backend healthchecks use Alpine's small `wget` against the existing `/health` endpoints; no new application health feature or Spring Actuator was added.

The frontend's browser-visible destinations remain build-time Vite configuration rather than Compose DNS names: the final compiled asset was inspected and contained exactly `http://localhost:8080` and `http://localhost:8081`. Both backends now explicitly allow only the approved local frontend origins `http://localhost:5173` and `http://localhost:3000`; focused tests cover both origins and Docker-origin preflight. Live Docker-origin POST and preflight checks returned the corresponding `Access-Control-Allow-Origin` and expected method/header values for both backends; unrestricted CORS was not introduced.

Pre-container regression verification passed. Go `gofmt -l .` produced no paths, and `go test ./...` plus `go build ./...` passed after using `/tmp/p027-go-build-cache` because the sandbox made the default user cache read-only. Java `./mvnw test` and `./mvnw package` each passed with 89 tests, 0 failures, 0 errors, and 0 skipped. Frontend `npm test -- --run` passed 42 tests in 2 files, `npm run build` succeeded, and `npm run lint` succeeded. The sandbox emitted non-fatal stream-fd warnings during some native commands; verification commands themselves exited successfully.

Final `docker compose build` built `frontend`, `backend-go`, and `backend-java` successfully; the Java container build itself also ran and passed all 89 tests. `docker compose up -d` started all three services. Final `docker compose ps` showed both backends healthy and the frontend running. Host smoke checks returned `{"status":"ok"}` from both backend health endpoints and HTTP 200 with `text/html` plus the built Calculator page from the frontend. The representative `sqrt(81) + 150 * 20%` request returned HTTP 200 `{"result":39}` from Go and HTTP 200 `{"result":39.0}` from Java. The unchanged `python3 scripts/check-parity.py` passed all 26 cases with 0 failures against the containerized backends.

Interactive browser/console verification was not available to the agent and is explicitly left for human review; it is not claimed. Automated frontend tests, live host API/CORS checks, compiled URL inspection, and frontend HTTP smoke supplied the available non-interactive evidence for backend selection/runtime routing. `docker compose down` stopped and removed the three application containers and this project's default network cleanly; final `docker compose ps -a` was empty. Repository hygiene checks found no Docker state, image export, or newly unignored generated output in the working tree. `TASK-DOCKER-001` is Complete; remaining work begins with `TASK-DOC-001`. No unresolved approved-artifact conflict or implementation deviation remains.
## P028 — Technical Assessment Delivery README

### Prompt ID

P028

### Phase

Documentation — Technical Assessment Delivery README

### Objective

Execute only the README/documentation task currently defined in TASKS.md.

Create a reviewer-oriented README.md that accurately documents the repository as it exists now and demonstrates coverage of the technical-assessment requirements without changing application behavior.

### Prompt

```text
Prompt ID: P028

Phase: Documentation — Technical Assessment Delivery README

Objective:
Execute only the README/documentation task currently defined in TASKS.md.

Create a reviewer-oriented README.md that accurately documents the repository as it exists now and demonstrates coverage of the technical-assessment requirements without changing application behavior.

Before modifying anything:

1. Read AGENTS.md.
2. Read REQUIREMENTS.md.
3. Read SCOPE.md.
4. Read SPEC.md.
5. Read DESIGN.md.
6. Read TASKS.md.
7. Read all accepted ADRs under docs/decisions/.
8. Read docs/ai-prompts.md.
9. Inspect the actual implementation and configuration of:
   - frontend/
   - backend-go/
   - backend-java/
   - scripts/check-parity.py
   - compose.yaml
   - all Dockerfiles
   - package.json
   - go.mod
   - pom.xml
   - Maven Wrapper
   - relevant .gitignore/.dockerignore files
10. Inspect the original assessment requirements recorded in the repository.
11. Record this exact prompt as P028 in docs/ai-prompts.md before modifying README.md.

Do not rely on assumptions from previous prompts when repository contents can be inspected directly.

Do not change application source code.

Do not change SPEC.md, DESIGN.md, REQUIREMENTS.md, SCOPE.md, or accepted ADRs.

If documentation and implementation disagree, report the discrepancy instead of silently modifying the implementation.

## README objective

README.md is the primary entry point for the technical reviewer.

It must answer quickly:

- What was requested?
- What was implemented?
- How is the application architected?
- How do I run it?
- How do I test it?
- How do I generate coverage?
- How do I verify both backends?
- Which optional requirements were implemented?
- How was AI used?
- Where are the detailed engineering decisions?

Keep it professional, concise, technically precise, and optimized for assessment review.

## Required README structure

### 1. Title and overview

Use:

# Fullstack Calculator — Double Backend

Explain concisely:

- React + TypeScript frontend
- Go REST backend as the primary assessment implementation
- Java/Spring Boot as an additional independent backend
- user can switch between Go and Java from the UI
- both implement the same calculator API contract

Do not imply Java was required by the assessment if it was not.

### 2. Assessment Coverage

Add an early compact table.

Derive the exact requirements from REQUIREMENTS.md / assessment material.

Distinguish:

- required
- optional
- additional engineering extension

Show implementation status.

At minimum cover, where actually supported:

- React frontend
- responsive/intuitive calculator UI
- addition
- subtraction
- multiplication
- division
- exponentiation
- square root
- percentage
- REST API
- validation
- division-by-zero handling
- JSON responses
- tests
- coverage reports
- Go backend
- Docker
- AI prompt disclosure

Java double-backend support must be identified as an additional extension, not an assessment requirement.

Do not claim a requirement is complete unless repository evidence supports it.

### 3. Architecture

Add a concise Mermaid diagram showing:

Browser
  |
React frontend
  |
backend selector
 / \
Go  Java
8080 8081
 \ /
same POST /api/calculate contract

Explain:

- frontend is presentation only
- mathematical evaluation occurs on the selected backend
- Go and Java are independent implementations
- both conform to SPEC.md
- HTTP parity is verified externally

Link to DESIGN.md and docs/decisions/.

### 4. Calculator capabilities

Document actual supported syntax:

- +
- -
- *
- /
- ^
- %
- sqrt(...)
- parentheses
- unary signs where supported

Give representative examples, including:

2 + 3 * 4 -> 14
(2 + 3) * 4 -> 20
2 ^ 3 ^ 2 -> 512
150 * 20% -> 30
sqrt(81) -> 9

Explain percentage semantics accurately.

Do not call this an unrestricted scientific-expression engine.

Refer to SPEC.md for formal behavior.

### 5. Technology stack

Use a compact table derived from manifests.

Document the actual stack, such as:

Frontend:
- React
- TypeScript
- Vite
- Vitest / Testing Library where actually present

Go:
- Go
- standard library HTTP stack
- custom expression parser

Java:
- Java 21
- Spring Boot
- Maven Wrapper
- JUnit 5
- MockMvc
- JaCoCo

Delivery:
- Docker
- Docker Compose

Parity:
- Python 3 standard library

Do not invent versions. Read them from project files where useful.

### 6. Quick Start — Docker

Make this the preferred reviewer path.

Document from repository root:

docker compose up --build

Then document the verified URLs:

Frontend:
http://localhost:3000

Go:
http://localhost:8080

Java:
http://localhost:8081

Document:

docker compose down

Mention that the frontend exposes a backend selector for Go/Java.

### 7. Native development

Document exact verified commands.

Go:
- directory
- run command
- port

Java:
- directory
- ./mvnw spring-boot:run
- port

Frontend:
- directory
- reproducible install command
- development command
- development port

Inspect actual frontend environment configuration and document how backend URLs are selected/configured.

Do not invent environment variable names.

### 8. API

Document:

POST /api/calculate

Example:

{
  "expression": "(2 + 3) * 4"
}

Success:

{
  "result": 20
}

Provide a copy-paste curl example for Go.

Explain that port 8081 targets the equivalent Java API.

Document canonical application errors:

- INVALID_REQUEST
- INVALID_EXPRESSION
- DIVISION_BY_ZERO
- INVALID_DOMAIN
- NON_FINITE_RESULT

Provide one representative error response.

### 9. Testing

Provide copy-paste commands derived from actual configuration.

Go:
- tests
- vet
- build

Java:
- tests
- package/build

Frontend:
- tests
- build
- lint

Do not invent npm script names; inspect package.json.

### 10. Coverage

The assessment explicitly asks for test coverage evidence.

Document how to generate coverage for all applicable components.

Go:
document the actual coverage command and output artifact.

Java:
document the JaCoCo command/configuration and report location.

Frontend:
document the actual coverage script/command and report location.

Generated reports should remain ignored by Git.

Do not invent coverage percentages.

Only include numeric coverage figures if regenerated during this task.

### 11. Cross-Backend Parity

Explain that scripts/check-parity.py sends the same contract dataset to both live services.

Document:

python3 scripts/check-parity.py

Report the already verified result only if still supported by repository evidence:

26 cases
26 passed
0 failed

Explain:

- same HTTP requests
- status comparison
- canonical error comparison
- numeric comparison
- absolute tolerance <= 1e-12

Clarify that parity testing complements rather than replaces unit/API tests.

### 12. Docker

Briefly explain:

- three application containers
- multi-stage builds
- frontend static build/runtime
- Go minimal runtime
- Java JRE runtime
- Compose orchestration
- explicit CORS support for local native and containerized frontend origins

Do not turn README into a Docker tutorial.

### 13. Key Design Decisions

Summarize only the most relevant reviewer-facing decisions:

- Go selected as primary assessment backend
- Java added as independent contract-compatible implementation
- specification shared, implementation not shared
- bounded custom parser rather than third-party expression engine
- backend-authoritative evaluation
- minimal Go HTTP stack
- thin React transport/presentation layer
- parity verification through public HTTP contract
- Docker remains additive to native development

Link to ADRs for details.

### 14. Project Structure

Provide a compact repository tree including:

frontend/
backend-go/
backend-java/
scripts/
docs/
compose.yaml
REQUIREMENTS.md
SCOPE.md
SPEC.md
DESIGN.md
TASKS.md

Do not include generated directories.

### 15. Spec-Driven Development

Briefly explain the workflow:

Requirements
→ Scope
→ Specification / acceptance criteria
→ Design / ADRs
→ Tasks
→ Implementation
→ Verification

Link to the relevant root documents.

Keep this concise.

### 16. AI-Assisted Development

Be transparent.

State that AI-assisted development was used during the assessment.

Explain that:

- requirements/specification constrained implementation prompts
- implementation was divided into bounded tasks
- prompts and factual outcomes were recorded
- changes were reviewed before commits

Link to:

docs/ai-prompts.md

Do not paste the prompt history into README.

### 17. Scope boundaries / trade-offs

Briefly identify deliberate exclusions where supported by SCOPE.md, such as:

- no persistence/database
- no authentication
- no calculation history
- no arbitrary mathematical functions
- no complex-number support

Explain that the Java backend is intentionally additional scope demonstrating contract interoperability.

## Validation

Before completing the task, validate every documented command against repository reality.

Run or inspect enough to verify:

Go:
- test command
- vet command
- build command

Java:
- test command
- package command
- JaCoCo availability

Frontend:
- test script
- build script
- lint script
- coverage script

Docker:
- docker compose config

Parity:
- script existence and invocation

Check Markdown structure and links.

Do not modify application source merely to make a README statement true.

## Task tracking

Update only the README/documentation task corresponding to TASK-DOC-001.

Mark it Complete only if the README satisfies the assessment delivery requirements.

Do not mark later documentation/final-delivery tasks complete.

## P028 Outcome

Update docs/ai-prompts.md with factual evidence:

- files changed
- README sections created
- assessment coverage documented
- run instructions documented
- testing documented
- coverage documented
- API documented
- parity documented
- Docker documented
- SDD documentation linked
- AI usage disclosed
- validation actually performed
- discrepancies, if any
- TASK-DOC-001 status

Do not rewrite earlier prompt records.

## Required final report

Report:

1. files changed
2. README outline
3. assessment coverage summary
4. Docker quick-start
5. native run commands
6. API documentation status
7. testing documentation status
8. coverage documentation status
9. parity documentation status
10. Docker documentation status
11. design/ADR references
12. SDD references
13. AI disclosure
14. validation commands/results
15. discrepancies found
16. git diff --stat
17. git status
18. TASK-DOC-001 status
19. next remaining task

Do not commit.
Do not push.

Stop for human review.
```

### Outcome

Completed `TASK-DOC-001`. Created root `README.md`; modified only `TASKS.md` to mark TASK-DOC-001 Complete and this P028 audit outcome. No application source, requirements, scope, specification, design, or ADR was changed.

The reviewer-oriented README contains the requested title/overview, an early assessment-coverage table distinguishing required capabilities, optional assessment capabilities, preferences, and additional Java/parity scope, plus architecture, calculator grammar/examples, manifest-derived technology stack, preferred Docker quick start, native workflows, Vite backend URL configuration, REST request/success/error contracts, testing, all three coverage workflows, cross-backend parity, concise Docker design, key decisions with ADR links, project structure, spec-driven development links, AI-use disclosure, and deliberate scope boundaries. It identifies Go as the primary assessment-aligned backend and Java as an additional independent compatibility implementation rather than an assessment requirement.

README commands and claims were validated against repository contents. Go `go test ./...`, `go vet ./...`, `go build ./...`, coverage generation to `coverage.out`, and HTML generation to `coverage/index.html` passed using `/tmp/p028-go-build-cache` because the sandbox's default Go cache is read-only. Regenerated Go package statement coverage was 81.2% for `cmd/server` and 98.3% for `internal/expression`; percentages were not added to README. Frontend `npm test -- --run`, `npm run build`, `npm run lint`, and `npm run coverage` passed: 42 tests in 2 files, 0 failures, with regenerated 97.75% statement, 92.15% branch, 100% function, and 97.7% line coverage; `frontend/coverage/index.html` exists, and percentages were not added to README.

The first sandboxed Java run was environmentally blocked: Mockito/Byte Buddy could not self-attach and the random-port health test could not open a loopback socket. The same documented commands were rerun with the required runtime permission and passed: `./mvnw test`, `./mvnw package`, and `./mvnw verify` each completed with 89 tests, 0 failures, 0 errors, and 0 skipped; JaCoCo analyzed 11 classes and generated `backend-java/target/site/jacoco/index.html`. This was a sandbox restriction, not an implementation or documentation defect.

`docker compose config` passed. Markdown section structure, `git diff --check`, parity script executability, and all explicitly linked local files/directories were checked. A first live parity invocation raced Java startup and reported it unavailable; rerunning with `docker compose up -d --wait` made all three services ready, after which the documented `python3 scripts/check-parity.py` invocation passed all 26 cases with 0 failures. `docker compose down` then removed this project's containers and network cleanly.

One pre-existing artifact discrepancy was found and left unchanged as required: the illustrative repository tree in `DESIGN.md` §5 names `docker-compose.yml`, while the implemented, Compose-validated root file is `compose.yaml`. README documents the actual `compose.yaml`; this filename difference does not affect approved behavior or architecture. No other documentation/implementation discrepancy was found. Generated coverage/build outputs remain ignored by Git. TASK-DOC-001 is Complete; TASK-DOC-002 remains Not Started and is the next task.
