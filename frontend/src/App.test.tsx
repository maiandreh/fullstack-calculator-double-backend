import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, vi } from 'vitest'
import App from './App'
import Calculator from './components/Calculator'

afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

function mockResponse(body: unknown, status = 200): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: vi.fn().mockResolvedValue(body),
  } as unknown as Response
}

test('renders the calculator display and complete keypad', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', { name: 'Full-stack Calculator' }),
  ).toBeInTheDocument()
  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')
  expect(screen.getByLabelText('Result')).toBeEmptyDOMElement()
  expect(screen.getByLabelText('Error')).toBeEmptyDOMElement()

  for (const digit of '0123456789') {
    expect(screen.getByRole('button', { name: digit })).toBeInTheDocument()
  }
  for (const control of [
    'Decimal point',
    'Addition',
    'Subtraction',
    'Multiplication',
    'Division',
    'Exponentiation',
    'Square root',
    'Percentage',
    'Open parenthesis',
    'Close parenthesis',
    'Clear',
    'Backspace',
    'Equals',
  ]) {
    expect(screen.getByRole('button', { name: control })).toBeInTheDocument()
  }
})

test('constructs a canonical expression in keypad order', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: '1' }))
  await user.click(screen.getByRole('button', { name: '2' }))
  await user.click(screen.getByRole('button', { name: 'Decimal point' }))
  await user.click(screen.getByRole('button', { name: '5' }))
  await user.click(screen.getByRole('button', { name: 'Addition' }))
  await user.click(screen.getByRole('button', { name: '3' }))
  await user.click(screen.getByRole('button', { name: 'Subtraction' }))
  await user.click(screen.getByRole('button', { name: '4' }))

  expect(screen.getByLabelText('Expression')).toHaveTextContent('12.5+3-4')
})

test('updates the display after every keypad action in the acceptance sequence', async () => {
  const user = userEvent.setup()
  render(<App />)

  for (const [button, expression] of [
    ['1', '1'],
    ['2', '12'],
    ['Addition', '12+'],
    ['3', '12+3'],
  ] as const) {
    await user.click(screen.getByRole('button', { name: button }))
    expect(screen.getByLabelText('Expression')).toHaveTextContent(expression)
  }
})

test('maps presentation controls to canonical backend tokens', async () => {
  const user = userEvent.setup()
  render(<App />)

  for (const control of [
    'Multiplication',
    'Division',
    'Exponentiation',
    'Percentage',
    'Open parenthesis',
    'Close parenthesis',
    'Square root',
  ]) {
    await user.click(screen.getByRole('button', { name: control }))
  }

  expect(screen.getByLabelText('Expression')).toHaveTextContent('*/^%()sqrt(')
})

test('clear resets the expression and display state', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: '8' }))
  await user.click(screen.getByRole('button', { name: 'Clear' }))

  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')
  expect(screen.getByLabelText('Result')).toBeEmptyDOMElement()
  expect(screen.getByLabelText('Error')).toBeEmptyDOMElement()
})

test('backspace removes one entered unit including square root', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: 'Square root' }))
  await user.click(screen.getByRole('button', { name: '9' }))
  await user.click(screen.getByRole('button', { name: 'Backspace' }))
  expect(screen.getByLabelText('Expression')).toHaveTextContent('sqrt(')

  await user.click(screen.getByRole('button', { name: 'Backspace' }))
  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')

  await user.click(screen.getByRole('button', { name: 'Backspace' }))
  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')
})

test('equals with an empty expression makes no network request', async () => {
  const user = userEvent.setup()
  const fetchMock = vi.fn()
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  await user.click(screen.getByRole('button', { name: 'Equals' }))

  expect(fetchMock).not.toHaveBeenCalled()
})

test('constructs canonical expressions from supported keyboard keys', () => {
  render(<App />)

  for (const key of '0123456789.+-*/^%()') {
    fireEvent.keyDown(window, { key })
  }

  expect(screen.getByLabelText('Expression')).toHaveTextContent(
    '0123456789.+-*/^%()',
  )
})

