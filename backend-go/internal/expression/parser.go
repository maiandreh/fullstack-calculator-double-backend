package expression

import (
	"errors"
	"math"
	"strconv"
	"unicode"
	"unicode/utf8"
)

const maxExpressionLength = 256

var (
	ErrInvalidRequest    = errors.New("invalid request")
	ErrInvalidExpression = errors.New("invalid expression")
	ErrDivisionByZero    = errors.New("division by zero")
)

// Parse validates an expression against the approved closed grammar.
// It deliberately performs no arithmetic evaluation.
func Parse(input string) error {
	_, err := parse(input, false)
	return err
}

// Evaluate calculates the basic arithmetic expression using float64 semantics.
func Evaluate(input string) (float64, error) {
	return parse(input, true)
}

func parse(input string, evaluate bool) (float64, error) {
	if utf8.RuneCountInString(input) > maxExpressionLength || isBlank(input) {
		return 0, ErrInvalidRequest
	}

	tokens, ok := lex([]rune(input))
	if !ok {
		return 0, ErrInvalidExpression
	}

	parser := parser{tokens: tokens, evaluate: evaluate}
	value, err := parser.parseExpression()
	if err != nil {
		return 0, err
	}
	if parser.current().kind != tokenEOF {
		return 0, ErrInvalidExpression
	}

	return value, nil
}

func isBlank(input string) bool {
	for _, character := range input {
		if !unicode.IsSpace(character) {
			return false
		}
	}
	return true
}

type tokenKind uint8

const (
	tokenEOF tokenKind = iota
	tokenNumber
	tokenPlus
	tokenMinus
	tokenMultiply
	tokenDivide
	tokenPower
	tokenPercent
	tokenLeftParenthesis
	tokenRightParenthesis
	tokenSquareRoot
)

type token struct {
	kind   tokenKind
	lexeme string
}

func lex(input []rune) ([]token, bool) {
	tokens := make([]token, 0, len(input)+1)

	for position := 0; position < len(input); {
		character := input[position]
		if unicode.IsSpace(character) {
			position++
			continue
		}

		switch character {
		case '+':
			tokens = append(tokens, token{kind: tokenPlus})
			position++
		case '-':
			tokens = append(tokens, token{kind: tokenMinus})
			position++
		case '*':
			tokens = append(tokens, token{kind: tokenMultiply})
			position++
		case '/':
			tokens = append(tokens, token{kind: tokenDivide})
			position++
		case '^':
			tokens = append(tokens, token{kind: tokenPower})
			position++
		case '%':
			tokens = append(tokens, token{kind: tokenPercent})
			position++
		case '(':
			tokens = append(tokens, token{kind: tokenLeftParenthesis})
			position++
		case ')':
			tokens = append(tokens, token{kind: tokenRightParenthesis})
			position++
		default:
			if isDigit(character) || character == '.' {
				var ok bool
				start := position
				position, ok = lexNumber(input, position)
				if !ok {
					return nil, false
				}
				tokens = append(tokens, token{kind: tokenNumber, lexeme: string(input[start:position])})
				continue
			}
			if hasSquareRootAt(input, position) {
				tokens = append(tokens, token{kind: tokenSquareRoot})
				position += len("sqrt")
				continue
			}
			return nil, false
		}
	}

	return append(tokens, token{kind: tokenEOF}), true
}

func lexNumber(input []rune, position int) (int, bool) {
	start := position
	for position < len(input) && isDigit(input[position]) {
		position++
	}

	if position < len(input) && input[position] == '.' {
		position++
		for position < len(input) && isDigit(input[position]) {
			position++
		}
	}

	if position-start == 1 && input[start] == '.' {
		return position, false
	}

	return position, true
}

func hasSquareRootAt(input []rune, position int) bool {
	word := []rune("sqrt")
	if len(input)-position < len(word) {
		return false
	}
	for offset, expected := range word {
		if input[position+offset] != expected {
			return false
		}
	}
	return true
}

