# Requirements Baseline

## Purpose and Source

This document captures the requirements supplied in the technical assessment quoted in prompt P002. It records source intent without selecting architecture, specifying detailed behavior, or promoting optional functionality. The assessment is the sole product-requirements source for this baseline.

## Mandatory Functional Requirements

### REQ-F-001 — Addition

**Statement:** The calculator shall support addition.

**Source:** Assessment — Functional Requirements, Mandatory

**Status:** Mandatory

**Verification:** Demonstrate addition through automated behavioral testing.

### REQ-F-002 — Subtraction

**Statement:** The calculator shall support subtraction.

**Source:** Assessment — Functional Requirements, Mandatory

**Status:** Mandatory

**Verification:** Demonstrate subtraction through automated behavioral testing.

### REQ-F-003 — Multiplication

**Statement:** The calculator shall support multiplication.

**Source:** Assessment — Functional Requirements, Mandatory

**Status:** Mandatory

**Verification:** Demonstrate multiplication through automated behavioral testing.

### REQ-F-004 — Division

**Statement:** The calculator shall support division.

**Source:** Assessment — Functional Requirements, Mandatory

**Status:** Mandatory

**Verification:** Demonstrate division through automated behavioral testing.

## Optional Functional Requirements

These capabilities are permitted by the assessment but are outside the approved mandatory scope unless later promoted into an approved specification.

### REQ-O-001 — Exponentiation

**Statement:** The calculator may support exponentiation.

**Source:** Assessment — Functional Requirements, Optional

**Status:** Optional; not approved for implementation

**Verification:** If promoted, demonstrate exponentiation through automated behavioral testing.

### REQ-O-002 — Square Root

**Statement:** The calculator may support square root.

**Source:** Assessment — Functional Requirements, Optional

**Status:** Optional; not approved for implementation

**Verification:** If promoted, demonstrate square-root behavior through automated behavioral testing.

### REQ-O-003 — Percentage

**Statement:** The calculator may support percentage operations.

**Source:** Assessment — Functional Requirements, Optional

**Status:** Optional; not approved for implementation

**Verification:** If promoted, demonstrate the approved percentage behavior through automated behavioral testing.

## Frontend Requirements

### REQ-FE-001 — React Frontend

**Statement:** The application shall have a frontend implemented using React.

**Source:** Assessment — Overview and Frontend Requirements

**Status:** Mandatory

**Verification:** Verify that the delivered frontend uses React and exposes the approved calculator behavior.

### REQ-FE-002 — Calculator Input and Results UI

**Statement:** The frontend shall provide an intuitive user interface for entering calculator input and displaying results.

**Source:** Assessment — Frontend Requirements

**Status:** Mandatory

**Verification:** Review and exercise the approved user interactions for entering input and viewing results.

### REQ-FE-003 — Basic Responsive Design

**Statement:** The frontend shall include basic responsive design.

**Source:** Assessment — Frontend Requirements

**Status:** Mandatory

**Verification:** Exercise the approved interface at representative viewport sizes and verify its required behavior remains usable.

## Backend Requirements

### REQ-BE-001 — Backend Microservice

**Statement:** The application shall include a backend microservice.

**Source:** Assessment — Overview

**Status:** Mandatory

**Verification:** Verify that the delivered application includes a backend service providing the approved calculator contract.

### REQ-BE-002 — REST API

**Statement:** The backend shall expose a REST API.

**Source:** Assessment — Backend Requirements

**Status:** Mandatory

**Verification:** Exercise the approved REST API contract through integration testing.

### REQ-BE-003 — Operation Requests

**Statement:** The backend shall accept calculator operation requests.

**Source:** Assessment — Backend Requirements

**Status:** Mandatory

**Verification:** Submit requests for the approved operations and verify observable responses.

### REQ-BE-004 — Input Validation

**Statement:** The backend shall validate operation-request input.

**Source:** Assessment — Backend Requirements