test('constructs the keyboard acceptance sequence as canonical syntax', () => {
  render(<App />)

  for (const key of '12*3') {
    fireEvent.keyDown(window, { key })
  }

  expect(screen.getByLabelText('Expression')).toHaveTextContent('12*3')
})

test('ignores unsupported keyboard input and modified shortcuts', () => {
  render(<App />)

  fireEvent.keyDown(window, { key: 'a' })
  fireEvent.keyDown(window, { key: '@' })
  fireEvent.keyDown(window, { key: '5', ctrlKey: true })

  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')
})

test('keyboard and keypad create the same canonical expression', async () => {
  const user = userEvent.setup()
  render(<App />)

  for (const key of '2*3') {
    fireEvent.keyDown(window, { key })
  }
  expect(screen.getByLabelText('Expression')).toHaveTextContent('2*3')

  fireEvent.keyDown(window, { key: 'Escape' })
  await user.click(screen.getByRole('button', { name: '2' }))
  await user.click(screen.getByRole('button', { name: 'Multiplication' }))
  await user.click(screen.getByRole('button', { name: '3' }))
  expect(screen.getByLabelText('Expression')).toHaveTextContent('2*3')
})

test('Escape and Backspace share clear and deletion behavior with controls', async () => {
  const user = userEvent.setup()
  render(<App />)

  fireEvent.keyDown(window, { key: '1' })
  fireEvent.keyDown(window, { key: '2' })
  fireEvent.keyDown(window, { key: 'Backspace' })
  expect(screen.getByLabelText('Expression')).toHaveTextContent('1')

  await user.click(screen.getByRole('button', { name: 'Backspace' }))
  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')

  await user.click(screen.getByRole('button', { name: '9' }))
  fireEvent.keyDown(window, { key: 'Escape' })
  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')

  fireEvent.keyDown(window, { key: '8' })
  await user.click(screen.getByRole('button', { name: 'Clear' }))
  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')
})

test('focused controls do not duplicate keyboard input', async () => {
  const user = userEvent.setup()
  const fetchMock = vi.fn()
  vi.stubGlobal('fetch', fetchMock)
  render(<Calculator />)
  screen.getByRole('button', { name: '2' }).focus()

  await user.keyboard('{Enter}')

  expect(fetchMock).not.toHaveBeenCalled()
  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')
})

test('preserves long expression content without truncating state', () => {
  render(<App />)
  const expression = '9'.repeat(256)

  for (const key of expression) {
    fireEvent.keyDown(window, { key })
  }

  expect(screen.getByLabelText('Expression')).toHaveTextContent(expression)
})

test('sends the canonical expression to the default Go backend and displays success', async () => {
  const user = userEvent.setup()
  const fetchMock = vi.fn().mockResolvedValue(mockResponse({ result: 6 }))
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  expect(screen.getByRole('radio', { name: 'Go' })).toBeChecked()
  await user.click(screen.getByRole('button', { name: '2' }))
  await user.click(screen.getByRole('button', { name: 'Multiplication' }))
  await user.click(screen.getByRole('button', { name: '3' }))
  await user.click(screen.getByRole('button', { name: 'Equals' }))

  expect(await screen.findByLabelText('Result')).toHaveTextContent('6')
  expect(fetchMock).toHaveBeenCalledWith(
    'http://localhost:8080/api/calculate',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression: '2*3' }),
    },
  )
})

test.each([
  ['Multiplication', ['2', 'Multiplication', '3'], '2*3'],
  ['Division', ['8', 'Division', '2'], '8/2'],
  ['Exponentiation', ['2', 'Exponentiation', '3'], '2^3'],
  [
    'Square root',
    ['Square root', '8', '1', 'Close parenthesis'],
    'sqrt(81)',
  ],
])('submits %s presentation controls as canonical syntax', async (_name, controls, expression) => {
  const user = userEvent.setup()
  const fetchMock = vi.fn().mockResolvedValue(mockResponse({ result: 1 }))
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  for (const control of controls) {
    await user.click(screen.getByRole('button', { name: control }))
  }
  await user.click(screen.getByRole('button', { name: 'Equals' }))

  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
  expect(JSON.parse(fetchMock.mock.calls[0][1].body as string)).toEqual({
    expression,
  })
})

