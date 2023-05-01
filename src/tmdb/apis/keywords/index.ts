import { BaseAPI } from '../BaseAPI'
import { DetailsResponse, MoviesFilters, MoviesResponse } from './types'

export class Keywords extends BaseAPI {
  /**
   * Get the keyword details.
   *
   * @see https://developers.themoviedb.org/3/keywords/get-keyword-details
   */
  public async details(keywordId: string): Promise<DetailsResponse> {
    const path = this.getPath(`/keyword/${keywordId}`)

    return this.get<DetailsResponse>(path)
  }

  /**
   * Get the movies that belong to a keyword.
   *
   * We highly recommend using movie discover instead of this method as it is
   * much more flexible.
   *
   * @see https://developers.themoviedb.org/3/keywords/get-movies-by-keyword
   */
  public async movies(
    keywordId: string,
    filters?: MoviesFilters
  ): Promise<MoviesResponse> {
    const path = this.getPath(`/keyword/${keywordId}/movies`, filters)

    return this.get<MoviesResponse>(path)
  }
}
