import { BaseAPI } from '../../base-api'
import { ChangesFilters, ChangesResponse } from './types'

export class Changes extends BaseAPI {
  /**
   * Get a list of all of the movie ids that have been changed in the past 24 hours. You can query
   * it for up to 14 days worth of changed IDs at a time with the start_date and end_date query
   * parameters. 100 items are returned per page.
   *
   * @see https://developers.themoviedb.org/3/changes/get-movie-change-list
   */
  public async movie(filters?: ChangesFilters): Promise<ChangesResponse> {
    const path = this.getPath('/movie/changes', filters)

    return this.get<ChangesResponse>(path)
  }

  /**
   * Get a list of all of the TV show ids that have been changed in the past 24 hours. You can query
   * it for up to 14 days worth of changed IDs at a time with the start_date and end_date query
   * parameters. 100 items are returned per page.
   *
   * @see https://developers.themoviedb.org/3/changes/get-tv-change-list
   */
  public async tv(filters?: ChangesFilters): Promise<ChangesResponse> {
    const path = this.getPath('/tv/changes', filters)

    return this.get<ChangesResponse>(path)
  }

  /**
   * Get a list of all of the person ids that have been changed in the past 24 hours. You can query
   * it for up to 14 days worth of changed IDs at a time with the start_date and end_date query
   * parameters. 100 items are returned per page.
   *
   * @see https://developers.themoviedb.org/3/changes/get-person-change-list
   */
  public async person(filters?: ChangesFilters): Promise<ChangesResponse> {
    const path = this.getPath('/person/changes', filters)

    return this.get<ChangesResponse>(path)
  }
}
