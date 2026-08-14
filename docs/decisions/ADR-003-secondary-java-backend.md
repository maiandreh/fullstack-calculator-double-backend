# ADR-003 — Secondary Java Backend

**Status:** Accepted

## Context

The approved two-backend project extension requires an independent compatibility target to demonstrate that the frontend and behavior depend on a shared contract rather than one technology.

## Decision

Use Java 21, Spring Boot, Maven, and Spring Web for Backend B, with JUnit 5, MockMvc, and JaCoCo. Use default local port `8081`, exclude Lombok, and keep the implementation to transport mapping, domain errors, and evaluator/parser responsibilities.

## Alternatives considered

- Delivering only the preferred Go backend would reduce effort and satisfy the assessment's basic backend need, but would abandon the explicitly approved dual-backend extension.

## Consequences

The project gains an independently implemented parity target and clear contract-first evidence. This backend is a project extension, not an assessment requirement, and increases implementation, build, container, test, and maintenance cost. Spring dependencies are accepted but unnecessary layers remain excluded.
