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
