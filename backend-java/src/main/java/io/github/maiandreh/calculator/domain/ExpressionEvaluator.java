package io.github.maiandreh.calculator.domain;

import static io.github.maiandreh.calculator.domain.CalculationException.Category.DIVISION_BY_ZERO;
import static io.github.maiandreh.calculator.domain.CalculationException.Category.INVALID_DOMAIN;
import static io.github.maiandreh.calculator.domain.CalculationException.Category.INVALID_EXPRESSION;
import static io.github.maiandreh.calculator.domain.CalculationException.Category.NON_FINITE_RESULT;

public final class ExpressionEvaluator {
    public static final int MAX_EXPRESSION_LENGTH = 256;

    public double evaluate(String expression) {
        if (expression == null
                || expression.isBlank()
                || expression.codePointCount(0, expression.length()) > MAX_EXPRESSION_LENGTH) {
            throw invalidExpression();
        }

        Parser parser = new Parser(expression);
        double result = parser.parseExpression();
        parser.skipWhitespace();
        if (!parser.atEnd()) {
            throw invalidExpression();
        }
        if (!Double.isFinite(result)) {
            throw new CalculationException(NON_FINITE_RESULT);
        }
        return result;
    }

    private static CalculationException invalidExpression() {
        return new CalculationException(INVALID_EXPRESSION);
    }

    private static final class Parser {
        private final String input;
        private int position;

        private Parser(String input) {
            this.input = input;
        }

        private double parseExpression() {
            double value = parseMultiplicative();
            while (true) {
                if (consume('+')) {
                    if (nextNonWhitespaceIsSign()) {
                        throw invalidExpression();
                    }
                    value += parseMultiplicative();
                } else if (consume('-')) {
                    if (nextNonWhitespaceIsSign()) {
                        throw invalidExpression();
                    }
                    value -= parseMultiplicative();
                } else {
                    return value;
                }
            }
        }

        private double parseMultiplicative() {
            double value = parseUnary();
            while (true) {
                if (consume('*')) {
                    value *= parseUnary();
                } else if (consume('/')) {
                    double divisor = parseUnary();
                    if (divisor == 0.0d) {
                        throw new CalculationException(DIVISION_BY_ZERO);
                    }
                    value /= divisor;
                } else {
                    return value;
                }
            }
        }

        private double parseUnary() {
            if (consume('+')) {
                return parseUnary();
            }
            if (consume('-')) {
                return -parseUnary();
            }
            return parsePower();
        }

        private double parsePower() {
            double base = parsePostfix();
            if (!consume('^')) {
                return base;
            }

            double result = Math.pow(base, parseUnary());
            if (Double.isNaN(result)) {
                throw new CalculationException(INVALID_DOMAIN);
            }
            return result;
        }

        private double parsePostfix() {
            double value = parsePrimary();
            while (consume('%')) {
                value /= 100.0d;
            }
            return value;
        }

        private double parsePrimary() {
            if (consumeKeyword("sqrt")) {
                if (!consume('(')) {
                    throw invalidExpression();
                }
                double argument = parseExpression();
                if (!consume(')')) {
                    throw invalidExpression();
                }
                if (argument < 0.0d) {
                    throw new CalculationException(INVALID_DOMAIN);
                }
                return Math.sqrt(argument);
            }
            if (consume('(')) {
                double value = parseExpression();
                if (!consume(')')) {
                    throw invalidExpression();
                }
                return value;
            }
            return parseNumber();
        }

        private boolean consumeKeyword(String keyword) {
            skipWhitespace();
            if (!input.startsWith(keyword, position)) {
                return false;
            }
            position += keyword.length();
            return true;
        }

        private double parseNumber() {
            skipWhitespace();
            int start = position;
            boolean integerDigits = consumeDigits();
            boolean fractionalDigits = false;

            if (!atEnd() && input.charAt(position) == '.') {
                position++;
                fractionalDigits = consumeDigits();
            }

            if (!integerDigits && !fractionalDigits) {
                throw invalidExpression();
            }

            try {
                double value = Double.parseDouble(input.substring(start, position));
                if (!Double.isFinite(value)) {
                    throw invalidExpression();
                }
                return value;
            } catch (NumberFormatException exception) {
                throw invalidExpression();
            }
        }

        private boolean consumeDigits() {
            int start = position;
            while (!atEnd() && input.charAt(position) >= '0' && input.charAt(position) <= '9') {
                position++;
            }
            return position > start;
        }

        private boolean consume(char expected) {
            skipWhitespace();
            if (atEnd() || input.charAt(position) != expected) {
                return false;
            }
            position++;
            return true;
        }

        private boolean nextNonWhitespaceIsSign() {
            skipWhitespace();
            return !atEnd() && (input.charAt(position) == '+' || input.charAt(position) == '-');
        }

        private void skipWhitespace() {
            while (!atEnd()) {
                int codePoint = input.codePointAt(position);
                if (!Character.isWhitespace(codePoint)) {
                    return;
                }
                position += Character.charCount(codePoint);
            }
        }

        private boolean atEnd() {
            return position >= input.length();
        }
    }
}
