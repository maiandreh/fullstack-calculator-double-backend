package io.github.maiandreh.calculator;

import io.github.maiandreh.calculator.domain.ExpressionEvaluator;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CalculatorApplication {

    public static void main(String[] args) {
        SpringApplication.run(CalculatorApplication.class, args);
    }

    @Bean
    ExpressionEvaluator expressionEvaluator() {
        return new ExpressionEvaluator();
    }
}
