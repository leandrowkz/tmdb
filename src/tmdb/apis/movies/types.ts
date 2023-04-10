import { LanguageCode } from 'src/types/LanguageCode'
import { CollectionDetails } from '../collections/types'
import { Nullable } from 'src/types/Nullable'
import { Genre } from '../genres/types'
import { Company } from '../companies/types'
import { CountryCode } from 'src/types/CountryCode'
import { TMDBResponse } from 'src/types/TMDBResponse'
import { CastPerson, CrewPerson, Person } from 'src/types/Person'

export interface Movie {
  id: number
  genre_ids: number[]
  title: string
  overview: string
  original_title: string
  original_language: LanguageCode
  release_date: string
  poster_path: string
  backdrop_path: string
  popularity: number
  vote_count: number
  vote_average: number
  adult: boolean
  video: boolean
}

export interface MovieDetails {
  id: number
  imdb_id: string
  title: string
  backdrop_path: string
  belongs_to_collection: Nullable<CollectionDetails>
  budget: number
  genres: Genre[]
  homepage: string
  original_language: LanguageCode
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  status:
    | 'Rumored'
    | 'Planned'
    | 'In Production'
    | 'Post Production'
    | 'Released'
    | 'Canceled'
  tagline: string
  adult: false
  video: boolean
  vote_average: number
  vote_count: number
  production_companies: Pick<
    Company,
    'id' | 'logo_path' | 'name' | 'origin_country'
  >[]
  production_countries: {
    iso_3166_1: CountryCode
    name: string
  }[]
  spoken_languages: {
    iso_639_1: LanguageCode
    name: string
  }[]
}

export type MovieVideo = {
  id: string
  iso_639_1: LanguageCode
  iso_3166_1: CountryCode
  key: string
  name: string
  official: boolean
  published_at: string
  site: 'Youtube' | 'Vimeo'
  size: number
  type: 'Trailer'
}

export type MovieAccountStates = {
  id: number
  favorite: boolean
  rated: { value: number } | boolean
  watchlist: boolean
}

export type MovieTitle = {
  iso_3166_1: CountryCode
  title: string
  type: string
}

export type MovieChanges = {
  key: keyof MovieDetails
  items: {
    id: string
    action: 'updated'
    time: string
    iso_639_1: LanguageCode
    value: string
    original_value: string
  }[]
}

export type DetailsFilters = {
  append_to_response: 'cast' | 'videos' | 'images'
}

export type AccountStatesFilters = {
  session_id: string
  guest_session_id?: string
}

export type AlternativeTitlesFilters = {
  country?: CountryCode
}

export type ChangesFilters = {
  page?: number
  start_date?: string
  end_date?: string
}

export type CreditsFilters = {
  language?: LanguageCode
}

export type AccountStatesResponse = TMDBResponse<MovieAccountStates>

export type AlternativeTitlesResponse = TMDBResponse<{
  id: number
  titles: MovieTitle[]
}>

export type ChangesResponse = TMDBResponse<{
  changes: MovieChanges[]
}>

export type CreditsResponse = TMDBResponse<{
  id: number
  cast: CastPerson[]
  crew: CrewPerson[]
}>