test('switching backend preserves expression and only Java is contacted on evaluation', async () => {
  const user = userEvent.setup()
  const fetchMock = vi.fn().mockResolvedValue(mockResponse({ result: 2 }))
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  await user.click(screen.getByRole('button', { name: '2' }))
  await user.click(screen.getByRole('radio', { name: 'Java' }))

  expect(screen.getByLabelText('Expression')).toHaveTextContent('2')
  expect(fetchMock).not.toHaveBeenCalled()

  await user.click(screen.getByRole('button', { name: 'Equals' }))
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
  expect(fetchMock.mock.calls[0][0]).toBe(
    'http://localhost:8081/api/calculate',
  )
  expect(fetchMock.mock.calls[0][1]).toEqual({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ expression: '2' }),
  })
})

test('displays canonical application errors and removes a stale result', async () => {
  const user = userEvent.setup()
  const fetchMock = vi
    .fn()
    .mockResolvedValueOnce(mockResponse({ result: 5 }))
    .mockResolvedValueOnce(
      mockResponse(
        {
          code: 'DIVISION_BY_ZERO',
          message: 'Division by zero is not allowed',
        },
        400,
      ),
    )
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  fireEvent.keyDown(window, { key: '2' })
  fireEvent.keyDown(window, { key: '+' })
  fireEvent.keyDown(window, { key: '3' })
  await user.click(screen.getByRole('button', { name: 'Equals' }))
  expect(await screen.findByLabelText('Result')).toHaveTextContent('5')

  await user.click(screen.getByRole('button', { name: 'Equals' }))
  expect(await screen.findByLabelText('Error')).toHaveTextContent(
    'Division by zero is not allowed',
  )
  expect(screen.getByLabelText('Result')).not.toHaveTextContent('5')
})

test('editing the expression clears the previous answer', async () => {
  const user = userEvent.setup()
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue(mockResponse({ result: 5 })),
  )
  render(<App />)

  fireEvent.keyDown(window, { key: '2' })
  fireEvent.keyDown(window, { key: '+' })
  fireEvent.keyDown(window, { key: '3' })
  await user.click(screen.getByRole('button', { name: 'Equals' }))
  expect(await screen.findByLabelText('Result')).toHaveTextContent('5')

  await user.click(screen.getByRole('button', { name: 'Addition' }))
  expect(screen.getByLabelText('Expression')).toHaveTextContent('2+3+')
  expect(screen.getByLabelText('Result')).toBeEmptyDOMElement()
})

test('clear removes a successful result and the expression', async () => {
  const user = userEvent.setup()
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse({ result: 5 })))
  render(<App />)

  fireEvent.keyDown(window, { key: '5' })
  await user.click(screen.getByRole('button', { name: 'Equals' }))
  expect(await screen.findByLabelText('Result')).toHaveTextContent('5')

  await user.click(screen.getByRole('button', { name: 'Clear' }))
  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')
  expect(screen.getByLabelText('Result')).toBeEmptyDOMElement()
  expect(screen.getByLabelText('Error')).toBeEmptyDOMElement()
})

test('clear removes an error and the expression', async () => {
  const user = userEvent.setup()
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue(
      mockResponse(
        { code: 'INVALID_EXPRESSION', message: 'Expression is invalid' },
        400,
      ),
    ),
  )
  render(<App />)

  fireEvent.keyDown(window, { key: '2' })
  await user.click(screen.getByRole('button', { name: 'Equals' }))
  expect(await screen.findByLabelText('Error')).toHaveTextContent(
    'Expression is invalid',
  )

  await user.click(screen.getByRole('button', { name: 'Clear' }))
  expect(screen.getByLabelText('Expression')).toHaveTextContent('0')
  expect(screen.getByLabelText('Result')).toBeEmptyDOMElement()
  expect(screen.getByLabelText('Error')).toBeEmptyDOMElement()
})

