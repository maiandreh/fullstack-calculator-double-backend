type DisplayProps = {
  expression: string
  result: number | null
  error: string | null
  isEvaluating: boolean
}

function Display({ expression, result, error, isEvaluating }: DisplayProps) {
  return (
    <section className="display" aria-label="Calculator display">
      <div className="display__main">
        <output className="display__expression" aria-label="Expression">
          {expression || '0'}
        </output>
        <output className="display__result" aria-label="Result">
          {isEvaluating ? 'Calculating…' : result}
        </output>
      </div>
      <div className="display__error" aria-label="Error" aria-live="polite">
        {error}
      </div>
    </section>
  )
}

export default Display
