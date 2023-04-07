import { BaseAPI } from './BaseAPI'
import {
  MovieResponse,
  TVResponse,
} from '../../types/TMDBResponseCertifications'

export class Certifications extends BaseAPI {
  /**
   * Get an up to date list of the officially supported movie certifications on TMDB.
   *
   * @returns Promise<MovieResponse>
   * @see https://developers.themoviedb.org/3/certifications/get-movie-certifications
   */
  public async movie(): Promise<MovieResponse> {
    const path = this.getPath('/certification/movie/list')

    return this.get<MovieResponse>(path)
  }

  /**
   * Get an up to date list of the officially supported TV show certifications on TMDB.
   *
   * @returns Promise<TVResponse>
   * @see https://developers.themoviedb.org/3/certifications/get-tv-certifications
   */
  public async tv(): Promise<TVResponse> {
    const path = this.getPath('/certification/tv/list')

    return this.get<TVResponse>(path)
  }
}
