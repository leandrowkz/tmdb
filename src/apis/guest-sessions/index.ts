import { BaseAPI } from '../base'
import {
  GuestSessionsRatedFilters,
  GuestSessionsRatedMoviesResponse,
  GuestSessionsRatedTVEpisodesResponse,
  GuestSessionsRatedTVShowsResponse,
} from './types'

export class GuestSessionsAPI extends BaseAPI {
  /**
   * Get the rated movies for a guest session.
   *
   * @see https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies
   */
  public async ratedMovies(
    guestSessionId: string,
    filters?: GuestSessionsRatedFilters
  ): Promise<GuestSessionsRatedMoviesResponse> {
    const path = this.getPath(
      `/guest_session/${guestSessionId}/rated/movies`,
      filters
    )

    return this.get<GuestSessionsRatedMoviesResponse>(path)
  }

  /**
   * Get the rated TV shows for a guest session.
   *
   * @see https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows
   */
  public async ratedTVShows(
    guestSessionId: string,
    filters?: GuestSessionsRatedFilters
  ): Promise<GuestSessionsRatedTVShowsResponse> {
    const path = this.getPath(
      `/guest_session/${guestSessionId}/rated/tv`,
      filters
    )

    return this.get<GuestSessionsRatedTVShowsResponse>(path)
  }

  /**
   * Get the rated TV episodes for a guest session.
   *
   * @see https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-episodes
   */
  public async ratedTVEpisodes(
    guestSessionId: string,
    filters?: GuestSessionsRatedFilters
  ): Promise<GuestSessionsRatedTVEpisodesResponse> {
    const path = this.getPath(
      `/guest_session/${guestSessionId}/rated/tv/episodes`,
      filters
    )

    return this.get<GuestSessionsRatedTVEpisodesResponse>(path)
  }
}
