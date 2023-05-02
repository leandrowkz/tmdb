import { BaseAPI } from '../../base-api'
import {
  AccountStatesFilters,
  AccountStatesResponse,
  ChangesFilters,
  ChangesResponse,
  CreditsFilters,
  CreditsResponse,
  DetailsFilters,
  DetailsResponse,
  ExternalIdsResponse,
  ImagesFilters,
  ImagesResponse,
  RateBody,
  RateFilters,
  RateResponse,
  TranslationsResponse,
  VideosFilters,
  VideosResponse,
} from './types'

export class TVEpisodes extends BaseAPI {
  /**
   * Get the TV episode details by id. Supports append_to_response.
   *
   * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details
   */
  public async details(
    tvShowId: number,
    season: number,
    episode: number,
    filters?: DetailsFilters
  ): Promise<DetailsResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${season}/episode/${episode}`,
      filters
    )

    return this.get<DetailsResponse>(path)
  }

  /**
   * Get your rating for a episode.
   *
   * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-account-states
   */
  public async accountStates(
    tvShowId: number,
    season: number,
    episode: number,
    filters?: AccountStatesFilters
  ): Promise<AccountStatesResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${season}/episode/${episode}/account_states`,
      filters
    )

    return this.get<AccountStatesResponse>(path)
  }

  /**
   * Get the changes for a TV episode. By default only the last 24 hours are returned.
   *
   * You can query up to 14 days in a single query by using the start_date and end_date query
   * parameters.
   *
   * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes
   */
  public async changes(
    episodeId: number,
    filters?: ChangesFilters
  ): Promise<ChangesResponse> {
    const path = this.getPath(`/tv/episode/${episodeId}/changes`, filters)

    return this.get<ChangesResponse>(path)
  }

  /**
   * Get the credits (cast, crew and guest stars) for a TV episode.
   *
   * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits
   */
  public async credits(
    tvShowId: number,
    season: number,
    episode: number,
    filters?: CreditsFilters
  ): Promise<CreditsResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${season}/episode/${episode}/credits`,
      filters
    )

    return this.get<CreditsResponse>(path)
  }

  /**
   * Get the external ids for a TV episode. We currently support the following external sources.
   *
   * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids
   */
  public async externalIds(
    tvShowId: number,
    season: number,
    episode: number
  ): Promise<ExternalIdsResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${season}/episode/${episode}/external_ids`
    )

    return this.get<ExternalIdsResponse>(path)
  }

  /**
   * Get the images that belong to a TV episode.
   *
   * Querying images with a language parameter will filter the results. If you want to include a
   * fallback language (especially useful for backdrops) you can use the include_image_language
   * parameter. This should be a comma seperated value like so: include_image_language=en,null.
   *
   * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-images
   */
  public async images(
    tvShowId: number,
    season: number,
    episode: number,
    filters?: ImagesFilters
  ): Promise<ImagesResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${season}/episode/${episode}/images`,
      filters
    )

    return this.get<ImagesResponse>(path)
  }

  /**
   * Get the translation data for an episode.
   *
   * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations
   */
  public async translations(
    tvShowId: number,
    season: number,
    episode: number
  ): Promise<TranslationsResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${season}/episode/${episode}/translations`
    )

    return this.get<TranslationsResponse>(path)
  }

  /**
   * Get the videos that have been added to a TV episode.
   *
   * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos
   */
  public async videos(
    tvShowId: number,
    season: number,
    episode: number,
    filters?: VideosFilters
  ): Promise<VideosResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${season}/episode/${episode}/videos`,
      filters
    )

    return this.get<VideosResponse>(path)
  }

  /**
   * Rate a TV episode.
   *
   * A valid session or guest session ID is required. You can read more about how this works .
   *
   * @see https://developers.themoviedb.org/3/tv-episodes/rate-tv-episode
   */
  public async rateTVEpisode(
    tvShowId: number,
    season: number,
    episode: number,
    body: RateBody,
    filters?: RateFilters
  ): Promise<RateResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${season}/episode/${episode}/rating`,
      filters
    )

    return this.post<RateResponse>(path, body)
  }

  /**
   * Remove your rating for a TV episode.
   *
   * A valid session or guest session ID is required. You can read more about how this works .
   *
   * @see https://developers.themoviedb.org/3/tv/delete-tv-show-rating
   */
  public async deleteTVEpisodeRate(
    tvShowId: number,
    season: number,
    episode: number,
    filters?: RateFilters
  ): Promise<RateResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${season}/episode/${episode}/rating`,
      filters
    )

    return this.delete<RateResponse>(path)
  }
}
