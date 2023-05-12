import { TMDBResponseError } from '../../exceptions'
import type { RequestBody, RequestPayload } from '../../types'

export abstract class Fetcher {
  private headers: Headers
  private url: string
  private debug: boolean

  constructor(url: string, debug = false) {
    this.url = url
    this.debug = debug
    this.headers = new Headers({
      'Content-Type': 'application/json',
    })
  }

  protected async get<T>(path: string) {
    const options: RequestPayload = {
      path,
      method: 'GET',
    }

    return this.request<T>(options)
  }

  protected async post<T>(path: string, body?: RequestBody) {
    const options: RequestPayload = {
      path,
      body,
      method: 'POST',
    }

    return this.request<T>(options)
  }

  protected async put<T>(path: string, body?: RequestBody) {
    const options: RequestPayload = {
      path,
      body,
      method: 'PUT',
    }

    return this.request<T>(options)
  }

  protected async delete<T>(path: string, body?: RequestBody) {
    const options: RequestPayload = {
      path,
      body,
      method: 'DELETE',
    }

    return this.request<T>(options)
  }

  protected addHeader(key: string, value: string) {
    this.headers.append(key, value)
  }

  private async request<T>({ path, method, body }: RequestPayload) {
    let debugKey = ''
    const url = `${this.url}/${path}`.replace('//', '/')
    const options: RequestInit = {
      method,
      headers: this.headers,
      body: body ? JSON.stringify(body) : null,
    }

    if (this.debug) {
      debugKey = `\n🍿 TMDB DEBUGGER: ${url} with params ${JSON.stringify(
        options
      )}`
      console.time(debugKey)
    }

    const response = await fetch(url, options)

    if (this.debug) {
      console.timeEnd(debugKey)
    }

    return this.toJSON<T>(response)
  }

  private async toJSON<T>(response: Response) {
    if (response.ok) {
      return response.json() as unknown as T
    }

    const error = await response.json()

    throw new TMDBResponseError(
      response.statusText,
      error.status_message || response.statusText,
      error.status_code || response.status
    )
  }
}
