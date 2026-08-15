package io.github.maiandreh.calculator.api;

import com.fasterxml.jackson.databind.JsonNode;
import io.github.maiandreh.calculator.domain.CalculationException;
import io.github.maiandreh.calculator.domain.ExpressionEvaluator;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/calculate")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
final class CalculatorController {
    static final String INVALID_REQUEST_MESSAGE =
            "A non-empty expression of at most 256 characters is required";

    private final ExpressionEvaluator evaluator;

    CalculatorController(ExpressionEvaluator evaluator) {
        this.evaluator = evaluator;
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    ResponseEntity<?> calculate(@RequestBody CalculateRequest request) {
        JsonNode expressionNode = request == null ? null : request.expression();
        if (expressionNode == null || !expressionNode.isTextual()) {
            return invalidRequest();
        }

        String expression = expressionNode.textValue();
        if (expression == null
                || expression.isBlank()
                || expression.codePointCount(0, expression.length()) > ExpressionEvaluator.MAX_EXPRESSION_LENGTH) {
            return invalidRequest();
        }

        try {
            return ResponseEntity.ok(new CalculateResponse(evaluator.evaluate(expression)));
        } catch (CalculationException exception) {
            return ResponseEntity.badRequest().body(errorFor(exception.category()));
        }
    }

    static ResponseEntity<ApiError> invalidRequest() {
        return ResponseEntity.badRequest().body(new ApiError("INVALID_REQUEST", INVALID_REQUEST_MESSAGE));
    }

    private static ApiError errorFor(CalculationException.Category category) {
        return switch (category) {
            case INVALID_EXPRESSION -> new ApiError("INVALID_EXPRESSION", "Expression is invalid");
            case DIVISION_BY_ZERO ->
                    new ApiError("DIVISION_BY_ZERO", "Division by zero is not allowed");
            case INVALID_DOMAIN -> new ApiError(
                    "INVALID_DOMAIN", "Expression is outside the supported real-number domain");
            case NON_FINITE_RESULT ->
                    new ApiError("NON_FINITE_RESULT", "Expression result is not finite");
        };
    }
}
