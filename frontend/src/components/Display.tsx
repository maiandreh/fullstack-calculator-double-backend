type DisplayProps = {
  expression: string
  result: string | null
  error: string | null
}

function Display({ expression, result, error }: DisplayProps) {
  return (
    <section className="display" aria-label="Calculator display">
      <output className="display__expression" aria-label="Expression">
        {expression || '0'}
      </output>
      <output className="display__result" aria-label="Result">
        {result}
      </output>
      <div className="display__error" aria-label="Error" aria-live="polite">
        {error}
      </div>
    </section>
  )
}

export default Display
