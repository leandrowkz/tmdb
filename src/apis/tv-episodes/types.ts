import type {
  Department,
  ExternalId,
  GenericResponse,
  Image,
  LanguageCode,
  Nullable,
  TMDBResponse,
  Translation,
  Video,
} from '../../types'
import type { PersonCast, PersonCrew } from '../people/types'
import type { TVShowChanges } from '../tv-shows/types'
import type { Filters } from '../../types/filters'

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
export type TVEpisodeDetailsFilters = Pick<
  Filters,
  'language' | 'append_to_response'
>

export type TVEpisodeAccountStatesFilters = Pick<
  Filters,
  'guest_session_id' | 'session_id'
>

export type TVEpisodeChangesFilters = Pick<
  Filters,
  'page' | 'end_date' | 'start_date'
>

export type TVEpisodeCreditsFilters = Pick<
  Filters,
  'language' | 'append_to_response'
>

export type TVEpisodeImagesFilters = Pick<Filters, 'language'>

export type TVEpisodeRateFilters = Pick<
  Filters,
  'guest_session_id' | 'session_id'
>

export type TVEpisodeVideosFilters = Pick<Filters, 'language'>

// Body
export type TVEpisodeRateBody = {
  value: number
}

// Responses
export type TVEpisodeDetailsResponse = TMDBResponse<TVEpisode>

export type TVEpisodeAccountStatesResponse =
  TMDBResponse<TVEpisodeAccountStates>

export type TVEpisodeChangesResponse = TMDBResponse<TVShowChanges>

export type TVEpisodeCreditsResponse = TMDBResponse<TVEpisodeCredits>

export type TVEpisodeExternalIdsResponse = TMDBResponse<ExternalId>

export type TVEpisodeImagesResponse = TMDBResponse<TVEpisodeImages>

export type TVEpisodeTranslationsResponse = TMDBResponse<TVEpisodeTranslations>

export type TVEpisodeRateResponse = TMDBResponse<GenericResponse>

export type TVEpisodeVideosResponse = TMDBResponse<TVEpisodeVideos>
