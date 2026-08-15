#!/usr/bin/env python3
"""Verify the shared calculator contract against live Go and Java backends.

Start the Go service on port 8080 and the Java service on port 8081 before
running this script. Override the defaults with GO_BACKEND_URL and
JAVA_BACKEND_URL when needed.
"""

from __future__ import annotations

import json
import math
import os
import sys
import urllib.error
import urllib.request
from dataclasses import dataclass
from typing import Any

TOLERANCE = 1e-12
DEFAULT_GO_URL = "http://localhost:8080"
DEFAULT_JAVA_URL = "http://localhost:8081"


@dataclass(frozen=True)
class Case:
    name: str
    request: dict[str, Any]
    status: int
    result: float | None = None
    code: str | None = None
    message: str | None = None


INVALID_REQUEST_MESSAGE = "A non-empty expression of at most 256 characters is required"
CASES = (
    Case("addition", {"expression": "2 + 3"}, 200, result=5),
    Case("subtraction", {"expression": "7 - 10"}, 200, result=-3),
    Case("multiplication", {"expression": "6 * 7"}, 200, result=42),
    Case("division", {"expression": "8 / 4"}, 200, result=2),
    Case("decimal result", {"expression": "10 / 4"}, 200, result=2.5),
    Case("precedence", {"expression": "2 + 3 * 4"}, 200, result=14),
    Case("parentheses", {"expression": "(2 + 3) * 4"}, 200, result=20),
    Case("exponentiation", {"expression": "2 ^ 3"}, 200, result=8),
    Case("right-associative exponentiation", {"expression": "2 ^ 3 ^ 2"}, 200, result=512),
    Case("unary power precedence", {"expression": "-2 ^ 2"}, 200, result=-4),
    Case("grouped negative base", {"expression": "(-2) ^ 2"}, 200, result=4),
    Case("signed exponent", {"expression": "2 ^ -2"}, 200, result=0.25),
    Case("percentage value", {"expression": "20%"}, 200, result=0.2),
    Case("percentage multiplication", {"expression": "150 * 20%"}, 200, result=30),
    Case("compositional percentage", {"expression": "100 + 20%"}, 200, result=100.2),
    Case("square root", {"expression": "sqrt(81)"}, 200, result=9),
    Case("compound square root", {"expression": "sqrt(9 + 7)"}, 200, result=4),
    Case("compound advanced", {"expression": "sqrt(81) + 150 * 20%"}, 200, result=39),
    Case("division by zero", {"expression": "1 / 0"}, 400,
         code="DIVISION_BY_ZERO", message="Division by zero is not allowed"),
    Case("invalid grammar", {"expression": "2 +"}, 400,
         code="INVALID_EXPRESSION", message="Expression is invalid"),
    Case("unsupported function", {"expression": "sin(1)"}, 400,
         code="INVALID_EXPRESSION", message="Expression is invalid"),
    Case("scientific notation", {"expression": "1e3"}, 400,
         code="INVALID_EXPRESSION", message="Expression is invalid"),
    Case("invalid domain", {"expression": "sqrt(-1)"}, 400,
         code="INVALID_DOMAIN", message="Expression is outside the supported real-number domain"),
    Case("non-finite result", {"expression": "10 ^ 1000"}, 400,
         code="NON_FINITE_RESULT", message="Expression result is not finite"),
    Case("missing expression", {}, 400,
         code="INVALID_REQUEST", message=INVALID_REQUEST_MESSAGE),
    Case("empty expression", {"expression": ""}, 400,
         code="INVALID_REQUEST", message=INVALID_REQUEST_MESSAGE),
)


