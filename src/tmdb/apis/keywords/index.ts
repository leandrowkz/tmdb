import { BaseAPI } from '../BaseAPI'
import {
  KeywordDetailsResponse,
  KeywordMoviesFilters,
  KeywordMoviesResponse,
} from './types'

export class Keywords extends BaseAPI {
  /**
   * Get the keyword details.
   *
   * @see https://developers.themoviedb.org/3/keywords/get-keyword-details
   */
  public async details(keywordId: string): Promise<KeywordDetailsResponse> {
    const path = this.getPath(`/keyword/${keywordId}`)

    return this.get<KeywordDetailsResponse>(path)
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
    filters?: KeywordMoviesFilters
  ): Promise<KeywordMoviesResponse> {
    const path = this.getPath(`/keyword/${keywordId}/movies`, filters)

    return this.get<KeywordMoviesResponse>(path)
  }
}
