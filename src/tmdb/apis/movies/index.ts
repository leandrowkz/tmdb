import { BaseAPI } from '../BaseAPI'
import { TMDBResponse } from 'src/types/TMDBResponse'
import {
  MovieDetails,
  AlternativeTitlesFilters,
  AlternativeTitlesResponse,
  AccountStatesResponse,
  AccountStatesFilters,
  DetailsFilters,
  ChangesFilters,
  ChangesResponse,
  CreditsFilters,
  CreditsResponse,
  ExternalIdsResponse,
  ImagesFilters,
  ImagesResponse,
  KeywordsResponse,
  ListsFilters,
  ListsResponse,
} from './types'

export class Movies extends BaseAPI {
  /**
   * Fetch movie details.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-details
   */
  public async details(
    movieId: number,
    filters?: DetailsFilters
  ): Promise<TMDBResponse<MovieDetails>> {
    const path = this.getPath(`/movie/${movieId}`, filters)

    return this.get<TMDBResponse<MovieDetails>>(path)
  }

  /**
   * Grab the following account states for a session:
   *
   * - Movie rating
   * - If it belongs to your watchlist
   * - If it belongs to your favourite list
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-account-states
   */
  public async accountStates(
    movieId: number,
    filters?: AccountStatesFilters
  ): Promise<AccountStatesResponse> {
    const path = this.getPath(`/movie/${movieId}/account_states`, filters)

    return this.get<AccountStatesResponse>(path)
  }

  /**
   * Get all of the alternative titles for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-alternative-titles
   */
  public async alternativeTitles(
    movieId: number,
    filters?: AlternativeTitlesFilters
  ): Promise<AlternativeTitlesResponse> {
    const path = this.getPath(`/movie/${movieId}/alternative_titles`, filters)

    return this.get<AlternativeTitlesResponse>(path)
  }

  /**
   * Get the changes for a movie. By default only the last 24 hours are returned.
   *
   * You can query up to 14 days in a single query by using the start_date and end_date query
   * parameters.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-changes
   */
  public async changes(
    movieId: number,
    filters?: ChangesFilters
  ): Promise<ChangesResponse> {
    const path = this.getPath(`/movie/${movieId}/changes`, filters)

    return this.get<ChangesResponse>(path)
  }

  /**
   * Get the cast and crew for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-credits
   */
  public async credits(
    movieId: number,
    filters?: CreditsFilters
  ): Promise<CreditsResponse> {
    const path = this.getPath(`/movie/${movieId}/credits`, filters)

    return this.get<CreditsResponse>(path)
  }

  /**
   * Get the external ids for a movie. We currently support the following external sources.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-external-ids
   */
  public async externalIds(movieId: number): Promise<ExternalIdsResponse> {
    const path = this.getPath(`/movie/${movieId}/external_ids`)

    return this.get<ExternalIdsResponse>(path)
  }

  /**
   * Get the images that belong to a movie.
   *
   * Querying images with a language parameter will filter the results. If you want to include a
   * fallback language (especially useful for backdrops) you can use the include_image_language
   * parameter. This should be a comma seperated value like so: include_image_language=en,null.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-images
   */
  public async images(
    movieId: number,
    filters?: ImagesFilters
  ): Promise<ImagesResponse> {
    const path = this.getPath(`/movie/${movieId}/images`, filters)

    return this.get<ImagesResponse>(path)
  }

  /**
   * Get the keywords that have been added to a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-keywords
   */
  public async keywords(movieId: number): Promise<KeywordsResponse> {
    const path = this.getPath(`/movie/${movieId}/keywords`)

    return this.get<KeywordsResponse>(path)
  }

  /**
   * Get a list of lists that this movie belongs to.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-lists
   */
  public async lists(
    movieId: number,
    filters?: ListsFilters
  ): Promise<ListsResponse> {
    const path = this.getPath(`/movie/${movieId}/lists`, filters)

    return this.get<ListsResponse>(path)
  }
}
