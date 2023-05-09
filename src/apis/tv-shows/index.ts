import { BaseAPI } from '../base'
import {
  AccountStatesFilters,
  AccountStatesResponse,
  AggregateCreditsFilters,
  AggregateCreditsResponse,
  AiringTodayFilters,
  AiringTodayResponse,
  AlternativeTitlesFilters,
  AlternativeTitlesResponse,
  ChangesFilters,
  ChangesResponse,
  ContentRatingsFilters,
  ContentRatingsResponse,
  CreditsFilters,
  CreditsResponse,
  DetailsFilters,
  DetailsResponse,
  EpisodeGroupsFilters,
  EpisodeGroupsResponse,
  ExternalIdsFilters,
  ExternalIdsResponse,
  ImagesFilters,
  ImagesResponse,
  KeywordsResponse,
  LatestFilters,
  LatestResponse,
  OnTheAirFilters,
  OnTheAirResponse,
  PopularFilters,
  PopularResponse,
  RateBody,
  RateFilters,
  RateResponse,
  RecommendationsFilters,
  RecommendationsResponse,
  ReviewsFilters,
  ReviewsResponse,
  ScreenedTheatricallyResponse,
  SimilarFilters,
  SimilarResponse,
  TopRatedFilters,
  TopRatedResponse,
  TranslationsResponse,
  VideosFilters,
  VideosResponse,
  WatchProvidersResponse,
} from './types'

