import { MovieCredits } from '../../types/MovieCredits'
import { Movie } from '../../types/Movie'
import { TmdbAPIResponseList } from '../../types/TmdbAPIResponseList'
import { BaseAPI } from './BaseAPI'
import { MovieVideo } from '../../types/MovieVideo'

export class Movies extends BaseAPI {
  /**
   * Fetch movie details.
   *
   * @param movieId
   * @returns Promise<Movie>
   * @see https://developers.themoviedb.org/3/movies/get-movie-details
   */
  public async details(movieId: number, filters = {}): Promise<Movie> {
    const path = this.getPath(`/movie/${movieId}`, filters)

    return this.get<Movie>(path)
  }

  /**
   * Fetch a list of similar movies based on given movie.
   *
   * @param id
   * @param filters
   * @returns Promise<TmdbAPIResponseList<Movie>>
   * @see https://developers.themoviedb.org/3/movies/get-similar-movies
   */
  public async similar(
    movieId: number,
    filters = {}
  ): Promise<TmdbAPIResponseList<Movie>> {
    const path = this.getPath(`/movie/${movieId}/similar`, filters)

    return this.get<TmdbAPIResponseList<Movie>>(path)
  }

  /**
   * Get a list of recommendations for a movie.
   *
   * @param id
   * @param filters
   * @returns Promise<TmdbAPIResponseList<Movie>>
   * @see https://developers.themoviedb.org/3/movies/get-movie-recommendations
   */
  public async recommendations(
    movieId: number,
    filters = {}
  ): Promise<TmdbAPIResponseList<Movie>> {
    const path = this.getPath(`/movie/${movieId}/recommendations`, filters)

    return this.get<TmdbAPIResponseList<Movie>>(path)
  }

  /**
   * Get a list of movies in theatres.
   *
   * @param filters
   * @returns Promise<TmdbAPIResponseList<Movie>>
   * @see https://developers.themoviedb.org/3/movies/get-now-playing
   */
  public async nowPlaying(filters = {}): Promise<TmdbAPIResponseList<Movie>> {
    const path = this.getPath('/movie/now_playing', filters)

    return this.get<TmdbAPIResponseList<Movie>>(path)
  }

  /**
   * Get a list of popular movies.
   *
   * @param filters
   * @returns Promise<TmdbAPIResponseList<Movie>>
   * @see https://developers.themoviedb.org/3/movies/get-popular-movies
   */
  public async popular(filters = {}): Promise<TmdbAPIResponseList<Movie>> {
    const path = this.getPath('/movie/popular', filters)

    return this.get<TmdbAPIResponseList<Movie>>(path)
  }

  /**
   * Fetch the cast and crew for a movie.
   *
   * @param movieId
   * @param filters
   * @returns Promise<MovieCredits>
   * @see https://developers.themoviedb.org/3/movies/get-movie-credits
   */
  public async credits(movieId: number, filters = {}): Promise<MovieCredits> {
    const path = this.getPath(`/movie/${movieId}/credits`, filters)

    return this.get<MovieCredits>(path)
  }

  /**
   * Get the videos that have been added to a movie.
   *
   * @param movieId
   * @param filters
   * @returns Promise<MovieCredits>
   * @see https://developers.themoviedb.org/3/movies/get-movie-videos
   */
  public async videos(
    movieId: number,
    filters = {}
  ): Promise<TmdbAPIResponseList<MovieVideo>> {
    const path = this.getPath(`/movie/${movieId}/videos`, filters)

    return this.get<TmdbAPIResponseList<MovieVideo>>(path)
  }
}
