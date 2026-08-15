import { backendLabels, backendUrls, type Backend } from '../config'

const invalidResponseMessage = 'The backend returned an invalid response'

export async function calculate(
  backend: Backend,
  expression: string,
): Promise<number> {
  let response: Response
  try {
    response = await fetch(`${backendUrls[backend]}/api/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression }),
    })
  } catch {
    throw new Error(`Unable to reach the ${backendLabels[backend]} backend`)
  }

  let body: unknown
  try {
    body = await response.json()
  } catch {
    throw new Error(invalidResponseMessage)
  }

  if (response.ok) {
    if (
      isRecord(body) &&
      Object.keys(body).length === 1 &&
      typeof body.result === 'number' &&
      Number.isFinite(body.result)
    ) {
      return body.result
    }
    throw new Error(invalidResponseMessage)
  }

  if (
    isRecord(body) &&
    typeof body.code === 'string' &&
    typeof body.message === 'string'
  ) {
    throw new Error(body.message)
  }

  throw new Error(invalidResponseMessage)
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
