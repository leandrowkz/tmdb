import { AppendToResponse } from 'src/types/AppendToResponse'
import { KnownForDepartment } from 'src/types/KnownForDeparment'
import { LanguageCode } from 'src/types/LanguageCode'
import { Nullable } from 'src/types/Nullable'
import { TMDBResponse } from 'src/types/TMDBResponse'
import { PersonCast, PersonCrew } from '../people/types'
import { ExternalId } from 'src/types/ExternalId'
import { Image } from 'src/types/Image'
import { Translation } from 'src/types/Translation'
import { Video } from 'src/types/Video'

export type TVEpisode = {
  id: number
  air_date: string
  episode_number: number
  name: string
  overview: string
  production_code: Nullable<string>
  season_number: number
  still_path: Nullable<string>
  vote_average: number
  vote_count: number
}

export type TVEpisodeDetails = {
  id: number
  name: string
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

export type TVEpisodePersonCrew = {
  id: number
  credit_id: string
  name: string
  department: KnownForDepartment
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

export type TVEpisodeChange = {
  key: keyof TVEpisodeDetails
  items: {
    id: string
    action: string
    time: string
    iso_639_1: LanguageCode
    value: string | number | boolean
    original_value?: string | number | boolean
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
export type DetailsResponse = TMDBResponse<TVEpisodeDetails>

export type AccountStatesResponse = TMDBResponse<TVEpisodeAccountStates>

export type ChangesResponse = TMDBResponse<{
  changes: TVEpisodeChange[]
}>

export type CreditsResponse = TMDBResponse<TVEpisodeCredits>

export type ExternalIdsResponse = TMDBResponse<ExternalId>

export type ImagesResponse = TMDBResponse<TVEpisodeImages>

export type TranslationsResponse = TMDBResponse<TVEpisodeTranslations>

export type RateResponse = TMDBResponse<{
  status_code: string
  status_message: string
}>

export type VideosResponse = TMDBResponse<TVEpisodeVideos>
