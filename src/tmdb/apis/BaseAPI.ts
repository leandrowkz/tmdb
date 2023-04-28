import { Fetcher } from 'src/core/Fetcher'
import { TMDBOptions } from 'src/types'

export class BaseAPI extends Fetcher {
  private apiKey: string

  constructor({ url, apiKey }: TMDBOptions) {
    if (!url) {
      throw Error('Missing URL')
    }

    super(url)

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
