package expression_test

import (
	"errors"
	"strings"
	"testing"

	"github.com/maiandreh/fullstack-calculator-double-backend/backend-go/internal/expression"
)

func TestParseAcceptsApprovedSyntaxFoundation(t *testing.T) {
	tests := map[string]string{
		"zero literal":                  "0",
		"integer literal":               "12",
		"decimal literal":               "12.5",
		"zero decimal literal":          "0.5",
		"decimal with trailing dot":     "12.",
		"leading-dot decimal":           ".5",
		"surrounding whitespace":        " \t12\n",
		"parenthesized value":           "( 12 )",
		"nested parentheses":            "((12))",
		"complete compound expression":  "sqrt((12 + .5) * 2) ^ 3%",
		"subtraction and division":      "1 - 2 / +3",
		"signed multiplicative operand": "3 * -2",
	}

	for name, input := range tests {
		t.Run(name, func(t *testing.T) {
			if err := expression.Parse(input); err != nil {
				t.Fatalf("Parse(%q) error = %v", input, err)
			}
		})
	}
}

func TestParseRejectsInvalidSyntax(t *testing.T) {
	tests := map[string]string{
		"dot only":                      ".",
		"multiple decimal points":       "1.2.3",
		"scientific notation":           "1e3",
		"locale decimal comma":          "1,5",
		"unsupported identifier":        "foo",
		"unsupported function":          "sin(1)",
		"split square-root token":       "sq rt(1)",
		"trailing operator":             "2 +",
		"adjacent signs after addition": "2 ++ 3",
		"unmatched opening parenthesis": "(2",
		"unmatched closing parenthesis": "2)",
		"empty grouping":                "()",
		"empty square root":             "sqrt()",
		"square root without grouping":  "sqrt 9",
		"unsupported trailing content":  "12 foo",
		"presentation multiplication":   "2 × 3",
	}

	for name, input := range tests {
		t.Run(name, func(t *testing.T) {
			err := expression.Parse(input)
			if !errors.Is(err, expression.ErrInvalidExpression) {
				t.Fatalf("Parse(%q) error = %v, want ErrInvalidExpression", input, err)
			}
		})
	}
}

func TestParseEnforcesSubmittedExpressionBoundary(t *testing.T) {
	validAtBoundary := strings.Repeat("(", 127) + "0" + strings.Repeat(")", 127) + " "
	if length := len([]rune(validAtBoundary)); length != 256 {
		t.Fatalf("boundary fixture length = %d, want 256", length)
	}
	if err := expression.Parse(validAtBoundary); err != nil {
		t.Fatalf("Parse(valid 256-character expression) error = %v", err)
	}

	tests := map[string]string{
		"empty":           "",
		"whitespace only": " \t\n",
		"over 256 runes":  strings.Repeat(" ", 256) + "0",
	}
	for name, input := range tests {
		t.Run(name, func(t *testing.T) {
			err := expression.Parse(input)
			if !errors.Is(err, expression.ErrInvalidRequest) {
				t.Fatalf("Parse() error = %v, want ErrInvalidRequest", err)
			}
		})
	}
}

func TestParseCountsUnicodeCharactersForLengthBoundary(t *testing.T) {
	input := strings.Repeat(" ", 255) + "×"
	if err := expression.Parse(input); !errors.Is(err, expression.ErrInvalidExpression) {
		t.Fatalf("Parse(256-character unsupported expression) error = %v, want ErrInvalidExpression", err)
	}
}
