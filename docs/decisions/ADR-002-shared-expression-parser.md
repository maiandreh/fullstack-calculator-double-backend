# ADR-002 — Shared Expression Parser Strategy

**Status:** Accepted

## Context

`SPEC.md` defines a small closed grammar with deliberate percentage, exponentiation, unary-sign, square-root, domain-error, and precedence behavior. Library defaults can differ across languages and threaten parity.

## Decision

Implement a small bounded parser/evaluator independently in each backend. The specification, acceptance criteria, grammar, and parity fixtures are shared; source code is not. Use recursive descent or an equivalent precedence-based approach, with direct evaluation permitted and no AST required. Do not use a third-party expression library or build a general-purpose parser framework.

## Alternatives considered

- A third-party library in each language risks incompatible semantics and adds dependencies.
- A custom parser in only one backend would require runtime coupling or code generation and undermine independent interoperability.
- Frontend evaluation would violate backend-owned evaluation and duplicate authority.

## Consequences

Semantics remain under specification control, dependencies stay small, and parser tests can derive directly from acceptance criteria. Similar logic must be implemented twice, so the shared parity dataset is essential evidence.
