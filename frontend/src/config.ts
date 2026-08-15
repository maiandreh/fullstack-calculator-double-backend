const defaultGoBackendUrl = 'http://localhost:8080'
const defaultJavaBackendUrl = 'http://localhost:8081'

export const backendUrls = {
  go: import.meta.env.VITE_GO_BACKEND_URL || defaultGoBackendUrl,
  java: import.meta.env.VITE_JAVA_BACKEND_URL || defaultJavaBackendUrl,
} as const

export type Backend = keyof typeof backendUrls

export const backendLabels: Record<Backend, string> = {
  go: 'Go',
  java: 'Java',
}
