import type {
  Country,
  CountryCode,
  Department,
  ExternalId,
  GenericResponse,
  Image,
  Language,
  LanguageCode,
  Nullable,
  TMDBResponse,
  TMDBResponseList,
  Translation,
  Video,
} from 'src/types'
import type { Genre, GenreCode } from '../genres/types'
import type { TVEpisode } from '../tv-episodes/types'
import type { NetworkItem } from '../networks/types'
import type { CompanyItem } from '../companies/types'
import type { TVSeasonItem } from '../tv-seasons/types'
import type { PersonCast, PersonCrew } from '../people/types'
import type { TVEpisodeGroup } from '../tv-episode-groups/types'
import type { Keyword } from '../keywords/types'
import type { ReviewItem } from '../reviews/types'
import type { WatchProvider } from '../watch-providers/types'
import type { Filters } from 'src/types/filters'

// Models/Entities
export type TVShowAuthor = {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: Nullable<string>
}

export type TVShow = {
  id: number
  name: string
  media_type: 'tv'
  overview: string
  tagline: string
  backdrop_path: Nullable<string>
  created_by: TVShowAuthor[]
  episode_run_time: number[]
  genres: Genre[]
  genre_ids?: GenreCode[]
  homepage: string
  in_production: boolean
  languages: LanguageCode[]
  first_air_date: string
  last_air_date: string
  last_episode_to_air: TVEpisode
  next_episode_to_air: Nullable<TVEpisode>
  networks: NetworkItem[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: CountryCode[]
  original_language: LanguageCode
  original_name: string
  popularity: number
  poster_path: Nullable<string>
  production_companies: CompanyItem[]
  production_countries: Country[]
  seasons: TVSeasonItem[]
  spoken_languages: Language[]
  status: 'Ended'
  type: 'Scripted'
  vote_average: number
  vote_count: number
}

export type TVShowItem = Pick<
  TVShow,
  | 'id'
  | 'media_type'
  | 'genre_ids'
  | 'name'
  | 'original_name'
  | 'poster_path'
  | 'backdrop_path'
  | 'popularity'
  | 'overview'
  | 'first_air_date'
  | 'origin_country'
  | 'original_language'
  | 'vote_count'
  | 'vote_average'
>

export type TVShowAccountStates = {
  id: number
  favorite: boolean
  rated: Nullable<{ value: number }>
  watchlist: boolean
}

export type TVShowPersonCast = {
  id: number
  name: string
  original_name: string
  adult: boolean
  gender: Nullable<number>
  known_for_department: 'Acting'
  popularity: number
  profile_path: Nullable<string>
  roles: {
    credit_id: string
    character: string
    episode_count: number
  }[]
  total_episode_count: number
  order: number
}

export type TVShowPersonCrew = {
  id: number
  name: string
  original_name: string
  adult: boolean
  gender: Nullable<number>
  known_for_department: Department
  department: Department
  popularity: number
  profile_path: Nullable<string>
  jobs: {
    credit_id: string
    job: string
    episode_count: number
  }[]
  total_episode_count: number
}

export type TVShowAggregateCredits = {
  id: number
  cast: TVShowPersonCast[]
  crew: TVShowPersonCrew[]
}

export type TVShowCredits = {
  id: number
  cast: PersonCast[]
  crew: PersonCrew[]
}

export type TVShowImages = {
  id: number
  posters: Image[]
  backdrops: Image[]
}

export type TVShowEpisodeGroups = {
  id: number
  results: TVEpisodeGroup[]
}

export type TVShowAlternativeTitles = {
  id: number
  results: {
    title: string
    iso_3166_1: CountryCode
    type: string
  }[]
}

export type TVShowKeywords = {
  id: number
  results: Keyword[]
}

export type TVShowChanges = {
  changes: {
    key: keyof TVShow
    items: Record<string, string | number | object | boolean>[]
  }[]
}

export type TVShowContentRatings = {
  id: number
  results: {
    iso_3166_1: CountryCode
    rating: string
  }[]
}

export type TVShowScreenedTheatrically = {
  id: number
  results: {
    id: number
    episode_number: number
    season_number: number
  }[]
}

export type TVShowTranslations = {
  id: number
  translations: Translation<{
    name: string
    overview: string
    homepage: string
  }>
}

export type TVShowWatchProviders = TMDBResponse<{
  id: number
  results: {
    [key in CountryCode]?: {
      link: string
      flatrate?: WatchProvider[]
      rent?: WatchProvider[]
      buy?: WatchProvider[]
    }
  }[]
}>

export type TVShowVideos = {
  id: number
  results: Video[]
}

// Filters
export type TVShowDetailsFilters = Pick<
  Filters,
  'language' | 'append_to_response'
>

export type TVShowAccountStatesFilters = Pick<
  Filters,
  'language' | 'guest_session_id' | 'session_id'
>

export type TVShowAggregateCreditsFilters = Pick<Filters, 'language'>

export type TVShowAlternativeTitlesFilters = Pick<Filters, 'language'>

export type TVShowChangesFilters = Pick<
  Filters,
  'page' | 'start_date' | 'end_date'
>

export type TVShowContentRatingsFilters = Pick<Filters, 'language'>

export type TVShowCreditsFilters = Pick<Filters, 'language'>

export type TVShowEpisodeGroupsFilters = Pick<Filters, 'language'>

export type TVShowExternalIdsFilters = Pick<Filters, 'language'>

export type TVShowImagesFilters = Pick<Filters, 'language'>

export type TVShowRecommendationsFilters = Pick<Filters, 'language' | 'page'>

export type TVShowReviewsFilters = Pick<Filters, 'language' | 'page'>

export type TVShowSimilarFilters = Pick<Filters, 'language' | 'page'>

export type TVShowVideosFilters = Pick<Filters, 'language'>

export type TVShowRateFilters = Pick<Filters, 'guest_session_id' | 'session_id'>

export type TVShowLatestFilters = Pick<Filters, 'language'>

export type TVShowAiringTodayFilters = Pick<Filters, 'language' | 'page'>

export type TVShowOnTheAirFilters = Pick<Filters, 'language' | 'page'>

export type TVShowPopularFilters = Pick<Filters, 'language' | 'page'>

export type TVShowTopRatedFilters = Pick<Filters, 'language' | 'page'>

// Body
export type TVShowRateBody = {
  value: number
}

// Responses
export type TVShowDetailsResponse = TMDBResponse<TVShow>

export type TVShowAccountStatesResponse = TMDBResponse<TVShowAccountStates>

export type TVShowAggregateCreditsResponse =
  TMDBResponse<TVShowAggregateCredits>

export type TVShowAlternativeTitlesResponse =
  TMDBResponse<TVShowAlternativeTitles>

export type TVShowChangesResponse = TMDBResponse<TVShowChanges>

export type TVShowContentRatingsResponse = TMDBResponse<TVShowContentRatings>

export type TVShowCreditsResponse = TMDBResponse<TVShowCredits>

export type TVShowEpisodeGroupsResponse = TMDBResponse<TVShowEpisodeGroups>

export type TVShowExternalIdsResponse = TMDBResponse<ExternalId>

export type TVShowImagesResponse = TMDBResponse<TVShowImages>

export type TVShowKeywordsResponse = TMDBResponse<TVShowKeywords>

export type TVShowRecommendationsResponse = TMDBResponseList<TVShowItem[]>

export type TVShowReviewsResponse = TMDBResponseList<ReviewItem[]>

export type TVShowScreenedTheatricallyResponse =
  TMDBResponse<TVShowScreenedTheatrically>

export type TVShowSimilarResponse = TMDBResponseList<TVShowItem[]>

export type TVShowTranslationsResponse = TMDBResponse<TVShowTranslations>

export type TVShowVideosResponse = TMDBResponse<TVShowVideos>

export type TVShowWatchProvidersResponse = TMDBResponse<TVShowWatchProviders>

export type TVShowRateResponse = TMDBResponse<GenericResponse>

export type TVShowLatestResponse = TMDBResponse<TVShow>

export type TVShowAiringTodayResponse = TMDBResponseList<TVShowItem[]>

export type TVShowOnTheAirResponse = TMDBResponseList<TVShowItem[]>

export type TVShowPopularResponse = TMDBResponseList<TVShowItem[]>

export type TVShowTopRatedResponse = TMDBResponseList<TVShowItem[]>
