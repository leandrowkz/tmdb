import {
  AppendToResponse,
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
import { Genre, GenreCode } from '../genres/types'
import { TVEpisode } from '../tv-episodes/types'
import { NetworkItem } from '../networks/types'
import { CompanyItem } from '../companies/types'
import { TVSeasonItem } from '../tv-seasons/types'
import { PersonCast, PersonCrew } from '../people/types'
import { TVEpisodeGroup } from '../tv-episode-groups/types'
import { Keyword } from '../keywords/types'
import { ReviewItem } from '../reviews/types'
import { WatchProvider } from '../watch-providers/types'

// Models/Entities
export type TVAuthor = {
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
  created_by: TVAuthor[]
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
type AppendToResponseFilters = { append_to_response?: AppendToResponse[] }
type LanguageFilter = { language?: LanguageCode }
type PageFilter = { page?: number }
type OptionalSessionFilters = { session_id?: string; guest_session_id?: string }
type DateRangeFilters = { start_date?: string; end_date?: string }

export type DetailsFilters = LanguageFilter & AppendToResponseFilters

export type AccountStatesFilters = LanguageFilter & OptionalSessionFilters

export type AggregateCreditsFilters = LanguageFilter

export type AlternativeTitlesFilters = LanguageFilter

export type ChangesFilters = PageFilter & DateRangeFilters

export type ContentRatingsFilters = LanguageFilter

export type CreditsFilters = LanguageFilter

export type EpisodeGroupsFilters = LanguageFilter

export type ExternalIdsFilters = LanguageFilter

export type ImagesFilters = LanguageFilter

export type RecommendationsFilters = LanguageFilter & PageFilter

export type ReviewsFilters = LanguageFilter & PageFilter

export type SimilarFilters = LanguageFilter & PageFilter

export type VideosFilters = LanguageFilter

export type RateFilters = OptionalSessionFilters

export type LatestFilters = LanguageFilter

export type AiringTodayFilters = LanguageFilter & PageFilter

export type OnTheAirFilters = LanguageFilter & PageFilter

export type PopularFilters = LanguageFilter & PageFilter

export type TopRatedFilters = LanguageFilter & PageFilter

// Body
export type RateBody = {
  value: number
}

// Responses
export type DetailsResponse = TMDBResponse<TVShow>

export type AccountStatesResponse = TMDBResponse<TVShowAccountStates>

export type AggregateCreditsResponse = TMDBResponse<TVShowAggregateCredits>

export type AlternativeTitlesResponse = TMDBResponse<TVShowAlternativeTitles>

export type ChangesResponse = TMDBResponse<TVShowChanges>

export type ContentRatingsResponse = TMDBResponse<TVShowContentRatings>

export type CreditsResponse = TMDBResponse<TVShowCredits>

export type EpisodeGroupsResponse = TMDBResponse<TVShowEpisodeGroups>

export type ExternalIdsResponse = TMDBResponse<ExternalId>

export type ImagesResponse = TMDBResponse<TVShowImages>

export type KeywordsResponse = TMDBResponse<TVShowKeywords>

export type RecommendationsResponse = TMDBResponseList<TVShowItem[]>

export type ReviewsResponse = TMDBResponseList<ReviewItem[]>

export type ScreenedTheatricallyResponse =
  TMDBResponse<TVShowScreenedTheatrically>

export type SimilarResponse = TMDBResponseList<TVShowItem[]>

export type TranslationsResponse = TMDBResponse<TVShowTranslations>

export type VideosResponse = TMDBResponse<TVShowVideos>

export type WatchProvidersResponse = TMDBResponse<TVShowWatchProviders>

export type RateResponse = TMDBResponse<GenericResponse>

export type LatestResponse = TMDBResponse<TVShow>

export type AiringTodayResponse = TMDBResponseList<TVShowItem[]>

export type OnTheAirResponse = TMDBResponseList<TVShowItem[]>

export type PopularResponse = TMDBResponseList<TVShowItem[]>

export type TopRatedResponse = TMDBResponseList<TVShowItem[]>
