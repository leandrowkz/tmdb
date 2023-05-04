import { BaseAPI } from '../../base-api'
import {
  CollectionsFilters,
  CollectionDetailsResponse,
  CollectionImagesResponse,
  CollectionTranslationsResponse,
} from './types'

export class Collections extends BaseAPI {
  /**
   * Get collection details by id.
   *
   * @see https://developers.themoviedb.org/3/collections/get-collection-details
   */
  public async details(
    collectionId: number,
    filters?: CollectionsFilters
  ): Promise<CollectionDetailsResponse> {
    const path = this.getPath(`/collection/${collectionId}`, filters)

    return this.get<CollectionDetailsResponse>(path)
  }

  /**
   * Get the images for a collection by id.
   *
   * @see https://developers.themoviedb.org/3/collections/get-collection-images
   */
  public async images(
    collectionId: number,
    filters?: CollectionsFilters
  ): Promise<CollectionImagesResponse> {
    const path = this.getPath(`/collection/${collectionId}/images`, filters)

    return this.get<CollectionImagesResponse>(path)
  }

  /**
   * Get the list translations for a collection by id.
   *
   * @see https://developers.themoviedb.org/3/collections/get-collection-translations
   */
  public async translations(
    collectionId: number,
    filters?: CollectionsFilters
  ): Promise<CollectionTranslationsResponse> {
    const path = this.getPath(
      `/collection/${collectionId}/translations`,
      filters
    )

    return this.get<CollectionTranslationsResponse>(path)
  }
}
