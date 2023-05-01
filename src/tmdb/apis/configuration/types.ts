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
export type ConfigurationResponse = TMDBResponse<Configuration>

export type CountriesResponse = TMDBResponse<Country[]>

export type JobsResponse = TMDBResponse<Job[]>

export type LanguagesResponse = TMDBResponse<Language[]>

export type PrimaryTranslationsResponse = TMDBResponse<LanguageCode[]>

export type TimezonesResponse = TMDBResponse<Timezone[]>
