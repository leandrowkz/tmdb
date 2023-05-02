import { BaseAPI } from '../../base-api'
import {
  AvailableRegionsFilters,
  AvailableRegionsResponse,
  MovieProvidersResponse,
  TVProvidersResponse,
  WatchProvidersFilters,
} from './types'

export class WatchProviders extends BaseAPI {
  /**
   * Returns a list of all of the countries we have watch provider (OTT/streaming) data for.
   *
   * @see https://developers.themoviedb.org/3/watch-providers/get-available-regions
   */
  public async availableRegions(
    filters?: AvailableRegionsFilters
  ): Promise<AvailableRegionsResponse> {
    const path = this.getPath('/watch/providers/regions', filters)

    return this.get<AvailableRegionsResponse>(path)
  }

  /**
   * Returns a list of the watch provider (OTT/streaming) data we have available for movies. You can
   * specify a watch_region param if you want to further filter the list by country.
   *
   * @see https://developers.themoviedb.org/3/watch-providers/get-movie-providers
   */
  public async movieProviders(
    filters?: WatchProvidersFilters
  ): Promise<MovieProvidersResponse> {
    const path = this.getPath('/watch/providers/movie', filters)

    return this.get<MovieProvidersResponse>(path)
  }

  /**
   * Returns a list of the watch provider (OTT/streaming) data we have available for TV series. You
   * can specify a watch_region param if you want to further filter the list by country.
   *
   * @see https://developers.themoviedb.org/3/watch-providers/get-tv-providers
   */
  public async tvProviders(
    filters?: WatchProvidersFilters
  ): Promise<TVProvidersResponse> {
    const path = this.getPath('/watch/providers/tv', filters)

    return this.get<TVProvidersResponse>(path)
  }
}