**Status:** Mandatory

**Verification:** Submit valid and invalid inputs and verify behavior against the approved API contract.

### REQ-BE-005 — Division-by-Zero Handling

**Statement:** The backend shall handle division by zero as an edge case.

**Source:** Assessment — Backend Requirements

**Status:** Mandatory

**Verification:** Submit a division-by-zero request and verify the approved error behavior.

### REQ-BE-006 — JSON Results

**Statement:** The backend shall return operation results as JSON.

**Source:** Assessment — Backend Requirements

**Status:** Mandatory

**Verification:** Verify successful operation responses against the approved JSON response contract.

## Testing and Quality Requirements

### REQ-Q-001 — Clean Design

**Statement:** The solution shall demonstrate clean design.

**Source:** Assessment — Overview

**Status:** Mandatory quality objective

**Verification:** Review the delivered solution for clear responsibilities and consistency with approved design decisions.

### REQ-Q-002 — Maintainability

**Statement:** The solution shall demonstrate maintainability.

**Source:** Assessment — Overview

**Status:** Mandatory quality objective

**Verification:** Review the delivered solution for clarity, focused components, and ease of change within the approved scope.

### REQ-Q-003 — Testable Architecture

**Statement:** The solution shall demonstrate a testable architecture.

**Source:** Assessment — Overview

**Status:** Mandatory quality objective

**Verification:** Review whether key behavior can be verified independently at appropriate test levels.

### REQ-Q-004 — Frontend Unit Tests

**Statement:** The frontend shall include unit tests for key functionality.

**Source:** Assessment — Testing

**Status:** Mandatory

**Verification:** Run the frontend unit tests and report their results.

### REQ-Q-005 — Backend Unit Tests

**Statement:** The backend shall include unit tests for key functionality.

**Source:** Assessment — Testing

**Status:** Mandatory

**Verification:** Run the backend unit tests and report their results.

### REQ-Q-006 — Test Coverage Report

**Statement:** The delivered assessment shall include a test coverage report.

**Source:** Assessment — Documentation

**Status:** Mandatory deliverable

**Verification:** Generate the required coverage report and confirm that it represents the executed test suites.

## Documentation and Delivery Requirements

### REQ-D-001 — README

**Statement:** The delivered repository shall include a README.

**Source:** Assessment — Documentation

**Status:** Mandatory deliverable

**Verification:** Confirm that the README is present and contains the required information.

### REQ-D-002 — Setup Instructions

**Statement:** The README shall contain setup instructions.

**Source:** Assessment — Documentation

**Status:** Mandatory deliverable

**Verification:** Review the README for complete setup instructions and validate them against the delivered project.

### REQ-D-003 — Run Instructions

**Statement:** The README shall contain instructions for running both the frontend and backend.

**Source:** Assessment — Documentation

**Status:** Mandatory deliverable

**Verification:** Follow the documented instructions to run both delivered application components.

### REQ-D-004 — API Usage Examples

**Statement:** The README shall contain API usage examples.

**Source:** Assessment — Documentation

**Status:** Mandatory deliverable

**Verification:** Review the examples against the approved API contract and exercise them against the delivered backend.

### REQ-D-005 — Brief Design Decisions

**Statement:** The README shall contain a brief account of design decisions.

**Source:** Assessment — Documentation

**Status:** Mandatory deliverable

**Verification:** Confirm that the README summarizes the approved design decisions represented by the delivered solution.

### REQ-D-006 — AI Prompt Disclosure

**Statement:** Relevant AI prompts used during the assessment shall be shared.

**Source:** Assessment — Process and Evaluation Guidance

**Status:** Mandatory process deliverable

**Verification:** Review the prompt audit trail for the relevant prompts used to influence the assessment deliverables.

## Constraints and Preferences

### CON-001 — React Is Required

**Statement:** React is required for the frontend.

**Source:** Assessment — Frontend Requirements

**Status:** Mandatory technology constraint

