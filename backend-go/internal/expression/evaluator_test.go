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

func TestEvaluatePercentageAndSquareRoot(t *testing.T) {
	tests := map[string]struct {
		expression string
		want       float64
	}{
		"percentage value":                  {expression: "20%", want: 0.2},
		"percentage multiplication":         {expression: "150 * 20%", want: 30},
		"compositional percentage addition": {expression: "100 + 20%", want: 100.2},
		"repeated percentage":               {expression: "20%%", want: 0.002},
		"percentage before exponentiation":  {expression: "200% ^ 2", want: 4},
		"square root":                       {expression: "sqrt(81)", want: 9},
		"compound square root":              {expression: "sqrt(9 + 7)", want: 4},
		"decimal square root":               {expression: "sqrt(2.25)", want: 1.5},
		"grouped square-root argument":      {expression: "sqrt((3 + 1) * 4)", want: 4},
		"nested square root":                {expression: "sqrt(sqrt(16))", want: 2},
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

func TestEvaluateRejectsNegativeSquareRootDomain(t *testing.T) {
	for _, input := range []string{"sqrt(-1)", "sqrt(1 - 2)"} {
		t.Run(input, func(t *testing.T) {
			_, err := expression.Evaluate(input)
			if !errors.Is(err, expression.ErrInvalidDomain) {
				t.Fatalf("Evaluate(%q) error = %v, want ErrInvalidDomain", input, err)
			}
		})
	}
}

func TestEvaluateRejectsMalformedPercentageAndSquareRoot(t *testing.T) {
	for _, input := range []string{"sqrt 9", "sqrt()", "sqrt(9", "sin(9)", "%20", "20%20", "√9"} {
		t.Run(input, func(t *testing.T) {
			_, err := expression.Evaluate(input)
			if !errors.Is(err, expression.ErrInvalidExpression) {
				t.Fatalf("Evaluate(%q) error = %v, want ErrInvalidExpression", input, err)
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
