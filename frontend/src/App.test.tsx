import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, vi } from 'vitest'
import App from './App'

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
