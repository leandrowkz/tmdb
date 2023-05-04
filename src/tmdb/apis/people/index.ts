import { BaseAPI } from '../../base-api'
import { PopularFilters } from '../movies/types'
import {
  ChangesFilters,
  ChangesResponse,
  CombinedCreditsResponse,
  DetailsFilters,
  DetailsResponse,
  ExternalIdsResponse,
  ImagesResponse,
  LanguageAndPageFilters,
  LanguageFilters,
  LatestResponse,
  MovieCreditsResponse,
  PopularResponse,
  TVCreditsResponse,
  TaggedImagesResponse,
  TranslationsResponse,
} from './types'

export class People extends BaseAPI {
  /**
   * Get the primary person details by id.
   *
   * Supports append_to_response. Read more about this https://developers.themoviedb.org/3/getting-started/append-to-response.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-details
   */
  public async details(
    personId: number,
    filters?: DetailsFilters
  ): Promise<DetailsResponse> {
    const path = this.getPath(`/person/${personId}`, filters)

    return this.get<DetailsResponse>(path)
  }

  /**
   * Get the changes for a person. By default only the last 24 hours are returned.
   *
   * You can query up to 14 days in a single query by using the start_date and end_date query
   * parameters.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-changes
   */
  public async changes(
    personId: number,
    filters?: ChangesFilters
  ): Promise<ChangesResponse> {
    const path = this.getPath(`/person/${personId}/changes`, filters)

    return this.get<ChangesResponse>(path)
  }

  /**
   * Get the movie credits for a person.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-movie-credits
   */
  public async movieCredits(
    personId: number,
    filters?: LanguageFilters
  ): Promise<MovieCreditsResponse> {
    const path = this.getPath(`/person/${personId}/movie_credits`, filters)

    return this.get<MovieCreditsResponse>(path)
  }

  /**
   * Get the TV show credits for a person.
   *
   * You can query for some extra details about the credit with the https://developers.themoviedb.org/3/credits/get-credit-details.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-tv-credits
   */
  public async tvCredits(
    personId: number,
    filters?: LanguageFilters
  ): Promise<TVCreditsResponse> {
    const path = this.getPath(`/person/${personId}/tv_credits`, filters)

    return this.get<TVCreditsResponse>(path)
  }

  /**
   * Get the movie and TV credits together in a single response.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-combined-credits
   */
  public async combinedCredits(
    personId: number,
    filters?: LanguageFilters
  ): Promise<CombinedCreditsResponse> {
    const path = this.getPath(`/person/${personId}/combined_credits`, filters)

    return this.get<CombinedCreditsResponse>(path)
  }

  /**
   * Get the external ids for a person.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-external-ids
   */
  public async externalIds(
    personId: number,
    filters?: LanguageFilters
  ): Promise<ExternalIdsResponse> {
    const path = this.getPath(`/person/${personId}/external_ids`, filters)

    return this.get<ExternalIdsResponse>(path)
  }

  /**
   * Get the images for a person.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-images
   */
  public async images(personId: number): Promise<ImagesResponse> {
    const path = this.getPath(`/person/${personId}/images`)

    return this.get<ImagesResponse>(path)
  }

  /**
   * Get the images that this person has been tagged in.
   *
   * @see https://developers.themoviedb.org/3/people/get-tagged-images
   */
  public async taggedImages(
    personId: number,
    filters?: LanguageAndPageFilters
  ): Promise<TaggedImagesResponse> {
    const path = this.getPath(`/person/${personId}/tagged_images`, filters)

    return this.get<TaggedImagesResponse>(path)
  }

  /**
   * Get a list of translations that have been created for a person.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-translations
   */
  public async translations(
    personId: number,
    filters?: LanguageFilters
  ): Promise<TranslationsResponse> {
    const path = this.getPath(`/person/${personId}/translations`, filters)

    return this.get<TranslationsResponse>(path)
  }

  /**
   * Get the most newly created person. This is a live response and will continuously change.
   *
   * @see https://developers.themoviedb.org/3/people/get-latest-person
   */
  public async latest(filters?: LanguageFilters): Promise<LatestResponse> {
    const path = this.getPath('/person/latest', filters)

    return this.get<LatestResponse>(path)
  }

  /**
   * Get the list of popular people on TMDB. This list updates daily.
   *
   * @see https://developers.themoviedb.org/3/people/get-popular-people
   */
  public async popular(filters?: PopularFilters): Promise<PopularResponse> {
    const path = this.getPath('/person/popular', filters)

    return this.get<PopularResponse>(path)
  }
}
