import { BaseAPI } from '../base'
import {
  WatchProviderAvailableRegionsFilters,
  WatchProviderAvailableRegionsResponse,
  WatchProviderMovieProvidersResponse,
  WatchProviderTVProvidersResponse,
  WatchProviderFilters,
} from './types'

export class WatchProvidersAPI extends BaseAPI {
  /**
   * Returns a list of all of the countries we have watch provider (OTT/streaming) data for.
   *
   * @see https://developers.themoviedb.org/3/watch-providers/get-available-regions
   */
  public async availableRegions(
    filters?: WatchProviderAvailableRegionsFilters
  ): Promise<WatchProviderAvailableRegionsResponse> {
    const path = this.getPath('/watch/providers/regions', filters)

    return this.get<WatchProviderAvailableRegionsResponse>(path)
  }

  /**
   * Returns a list of the watch provider (OTT/streaming) data we have available for movies. You can
   * specify a watch_region param if you want to further filter the list by country.
   *
   * @see https://developers.themoviedb.org/3/watch-providers/get-movie-providers
   */
  public async movieProviders(
    filters?: WatchProviderFilters
  ): Promise<WatchProviderMovieProvidersResponse> {
    const path = this.getPath('/watch/providers/movie', filters)

    return this.get<WatchProviderMovieProvidersResponse>(path)
  }

  /**
   * Returns a list of the watch provider (OTT/streaming) data we have available for TV series. You
   * can specify a watch_region param if you want to further filter the list by country.
   *
   * @see https://developers.themoviedb.org/3/watch-providers/get-tv-providers
   */
  public async tvProviders(
    filters?: WatchProviderFilters
  ): Promise<WatchProviderTVProvidersResponse> {
    const path = this.getPath('/watch/providers/tv', filters)

    return this.get<WatchProviderTVProvidersResponse>(path)
  }
}
