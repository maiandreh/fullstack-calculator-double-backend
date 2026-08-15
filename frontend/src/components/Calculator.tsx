import { useState } from 'react'
import Display from './Display'
import Keypad from './Keypad'

function Calculator() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const appendToken = (token: string) => {
    setExpression((current) => current + token)
    setResult(null)
    setError(null)
  }

  const clear = () => {
    setExpression('')
    setResult(null)
    setError(null)
  }

  const backspace = () => {
    setExpression((current) =>
      current.endsWith('sqrt(') ? current.slice(0, -5) : current.slice(0, -1),
    )
    setResult(null)
    setError(null)
  }

  return (
    <section className="calculator" aria-label="Calculator">
      <Display expression={expression} result={result} error={error} />
      <Keypad
        onInput={appendToken}
        onClear={clear}
        onBackspace={backspace}
        onEvaluate={() => undefined}
      />
    </section>
  )
}

export default Calculator
