import {
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
import { Filters } from 'src/types/filters'

export type TVSeason = {
  _id: string
  id: number
  name: string
  overview: string
  poster_path: Nullable<string>
  season_number: number
  air_date: string
  episodes: TVEpisode[]
}

export type TVSeasonItem = Pick<
  TVSeason,
  'id' | 'name' | 'overview' | 'poster_path' | 'season_number' | 'air_date'
> & { episode_count: number }

export type TVSeasonAccountStates = {
  id: number
  results: {
    id: number
    episode_number: number
    rated: boolean | { value: number }
  }[]
}

export type TVSeasonChanges = {
  changes: {
    key: keyof TVSeason
    items: {
      id: string
      action: string
      time: string
      iso_639_1: LanguageCode
      value: string | number | boolean | object
      original_value?: string | number | boolean | object
    }[]
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
export type DetailsFilters = Pick<Filters, 'language' | 'append_to_response'>

export type AccountStatesFilters = Pick<
  Filters,
  'language' | 'guest_session_id' | 'session_id'
>

export type AggregateCreditsFilters = Pick<Filters, 'language'>

export type ChangesFilters = Pick<Filters, 'page' | 'start_date' | 'end_date'>

export type CreditsFilters = Pick<Filters, 'language'>

export type ExternalIdsFilters = Pick<Filters, 'language'>

export type ImagesFilters = Pick<Filters, 'language'>

export type TranslationFilters = Pick<Filters, 'language'>

export type VideosFilters = Pick<Filters, 'language'>

// Responses
export type DetailsResponse = TMDBResponse<TVSeason>

export type AccountStatesResponse = TMDBResponse<TVSeasonAccountStates>

export type AggregateCreditsResponse = TMDBResponse<TVSeasonAggregateCredits>

export type ChangesResponse = TMDBResponse<TVSeasonChanges>

export type CreditsResponse = TMDBResponse<TVSeasonCredits>

export type ExternalIdsResponse = TMDBResponse<ExternalId>

export type ImagesResponse = TMDBResponse<TVSeasonImages>

export type TranslationsResponse = TMDBResponse<TVSeasonTranslations>

export type VideosResponse = TMDBResponse<TVSeasonVideos>
