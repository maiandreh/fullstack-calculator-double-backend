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
