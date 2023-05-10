import {
  Country,
  Job,
  Language,
  LanguageCode,
  TMDBResponse,
  Timezone,
} from 'src/types'

export type Configuration = {
  change_keys: string[]
  images: {
    base_url: string
    secure_base_url: string
    backdrop_sizes: string[]
    logo_sizes: string[]
    poster_sizes: string[]
    profile_sizes: string[]
    still_sizes: string[]
  }
}

// Responses
export type ConfigurationDetailsResponse = TMDBResponse<Configuration>

export type ConfigurationCountriesResponse = TMDBResponse<Country[]>

export type ConfigurationJobsResponse = TMDBResponse<Job[]>

export type ConfigurationLanguagesResponse = TMDBResponse<Language[]>

export type ConfigurationPrimaryTranslationsResponse = TMDBResponse<
  LanguageCode[]
>

export type ConfigurationTimezonesResponse = TMDBResponse<Timezone[]>
