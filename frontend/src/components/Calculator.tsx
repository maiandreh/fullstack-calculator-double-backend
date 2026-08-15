import { useCallback, useEffect, useRef, useState } from 'react'
import { calculate } from '../api/calculator'
import type { Backend } from '../config'
import BackendSelector from './BackendSelector'
import Display from './Display'
import Keypad from './Keypad'

const inputKeys = new Set('0123456789.+-*/^%()')

function Calculator() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selectedBackend, setSelectedBackend] = useState<Backend>('go')
  const [isEvaluating, setIsEvaluating] = useState(false)
  const inFlight = useRef(false)
  const currentExpression = useRef(expression)

  useEffect(() => {
    currentExpression.current = expression
  }, [expression])

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

  const evaluate = useCallback(async () => {
    if (!expression.trim() || inFlight.current) {
      return
    }

    const submittedExpression = expression
    inFlight.current = true
    setIsEvaluating(true)
    setResult(null)
    setError(null)

    try {
      const nextResult = await calculate(selectedBackend, submittedExpression)
      if (currentExpression.current === submittedExpression) {
        setResult(nextResult)
      }
    } catch (caught) {
      if (currentExpression.current === submittedExpression) {
        setResult(null)
        setError(
          caught instanceof Error
            ? caught.message
            : 'The backend returned an invalid response',
        )
      }
    } finally {
      inFlight.current = false
      setIsEvaluating(false)
    }
  }, [expression, selectedBackend])

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
      <BackendSelector
        selected={selectedBackend}
        onChange={setSelectedBackend}
      />
      <Display
        expression={expression}
        result={result}
        error={error}
        isEvaluating={isEvaluating}
      />
      <Keypad
        onInput={appendToken}
        onClear={clear}
        onBackspace={backspace}
        onEvaluate={evaluate}
        isEvaluating={isEvaluating}
      />
    </section>
  )
}

export default Calculator
