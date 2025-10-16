// Lightweight fetch wrapper for services

export async function fetchJSON<T = unknown>(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init)
  const data = await res.json()
  return { data: data as T, status: res.status }
}

export default {
  fetchJSON,
}
