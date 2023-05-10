import { BaseAPI } from '../base'
import type {
  DiscoverMovieFilters,
  DiscoverMovieResponse,
  DiscoverTVShowFilters,
  DiscoverTVShowResponse,
} from './types'

export class DiscoverAPI extends BaseAPI {
  /**
   * Discover movies by different types of data like average rating, number of votes, genres and
   * certifications. You can get a valid list of certifications from the https://developers.themoviedb.org/3/certifications/get-movie-certifications
   * method.
   *
   * Discover also supports a nice list of sort options. See below for all of the available options.
   *
   * Please note, when using certification \ certification.lte you must also specify
   * certification_country. These two parameters work together in order to filter the results. You
   * can only filter results with the countries we have added to our https://developers.themoviedb.org/3/certifications/get-movie-certifications.
   *
   * If you specify the region parameter, the regional release date will be used instead of the
   * primary release date. The date returned will be the first date based on your query (ie. if a
   * with_release_type is specified). It's important to note the order of the release types that are
   * used. Specifying "2|3" would return the limited theatrical release date as opposed to "3|2"
   * which would return the theatrical date.
   *
   * Also note that a number of filters support being comma (,) or pipe (|) separated. Comma's are
   * treated like an AND and query while pipe's are an OR.
   *
   * Some examples of what can be done with discover can be found https://www.themoviedb.org/documentation/api/discover.
   *
   * @see https://developers.themoviedb.org/3/discover/movie-discover
   */
  public async movies(
    filters?: DiscoverMovieFilters
  ): Promise<DiscoverMovieResponse> {
    const path = this.getPath('/discover/movie', filters)

    return this.get<DiscoverMovieResponse>(path)
  }

  /**
   * Discover TV shows by different types of data like average rating, number of votes, genres, the
   * network they aired on and air dates.
   *
   * Discover also supports a nice list of sort options. See below for all of the available options.
   *
   * Also note that a number of filters support being comma (,) or pipe (|) separated. Comma's are
   * treated like an AND and query while pipe's are an OR.
   *
   * Some examples of what can be done with discover can be found https://www.themoviedb.org/documentation/api/discover.
   *
   * @see https://developers.themoviedb.org/3/discover/tv-discover
   */
  public async tv(
    filters?: DiscoverTVShowFilters
  ): Promise<DiscoverTVShowResponse> {
    const path = this.getPath('/discover/tv', filters)

    return this.get<DiscoverTVShowResponse>(path)
  }
}
