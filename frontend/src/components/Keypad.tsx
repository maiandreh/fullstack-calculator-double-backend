type KeypadProps = {
  onInput: (token: string) => void
  onClear: () => void
  onBackspace: () => void
  onEvaluate: () => void
}

const inputButtons = [
  { label: '(', accessibleName: 'Open parenthesis', token: '(' },
  { label: ')', accessibleName: 'Close parenthesis', token: ')' },
  { label: '%', accessibleName: 'Percentage', token: '%' },
  { label: '÷', accessibleName: 'Division', token: '/' },
  { label: '7', accessibleName: '7', token: '7' },
  { label: '8', accessibleName: '8', token: '8' },
  { label: '9', accessibleName: '9', token: '9' },
  { label: '×', accessibleName: 'Multiplication', token: '*' },
  { label: '4', accessibleName: '4', token: '4' },
  { label: '5', accessibleName: '5', token: '5' },
  { label: '6', accessibleName: '6', token: '6' },
  { label: '−', accessibleName: 'Subtraction', token: '-' },
  { label: '1', accessibleName: '1', token: '1' },
  { label: '2', accessibleName: '2', token: '2' },
  { label: '3', accessibleName: '3', token: '3' },
  { label: '+', accessibleName: 'Addition', token: '+' },
  { label: '0', accessibleName: '0', token: '0' },
  { label: '.', accessibleName: 'Decimal point', token: '.' },
  { label: 'xʸ', accessibleName: 'Exponentiation', token: '^' },
  { label: '√', accessibleName: 'Square root', token: 'sqrt(' },
] as const

function Keypad({ onInput, onClear, onBackspace, onEvaluate }: KeypadProps) {
  return (
    <div className="keypad" aria-label="Calculator keypad">
      <button className="keypad__clear" type="button" onClick={onClear}>
        Clear
      </button>
      <button type="button" aria-label="Backspace" onClick={onBackspace}>
        ⌫
      </button>
      <button
        className="keypad__action"
        type="button"
        aria-label="Equals"
        onClick={onEvaluate}
      >
        =
      </button>

      {inputButtons.map((button) => (
        <button
          key={button.accessibleName}
          type="button"
          aria-label={button.accessibleName}
          onClick={() => onInput(button.token)}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default Keypad
