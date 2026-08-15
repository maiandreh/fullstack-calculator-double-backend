import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, vi } from 'vitest'
import App from './App'
import Calculator from './components/Calculator'

afterEach(() => {
  vi.unstubAllGlobals()
})

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
})

test('equals neither evaluates locally nor makes a network request', async () => {
  const user = userEvent.setup()
  const fetchMock = vi.fn()
  vi.stubGlobal('fetch', fetchMock)
  render(<App />)

  await user.click(screen.getByRole('button', { name: '2' }))
  await user.click(screen.getByRole('button', { name: 'Addition' }))
  await user.click(screen.getByRole('button', { name: '3' }))
  await user.click(screen.getByRole('button', { name: 'Equals' }))

  expect(screen.getByLabelText('Expression')).toHaveTextContent('2+3')
  expect(screen.getByLabelText('Result')).toBeEmptyDOMElement()
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

test('Enter and equals invoke the same evaluation boundary once', async () => {
  const user = userEvent.setup()
  const onEvaluate = vi.fn()
  render(<Calculator onEvaluate={onEvaluate} />)

  fireEvent.keyDown(window, { key: '2' })
  fireEvent.keyDown(window, { key: '+', shiftKey: true })
  fireEvent.keyDown(window, { key: '3' })
  fireEvent.keyDown(window, { key: 'Enter' })
  expect(onEvaluate).toHaveBeenLastCalledWith('2+3')

  await user.click(screen.getByRole('button', { name: 'Equals' }))
  expect(onEvaluate).toHaveBeenCalledTimes(2)
  expect(onEvaluate).toHaveBeenLastCalledWith('2+3')
})

test('focused controls do not duplicate keyboard input', async () => {
  const user = userEvent.setup()
  const onEvaluate = vi.fn()
  render(<Calculator onEvaluate={onEvaluate} />)
  screen.getByRole('button', { name: '2' }).focus()

  await user.keyboard('{Enter}')

  expect(onEvaluate).toHaveBeenCalledTimes(1)
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
