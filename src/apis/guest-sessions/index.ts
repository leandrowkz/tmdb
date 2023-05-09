import { BaseAPI } from '../base'
import {
  RatedFilters,
  RatedMoviesResponse,
  RatedTVEpisodesResponse,
  RatedTVShowsResponse,
} from './types'

export class GuestSessionsAPI extends BaseAPI {
  /**
   * Get the rated movies for a guest session.
   *
   * @see https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies
   */
  public async ratedMovies(
    guestSessionId: string,
    filters?: RatedFilters
  ): Promise<RatedMoviesResponse> {
    const path = this.getPath(
      `/guest_session/${guestSessionId}/rated/movies`,
      filters
    )

    return this.get<RatedMoviesResponse>(path)
  }

  /**
   * Get the rated TV shows for a guest session.
   *
   * @see https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows
   */
  public async ratedTVShows(
    guestSessionId: string,
    filters?: RatedFilters
  ): Promise<RatedTVShowsResponse> {
    const path = this.getPath(
      `/guest_session/${guestSessionId}/rated/tv`,
      filters
    )

    return this.get<RatedTVShowsResponse>(path)
  }

  /**
   * Get the rated TV episodes for a guest session.
   *
   * @see https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-episodes
   */
  public async ratedTVEpisodes(
    guestSessionId: string,
    filters?: RatedFilters
  ): Promise<RatedTVEpisodesResponse> {
    const path = this.getPath(
      `/guest_session/${guestSessionId}/rated/tv/episodes`,
      filters
    )

    return this.get<RatedTVEpisodesResponse>(path)
  }
}
