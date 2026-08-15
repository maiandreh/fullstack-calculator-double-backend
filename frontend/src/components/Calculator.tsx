import { useCallback, useEffect, useState } from 'react'
import Display from './Display'
import Keypad from './Keypad'

type CalculatorProps = {
  onEvaluate?: (expression: string) => void
}

const inputKeys = new Set('0123456789.+-*/^%()')

function Calculator({ onEvaluate }: CalculatorProps) {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const appendToken = useCallback((token: string) => {
    setExpression((current) => current + token)
    setResult(null)
    setError(null)
  }, [])

  const clear = useCallback(() => {
    setExpression('')
    setResult(null)
    setError(null)
  }, [])

  const backspace = useCallback(() => {
    setExpression((current) =>
      current.endsWith('sqrt(') ? current.slice(0, -5) : current.slice(0, -1),
    )
    setResult(null)
    setError(null)
  }, [])

  const evaluate = useCallback(() => {
    onEvaluate?.(expression)
  }, [expression, onEvaluate])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) {
        return
      }

      if (inputKeys.has(event.key)) {
        event.preventDefault()
        appendToken(event.key)
        return
      }

      const actions: Record<string, () => void> = {
        Enter: evaluate,
        Escape: clear,
        Backspace: backspace,
      }
      const action = actions[event.key]
      if (action) {
        event.preventDefault()
        action()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [appendToken, backspace, clear, evaluate])

  return (
    <section className="calculator" aria-label="Calculator">
      <Display expression={expression} result={result} error={error} />
      <Keypad
        onInput={appendToken}
        onClear={clear}
        onBackspace={backspace}
        onEvaluate={evaluate}
      />
    </section>
  )
}

export default Calculator
