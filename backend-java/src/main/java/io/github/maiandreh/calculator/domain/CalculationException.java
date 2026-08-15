package io.github.maiandreh.calculator.domain;

public final class CalculationException extends RuntimeException {
    public enum Category {
        INVALID_EXPRESSION,
        DIVISION_BY_ZERO
    }

    private final Category category;

    CalculationException(Category category) {
        super(category.name());
        this.category = category;
    }

    public Category category() {
        return category;
    }
}
