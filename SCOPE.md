# Approved Product Scope

## 1. Purpose

This document records approved product-scope decisions and project extensions for the Calculator. It translates the source baseline in `REQUIREMENTS.md` into delivery commitments without changing requirement provenance, defining a formal behavioral contract, or selecting implementation technologies or architecture.

## 2. Source Requirements vs Delivery Commitments

`REQUIREMENTS.md` remains authoritative for what the assessment stated. A source classification of optional remains optional even when this project commits to delivering that capability. This document is authoritative for the project's delivery scope. Future `SPEC.md` will define exactly how committed behavior is externally observable.

| Requirement | Capability | Assessment classification | Delivery commitment |
|---|---|---|---|
| REQ-F-001 | Addition | Mandatory | Committed |
| REQ-F-002 | Subtraction | Mandatory | Committed |
| REQ-F-003 | Multiplication | Mandatory | Committed |
| REQ-F-004 | Division | Mandatory | Committed |
| REQ-O-001 | Exponentiation | Optional | Committed |
| REQ-O-002 | Square root | Optional | Committed |
| REQ-O-003 | Percentage | Optional | Committed |

All seven capabilities are mandatory in this project's committed delivery scope. The last three remain optional in their assessment-source classification.

## 3. Committed Calculator Capabilities

The final solution must deliver:

- Decimal numeric literals.
- Addition.
- Subtraction.
- Multiplication.
- Division.
- Exponentiation.
- Unary square root.
- Postfix percentage values.
- Parenthesized expressions.
- Conventional arithmetic precedence.
- Clear/reset and equals/evaluate interactions.
- Real-number results only.

Parentheses are expression syntax, not an additional calculator operation.

## 4. User Interaction Model

The Calculator must use an expression-oriented interaction model comparable to a familiar mobile calculator. Users construct a calculation with interface controls rather than entering independent left-operand and right-operand fields.

The interface must provide controls for:

- Digits `0` through `9`.
- A decimal separator.
- Addition, subtraction, multiplication, and division.
- Exponentiation, square root, and percentage.
- Opening and closing parentheses.
- Clear/reset.
- Equals/evaluate.

On devices with a physical keyboard, users must also be able to enter supported expression characters by keyboard. Keyboard entry is an additional input mechanism for the same expression model, not a separate calculation model.

## 5. Expression Model

The user-visible calculation model is a single mathematical expression. Expressions may combine the committed operations and parentheses and must follow conventional arithmetic precedence.

Illustrative intended expressions include:

- `12 + 4`
- `2 * (3 + 4)`
- `2 ^ 8`
- `sqrt(81)`
- `150 * 20%`

These examples communicate product scope only. The formal grammar, token rules, evaluation details, and REST representation are deferred to `SPEC.md`.

## 6. Percentage Semantics

Percentage is a postfix percentage value. Conceptually, `20%` represents `0.20`, so `150 * 20%` evaluates to `30`.

Percentage is compositional expression syntax, not a special binary operation such as “20 percent of 150.” Future `SPEC.md` must define its precise observable behavior.

## 7. Square Root Semantics

Square root is unary; conceptually, `sqrt(9) = 3`. The product supports real-number results only. A square root of a negative value is an invalid calculation and must not introduce complex-number support. Future `SPEC.md` will define the exact observable error behavior.

## 8. Backend Responsibility

Mathematical expression evaluation belongs to the backend. The frontend is responsible for:

- Collecting calculator input.
- Constructing and displaying the expression.
- Submitting the expression for evaluation.
- Displaying the returned result or error.

The frontend must not independently implement the calculation engine. Minor presentation logic, such as formatting button labels, is not calculation-engine duplication. The exact REST contract remains deferred to the behavioral specification phase.

## 9. Approved Project Extensions

The final application will contain two interchangeable backend implementations that expose the same externally observable calculator behavior. The frontend will allow the user to select which backend processes a calculation.

Docker support, although optional in the assessment source under `CON-007`, is committed in this project's delivery scope. The final delivery includes container support for the frontend and both backends plus a root Compose configuration for full-application startup.

This extension demonstrates:

- Contract-first interoperability.
- Separation between frontend behavior and backend technology.
- Equivalent behavior across independent implementations.

For the same valid expression, both backends must produce semantically equivalent results. For the same invalid expression, both must produce semantically equivalent externally observable error behavior. `SPEC.md` will define the shared API, HTTP statuses, numeric tolerances, and error schema.

No backend implementation languages are selected here. The Go preference in CON-003 remains applicable and must be considered during architecture design.

## 10. Explicitly Excluded Scope

The following are outside committed delivery scope:

- Trigonometric functions.
- Logarithms.
- Factorial.
- Variables.
- Arbitrary user-defined functions.
- Constants such as π or e.
- Calculator memory registers.
- Persistent calculation history.
- Complex numbers.
- Arbitrary scripting.
- Executable expressions.
- Server-side code evaluation.
- Separate left-operand and right-operand input fields as the required interaction model.
- An independent frontend calculation engine.
- Claims that the product is a complete scientific calculator.

The product must be described as “Calculator” or an equivalent description that does not imply full scientific-calculator functionality.

## 11. Deferred Architecture Decisions

The following decisions remain for the architecture phase:

- The two backend implementation languages, while considering the Go preference in CON-003.
- Backend frameworks.
- Whether evaluation uses a third-party expression library, a standard-library capability, or a small custom parser/evaluator.

Expression-evaluation candidates must later be evaluated for correctness, deterministic behavior, operator and precedence support, percentage and square-root behavior, input restriction capabilities, dependency weight, maintainability, parity across both backend languages, and suitability for a two-to-four-hour assessment. A library must conform to the approved specification; it must not redefine it.

## 12. Resolved Open Decisions

Relative to the Open Decisions in `REQUIREMENTS.md`, this phase resolves:

- **Percentage semantics:** Postfix percentage values; conceptually, `20%` is `0.20`.
- **Square-root semantics and domain:** Unary square root with real-number results only; negative inputs are invalid calculations.
- **Frontend interaction model:** A single expression built with calculator controls, plus physical-keyboard entry where available; no required separate operand fields.
- **Optional operations:** Exponentiation, square root, and percentage are all promoted into committed delivery scope.
- **Responsibility for evaluation:** Evaluation belongs to the backend, with no independent frontend calculation engine.
- **Multiple-backend extension and parity:** Two selectable, interchangeable backends must provide semantically equivalent valid results and invalid-expression behavior.
- **Expression-language boundaries:** The committed capabilities and explicit exclusions are established at product-scope level.
- **Docker delivery:** Docker remains optional in assessment provenance but is promoted into this project's committed delivery scope.

## 13. Remaining Open Decisions

The following remain deliberately unresolved:

- Exact API request shape.
- Exact API success and error response shapes and HTTP statuses.
- Numeric representation, precision, formatting, and parity tolerances.
- Precise formal expression grammar and token rules.
- Exact observable handling of division by zero, negative square root, malformed expressions, mathematically invalid results, and non-finite results.
- The two backend implementation languages, acknowledging the Go preference.
- Backend frameworks.
- Expression-evaluation implementation approach and any library selection.
- Detailed responsive UI behavior and measurable usability acceptance criteria.
