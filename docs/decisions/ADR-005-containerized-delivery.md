# ADR-005 — Containerized Delivery

**Status:** Accepted

## Context

Docker is optional in the assessment source. The project now commits it as a delivery convenience for consistently starting the frontend and both independently selectable backends.

## Decision

Provide a container for the frontend, Go backend, and Java backend, plus a root Compose configuration for full-stack local startup. Preserve separate backend destinations so frontend selection remains observable.

## Alternatives considered

- Documented native-only startup would minimize delivery work and still satisfy the assessment because Docker is optional at its source.

## Consequences

Reviewers gain a convenient full-application startup path, while image builds and environment configuration add delivery work. Docker remains intentionally simple; Kubernetes, Helm, service discovery, gateways, and production orchestration are excluded.