**Verification:** Verify the delivered frontend technology.

### CON-002 — REST Is Required

**Statement:** The backend interface must be REST-based.

**Source:** Assessment — Backend Requirements

**Status:** Mandatory interface constraint

**Verification:** Verify the approved and delivered backend interface style.

### CON-003 — Go Backend Preference

**Statement:** Go is the preferred backend implementation language, but it is not required.

**Source:** Assessment — Testing

**Status:** Preference; language selection remains open

**Verification:** Record the eventual approved language decision and whether it follows or deviates from the preference.

### CON-004 — Expected Effort

**Statement:** Expected assessment effort is approximately two to four hours.

**Source:** Assessment — Process and Evaluation Guidance

**Status:** Evaluation constraint

**Verification:** Use as planning context; no product behavior is implied.

### CON-005 — Evaluation Priority

**Statement:** Correctness, clarity, and maintainability take precedence over additional features.

**Source:** Assessment — Process and Evaluation Guidance

**Status:** Mandatory prioritization guidance

**Verification:** Review scope and delivery trade-offs against this stated priority.

### CON-006 — AI Tools Permitted

**Statement:** AI tools may be used during the assessment.

**Source:** Assessment — Process and Evaluation Guidance

**Status:** Permission

**Verification:** No product verification is required; relevant usage is evidenced through REQ-D-006.

### CON-007 — Docker Is Optional

**Statement:** Docker setup is permitted but not required.

**Source:** Assessment — Documentation

**Status:** Optional delivery capability; not approved for implementation

**Verification:** If later approved, verify the Docker setup against its approved delivery criteria.

## Project Extensions

None approved.

## Open Decisions

The assessment leaves the following questions unresolved. They must be decided in the appropriate specification or design phase and are not resolved by this baseline:

1. What is the exact API request shape?
2. What are the exact API success-response and error-response shapes, including status codes?
3. What numeric representation and precision rules apply?
4. What semantics would percentage use if REQ-O-003 is promoted?
5. What semantics and valid input domain would square root use if REQ-O-002 is promoted?
6. How should mathematically invalid or non-finite results be handled?
7. What frontend interaction model should provide calculator input and display results?
8. Which, if any, optional operations will be promoted into the approved specification?
9. Will optional Docker support be approved?
10. Which backend implementation language will be selected, acknowledging the Go preference in CON-003?

## Source Traceability Summary

| Assessment source statement | Captured by |
|---|---|
| Basic calculator with a React frontend and backend microservice | REQ-F-001–REQ-F-004, REQ-FE-001, REQ-BE-001 |
| Clean design, maintainability, and testable architecture | REQ-Q-001–REQ-Q-003 |
| Mandatory addition, subtraction, multiplication, and division | REQ-F-001–REQ-F-004 |
| Optional exponentiation, square root, and percentage | REQ-O-001–REQ-O-003 |
| Use React | REQ-FE-001, CON-001 |
| Intuitive input and result UI | REQ-FE-002 |
| Basic responsive design | REQ-FE-003 |
| Expose a REST API and accept operation requests | REQ-BE-002, REQ-BE-003, CON-002 |
| Validate backend input | REQ-BE-004 |
| Handle division by zero | REQ-BE-005 |
| Return results as JSON | REQ-BE-006 |
| Unit tests for key frontend and backend functionality | REQ-Q-004, REQ-Q-005 |
| Go preferred for the backend | CON-003 |
| README with setup, run, API usage, and design-decision information | REQ-D-001–REQ-D-005 |
| Test coverage report | REQ-Q-006 |
| Docker setup optional | CON-007 |
| AI tools allowed and relevant prompts shared | CON-006, REQ-D-006 |
| Expected effort approximately two to four hours | CON-004 |
| Correctness, clarity, and maintainability prioritized over extra features | CON-005 |

All supplied assessment statements are classified above. Behavioral and technical details absent from the source remain open decisions rather than inferred requirements.