export class TVShowsAPI extends BaseAPI {
  /**
   * Get the primary TV show details by id. Supports append_to_response.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-details
   */
  public async details(
    tvShowId: number,
    filters?: DetailsFilters
  ): Promise<DetailsResponse> {
    const path = this.getPath(`/tv/${tvShowId}`, filters)

    return this.get<DetailsResponse>(path)
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
    filters?: AccountStatesFilters
  ): Promise<AccountStatesResponse> {
    const path = this.getPath(`/tv/${tvShowId}/account_states`, filters)

    return this.get<AccountStatesResponse>(path)
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
    filters?: AggregateCreditsFilters
  ): Promise<AggregateCreditsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/aggregate_credits`, filters)

    return this.get<AggregateCreditsResponse>(path)
  }

  /**
   * Returns all of the alternative titles for a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-alternative-titles
   */
  public async alternativeTitles(
    tvShowId: number,
    filters?: AlternativeTitlesFilters
  ): Promise<AlternativeTitlesResponse> {
    const path = this.getPath(`/tv/${tvShowId}/alternative_titles`, filters)

    return this.get<AlternativeTitlesResponse>(path)
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
    filters?: ChangesFilters
  ): Promise<ChangesResponse> {
    const path = this.getPath(`/tv/${tvShowId}/changes`, filters)

    return this.get<ChangesResponse>(path)
  }

  /**
   * Get the list of content ratings (certifications) that have been added to a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-content-ratings
   */
  public async contentRatings(
    tvShowId: number,
    filters?: ContentRatingsFilters
  ): Promise<ContentRatingsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/content_ratings`, filters)

    return this.get<ContentRatingsResponse>(path)
  }

  /**
   * Get the credits (cast and crew) that have been added to a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-credits
   */
  public async credits(
    tvShowId: number,
    filters?: CreditsFilters
  ): Promise<CreditsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/credits`, filters)

    return this.get<CreditsResponse>(path)
  }

  /**
   * Get all of the episode groups that have been created for a TV show. With a group ID you can
   * call the episode_group details method.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-episode-groups
   */
  public async episodeGroups(
    tvShowId: number,
    filters?: EpisodeGroupsFilters
  ): Promise<EpisodeGroupsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/episode_groups`, filters)

    return this.get<EpisodeGroupsResponse>(path)
  }

  /**
   * Get the external ids for a TV show. We currently support the following external sources.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-external-ids
   */
  public async externalIds(
    tvShowId: number,
    filters?: ExternalIdsFilters
  ): Promise<ExternalIdsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/external_ids`, filters)

    return this.get<ExternalIdsResponse>(path)
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
    filters?: ImagesFilters
  ): Promise<ImagesResponse> {
    const path = this.getPath(`/tv/${tvShowId}/images`, filters)

    return this.get<ImagesResponse>(path)
  }

  /**
   * Get the keywords that have been added to a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-keywords
   */
  public async keywords(tvShowId: number): Promise<KeywordsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/keywords`)

    return this.get<KeywordsResponse>(path)
  }

  /**
   * Get the list of TV show recommendations for this item.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-recommendations
   */
  public async recommendations(
    tvShowId: number,
    filters?: RecommendationsFilters
  ): Promise<RecommendationsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/recommendations`, filters)

    return this.get<RecommendationsResponse>(path)
  }

  /**
   * Get the reviews for a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-reviews
   */
  public async reviews(
    tvShowId: number,
    filters?: ReviewsFilters
  ): Promise<ReviewsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/reviews`, filters)

    return this.get<ReviewsResponse>(path)
  }

  /**
   * Get a list of seasons or episodes that have been screened in a film festival or theatre.
   *
   * @see https://developers.themoviedb.org/3/tv/get-screened-theatrically
   */
  public async screenedTheatrically(
    tvShowId: number
  ): Promise<ScreenedTheatricallyResponse> {
    const path = this.getPath(`/tv/${tvShowId}/screened_theatrically`)

    return this.get<ScreenedTheatricallyResponse>(path)
  }

  /**
   * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
   *
   * @see https://developers.themoviedb.org/3/tv/get-similar-tv-shows
   */
  public async similar(
    tvShowId: number,
    filters?: SimilarFilters
  ): Promise<SimilarResponse> {
    const path = this.getPath(`/tv/${tvShowId}/similar`, filters)

    return this.get<SimilarResponse>(path)
  }

  /**
   * Get a list of the translations that exist for a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-translations
   */
  public async translations(tvShowId: number): Promise<TranslationsResponse> {
    const path = this.getPath(`/tv/${tvShowId}/translations`)

    return this.get<TranslationsResponse>(path)
  }

  /**
   * Get the videos that have been added to a TV show.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-videos
   */
  public async videos(
    tvShowId: number,
    filters?: VideosFilters
  ): Promise<VideosResponse> {
    const path = this.getPath(`/tv/${tvShowId}/videos`, filters)

    return this.get<VideosResponse>(path)
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
  ): Promise<WatchProvidersResponse> {
    const path = this.getPath(`/tv/${tvShowId}/watch/providers`)

    return this.get<WatchProvidersResponse>(path)
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
    body: RateBody,
    filters?: RateFilters
  ): Promise<RateResponse> {
    const path = this.getPath(`/tv/${tvShowId}/rating`, filters)

    return this.post<RateResponse>(path, body)
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
    filters?: RateFilters
  ): Promise<RateResponse> {
    const path = this.getPath(`/tv/${tvShowId}/rating`, filters)

    return this.delete<RateResponse>(path)
  }

  /**
   * Get the most newly created TV show. This is a live response and will continuously change.
   *
   * @see https://developers.themoviedb.org/3/tv/get-latest-tv
   */
  public async latest(filters?: LatestFilters): Promise<LatestResponse> {
    const path = this.getPath('/tv/latest', filters)

    return this.get<LatestResponse>(path)
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
    filters?: AiringTodayFilters
  ): Promise<AiringTodayResponse> {
    const path = this.getPath('/tv/airing_today', filters)

    return this.get<AiringTodayResponse>(path)
  }

  /**
   * Get a list of shows that are currently on the air.
   *
   * This query looks for any TV show that has an episode with an air date in the next 7 days.
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-airing-today
   */
  public async onTheAir(filters?: OnTheAirFilters): Promise<OnTheAirResponse> {
    const path = this.getPath('/tv/on_the_air', filters)

    return this.get<OnTheAirResponse>(path)
  }

  /**
   * Get a list of the current popular TV shows on TMDB. This list updates daily.
   *
   * @see https://developers.themoviedb.org/3/tv/get-popular-tv-shows
   */
  public async popular(filters?: PopularFilters): Promise<PopularResponse> {
    const path = this.getPath('/tv/popular', filters)

    return this.get<PopularResponse>(path)
  }

  /**
   * Get a list of the top rated TV shows on TMDB.
   *
   * @see https://developers.themoviedb.org/3/tv/get-top-rated-tv
   */
  public async topRated(filters?: TopRatedFilters): Promise<TopRatedResponse> {
    const path = this.getPath('/tv/top_rated', filters)

    return this.get<TopRatedResponse>(path)
  }
}
