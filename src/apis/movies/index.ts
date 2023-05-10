import { BaseAPI } from '../base'
import type {
  MovieAlternativeTitlesFilters,
  MovieAlternativeTitlesResponse,
  MovieAccountStatesResponse,
  MovieAccountStatesFilters,
  MovieDetailsFilters,
  MovieChangesFilters,
  MovieChangesResponse,
  MovieCreditsFilters,
  MovieCreditsResponse,
  MovieExternalIdsResponse,
  MovieImagesFilters,
  MovieImagesResponse,
  MovieKeywordsResponse,
  MovieListsFilters,
  MovieListsResponse,
  MovieRecommendationsFilters,
  MovieRecommendationsResponse,
  MovieReleaseDatesResponse,
  MovieReviewsFilters,
  MovieReviewsResponse,
  MovieSimilarFilters,
  MovieSimilarResponse,
  MovieTranslationsResponse,
  MovieVideosFilters,
  MovieVideosResponse,
  MovieWatchProvidersResponse,
  MovieRateBody,
  MovieRateFilters,
  MovieRateResponse,
  MovieLatestFilters,
  MovieNowPlayingFilters,
  MovieNowPlayingResponse,
  MoviePopularFilters,
  MoviePopularResponse,
  MovieTopRatedFilters,
  MovieTopRatedResponse,
  MovieUpcomingFilters,
  MovieUpcomingResponse,
  MovieDetailsResponse,
  MovieLatestResponse,
} from './types'

export class MoviesAPI extends BaseAPI {
  /**
   * Fetch movie details.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-details
   */
  public async details(
    movieId: number,
    filters?: MovieDetailsFilters
  ): Promise<MovieDetailsResponse> {
    const path = this.getPath(`/movie/${movieId}`, filters)

    return this.get<MovieDetailsResponse>(path)
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
    filters?: MovieAccountStatesFilters
  ): Promise<MovieAccountStatesResponse> {
    const path = this.getPath(`/movie/${movieId}/account_states`, filters)

    return this.get<MovieAccountStatesResponse>(path)
  }

  /**
   * Get all of the alternative titles for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-alternative-titles
   */
  public async alternativeTitles(
    movieId: number,
    filters?: MovieAlternativeTitlesFilters
  ): Promise<MovieAlternativeTitlesResponse> {
    const path = this.getPath(`/movie/${movieId}/alternative_titles`, filters)

    return this.get<MovieAlternativeTitlesResponse>(path)
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
    filters?: MovieChangesFilters
  ): Promise<MovieChangesResponse> {
    const path = this.getPath(`/movie/${movieId}/changes`, filters)

    return this.get<MovieChangesResponse>(path)
  }

  /**
   * Get the cast and crew for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-credits
   */
  public async credits(
    movieId: number,
    filters?: MovieCreditsFilters
  ): Promise<MovieCreditsResponse> {
    const path = this.getPath(`/movie/${movieId}/credits`, filters)

    return this.get<MovieCreditsResponse>(path)
  }

  /**
   * Get the external ids for a movie. We currently support the following external sources.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-external-ids
   */
  public async externalIds(movieId: number): Promise<MovieExternalIdsResponse> {
    const path = this.getPath(`/movie/${movieId}/external_ids`)

    return this.get<MovieExternalIdsResponse>(path)
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
    filters?: MovieImagesFilters
  ): Promise<MovieImagesResponse> {
    const path = this.getPath(`/movie/${movieId}/images`, filters)

    return this.get<MovieImagesResponse>(path)
  }

  /**
   * Get the keywords that have been added to a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-keywords
   */
  public async keywords(movieId: number): Promise<MovieKeywordsResponse> {
    const path = this.getPath(`/movie/${movieId}/keywords`)

    return this.get<MovieKeywordsResponse>(path)
  }

  /**
   * Get a list of lists that this movie belongs to.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-lists
   */
  public async lists(
    movieId: number,
    filters?: MovieListsFilters
  ): Promise<MovieListsResponse> {
    const path = this.getPath(`/movie/${movieId}/lists`, filters)

    return this.get<MovieListsResponse>(path)
  }

