import { BaseAPI } from '../base'
import {
  ListAddItemBody,
  ListAddItemFilters,
  ListAddItemResponse,
  ListClearListFilters,
  ListClearListResponse,
  ListCreateListBody,
  ListCreateListFilters,
  ListCreateListResponse,
  ListDeleteListFilters,
  ListDeleteListResponse,
  ListDetailsFilters,
  ListDetailsResponse,
  ListItemStatusFilters,
  ListItemStatusResponse,
  ListRemoveItemBody,
  ListRemoveItemFilters,
  ListRemoveItemResponse,
} from './types'

export class ListsAPI extends BaseAPI {
  /**
   * Get the details of a list.
   *
   * @see https://developers.themoviedb.org/3/lists/get-list-details
   */
  public async details(
    listId: string | number,
    filters?: ListDetailsFilters
  ): Promise<ListDetailsResponse> {
    const path = this.getPath(`/list/${listId}`, filters)

    return this.get<ListDetailsResponse>(path)
  }

  /**
   * You can use this method to check if a movie has already been added to the list.
   *
   * @see https://developers.themoviedb.org/3/lists/check-item-status
   */
  public async itemStatus(
    listId: string | number,
    filters: ListItemStatusFilters
  ): Promise<ListItemStatusResponse> {
    const path = this.getPath(`/list/${listId}/item_status`, filters)

    return this.get<ListItemStatusResponse>(path)
  }

  /**
   * Create a list.
   *
   * @see https://developers.themoviedb.org/3/lists/create-list
   */
  public async create(
    data: ListCreateListBody,
    filters: ListCreateListFilters
  ): Promise<ListCreateListResponse> {
    const path = this.getPath('/list', filters)

    return this.post<ListCreateListResponse>(path, data)
  }

  /**
   * Add movie to a list.
   *
   * @see https://developers.themoviedb.org/3/lists/add-movie
   */
  public async addItem(
    listId: string | number,
    data: ListAddItemBody,
    filters: ListAddItemFilters
  ): Promise<ListAddItemResponse> {
    const path = this.getPath(`/list/${listId}/add_item`, filters)

    return this.post<ListAddItemResponse>(path, data)
  }

  /**
   * Remove a movie from a list.
   *
   * @see https://developers.themoviedb.org/3/lists/remove-movie
   */
  public async removeItem(
    listId: string | number,
    data: ListRemoveItemBody,
    filters: ListRemoveItemFilters
  ): Promise<ListRemoveItemResponse> {
    const path = this.getPath(`/list/${listId}/remove_item`, filters)

    return this.post<ListRemoveItemResponse>(path, data)
  }

  /**
   * Clear all of the items from a list.
   *
   * @see https://developers.themoviedb.org/3/lists/clear-list
   */
  public async clear(
    listId: string | number,
    filters: ListClearListFilters
  ): Promise<ListClearListResponse> {
    const path = this.getPath(`/list/${listId}/clear`, filters)

    return this.post<ListClearListResponse>(path)
  }

  /**
   * Delete a list.
   *
   * @see https://developers.themoviedb.org/3/lists/delete-list
   */
  public async remove(
    listId: string | number,
    filters: ListDeleteListFilters
  ): Promise<ListDeleteListResponse> {
    const path = this.getPath(`/list/${listId}`, filters)

    return this.delete<ListDeleteListResponse>(path)
  }
}
