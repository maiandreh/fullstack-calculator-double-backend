package expression

import (
	"errors"
	"unicode"
	"unicode/utf8"
)

const maxExpressionLength = 256

var (
	ErrInvalidRequest    = errors.New("invalid request")
	ErrInvalidExpression = errors.New("invalid expression")
)

// Parse validates an expression against the approved closed grammar.
// It deliberately performs no arithmetic evaluation.
func Parse(input string) error {
	if utf8.RuneCountInString(input) > maxExpressionLength || isBlank(input) {
		return ErrInvalidRequest
	}

	tokens, ok := lex([]rune(input))
	if !ok {
		return ErrInvalidExpression
	}

	parser := parser{tokens: tokens}
	if !parser.parseExpression() || parser.current().kind != tokenEOF {
		return ErrInvalidExpression
	}

	return nil
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
	kind tokenKind
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
				position, ok = lexNumber(input, position)
				if !ok {
					return nil, false
				}
				tokens = append(tokens, token{kind: tokenNumber})
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
}

func (p *parser) parseExpression() bool {
	return p.parseAdditive()
}

func (p *parser) parseAdditive() bool {
	if !p.parseMultiplicative(true) {
		return false
	}
	for p.match(tokenPlus, tokenMinus) {
		if !p.parseMultiplicative(false) {
			return false
		}
	}
	return true
}

func (p *parser) parseMultiplicative(allowLeadingSign bool) bool {
	if !p.parseUnary(allowLeadingSign) {
		return false
	}
	for p.match(tokenMultiply, tokenDivide) {
		if !p.parseUnary(true) {
			return false
		}
	}
	return true
}

func (p *parser) parseUnary(allowSign bool) bool {
	if p.check(tokenPlus, tokenMinus) {
		if !allowSign {
			return false
		}
		p.advance()
		return p.parseUnary(true)
	}
	return p.parsePower()
}

func (p *parser) parsePower() bool {
	if !p.parsePostfix() {
		return false
	}
	if p.match(tokenPower) {
		return p.parseUnary(true)
	}
	return true
}

func (p *parser) parsePostfix() bool {
	if !p.parsePrimary() {
		return false
	}
	for p.match(tokenPercent) {
	}
	return true
}

func (p *parser) parsePrimary() bool {
	if p.match(tokenNumber) {
		return true
	}
	if p.match(tokenLeftParenthesis) {
		return p.parseExpression() && p.match(tokenRightParenthesis)
	}
	if p.match(tokenSquareRoot) {
		return p.match(tokenLeftParenthesis) && p.parseExpression() && p.match(tokenRightParenthesis)
	}
	return false
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
