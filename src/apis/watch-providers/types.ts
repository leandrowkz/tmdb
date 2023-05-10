import type { AvailableRegion, TMDBResponse } from 'src/types'
import type { Filters } from 'src/types/filters'

export type WatchProvider = {
  provider_id: number
  provider_name: string
  logo_path: string
  display_priority: number
}

// Filters
export type WatchProviderAvailableRegionsFilters = Pick<Filters, 'language'>

export type WatchProviderFilters = Pick<Filters, 'language' | 'watch_region'>

// Responses
export type WatchProviderAvailableRegionsResponse = TMDBResponse<{
  results: AvailableRegion[]
}>

export type WatchProviderMovieProvidersResponse = TMDBResponse<{
  results: WatchProvider[]
}>

export type WatchProviderTVProvidersResponse = TMDBResponse<{
  results: WatchProvider[]
}>
