// Common shared types

export type Maybe<T> = T | null | undefined

export type ApiResponse<T> = {
  data: T
  status: number
}

export type Nullable<T> = T | null
