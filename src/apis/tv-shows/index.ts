import { BaseAPI } from '../base'
import type {
  TVShowAccountStatesFilters,
  TVShowAccountStatesResponse,
  TVShowAggregateCreditsFilters,
  TVShowAggregateCreditsResponse,
  TVShowAiringTodayFilters,
  TVShowAiringTodayResponse,
  TVShowAlternativeTitlesFilters,
  TVShowAlternativeTitlesResponse,
  TVShowChangesFilters,
  TVShowChangesResponse,
  TVShowContentRatingsFilters,
  TVShowContentRatingsResponse,
  TVShowCreditsFilters,
  TVShowCreditsResponse,
  TVShowDetailsFilters,
  TVShowDetailsResponse,
  TVShowEpisodeGroupsFilters,
  TVShowEpisodeGroupsResponse,
  TVShowExternalIdsFilters,
  TVShowExternalIdsResponse,
  TVShowImagesFilters,
  TVShowImagesResponse,
  TVShowKeywordsResponse,
  TVShowLatestFilters,
  TVShowLatestResponse,
  TVShowOnTheAirFilters,
  TVShowOnTheAirResponse,
  TVShowPopularFilters,
  TVShowPopularResponse,
  TVShowRateBody,
  TVShowRateFilters,
  TVShowRateResponse,
  TVShowRecommendationsFilters,
  TVShowRecommendationsResponse,
  TVShowReviewsFilters,
  TVShowReviewsResponse,
  TVShowScreenedTheatricallyResponse,
  TVShowSimilarFilters,
  TVShowSimilarResponse,
  TVShowTopRatedFilters,
  TVShowTopRatedResponse,
  TVShowTranslationsResponse,
  TVShowVideosFilters,
  TVShowVideosResponse,
  TVShowWatchProvidersResponse,
} from './types'

export class TVShowsAPI extends BaseAPI {
  /**
   * Get the primary TV show details by id. Supports append_to_response.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-details
   */
  public async details(
    tvShowId: number,
    filters?: TVShowDetailsFilters
  ): Promise<TVShowDetailsResponse> {
    const path = this.getPath(`/tv/${tvShowId}`, filters)

    return this.get<TVShowDetailsResponse>(path)
  }

  /**
   * Grab the following account states for a session:
   * - TV show rating
   * - If it belongs to your watchlist
   * - If it belongs to your favourite list
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-account-states
   */
  public async accountStates(
    tvShowId: number,
    filters?: TVShowAccountStatesFilters
  ): Promise<TVShowAccountStatesResponse> {
    const path = this.getPath(`/tv/${tvShowId}/account_states`, filters)

    return this.get<TVShowAccountStatesResponse>(path)
  }

