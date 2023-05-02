import { BaseAPI } from '../../base-api'
import {
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
  RecommendationsFilters,
  RecommendationsResponse,
  ReleaseDatesResponse,
  ReviewsFilters,
  ReviewsResponse,
  SimilarFilters,
  SimilarResponse,
  TranslationsResponse,
  VideosFilters,
  VideosResponse,
  WatchProvidersResponse,
  RateBody,
  RateFilters,
  RateResponse,
  LatestFilters,
  NowPlayingFilters,
  NowPlayingResponse,
  PopularFilters,
  PopularResponse,
  TopRatedFilters,
  TopRatedResponse,
  UpcomingFilters,
  UpcomingResponse,
  DetailsResponse,
  LatestResponse,
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
  ): Promise<DetailsResponse> {
    const path = this.getPath(`/movie/${movieId}`, filters)

    return this.get<DetailsResponse>(path)
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

  /**
   * Get a list of recommended movies for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-recommendations
   */
  public async recommendations(
    movieId: number,
    filters?: RecommendationsFilters
  ): Promise<RecommendationsResponse> {
    const path = this.getPath(`/movie/${movieId}/recommendations`, filters)

    return this.get<RecommendationsResponse>(path)
  }

  /**
   * Get the release date along with the certification for a movie.
   *
   * Release dates support different types:
   * 1) Premiere
   * 2) Theatrical (limited)
   * 3) Theatrical
   * 4) Digital
   * 5) Physical
   * 6) TV
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-release-dates
   */
  public async releaseDates(movieId: number): Promise<ReleaseDatesResponse> {
    const path = this.getPath(`/movie/${movieId}/release_dates`)

    return this.get<ReleaseDatesResponse>(path)
  }

  /**
   * Get the user reviews for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-reviews
   */
  public async reviews(
    movieId: number,
    filters?: ReviewsFilters
  ): Promise<ReviewsResponse> {
    const path = this.getPath(`/movie/${movieId}/reviews`, filters)

    return this.get<ReviewsResponse>(path)
  }

  /**
   * Get a list of similar movies. This is not the same as the "Recommendation" system you see on
   * the website.
   *
   * These items are assembled by looking at keywords and genres.
   *
   * @see https://developers.themoviedb.org/3/movies/get-similar-movies
   */
  public async similar(
    movieId: number,
    filters?: SimilarFilters
  ): Promise<SimilarResponse> {
    const path = this.getPath(`/movie/${movieId}/similar`, filters)

    return this.get<SimilarResponse>(path)
  }

  /**
   * Get a list of translations that have been created for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-translations
   */
  public async translations(movieId: number): Promise<TranslationsResponse> {
    const path = this.getPath(`/movie/${movieId}/translations`)

    return this.get<TranslationsResponse>(path)
  }

  /**
   * Get the videos that have been added to a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-videos
   */
  public async videos(
    movieId: number,
    filters?: VideosFilters
  ): Promise<VideosResponse> {
    const path = this.getPath(`/movie/${movieId}/videos`, filters)

    return this.get<VideosResponse>(path)
  }

  /**
   * Powered by our partnership with JustWatch, you can query this method to get a list of the
   * availabilities per country by provider.
   *
   * This is not going to return full deep links, but rather, it's just enough information to
   * display what's available where.
   *
   * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to
   * the content.
   *
   * Please note: In order to use this data you must attribute the source of the data as JustWatch.
   * If we find any usage not complying with these terms we will revoke access to the API.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-watch-providers
   */
  public async watchProviders(
    movieId: number
  ): Promise<WatchProvidersResponse> {
    const path = this.getPath(`/movie/${movieId}/watch/providers`)

    return this.get<WatchProvidersResponse>(path)
  }

  /**
   * Rate a movie.
   *
   * A valid session or guest session ID is required. You can read more about how this works
   * https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id.
   *
   * @see https://developers.themoviedb.org/3/movies/rate-movie
   */
  public async rate(
    movieId: number,
    body: RateBody,
    filters?: RateFilters
  ): Promise<RateResponse> {
    const path = this.getPath(`/movie/${movieId}/rating`, filters)

    return this.post<RateResponse>(path, body)
  }

  /**
   * Remove your rating for a movie.
   *
   * A valid session or guest session ID is required. You can read more about how this works
   * https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id.
   *
   * @see https://developers.themoviedb.org/3/movies/delete-movie-rating
   */
  public async deleteRate(
    movieId: number,
    filters?: RateFilters
  ): Promise<RateResponse> {
    const path = this.getPath(`/movie/${movieId}/rating`, filters)

    return this.delete<RateResponse>(path)
  }

  /**
   * Get the most newly created movie. This is a live response and will continuously change.
   *
   * @see https://developers.themoviedb.org/3/movies/get-latest-movie
   */
  public async latest(filters?: LatestFilters): Promise<LatestResponse> {
    const path = this.getPath('/movie/latest', filters)

    return this.get<LatestResponse>(path)
  }

  /**
   * Get a list of movies in theatres. This is a release type query that looks
   * for all movies that have a release type of 2 or 3 within the specified date
   * range.
   *
   * You can optionally specify a region prameter which will narrow the search
   * to only look for theatrical release dates within the specified country.
   *
   * @see https://developers.themoviedb.org/3/movies/get-now-playing
   */
  public async nowPlaying(
    filters?: NowPlayingFilters
  ): Promise<NowPlayingResponse> {
    const path = this.getPath('/movie/now_playing', filters)

    return this.get<NowPlayingResponse>(path)
  }

  /**
   * Get a list of the current popular movies on TMDB. This list updates daily.
   *
   * @see https://developers.themoviedb.org/3/movies/get-popular-movies
   */
  public async popular(filters?: PopularFilters): Promise<PopularResponse> {
    const path = this.getPath('/movie/popular', filters)

    return this.get<PopularResponse>(path)
  }

  /**
   * Get the top rated movies on TMDB.
   *
   * @see https://developers.themoviedb.org/3/movies/get-top-rated-movies
   */
  public async topRated(filters?: TopRatedFilters): Promise<TopRatedResponse> {
    const path = this.getPath('/movie/top_rated', filters)

    return this.get<TopRatedResponse>(path)
  }

  /**
   * Get a list of upcoming movies in theatres. This is a release type query
   * that looks for all movies that have a release type of 2 or 3 within the
   * specified date range.
   *
   * You can optionally specify a region prameter which will narrow the search
   * to only look for theatrical release dates within the specified country.
   *
   * @see https://developers.themoviedb.org/3/movies/get-upcoming
   */
  public async upcoming(filters?: UpcomingFilters): Promise<UpcomingResponse> {
    const path = this.getPath('/movie/upcoming', filters)

    return this.get<UpcomingResponse>(path)
  }
}
