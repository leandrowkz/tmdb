import { BaseAPI } from '../base'
import { GenresFilters, GenresResponse } from './types'

export class GenresAPI extends BaseAPI {
  /**
   * Get the list of official genres for movies.
   *
   * @see https://developers.themoviedb.org/3/genres/get-movie-list
   */
  public async movie(filters?: GenresFilters): Promise<GenresResponse> {
    const path = this.getPath('/genre/movie/list', filters)

    return this.get<GenresResponse>(path)
  }

  /**
   * Get the list of official genres for TV shows.
   *
   * @see https://developers.themoviedb.org/3/genres/get-tv-list
   */
  public async tv(filters?: GenresFilters): Promise<GenresResponse> {
    const path = this.getPath('/genre/tv/list', filters)

    return this.get<GenresResponse>(path)
  }
}
