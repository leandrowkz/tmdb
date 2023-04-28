import {
  AppendToResponse,
  ExternalId,
  Image,
  LanguageCode,
  Nullable,
  TMDBResponse,
  Translation,
  Video,
} from 'src/types'
import { TVEpisode } from '../tv-episodes/types'
import { PersonCast, PersonCrew } from '../people/types'
import { TVShowPersonCast, TVShowPersonCrew } from '../tv/types'

export type TVSeason = {
  id: number
  name: string
  overview: string
  poster_path: Nullable<string>
  season_number: number
  episode_count: number
  air_date: string
}

export type TVSeasonDetails = {
  _id: string
  id: number
  name: string
  overview: string
  poster_path: Nullable<string>
  season_number: number
  air_date: string
  episodes: TVEpisode[]
}

export type TVSeasonAccountStates = {
  id: number
  results: {
    id: number
    episode_number: number
    rated: boolean | { value: number }
  }[]
}

export type TVSeasonChange = {
  key: keyof TVSeasonDetails
  items: {
    id: string
    action: string
    time: string
    iso_639_1: LanguageCode
    value: string | number | boolean | object
    original_value?: string | number | boolean | object
  }[]
}

export type TVSeasonAggregateCredits = {
  id: number
  cast: TVShowPersonCast[]
  crew: TVShowPersonCrew[]
}

export type TVSeasonCredits = {
  id: number
  cast: PersonCast[]
  crew: PersonCrew[]
}

export type TVSeasonImages = {
  id: number
  posters: Image[]
}

export type TVSeasonTranslations = {
  id: number
  translations: Translation<{
    name: string
    overview: string
  }>[]
}

export type TVSeasonVideos = {
  id: number
  results: Video[]
}

// Filters
type LanguageFilter = {
  language?: LanguageCode
}

export type DetailsFilters = LanguageFilter & {
  append_to_response?: AppendToResponse[]
}

export type AccountStatesFilters = LanguageFilter & {
  guest_session_id?: string
  session_id?: string
}

export type AggregateCreditsFilters = LanguageFilter

export type ChangesFilters = {
  start_date?: string
  end_date?: string
  page?: number
}

export type CreditsFilters = LanguageFilter

export type ExternalIdsFilters = LanguageFilter

export type ImagesFilters = LanguageFilter

export type TranslationFilters = LanguageFilter

export type VideosFilters = LanguageFilter

// Responses
export type DetailsResponse = TMDBResponse<TVSeasonDetails>

export type AccountStatesResponse = TMDBResponse<TVSeasonAccountStates>

export type AggregateCreditsResponse = TMDBResponse<TVSeasonAggregateCredits>

export type ChangesResponse = TMDBResponse<{ changes: TVSeasonChange[] }>

export type CreditsResponse = TMDBResponse<TVSeasonCredits>

export type ExternalIdsResponse = TMDBResponse<ExternalId>

export type ImagesResponse = TMDBResponse<TVSeasonImages>

export type TranslationsResponse = TMDBResponse<TVSeasonTranslations>

export type VideosResponse = TMDBResponse<TVSeasonVideos>
