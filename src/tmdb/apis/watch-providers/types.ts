import { CountryCode, TMDBResponse } from 'src/types'
import { Filters } from 'src/types/filters'

export type AvailableRegion = {
  iso_3166_1: CountryCode
  english_name: string
  native_name: string
}

export type WatchProvider = {
  provider_id: number
  provider_name: string
  logo_path: string
  display_priority: number
}

// Filters
export type AvailableRegionsFilters = Pick<Filters, 'language'>

export type WatchProvidersFilters = Pick<Filters, 'language' | 'watch_region'>

// Responses
export type AvailableRegionsResponse = TMDBResponse<{
  results: AvailableRegion[]
}>

export type MovieProvidersResponse = TMDBResponse<{
  results: WatchProvider[]
}>

export type TVProvidersResponse = TMDBResponse<{
  results: WatchProvider[]
}>
