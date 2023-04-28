import { CountryCode, LanguageCode, TMDBResponse } from 'src/types'

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

export type AvailableRegionsFilters = {
  language?: LanguageCode
}

export type WatchProvidersFilters = {
  language?: LanguageCode
  watch_region?: CountryCode
}

export type AvailableRegionsResponse = TMDBResponse<{
  results: AvailableRegion[]
}>

export type MovieProvidersResponse = TMDBResponse<{
  results: WatchProvider[]
}>

export type TVProvidersResponse = TMDBResponse<{
  results: WatchProvider[]
}>
