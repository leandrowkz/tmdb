import type { RequestBody } from './RequestBody'

export type RequestPayload = {
  path: string
  body?: RequestBody
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'
}
