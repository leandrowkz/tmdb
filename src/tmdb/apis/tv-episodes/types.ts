import {
  AppendToResponse,
  Department,
  ExternalId,
  GenericResponse,
  Image,
  LanguageCode,
  Nullable,
  TMDBResponse,
  Translation,
  Video,
} from 'src/types'
import { PersonCast, PersonCrew } from '../people/types'
import { TVShowChanges } from '../tv/types'

export type TVEpisode = {
  id: number
  name: string
  media_type?: 'tv'
  overview: string
  air_date: string
  production_code: Nullable<string>
  season_number: number
  episode_number: number
  still_path: Nullable<string>
  vote_average: number
  vote_count: number
  crew: TVEpisodePersonCrew[]
  guest_stars: TVEpisodePersonGuestStar[]
}

export type TVEpisodeItem = Pick<
  TVEpisode,
  | 'id'
  | 'media_type'
  | 'air_date'
  | 'episode_number'
  | 'name'
  | 'overview'
  | 'production_code'
  | 'season_number'
  | 'still_path'
  | 'vote_average'
  | 'vote_count'
>

export type TVEpisodePersonCrew = {
  id: number
  credit_id: string
  name: string
  department: Department
  job: string
  profile_path: Nullable<string>
}

export type TVEpisodePersonGuestStar = {
  id: number
  name: string
  credit_id: string
  character: string
  order: number
  profile_path: Nullable<string>
}

export type TVEpisodeAccountStates = {
  id: number
  rated: boolean | { value: number }
}

export type TVEpisodeChanges = {
  changes: {
    key: keyof TVEpisode
    items: {
      id: string
      action: string
      time: string
      iso_639_1: LanguageCode
      value: string | number | boolean
      original_value?: string | number | boolean
    }[]
  }[]
}

export type TVEpisodeCredits = {
  id: number
  cast: PersonCast[]
  crew: PersonCrew[]
  guest_stars: PersonCast[]
}

export type TVEpisodeImages = {
  id: number
  stills: Image[]
}

export type TVEpisodeTranslations = {
  id: number
  translations: Translation<{
    name: string
    overview: string
  }>[]
}

export type TVEpisodeVideos = {
  id: number
  results: Video[]
}

// Filters
export type DetailsFilters = {
  language?: LanguageCode
  append_to_response?: AppendToResponse[]
}

export type AccountStatesFilters = {
  guest_session_id?: string
  session_id?: string
}

export type ChangesFilters = {
  start_date?: string
  end_date?: string
  page?: number
}

export type CreditsFilters = {
  language?: LanguageCode
  append_to_response?: AppendToResponse[]
}

export type ImagesFilters = {
  language?: LanguageCode
}

export type RateFilters = {
  guest_session_id?: string
  session_id?: string
}

export type VideosFilters = {
  language?: LanguageCode
}

// Body
export type RateBody = {
  value: number
}

// Responses
export type DetailsResponse = TMDBResponse<TVEpisode>

export type AccountStatesResponse = TMDBResponse<TVEpisodeAccountStates>

export type ChangesResponse = TMDBResponse<TVShowChanges>

export type CreditsResponse = TMDBResponse<TVEpisodeCredits>

export type ExternalIdsResponse = TMDBResponse<ExternalId>

export type ImagesResponse = TMDBResponse<TVEpisodeImages>

export type TranslationsResponse = TMDBResponse<TVEpisodeTranslations>

export type RateResponse = TMDBResponse<GenericResponse>

export type VideosResponse = TMDBResponse<TVEpisodeVideos>
