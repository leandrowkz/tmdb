import { BaseAPI } from '../../base-api'
import { FindFilters, FindResponse } from './types'

export class FindAPI extends BaseAPI {
  /**
   * The find method makes it easy to search for objects in our database by an external id.
   * This method will search all objects (movies, TV shows and people) and return the results in a
   * single response.
   *
   * @returns Promise<FindResponse>
   * @see https://developers.themoviedb.org/3/find/find-by-id
   */
  public async find(
    externalId: string,
    filters: FindFilters
  ): Promise<FindResponse> {
    const path = this.getPath(`/find/${externalId}`, filters)

    return this.get<FindResponse>(path)
  }
}