  /**
   * Get the aggregate credits (cast and crew) that have been added to a TV show.
   *
   * This call differs from the main credits call in that it does not return the newest season but
   * rather, is a view of all the entire cast & crew for all episodes belonging to a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-aggregate-credits
   */
  public async aggregateCredits(
    tvShowId: number,
    filters?: TVShowAggregateCreditsFilters
  ): Promise<TVShowAggregateCreditsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/aggregate_credits`, filters)

    return this.get<TVShowAggregateCreditsResponse>(path)
  }

  /**
   * Returns all of the alternative titles for a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-alternative-titles
   */
  public async alternativeTitles(
    tvShowId: number,
    filters?: TVShowAlternativeTitlesFilters
  ): Promise<TVShowAlternativeTitlesResponse> {
    const path = this.getPath(`/tv/${tvShowId}/alternative_titles`, filters)

    return this.get<TVShowAlternativeTitlesResponse>(path)
  }

  /**
   * Get the changes for a TV show. By default only the last 24 hours are returned.
   *
   * You can query up to 14 days in a single query by using the start_date and end_date query
   * parameters.
   *
   * TV show changes are different than movie changes in that there are some edits on seasons and
   * episodes that will create a change entry at the show level. These can be found under the season
   * and episode keys. These keys will contain a series_id and episode_id. You can use the
   * season_changes and episode_changes methods to look these up individually.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-changes
   */
  public async changes(
    tvShowId: number,
    filters?: TVShowChangesFilters
  ): Promise<TVShowChangesResponse> {
    const path = this.getPath(`/tv/${tvShowId}/changes`, filters)

    return this.get<TVShowChangesResponse>(path)
  }

  /**
   * Get the list of content ratings (certifications) that have been added to a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-content-ratings
   */
  public async contentRatings(
    tvShowId: number,
    filters?: TVShowContentRatingsFilters
  ): Promise<TVShowContentRatingsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/content_ratings`, filters)

    return this.get<TVShowContentRatingsResponse>(path)
  }

  /**
   * Get the credits (cast and crew) that have been added to a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-credits
   */
  public async credits(
    tvShowId: number,
    filters?: TVShowCreditsFilters
  ): Promise<TVShowCreditsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/credits`, filters)

    return this.get<TVShowCreditsResponse>(path)
  }

  /**
   * Get all of the episode groups that have been created for a TV show. With a group ID you can
   * call the episode_group details method.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-episode-groups
   */
  public async episodeGroups(
    tvShowId: number,
    filters?: TVShowEpisodeGroupsFilters
  ): Promise<TVShowEpisodeGroupsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/episode_groups`, filters)

    return this.get<TVShowEpisodeGroupsResponse>(path)
  }

  /**
   * Get the external ids for a TV show. We currently support the following external sources.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-external-ids
   */
  public async externalIds(
    tvShowId: number,
    filters?: TVShowExternalIdsFilters
  ): Promise<TVShowExternalIdsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/external_ids`, filters)

    return this.get<TVShowExternalIdsResponse>(path)
  }

  /**
   * Get the images that belong to a TV show.
   *
   * Querying images with a language parameter will filter the results. If you want to include a
   * fallback language (especially useful for backdrops) you can use the include_image_language
   * parameter. This should be a comma seperated value like so: include_image_language=en,null.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-images
   */
  public async images(
    tvShowId: number,
    filters?: TVShowImagesFilters
  ): Promise<TVShowImagesResponse> {
    const path = this.getPath(`/tv/${tvShowId}/images`, filters)

    return this.get<TVShowImagesResponse>(path)
  }

  /**
   * Get the keywords that have been added to a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-keywords
   */
  public async keywords(tvShowId: number): Promise<TVShowKeywordsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/keywords`)

    return this.get<TVShowKeywordsResponse>(path)
  }

  /**
   * Get the list of TV show recommendations for this item.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-recommendations
   */
  public async recommendations(
    tvShowId: number,
    filters?: TVShowRecommendationsFilters
  ): Promise<TVShowRecommendationsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/recommendations`, filters)

    return this.get<TVShowRecommendationsResponse>(path)
  }

  /**
   * Get the reviews for a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-reviews
   */
  public async reviews(
    tvShowId: number,
    filters?: TVShowReviewsFilters
  ): Promise<TVShowReviewsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/reviews`, filters)

    return this.get<TVShowReviewsResponse>(path)
  }

  /**
   * Get a list of seasons or episodes that have been screened in a film festival or theatre.
   *
   * @see https://developers.themoviedb.org/3/tv/get-screened-theatrically
   */
  public async screenedTheatrically(
    tvShowId: number
  ): Promise<TVShowScreenedTheatricallyResponse> {
    const path = this.getPath(`/tv/${tvShowId}/screened_theatrically`)

    return this.get<TVShowScreenedTheatricallyResponse>(path)
  }

  /**
   * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
   *
   * @see https://developers.themoviedb.org/3/tv/get-similar-tv-shows
   */
  public async similar(
    tvShowId: number,
    filters?: TVShowSimilarFilters
  ): Promise<TVShowSimilarResponse> {
    const path = this.getPath(`/tv/${tvShowId}/similar`, filters)

    return this.get<TVShowSimilarResponse>(path)
  }

  /**
   * Get a list of the translations that exist for a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-translations
   */
  public async translations(
    tvShowId: number
  ): Promise<TVShowTranslationsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/translations`)

    return this.get<TVShowTranslationsResponse>(path)
  }

  /**
   * Get the videos that have been added to a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-videos
   */
  public async videos(
    tvShowId: number,
    filters?: TVShowVideosFilters
  ): Promise<TVShowVideosResponse> {
    const path = this.getPath(`/tv/${tvShowId}/videos`, filters)

    return this.get<TVShowVideosResponse>(path)
  }

  /**
   * Powered by our partnership with JustWatch, you can query this method to get a list of the
   * availabilities per country by provider.
   *
   * This is not going to return full deep links, but rather, it's just enough information to
   * display what's available where.
   *
   * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links
   * to the content.
   *
   * Please note: In order to use this data you must attribute the source of the data as JustWatch.
   * If we find any usage not complying with these terms we will revoke access to the API.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-watch-providers
   */
  public async watchProviders(
    tvShowId: number
  ): Promise<TVShowWatchProvidersResponse> {
    const path = this.getPath(`/tv/${tvShowId}/watch/providers`)

    return this.get<TVShowWatchProvidersResponse>(path)
  }

  /**
   * Rate a TV show.
   *
   * A valid session or guest session ID is required. You can read more about how this works .
   *
   * @see https://developers.themoviedb.org/3/tv/rate-tv-show
   */
  public async rateTVShow(
    tvShowId: number,
    data: TVShowRateBody,
    filters?: TVShowRateFilters
  ): Promise<TVShowRateResponse> {
    const path = this.getPath(`/tv/${tvShowId}/rating`, filters)

    return this.post<TVShowRateResponse>(path, data)
  }

  /**
   * Remove your rating for a TV show.
   *
   * A valid session or guest session ID is required. You can read more about how this works .
   *
   * @see https://developers.themoviedb.org/3/tv/delete-tv-show-rating
   */
  public async deleteTVShowRate(
    tvShowId: number,
    filters?: TVShowRateFilters
  ): Promise<TVShowRateResponse> {
    const path = this.getPath(`/tv/${tvShowId}/rating`, filters)

    return this.delete<TVShowRateResponse>(path)
  }

  /**
   * Get the most newly created TV show. This is a live response and will continuously change.
   *
   * @see https://developers.themoviedb.org/3/tv/get-latest-tv
   */
  public async latest(
    filters?: TVShowLatestFilters
  ): Promise<TVShowLatestResponse> {
    const path = this.getPath('/tv/latest', filters)

    return this.get<TVShowLatestResponse>(path)
  }

  /**
   * Get a list of TV shows that are airing today. This query is purely day based as we do not
   * currently support airing times.
   *
   * You can specify a timezone to offset the day calculation. Without a specified timezone, this
   * query defaults to EST (Eastern Time UTC-05:00).
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-airing-today
   */
  public async airingToday(
    filters?: TVShowAiringTodayFilters
  ): Promise<TVShowAiringTodayResponse> {
    const path = this.getPath('/tv/airing_today', filters)

    return this.get<TVShowAiringTodayResponse>(path)
  }

  /**
   * Get a list of shows that are currently on the air.
   *
   * This query looks for any TV show that has an episode with an air date in the next 7 days.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-airing-today
   */
  public async onTheAir(
    filters?: TVShowOnTheAirFilters
  ): Promise<TVShowOnTheAirResponse> {
    const path = this.getPath('/tv/on_the_air', filters)

    return this.get<TVShowOnTheAirResponse>(path)
  }

  /**
   * Get a list of the current popular TV shows on TMDB. This list updates daily.
   *
   * @see https://developers.themoviedb.org/3/tv/get-popular-tv-shows
   */
  public async popular(
    filters?: TVShowPopularFilters
  ): Promise<TVShowPopularResponse> {
    const path = this.getPath('/tv/popular', filters)

    return this.get<TVShowPopularResponse>(path)
  }

  /**
   * Get a list of the top rated TV shows on TMDB.
   *
   * @see https://developers.themoviedb.org/3/tv/get-top-rated-tv
   */
  public async topRated(
    filters?: TVShowTopRatedFilters
  ): Promise<TVShowTopRatedResponse> {
    const path = this.getPath('/tv/top_rated', filters)

    return this.get<TVShowTopRatedResponse>(path)
  }
}
