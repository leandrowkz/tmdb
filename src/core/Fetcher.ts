import { RequestBody } from '../types/RequestBody'
import { RequestPayload } from '../types/RequestPayload'

export abstract class Fetcher {
  private headers: Headers
  private url: string

  constructor(url: string) {
    this.url = url
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

  protected async delete<T>(path: string) {
    const options: RequestPayload = {
      path,
      method: 'DELETE',
    }

    return this.request<T>(options)
  }

  protected addHeader(key: string, value: string) {
    this.headers.append(key, value)
  }

  private async request<T>({ path, method, body }: RequestPayload) {
    const url = `${this.url}/${path}`.replace('//', '/')
    const options: RequestInit = {
      method,
      headers: this.headers,
      body: body ? JSON.stringify(body) : null,
    }

    const response = await fetch(url, options)

    return this.toJSON<T>(response)
  }

  private toJSON<T>(response: Response) {
    if (response.ok) {
      return response.json() as unknown as T
    }

    throw Error(response.statusText)
  }
}
