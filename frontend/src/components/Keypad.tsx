type KeypadProps = {
  onInput: (token: string) => void
  onClear: () => void
  onBackspace: () => void
  onEvaluate: () => void
  isEvaluating: boolean
}

type InputButton = {
  label: string
  accessibleName: string
  token: string
  category: 'number' | 'operator' | 'secondary'
  wide?: boolean
}

const keypadRows: readonly (readonly InputButton[])[] = [
  [
    { label: '(', accessibleName: 'Open parenthesis', token: '(', category: 'secondary' },
    { label: ')', accessibleName: 'Close parenthesis', token: ')', category: 'secondary' },
  ],
  [
    { label: '√', accessibleName: 'Square root', token: 'sqrt(', category: 'operator' },
    { label: 'xʸ', accessibleName: 'Exponentiation', token: '^', category: 'operator' },
    { label: '%', accessibleName: 'Percentage', token: '%', category: 'operator' },
    { label: '÷', accessibleName: 'Divide', token: '/', category: 'operator' },
  ],
  [
    { label: '7', accessibleName: '7', token: '7', category: 'number' },
    { label: '8', accessibleName: '8', token: '8', category: 'number' },
    { label: '9', accessibleName: '9', token: '9', category: 'number' },
    { label: '×', accessibleName: 'Multiply', token: '*', category: 'operator' },
  ],
  [
    { label: '4', accessibleName: '4', token: '4', category: 'number' },
    { label: '5', accessibleName: '5', token: '5', category: 'number' },
    { label: '6', accessibleName: '6', token: '6', category: 'number' },
    { label: '−', accessibleName: 'Subtraction', token: '-', category: 'operator' },
  ],
  [
    { label: '1', accessibleName: '1', token: '1', category: 'number' },
    { label: '2', accessibleName: '2', token: '2', category: 'number' },
    { label: '3', accessibleName: '3', token: '3', category: 'number' },
    { label: '+', accessibleName: 'Addition', token: '+', category: 'operator' },
  ],
  [
    { label: '0', accessibleName: '0', token: '0', category: 'number', wide: true },
    { label: '.', accessibleName: 'Decimal point', token: '.', category: 'number' },
  ],
] as const

const inputButtons = keypadRows.flat()

function Keypad({
  onInput,
  onClear,
  onBackspace,
  onEvaluate,
  isEvaluating,
}: KeypadProps) {
  return (
    <div className="keypad" aria-label="Calculator keypad">
      <button className="keypad__clear" type="button" onClick={onClear}>
        Clear
      </button>
      <button
        className="keypad__secondary"
        type="button"
        aria-label="Backspace"
        title="Backspace"
        onClick={onBackspace}
      >
        ⌫
      </button>

      {inputButtons.map((button, index) => {
        const isLastRow = index >= inputButtons.length - 2
        const classNames = [
          `keypad__${button.category}`,
          button.wide ? 'keypad__zero' : '',
          isLastRow ? 'keypad__last-row' : '',
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <button
            key={button.accessibleName}
            className={classNames}
            type="button"
            aria-label={button.accessibleName}
            onClick={() => onInput(button.token)}
          >
            {button.label}
          </button>
        )
      })}

      <button
        className="keypad__equals"
        type="button"
        aria-label="Evaluate"
        onClick={onEvaluate}
        disabled={isEvaluating}
        aria-busy={isEvaluating}
      >
        {isEvaluating ? '…' : '='}
      </button>
    </div>
  )
}

export default Keypad
