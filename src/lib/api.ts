// small API helper using fetch and Vite env for base url

const BASE = (import.meta.env as Record<string, string | undefined>)?.VITE_API_BASE || ''

export async function apiGet<T = unknown>(path: string) {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(res.statusText)
  return (await res.json()) as T
}

export async function apiPost<T = unknown>(path: string, body?: unknown) {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(res.statusText)
  return (await res.json()) as T
}

export default {
  apiGet,
  apiPost,
}
