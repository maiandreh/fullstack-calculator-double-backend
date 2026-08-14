package expression_test

import (
	"errors"
	"testing"

	"github.com/maiandreh/fullstack-calculator-double-backend/backend-go/internal/expression"
)

func TestEvaluateBasicArithmetic(t *testing.T) {
	tests := map[string]struct {
		expression string
		want       float64
	}{
		"integer addition":       {expression: "2 + 3", want: 5},
		"decimal addition":       {expression: "1.5 + 2.25", want: 3.75},
		"binary64 addition":      {expression: "0.1 + 0.2", want: 0.30000000000000004},
		"integer subtraction":    {expression: "7 - 10", want: -3},
		"decimal subtraction":    {expression: "5.5 - 2.25", want: 3.25},
		"integer multiplication": {expression: "6 * 7", want: 42},
		"decimal multiplication": {expression: "1.5 * 2", want: 3},
		"exact division":         {expression: "8 / 4", want: 2},
		"decimal division":       {expression: "10 / 4", want: 2.5},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			got, err := expression.Evaluate(test.expression)
			if err != nil {
				t.Fatalf("Evaluate(%q) error = %v", test.expression, err)
			}
			if got != test.want {
				t.Fatalf("Evaluate(%q) = %v, want %v", test.expression, got, test.want)
			}
		})
	}
}

func TestEvaluatePrecedenceGroupingAndAssociativity(t *testing.T) {
	tests := map[string]struct {
		expression string
		want       float64
	}{
		"multiplication before addition":        {expression: "2 + 3 * 4", want: 14},
		"grouping overrides precedence":         {expression: "(2 + 3) * 4", want: 20},
		"division before addition":              {expression: "12 / 3 + 2", want: 6},
		"grouped divisor":                       {expression: "12 / (3 + 1)", want: 3},
		"division before subtraction":           {expression: "10 - 8 / 4", want: 8},
		"left-associative subtraction":          {expression: "10 - 3 - 2", want: 5},
		"left-associative division":             {expression: "20 / 5 / 2", want: 2},
		"left-associative mixed multiplication": {expression: "8 / 4 * 2", want: 4},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			got, err := expression.Evaluate(test.expression)
			if err != nil {
				t.Fatalf("Evaluate(%q) error = %v", test.expression, err)
			}
			if got != test.want {
				t.Fatalf("Evaluate(%q) = %v, want %v", test.expression, got, test.want)
			}
		})
	}
}

func TestEvaluateUnaryAndExponentiation(t *testing.T) {
	tests := map[string]struct {
		expression string
		want       float64
	}{
		"unary negative":                   {expression: "-2", want: -2},
		"unary positive":                   {expression: "+2", want: 2},
		"signed multiplicative operand":    {expression: "3 * -2", want: -6},
		"simple exponentiation":            {expression: "2 ^ 3", want: 8},
		"zero exponent":                    {expression: "5 ^ 0", want: 1},
		"decimal exponent result":          {expression: "9 ^ 0.5", want: 3},
		"right-associative exponentiation": {expression: "2 ^ 3 ^ 2", want: 512},
		"unary minus below power":          {expression: "-2 ^ 2", want: -4},
		"grouped negative base":            {expression: "(-2) ^ 2", want: 4},
		"signed exponent":                  {expression: "2 ^ -2", want: 0.25},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			got, err := expression.Evaluate(test.expression)
			if err != nil {
				t.Fatalf("Evaluate(%q) error = %v", test.expression, err)
			}
			if got != test.want {
				t.Fatalf("Evaluate(%q) = %v, want %v", test.expression, got, test.want)
			}
		})
	}
}

func TestEvaluateRejectsDivisionByZero(t *testing.T) {
	tests := map[string]string{
		"integer positive zero": "1 / 0",
		"decimal positive zero": "1 / 0.0",
		"integer negative zero": "1 / -0",
		"decimal negative zero": "1 / (-0.0)",
		"calculated zero":       "1 / (2 - 2)",
	}

	for name, input := range tests {
		t.Run(name, func(t *testing.T) {
			_, err := expression.Evaluate(input)
			if !errors.Is(err, expression.ErrDivisionByZero) {
				t.Fatalf("Evaluate(%q) error = %v, want ErrDivisionByZero", input, err)
			}
		})
	}
}

func TestEvaluatePreservesInvalidSyntaxRejection(t *testing.T) {
	for _, input := range []string{".", "1.2.3", "1e3", "sin(1)", "2 +", "2 ++ 3", "(2", "2 foo"} {
		t.Run(input, func(t *testing.T) {
			_, err := expression.Evaluate(input)
			if !errors.Is(err, expression.ErrInvalidExpression) {
				t.Fatalf("Evaluate(%q) error = %v, want ErrInvalidExpression", input, err)
			}
		})
	}
}
