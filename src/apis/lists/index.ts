import { BaseAPI } from '../base'
import {
  AddItemBody,
  AddItemFilters,
  AddItemResponse,
  ClearListFilters,
  ClearListResponse,
  CreateListBody,
  CreateListFilters,
  CreateListResponse,
  DeleteListFilters,
  DeleteListResponse,
  DetailsFilters,
  DetailsResponse,
  ItemStatusFilters,
  ItemStatusResponse,
  RemoveItemBody,
  RemoveItemFilters,
  RemoveItemResponse,
} from './types'

export class ListsAPI extends BaseAPI {
  /**
   * Get the details of a list.
   *
   * @see https://developers.themoviedb.org/3/lists/get-list-details
   */
  public async details(
    listId: string | number,
    filters?: DetailsFilters
  ): Promise<DetailsResponse> {
    const path = this.getPath(`/list/${listId}`, filters)

    return this.get<DetailsResponse>(path)
  }

  /**
   * You can use this method to check if a movie has already been added to the list.
   *
   * @see https://developers.themoviedb.org/3/lists/check-item-status
   */
  public async itemStatus(
    listId: string | number,
    filters: ItemStatusFilters
  ): Promise<ItemStatusResponse> {
    const path = this.getPath(`/list/${listId}/item_status`, filters)

    return this.get<ItemStatusResponse>(path)
  }

  /**
   * Create a list.
   *
   * @see https://developers.themoviedb.org/3/lists/create-list
   */
  public async create(
    data: CreateListBody,
    filters: CreateListFilters
  ): Promise<CreateListResponse> {
    const path = this.getPath('/list', filters)

    return this.post<CreateListResponse>(path, data)
  }

  /**
   * Add movie to a list.
   *
   * @see https://developers.themoviedb.org/3/lists/add-movie
   */
  public async addItem(
    listId: string | number,
    data: AddItemBody,
    filters: AddItemFilters
  ): Promise<AddItemResponse> {
    const path = this.getPath(`/list/${listId}/add_item`, filters)

    return this.post<AddItemResponse>(path, data)
  }

  /**
   * Remove a movie from a list.
   *
   * @see https://developers.themoviedb.org/3/lists/remove-movie
   */
  public async removeItem(
    listId: string | number,
    data: RemoveItemBody,
    filters: RemoveItemFilters
  ): Promise<RemoveItemResponse> {
    const path = this.getPath(`/list/${listId}/remove_item`, filters)

    return this.post<RemoveItemResponse>(path, data)
  }

  /**
   * Clear all of the items from a list.
   *
   * @see https://developers.themoviedb.org/3/lists/clear-list
   */
  public async clear(
    listId: string | number,
    filters: ClearListFilters
  ): Promise<ClearListResponse> {
    const path = this.getPath(`/list/${listId}/clear`, filters)

    return this.post<ClearListResponse>(path)
  }

  /**
   * Delete a list.
   *
   * @see https://developers.themoviedb.org/3/lists/delete-list
   */
  public async remove(
    listId: string | number,
    filters: DeleteListFilters
  ): Promise<DeleteListResponse> {
    const path = this.getPath(`/list/${listId}`, filters)

    return this.delete<DeleteListResponse>(path)
  }
}
