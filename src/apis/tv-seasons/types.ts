import type {
  ExternalId,
  Image,
  LanguageCode,
  Nullable,
  TMDBResponse,
  Translation,
  Video,
} from '../../types'
import type { TVEpisode } from '../tv-episodes/types'
import type { PersonCast, PersonCrew } from '../people/types'
import type { TVShowPersonCast, TVShowPersonCrew } from '../tv-shows/types'
import type { Filters } from '../../types/filters'

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
export type TVSeasonDetailsFilters = Pick<
  Filters,
  'language' | 'append_to_response'
>

export type TVSeasonAccountStatesFilters = Pick<
  Filters,
  'language' | 'guest_session_id' | 'session_id'
>

export type TVSeasonAggregateCreditsFilters = Pick<Filters, 'language'>

export type TVSeasonChangesFilters = Pick<
  Filters,
  'page' | 'start_date' | 'end_date'
>

export type TVSeasonCreditsFilters = Pick<Filters, 'language'>

export type TVSeasonExternalIdsFilters = Pick<Filters, 'language'>

export type TVSeasonImagesFilters = Pick<Filters, 'language'>

export type TVSeasonTranslationFilters = Pick<Filters, 'language'>

export type TVSeasonVideosFilters = Pick<Filters, 'language'>

// Responses
export type TVSeasonDetailsResponse = TMDBResponse<TVSeason>

export type TVSeasonAccountStatesResponse = TMDBResponse<TVSeasonAccountStates>

export type TVSeasonAggregateCreditsResponse =
  TMDBResponse<TVSeasonAggregateCredits>

export type TVSeasonChangesResponse = TMDBResponse<TVSeasonChanges>

export type TVSeasonCreditsResponse = TMDBResponse<TVSeasonCredits>

export type TVSeasonExternalIdsResponse = TMDBResponse<ExternalId>

export type TVSeasonImagesResponse = TMDBResponse<TVSeasonImages>

export type TVSeasonTranslationsResponse = TMDBResponse<TVSeasonTranslations>

export type TVSeasonVideosResponse = TMDBResponse<TVSeasonVideos>
