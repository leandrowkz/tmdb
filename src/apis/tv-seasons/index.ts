import { BaseAPI } from '../base'
import type {
  TVSeasonAccountStatesFilters,
  TVSeasonAccountStatesResponse,
  TVSeasonAggregateCreditsFilters,
  TVSeasonAggregateCreditsResponse,
  TVSeasonChangesFilters,
  TVSeasonChangesResponse,
  TVSeasonCreditsFilters,
  TVSeasonCreditsResponse,
  TVSeasonDetailsFilters,
  TVSeasonDetailsResponse,
  TVSeasonExternalIdsFilters,
  TVSeasonExternalIdsResponse,
  TVSeasonImagesFilters,
  TVSeasonImagesResponse,
  TVSeasonTranslationFilters,
  TVSeasonTranslationsResponse,
  TVSeasonVideosFilters,
  TVSeasonVideosResponse,
} from './types'

export class TVSeasonsAPI extends BaseAPI {
  /**
   * Get the TV season details by id. Supports append_to_response.
   *
   * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details
   */
  public async details(
    tvShowId: number,
    seasonNumber: number,
    filters?: TVSeasonDetailsFilters
  ): Promise<TVSeasonDetailsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/season/${seasonNumber}`, filters)

    return this.get<TVSeasonDetailsResponse>(path)
  }

  /**
   * Returns all of the user ratings for the season's episodes.
   *
   * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-account-states
   */
  public async accountStates(
    tvShowId: number,
    seasonNumber: number,
    filters?: TVSeasonAccountStatesFilters
  ): Promise<TVSeasonAccountStatesResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${seasonNumber}/account_states`,
      filters
    )

    return this.get<TVSeasonAccountStatesResponse>(path)
  }

  /**
   * Get the aggregate credits for TV season.
   *
   * This call differs from the main credits call in that it does not only return the season
   * credits, but rather is a view of all the cast & crew for all of the episodes belonging to a
   * season.
   *
   * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-aggregate-credits
   */
  public async aggregateCredits(
    tvShowId: number,
    seasonNumber: number,
    filters?: TVSeasonAggregateCreditsFilters
  ): Promise<TVSeasonAggregateCreditsResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${seasonNumber}/aggregate_credits`,
      filters
    )

    return this.get<TVSeasonAggregateCreditsResponse>(path)
  }

  /**
   * Get the changes for a TV season. By default only the last 24 hours are returned.
   *
   * You can query up to 14 days in a single query by using the start_date and end_date query
   * parameters.
   *
   * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-changes
   */
  public async changes(
    seasonId: number,
    filters?: TVSeasonChangesFilters
  ): Promise<TVSeasonChangesResponse> {
    const path = this.getPath(`/tv/season/${seasonId}/changes`, filters)

    return this.get<TVSeasonChangesResponse>(path)
  }

  /**
   * Get the credits for TV season.
   *
   * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-credits
   */
  public async credits(
    tvShowId: number,
    seasonNumber: number,
    filters?: TVSeasonCreditsFilters
  ): Promise<TVSeasonCreditsResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${seasonNumber}/credits`,
      filters
    )

    return this.get<TVSeasonCreditsResponse>(path)
  }

  /**
   * Get the external ids for a TV season. We currently support the following external sources.
   *
   * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids
   */
  public async externalIds(
    tvShowId: number,
    seasonNumber: number,
    filters?: TVSeasonExternalIdsFilters
  ): Promise<TVSeasonExternalIdsResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${seasonNumber}/external_ids`,
      filters
    )

    return this.get<TVSeasonExternalIdsResponse>(path)
  }

  /**
   * Get the images that belong to a TV season.
   *
   * Querying images with a language parameter will filter the results. If you want to include a
   * fallback language (especially useful for backdrops) you can use the include_image_language
   * parameter. This should be a comma seperated value like so: include_image_language=en,null.
   *
   * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images
   */
  public async images(
    tvShowId: number,
    seasonNumber: number,
    filters?: TVSeasonImagesFilters
  ): Promise<TVSeasonImagesResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${seasonNumber}/images`,
      filters
    )

    return this.get<TVSeasonImagesResponse>(path)
  }

  /**
   * Get the translation data for TV season.
   *
   * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-translations
   */
  public async translations(
    tvShowId: number,
    seasonNumber: number,
    filters?: TVSeasonTranslationFilters
  ): Promise<TVSeasonTranslationsResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${seasonNumber}/translations`,
      filters
    )

    return this.get<TVSeasonTranslationsResponse>(path)
  }

  /**
   * Get the videos that have been added to a TV season.
   *
   * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-videos
   */
  public async videos(
    tvShowId: number,
    seasonNumber: number,
    filters?: TVSeasonVideosFilters
  ): Promise<TVSeasonVideosResponse> {
    const path = this.getPath(
      `/tv/${tvShowId}/season/${seasonNumber}/videos`,
      filters
    )

    return this.get<TVSeasonVideosResponse>(path)
  }
}
