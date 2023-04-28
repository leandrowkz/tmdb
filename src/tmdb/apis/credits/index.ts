import { BaseAPI } from '../BaseAPI'
import { TMDBResponse } from 'src/types'
import { Credit } from './types'

export class Credits extends BaseAPI {
  /**
   * Get a movie or TV credit details by id.
   *
   * @see https://developers.themoviedb.org/3/credits/get-credit-details
   */
  public async details(creditId: string): Promise<TMDBResponse<Credit>> {
    const path = this.getPath(`/credit/${creditId}`)

    return this.get<TMDBResponse<Credit>>(path)
  }
}
