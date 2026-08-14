# ADR-004 — Frontend Stack

**Status:** Accepted

## Context

React is required. The UI is a single calculator screen with local interaction state, REST communication, and focused observable-behavior tests.

## Decision

Use React with TypeScript and Vite, browser-native `fetch`, local React state, and lightweight responsibility-based components. Use Vitest, React Testing Library, and `user-event` where useful.

## Alternatives considered

- React with JavaScript would reduce type tooling but provide weaker contracts for UI and API state.
- Axios would duplicate browser capabilities for this one-endpoint API.
- Redux, Zustand, MobX, or another global state library would add unnecessary concepts and dependencies.

## Consequences

The frontend has typed, fast, conventional tooling and a small dependency surface. API communication and backend configuration remain outside presentation components; no frontend evaluator is introduced.
