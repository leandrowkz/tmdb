import { Movie } from '../../types/Movie'
import { TmdbAPIResponseList } from '../../types/TmdbAPIResponseList'
import { BaseAPI } from './BaseAPI'

export class Discover extends BaseAPI {
  /**
   * Discover movies by different types of data like average rating, number of
   * votes, genres and certifications. You can get a valid list of
   * certifications from the method.
   *
   * @param filters
   * @returns Promise<TmdbAPIResponseList<Movie>>
   * @see https://developers.themoviedb.org/3/discover/movie-discover
   */
  public async movies(filters = {}): Promise<TmdbAPIResponseList<Movie>> {
    const path = this.getPath(`/discover/movie`, filters)

    return this.get<TmdbAPIResponseList<Movie>>(path)
  }
}