  /**
   * Get a list of recommended movies for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-recommendations
   */
  public async recommendations(
    movieId: number,
    filters?: MovieRecommendationsFilters
  ): Promise<MovieRecommendationsResponse> {
    const path = this.getPath(`/movie/${movieId}/recommendations`, filters)

    return this.get<MovieRecommendationsResponse>(path)
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
  public async releaseDates(
    movieId: number
  ): Promise<MovieReleaseDatesResponse> {
    const path = this.getPath(`/movie/${movieId}/release_dates`)

    return this.get<MovieReleaseDatesResponse>(path)
  }

  /**
   * Get the user reviews for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-reviews
   */
  public async reviews(
    movieId: number,
    filters?: MovieReviewsFilters
  ): Promise<MovieReviewsResponse> {
    const path = this.getPath(`/movie/${movieId}/reviews`, filters)

    return this.get<MovieReviewsResponse>(path)
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
    filters?: MovieSimilarFilters
  ): Promise<MovieSimilarResponse> {
    const path = this.getPath(`/movie/${movieId}/similar`, filters)

    return this.get<MovieSimilarResponse>(path)
  }

  /**
   * Get a list of translations that have been created for a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-translations
   */
  public async translations(
    movieId: number
  ): Promise<MovieTranslationsResponse> {
    const path = this.getPath(`/movie/${movieId}/translations`)

    return this.get<MovieTranslationsResponse>(path)
  }

  /**
   * Get the videos that have been added to a movie.
   *
   * @see https://developers.themoviedb.org/3/movies/get-movie-videos
   */
  public async videos(
    movieId: number,
    filters?: MovieVideosFilters
  ): Promise<MovieVideosResponse> {
    const path = this.getPath(`/movie/${movieId}/videos`, filters)

    return this.get<MovieVideosResponse>(path)
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
  ): Promise<MovieWatchProvidersResponse> {
    const path = this.getPath(`/movie/${movieId}/watch/providers`)

    return this.get<MovieWatchProvidersResponse>(path)
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
    body: MovieRateBody,
    filters?: MovieRateFilters
  ): Promise<MovieRateResponse> {
    const path = this.getPath(`/movie/${movieId}/rating`, filters)

    return this.post<MovieRateResponse>(path, body)
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
    filters?: MovieRateFilters
  ): Promise<MovieRateResponse> {
    const path = this.getPath(`/movie/${movieId}/rating`, filters)

    return this.delete<MovieRateResponse>(path)
  }

  /**
   * Get the most newly created movie. This is a live response and will continuously change.
   *
   * @see https://developers.themoviedb.org/3/movies/get-latest-movie
   */
  public async latest(
    filters?: MovieLatestFilters
  ): Promise<MovieLatestResponse> {
    const path = this.getPath('/movie/latest', filters)

    return this.get<MovieLatestResponse>(path)
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
    filters?: MovieNowPlayingFilters
  ): Promise<MovieNowPlayingResponse> {
    const path = this.getPath('/movie/now_playing', filters)

    return this.get<MovieNowPlayingResponse>(path)
  }

  /**
   * Get a list of the current popular movies on TMDB. This list updates daily.
   *
   * @see https://developers.themoviedb.org/3/movies/get-popular-movies
   */
  public async popular(
    filters?: MoviePopularFilters
  ): Promise<MoviePopularResponse> {
    const path = this.getPath('/movie/popular', filters)

    return this.get<MoviePopularResponse>(path)
  }

  /**
   * Get the top rated movies on TMDB.
   *
   * @see https://developers.themoviedb.org/3/movies/get-top-rated-movies
   */
  public async topRated(
    filters?: MovieTopRatedFilters
  ): Promise<MovieTopRatedResponse> {
    const path = this.getPath('/movie/top_rated', filters)

    return this.get<MovieTopRatedResponse>(path)
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
  public async upcoming(
    filters?: MovieUpcomingFilters
  ): Promise<MovieUpcomingResponse> {
    const path = this.getPath('/movie/upcoming', filters)

    return this.get<MovieUpcomingResponse>(path)
  }
}
