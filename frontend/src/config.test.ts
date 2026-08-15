import { afterEach, expect, test, vi } from 'vitest'

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

test('uses the documented local backend defaults', async () => {
  vi.resetModules()
  const { backendUrls } = await import('./config')

  expect(backendUrls).toEqual({
    go: 'http://localhost:8080',
    java: 'http://localhost:8081',
  })
})

test('uses Vite environment overrides for both backend URLs', async () => {
  vi.stubEnv('VITE_GO_BACKEND_URL', 'https://go.example.test')
  vi.stubEnv('VITE_JAVA_BACKEND_URL', 'https://java.example.test')
  vi.resetModules()
  const { backendUrls } = await import('./config')

  expect(backendUrls).toEqual({
    go: 'https://go.example.test',
    java: 'https://java.example.test',
  })
})