test('reports selected-backend connectivity failures without leaking diagnostics', async () => {
  const user = userEvent.setup()
  const fetchMock = vi.fn().mockRejectedValue(new TypeError('connection refused'))
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  await user.click(screen.getByRole('radio', { name: 'Java' }))
  await user.click(screen.getByRole('button', { name: '1' }))
  await user.click(screen.getByRole('button', { name: 'Equals' }))

  expect(await screen.findByLabelText('Error')).toHaveTextContent(
    'Unable to reach the Java backend',
  )
  expect(screen.getByLabelText('Error')).not.toHaveTextContent(
    'connection refused',
  )
})

test('empty equals and Enter do not submit', async () => {
  const user = userEvent.setup()
  const fetchMock = vi.fn()
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  await user.click(screen.getByRole('button', { name: 'Equals' }))
  fireEvent.keyDown(window, { key: 'Enter' })

  expect(fetchMock).not.toHaveBeenCalled()
})

test('equals and Enter cannot duplicate an in-flight submission', async () => {
  const user = userEvent.setup()
  let resolveResponse: (response: Response) => void = () => undefined
  const pendingResponse = new Promise<Response>((resolve) => {
    resolveResponse = resolve
  })
  const fetchMock = vi.fn().mockReturnValue(pendingResponse)
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  await user.click(screen.getByRole('button', { name: '4' }))
  const equals = screen.getByRole('button', { name: 'Equals' })
  await user.click(equals)
  expect(equals).toBeDisabled()
  await user.click(equals)
  fireEvent.keyDown(window, { key: 'Enter' })
  expect(fetchMock).toHaveBeenCalledTimes(1)

  resolveResponse(mockResponse({ result: 4 }))
  expect(await screen.findByLabelText('Result')).toHaveTextContent('4')
})

test('repeated Enter cannot duplicate an in-flight submission', async () => {
  let resolveResponse: (response: Response) => void = () => undefined
  const fetchMock = vi.fn().mockReturnValue(
    new Promise<Response>((resolve) => {
      resolveResponse = resolve
    }),
  )
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  fireEvent.keyDown(window, { key: '4' })
  fireEvent.keyDown(window, { key: 'Enter' })
  fireEvent.keyDown(window, { key: 'Enter' })

  expect(fetchMock).toHaveBeenCalledTimes(1)
  expect(screen.getByLabelText('Result')).toHaveTextContent('Calculating…')

  resolveResponse(mockResponse({ result: 4 }))
  expect(await screen.findByLabelText('Result')).toHaveTextContent('4')
})

test.each([
  ['missing result', {}],
  ['string result', { result: '5' }],
  ['non-finite result', { result: Number.POSITIVE_INFINITY }],
  ['additional success field', { result: 5, extra: true }],
])('rejects an invalid successful response: %s', async (_name, body) => {
  const user = userEvent.setup()
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse(body)))
  render(<App />)

  await user.click(screen.getByRole('button', { name: '5' }))
  await user.click(screen.getByRole('button', { name: 'Equals' }))

  expect(await screen.findByLabelText('Error')).toHaveTextContent(
    'The backend returned an invalid response',
  )
  expect(screen.getByLabelText('Result')).not.toHaveTextContent('5')
})

test('Enter and equals share the API-backed evaluation path', async () => {
  const user = userEvent.setup()
  const fetchMock = vi
    .fn()
    .mockResolvedValue(mockResponse({ result: 5 }))
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  fireEvent.keyDown(window, { key: '2' })
  fireEvent.keyDown(window, { key: '+' })
  fireEvent.keyDown(window, { key: '3' })
  fireEvent.keyDown(window, { key: 'Enter' })
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

  await user.click(screen.getByRole('button', { name: 'Equals' }))
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2))
  expect(fetchMock.mock.calls[0]).toEqual(fetchMock.mock.calls[1])
})
