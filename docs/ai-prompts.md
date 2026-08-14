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
