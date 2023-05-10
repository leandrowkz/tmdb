import { BaseAPI } from '../base'
import {
  PeopleChangesFilters,
  PeopleChangesResponse,
  PeopleCombinedCreditsResponse,
  PeopleDetailsFilters,
  PeopleDetailsResponse,
  PeopleExternalIdsResponse,
  PeopleImagesResponse,
  PeopleLanguageAndPageFilters,
  PeopleLanguageFilters,
  PeopleLatestResponse,
  PeopleMovieCreditsResponse,
  PeoplePopularFilters,
  PeoplePopularResponse,
  PeopleTVCreditsResponse,
  PeopleTaggedImagesResponse,
  PeopleTranslationsResponse,
} from './types'

export class PeopleAPI extends BaseAPI {
  /**
   * Get the primary person details by id.
   *
   * Supports append_to_response. Read more about this https://developers.themoviedb.org/3/getting-started/append-to-response.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-details
   */
  public async details(
    personId: number,
    filters?: PeopleDetailsFilters
  ): Promise<PeopleDetailsResponse> {
    const path = this.getPath(`/person/${personId}`, filters)

    return this.get<PeopleDetailsResponse>(path)
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
    filters?: PeopleChangesFilters
  ): Promise<PeopleChangesResponse> {
    const path = this.getPath(`/person/${personId}/changes`, filters)

    return this.get<PeopleChangesResponse>(path)
  }

  /**
   * Get the movie credits for a person.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-movie-credits
   */
  public async movieCredits(
    personId: number,
    filters?: PeopleLanguageFilters
  ): Promise<PeopleMovieCreditsResponse> {
    const path = this.getPath(`/person/${personId}/movie_credits`, filters)

    return this.get<PeopleMovieCreditsResponse>(path)
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
    filters?: PeopleLanguageFilters
  ): Promise<PeopleTVCreditsResponse> {
    const path = this.getPath(`/person/${personId}/tv_credits`, filters)

    return this.get<PeopleTVCreditsResponse>(path)
  }

  /**
   * Get the movie and TV credits together in a single response.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-combined-credits
   */
  public async combinedCredits(
    personId: number,
    filters?: PeopleLanguageFilters
  ): Promise<PeopleCombinedCreditsResponse> {
    const path = this.getPath(`/person/${personId}/combined_credits`, filters)

    return this.get<PeopleCombinedCreditsResponse>(path)
  }

  /**
   * Get the external ids for a person.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-external-ids
   */
  public async externalIds(
    personId: number,
    filters?: PeopleLanguageFilters
  ): Promise<PeopleExternalIdsResponse> {
    const path = this.getPath(`/person/${personId}/external_ids`, filters)

    return this.get<PeopleExternalIdsResponse>(path)
  }

  /**
   * Get the images for a person.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-images
   */
  public async images(personId: number): Promise<PeopleImagesResponse> {
    const path = this.getPath(`/person/${personId}/images`)

    return this.get<PeopleImagesResponse>(path)
  }

  /**
   * Get the images that this person has been tagged in.
   *
   * @see https://developers.themoviedb.org/3/people/get-tagged-images
   */
  public async taggedImages(
    personId: number,
    filters?: PeopleLanguageAndPageFilters
  ): Promise<PeopleTaggedImagesResponse> {
    const path = this.getPath(`/person/${personId}/tagged_images`, filters)

    return this.get<PeopleTaggedImagesResponse>(path)
  }

  /**
   * Get a list of translations that have been created for a person.
   *
   * @see https://developers.themoviedb.org/3/people/get-person-translations
   */
  public async translations(
    personId: number,
    filters?: PeopleLanguageFilters
  ): Promise<PeopleTranslationsResponse> {
    const path = this.getPath(`/person/${personId}/translations`, filters)

    return this.get<PeopleTranslationsResponse>(path)
  }

  /**
   * Get the most newly created person. This is a live response and will continuously change.
   *
   * @see https://developers.themoviedb.org/3/people/get-latest-person
   */
  public async latest(
    filters?: PeopleLanguageFilters
  ): Promise<PeopleLatestResponse> {
    const path = this.getPath('/person/latest', filters)

    return this.get<PeopleLatestResponse>(path)
  }

  /**
   * Get the list of popular people on TMDB. This list updates daily.
   *
   * @see https://developers.themoviedb.org/3/people/get-popular-people
   */
  public async popular(
    filters?: PeoplePopularFilters
  ): Promise<PeoplePopularResponse> {
    const path = this.getPath('/person/popular', filters)

    return this.get<PeoplePopularResponse>(path)
  }
}
