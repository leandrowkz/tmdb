import { BaseAPI } from '../base'
import type {
  CertificationMovieResponse,
  CertificationTVResponse,
} from './types'

export class CertificationsAPI extends BaseAPI {
  /**
   * Get an up to date list of the officially supported movie certifications on TMDB.
   *
   * @see https://developers.themoviedb.org/3/certifications/get-movie-certifications
   */
  public async movie(): Promise<CertificationMovieResponse> {
    const path = this.getPath('/certification/movie/list')

    return this.get<CertificationMovieResponse>(path)
  }

  /**
   * Get an up to date list of the officially supported TV show certifications on TMDB.
   *
   * @see https://developers.themoviedb.org/3/certifications/get-tv-certifications
   */
  public async tv(): Promise<CertificationTVResponse> {
    const path = this.getPath('/certification/tv/list')

    return this.get<CertificationTVResponse>(path)
  }
}
