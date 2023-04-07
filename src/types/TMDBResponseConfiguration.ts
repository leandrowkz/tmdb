import { CountryCode } from './CountryCode'
import { LanguageCode } from './LanguageCode'
import { TMDBResponse } from './TMDBResponse'

export type ConfigurationResponse = TMDBResponse<{
  images: {
    base_url: string
    secure_base_url: string
    backdrop_sizes: string[]
    logo_sizes: string[]
    poster_sizes: string[]
    profile_sizes: string[]
    still_sizes: string[]
  }
  change_keys: string[]
}>

export type CountriesResponse = TMDBResponse<
  {
    iso_3166_1: CountryCode
    english_name: string
  }[]
>

export type JobsResponse = TMDBResponse<
  {
    department: string
    jobs: string[]
  }[]
>

export type LanguagesResponse = TMDBResponse<
  {
    iso_639_1: LanguageCode
    english_name: string
    name: string
  }[]
>

export type PrimaryTranslationsResponse = TMDBResponse<LanguageCode[]>

export type TimezonesResponse = TMDBResponse<
  {
    iso_3166_1: CountryCode
    zones: string[]
  }[]
>
