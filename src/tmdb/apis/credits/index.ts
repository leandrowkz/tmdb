import { BaseAPI } from '../../base-api'
import { DetailsResponse } from './types'

export class CreditsAPI extends BaseAPI {
  /**
   * Get a movie or TV credit details by id.
   *
   * @see https://developers.themoviedb.org/3/credits/get-credit-details
   */
  public async details(creditId: string): Promise<DetailsResponse> {
    const path = this.getPath(`/credit/${creditId}`)

    return this.get<DetailsResponse>(path)
  }
}