func isDigit(character rune) bool {
	return character >= '0' && character <= '9'
}

type parser struct {
	tokens   []token
	position int
	evaluate bool
}

func (p *parser) parseExpression() (float64, error) {
	return p.parseAdditive()
}

func (p *parser) parseAdditive() (float64, error) {
	left, err := p.parseMultiplicative(true)
	if err != nil {
		return 0, err
	}
	for p.check(tokenPlus, tokenMinus) {
		operator := p.current().kind
		p.advance()
		right, err := p.parseMultiplicative(false)
		if err != nil {
			return 0, err
		}
		if p.evaluate {
			if operator == tokenPlus {
				left += right
			} else {
				left -= right
			}
		}
	}
	return left, nil
}

func (p *parser) parseMultiplicative(allowLeadingSign bool) (float64, error) {
	left, err := p.parseUnary(allowLeadingSign)
	if err != nil {
		return 0, err
	}
	for p.check(tokenMultiply, tokenDivide) {
		operator := p.current().kind
		p.advance()
		right, err := p.parseUnary(true)
		if err != nil {
			return 0, err
		}
		if p.evaluate {
			if operator == tokenMultiply {
				left *= right
			} else {
				if right == 0 {
					return 0, ErrDivisionByZero
				}
				left /= right
			}
		}
	}
	return left, nil
}

func (p *parser) parseUnary(allowSign bool) (float64, error) {
	if p.check(tokenPlus, tokenMinus) {
		if !allowSign {
			return 0, ErrInvalidExpression
		}
		operator := p.current().kind
		p.advance()
		value, err := p.parseUnary(true)
		if err != nil {
			return 0, err
		}
		if p.evaluate && operator == tokenMinus {
			value = -value
		}
		return value, nil
	}
	return p.parsePower()
}

func (p *parser) parsePower() (float64, error) {
	left, err := p.parsePostfix()
	if err != nil {
		return 0, err
	}
	if p.match(tokenPower) {
		right, err := p.parseUnary(true)
		if err != nil {
			return 0, err
		}
		if p.evaluate {
			left = math.Pow(left, right)
		}
	}
	return left, nil
}

func (p *parser) parsePostfix() (float64, error) {
	value, err := p.parsePrimary()
	if err != nil {
		return 0, err
	}
	matched := false
	for p.match(tokenPercent) {
		matched = true
	}
	if p.evaluate && matched {
		return 0, ErrInvalidExpression
	}
	return value, nil
}

func (p *parser) parsePrimary() (float64, error) {
	if p.check(tokenNumber) {
		current := p.current()
		p.advance()
		if !p.evaluate {
			return 0, nil
		}
		value, _ := strconv.ParseFloat(current.lexeme, 64)
		return value, nil
	}
	if p.match(tokenLeftParenthesis) {
		value, err := p.parseExpression()
		if err != nil {
			return 0, err
		}
		if !p.match(tokenRightParenthesis) {
			return 0, ErrInvalidExpression
		}
		return value, nil
	}
	if p.match(tokenSquareRoot) {
		if !p.match(tokenLeftParenthesis) {
			return 0, ErrInvalidExpression
		}
		if _, err := p.parseExpression(); err != nil {
			return 0, err
		}
		if !p.match(tokenRightParenthesis) {
			return 0, ErrInvalidExpression
		}
		if !p.evaluate {
			return 0, nil
		}
		return 0, ErrInvalidExpression
	}
	return 0, ErrInvalidExpression
}

func (p *parser) match(kinds ...tokenKind) bool {
	if !p.check(kinds...) {
		return false
	}
	p.advance()
	return true
}

func (p *parser) check(kinds ...tokenKind) bool {
	current := p.current().kind
	for _, kind := range kinds {
		if current == kind {
			return true
		}
	}
	return false
}

func (p *parser) advance() {
	if p.position < len(p.tokens)-1 {
		p.position++
	}
}

func (p *parser) current() token {
	return p.tokens[p.position]
}
