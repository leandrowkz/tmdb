import { Fetcher } from 'src/core/Fetcher'
import { TMDBOptions } from '../../types'

export class BaseAPI extends Fetcher {
  static API_URL_V3 = 'https://api.themoviedb.org/3'
  private apiKey: string

  constructor({ url, apiKey }: TMDBOptions) {
    const baseURL = !url ? BaseAPI.API_URL_V3 : url

    super(baseURL)

    this.apiKey = apiKey
  }

  protected getPath(
    path: string,
    queryString?: Record<string, string | string[] | number | boolean>
  ) {
    const params = new URLSearchParams({
      ...queryString,
      api_key: this.apiKey,
    })

    return `${path}?${params.toString()}`
  }
}
