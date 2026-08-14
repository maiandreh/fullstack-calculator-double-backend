# Repository Agent Instructions

## Mandatory Spec-Driven Development Lifecycle

All work in this repository must follow this lifecycle in order:

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

Implementation must not begin until the artifacts required by all preceding phases have been created and explicitly approved. Approval of one artifact or phase does not imply approval of later phases. The human developer owns approval gates and commit boundaries.

## Artifact Authority

Once created, the following files have these responsibilities and authority:

- `REQUIREMENTS.md` records requirements and their provenance. It distinguishes mandatory assessment requirements, optional assessment requirements, constraints, deliverables, and project-specific extensions.
- `SCOPE.md` records approved product-scope decisions and project extensions without changing the provenance of source requirements.
- `SPEC.md` defines externally observable behavior, API contracts, and acceptance criteria. It is the source of truth for behavioral correctness.
- `DESIGN.md` records the approved technical architecture and important design decisions and trade-offs.
- `TASKS.md` contains the ordered implementation plan and maps implementation work to approved requirements and specification items where practical.

`REQUIREMENTS.md` answers what the assessment stated. `SCOPE.md` answers what this project has committed to deliver. Future `SPEC.md` answers exactly how that committed behavior is externally observable.

An implementation detail must never silently redefine a requirement or specification. If implementation and specification conflict, stop work and report the conflict for human resolution.

## Scope Discipline

Agents must:

- Distinguish assessment requirements from project-specific extensions.
- Distinguish mandatory requirements from optional requirements.
- Record assumptions as assumptions; never silently convert them into requirements.
- Avoid speculative features.
- Prefer the simplest design that satisfies the approved requirements.
- Avoid abstractions created only to demonstrate design patterns.
- Add dependencies only when there is a concrete, documented justification.
- Avoid unrelated file modifications.
- Explain proposed architectural deviations and obtain approval before applying them.

Optional functionality may be implemented only after it has been explicitly promoted into the approved specification.

## Testing and Verification Discipline

Agents must:

- Derive tests from approved acceptance criteria.
- Prioritize externally observable behavior over implementation details.
- Keep domain logic independently testable where appropriate.
- Never weaken or remove a valid test merely to make an implementation pass.
- Clearly report all failing tests.
- Run relevant tests after each implementation increment.
- Run relevant build and static verification.
- Generate required coverage reports.
- Treat coverage as supporting evidence, not as the primary quality objective.

After every implementation increment, report:

- Files created.
- Files modified.
- Tests executed.
- Test results, including failures.
- Build result, where applicable.
- Coverage result, where applicable.
- `git diff --stat`.
- Remaining work.
- Any deviation from the approved specification or design.

## Git Safety and Repository Hygiene

Agents must never automatically:

- Commit.
- Push.
- Merge.
- Rebase.
- Amend.
- Force-push.
- Rewrite Git history.

The human developer owns commit boundaries and repository history. Generated build artifacts must not be version controlled.

## AI Prompt Audit Trail

Maintain the auditable prompt log at `docs/ai-prompts.md`. Every development prompt capable of influencing repository contents, specification, design, tests, or implementation must be recorded with a sequential identifier (`P001`, `P002`, `P003`, and so on).

Each entry must contain:

- Prompt ID.
- Phase.
- Objective.
- Prompt.
- Outcome.

The Prompt section must preserve the actual prompt text used for that development step. Never rewrite historical prompts to make the process appear cleaner. Record corrections and superseding decisions in later prompts or decisions rather than silently altering the historical record. Do not invent prompts that were never executed.

For every future development prompt:

1. Record the current prompt in `docs/ai-prompts.md` before modifying the repository.
2. Perform only the approved task.
3. Update that prompt entry's Outcome with a concise, factual account of what was actually done.
