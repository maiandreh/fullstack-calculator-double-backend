package io.github.maiandreh.calculator.domain;

import static io.github.maiandreh.calculator.domain.CalculationException.Category.DIVISION_BY_ZERO;
import static io.github.maiandreh.calculator.domain.CalculationException.Category.INVALID_DOMAIN;
import static io.github.maiandreh.calculator.domain.CalculationException.Category.INVALID_EXPRESSION;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

class ExpressionEvaluatorTest {
    private final ExpressionEvaluator evaluator = new ExpressionEvaluator();

    @ParameterizedTest
    @MethodSource("validExpressions")
    void evaluatesValidCoreExpressions(String expression, double expected) {
        assertEquals(expected, evaluator.evaluate(expression));
    }

    private static Stream<Arguments> validExpressions() {
        return Stream.of(
                Arguments.of("0", 0.0d),
                Arguments.of("12", 12.0d),
                Arguments.of("12.5", 12.5d),
                Arguments.of("0.5", 0.5d),
                Arguments.of(".5", 0.5d),
                Arguments.of("12.", 12.0d),
                Arguments.of(" \t 12 \n", 12.0d),
                Arguments.of("(12)", 12.0d),
                Arguments.of("((12))", 12.0d),
                Arguments.of("2 + 3", 5.0d),
                Arguments.of("7 - 2", 5.0d),
                Arguments.of("4 * 5", 20.0d),
                Arguments.of("10 / 4", 2.5d),
                Arguments.of("0.1 + 0.2", 0.1d + 0.2d),
                Arguments.of("2 + 3 * 4", 14.0d),
                Arguments.of("(2 + 3) * 4", 20.0d),
                Arguments.of("12 / 3 + 2", 6.0d),
                Arguments.of("12 / (3 + 1)", 3.0d),
                Arguments.of("10 - 3 - 2", 5.0d),
                Arguments.of("20 / 5 / 2", 2.0d),
                Arguments.of("8 / 4 / 2", 1.0d));
    }

    @ParameterizedTest
    @MethodSource("advancedExpressions")
    void evaluatesAdvancedExpressions(String expression, double expected) {
        assertEquals(expected, evaluator.evaluate(expression));
    }

    private static Stream<Arguments> advancedExpressions() {
        return Stream.of(
                Arguments.of("-2", -2.0d),
                Arguments.of("+2", 2.0d),
                Arguments.of("3 * -2", -6.0d),
                Arguments.of("2 ^ 3", 8.0d),
                Arguments.of("5 ^ 0", 1.0d),
                Arguments.of("2 ^ -2", 0.25d),
                Arguments.of("2 ^ 3 ^ 2", 512.0d),
                Arguments.of("-2 ^ 2", -4.0d),
                Arguments.of("(-2) ^ 2", 4.0d),
                Arguments.of("20%", 0.2d),
                Arguments.of("20%%", 0.002d),
                Arguments.of("150 * 20%", 30.0d),
                Arguments.of("100 + 20%", 100.2d),
                Arguments.of("sqrt(81)", 9.0d),
                Arguments.of("sqrt(9 + 7)", 4.0d),
                Arguments.of("sqrt(2.25)", 1.5d),
                Arguments.of("sqrt((4) * 4)", 4.0d));
    }

    @ParameterizedTest
    @ValueSource(strings = {
        ".", "1.2.3", "1e3", "1,5", "foo", "sin(1)", "sq rt(1)",
        "sqrt", "sqrt()", "sqrt 1", "sqrt(1", "sqrt(1))", "√(1)",
        "2 +", "2 ++ 3", "(1", "1)", "()", "1abc", "%20", "20%2", "2 ^"
    })
    void rejectsInvalidOrNotYetImplementedGrammar(String expression) {
        assertCategory(INVALID_EXPRESSION, expression);
    }

    @Test
    void acceptsSyntacticallyValidExpressionAtLengthBoundary() {
        String expression = "(".repeat(127) + "12" + ")".repeat(127);

        assertEquals(12.0d, evaluator.evaluate(expression));
        assertEquals(ExpressionEvaluator.MAX_EXPRESSION_LENGTH, expression.length());
    }

    @Test
    void rejectsExpressionLongerThanBoundary() {
        assertCategory(INVALID_EXPRESSION, "1".repeat(ExpressionEvaluator.MAX_EXPRESSION_LENGTH + 1));
    }

    @ParameterizedTest
    @ValueSource(strings = {"1 / 0", "1 / -0", "1 / 0.0", "1 / -0.0"})
    void distinguishesDivisionByPositiveAndNegativeZero(String expression) {
        assertCategory(DIVISION_BY_ZERO, expression);
    }

    @Test
    void distinguishesInvalidSquareRootDomain() {
        assertCategory(INVALID_DOMAIN, "sqrt(-1)");
    }

    private void assertCategory(CalculationException.Category expected, String expression) {
        CalculationException exception =
                assertThrows(CalculationException.class, () -> evaluator.evaluate(expression));
        assertEquals(expected, exception.category());
    }
}
