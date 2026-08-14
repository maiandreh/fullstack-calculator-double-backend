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