def request_json(base_url: str, method: str, path: str,
                 payload: dict[str, Any] | None = None) -> tuple[int, Any]:
    data = None if payload is None else json.dumps(payload).encode("utf-8")
    headers = {} if payload is None else {"Content-Type": "application/json"}
    request = urllib.request.Request(base_url.rstrip("/") + path, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(request, timeout=3) as response:
            status = response.status
            body = response.read()
    except urllib.error.HTTPError as error:
        status = error.code
        body = error.read()
    return status, json.loads(body)


def check_available(name: str, base_url: str) -> bool:
    try:
        status, body = request_json(base_url, "GET", "/health")
    except (OSError, ValueError) as error:
        print(f"UNAVAILABLE {name} backend at {base_url}: {error}", file=sys.stderr)
        return False
    if status != 200:
        print(f"UNAVAILABLE {name} backend at {base_url}: health returned {status} {body!r}", file=sys.stderr)
        return False
    return True


def observation_errors(case: Case, status: int, body: Any) -> list[str]:
    errors: list[str] = []
    if status != case.status:
        errors.append(f"status {status}, expected {case.status}")
    if not isinstance(body, dict):
        return errors + [f"body is {type(body).__name__}, expected JSON object"]
    if case.status == 200:
        if set(body) != {"result"}:
            errors.append(f"success schema keys {sorted(body)}, expected ['result']")
        result = body.get("result")
        if isinstance(result, bool) or not isinstance(result, (int, float)) or not math.isfinite(result):
            errors.append(f"result {result!r} is not a finite JSON number")
        elif case.result is not None and abs(result - case.result) > TOLERANCE:
            errors.append(f"result {result!r}, expected {case.result!r} within {TOLERANCE}")
    else:
        if set(body) != {"code", "message"}:
            errors.append(f"error schema keys {sorted(body)}, expected ['code', 'message']")
        if body.get("code") != case.code:
            errors.append(f"code {body.get('code')!r}, expected {case.code!r}")
        if body.get("message") != case.message:
            errors.append(f"message {body.get('message')!r}, expected {case.message!r}")
    return errors


def parity_errors(case: Case, go_observed: tuple[int, Any], java_observed: tuple[int, Any]) -> list[str]:
    go_status, go_body = go_observed
    java_status, java_body = java_observed
    errors: list[str] = []
    if go_status != java_status:
        errors.append(f"statuses differ: Go {go_status}, Java {java_status}")
    if case.status == 200 and isinstance(go_body, dict) and isinstance(java_body, dict):
        go_result = go_body.get("result")
        java_result = java_body.get("result")
        if (isinstance(go_result, (int, float)) and not isinstance(go_result, bool)
                and isinstance(java_result, (int, float)) and not isinstance(java_result, bool)
                and abs(go_result - java_result) > TOLERANCE):
            errors.append(f"results differ by {abs(go_result - java_result)!r}, tolerance {TOLERANCE}")
    elif isinstance(go_body, dict) and isinstance(java_body, dict):
        if go_body.get("code") != java_body.get("code"):
            errors.append("error codes differ")
        if go_body.get("message") != java_body.get("message"):
            errors.append("error messages differ")
    return errors


def main() -> int:
    go_url = os.environ.get("GO_BACKEND_URL", DEFAULT_GO_URL)
    java_url = os.environ.get("JAVA_BACKEND_URL", DEFAULT_JAVA_URL)
    if not (check_available("Go", go_url) & check_available("Java", java_url)):
        return 2

    failures = 0
    for case in CASES:
        try:
            go_observed = request_json(go_url, "POST", "/api/calculate", case.request)
            java_observed = request_json(java_url, "POST", "/api/calculate", case.request)
        except (OSError, ValueError) as error:
            failures += 1
            print(f"FAIL {case.name}: request/response error: {error}")
            continue
        errors = ([f"Go: {error}" for error in observation_errors(case, *go_observed)]
                  + [f"Java: {error}" for error in observation_errors(case, *java_observed)]
                  + parity_errors(case, go_observed, java_observed))
        if errors:
            failures += 1
            print(f"FAIL {case.name}")
            print(f"  request: {case.request!r}")
            print(f"  Go observed: status={go_observed[0]} body={go_observed[1]!r}")
            print(f"  Java observed: status={java_observed[0]} body={java_observed[1]!r}")
            print(f"  expected: status={case.status} result={case.result!r} code={case.code!r} message={case.message!r}")
            for error in errors:
                print(f"  mismatch: {error}")
        else:
            print(f"PASS {case.name}")

    print(f"Parity summary: total={len(CASES)} passed={len(CASES) - failures} failed={failures}")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
