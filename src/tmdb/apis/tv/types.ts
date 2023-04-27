import { LanguageCode } from 'src/types/LanguageCode'
import { Nullable } from 'src/types/Nullable'
import { TMDBResponse } from 'src/types/TMDBResponse'
import { Genre } from '../genres/types'
import { TVEpisode } from '../tv-episodes/types'
import { Network } from '../networks/types'
import { CountryCode } from 'src/types/CountryCode'
import { Company } from '../companies/types'
import { Country } from 'src/types/Country'
import { TVSeason } from '../tv-seasons/types'
import { Language } from 'src/types/Language'
import { AppendToResponse } from 'src/types/AppendToResponse'
import { KnownForDepartment } from 'src/types/KnownForDeparment'
import { PersonCast, PersonCrew } from '../people/types'
import { TVEpisodeGroup } from '../tv-episode-groups/types'
import { ExternalId } from 'src/types/ExternalId'
import { Image } from 'src/types/Image'
import { Keyword } from '../keywords/types'
import { TMDBResponseList } from 'src/types/TMDBResponseList'
import { Review } from '../reviews/types'
import { Video } from 'src/types/Video'
import { WatchProvider } from '../watch-providers/types'

// Models/Entities
export type TVAuthor = {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: Nullable<string>
}

export interface TVShow {
  id: number
  media_type?: 'tv'
  genre_ids: number[]
  name: string
  original_name: string
  poster_path: string
  backdrop_path: string
  popularity: number
  overview: string
  first_air_date: string
  origin_country: CountryCode[]
  original_language: LanguageCode
  vote_count: number
  vote_average: number
}

export type TVShowDetails = {
  id: number
  name: string
  overview: string
  tagline: string
  backdrop_path: Nullable<string>
  created_by: TVAuthor[]
  episode_run_time: number[]
  genres: Genre[]
  homepage: string
  in_production: boolean
  languages: LanguageCode[]
  first_air_date: string
  last_air_date: string
  last_episode_to_air: TVEpisode
  next_episode_to_air: Nullable<TVEpisode>
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: CountryCode[]
  original_language: LanguageCode
  original_name: string
  popularity: number
  poster_path: Nullable<string>
  production_companies: Company[]
  production_countries: Country[]
  seasons: TVSeason[]
  spoken_languages: Language[]
  status: 'Ended'
  type: 'Scripted'
  vote_average: number
  vote_count: number
}

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
  known_for_department: KnownForDepartment
  department: KnownForDepartment
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

export type TVShowAlternativeTitle = {
  title: string
  iso_3166_1: CountryCode
  type: string
}

export type TVShowChange = {
  key: keyof TVShowDetails
  items: Record<string, string | number | object | boolean>[]
}

export type TVShowContentRating = {
  iso_3166_1: CountryCode
  rating: string
}

export type TVShowScreenedTheatrically = {
  id: number
  episode_number: number
  season_number: number
}

export type TVShowTranslation = {
  iso_3166_1: CountryCode
  iso_639_1: LanguageCode
  name: string
  english_name: string
  data: {
    name: string
    overview: string
    homepage: string
  }
}

export type TVShowWatchProvider = TMDBResponse<{
  [key in CountryCode]?: {
    link: string
    flatrate?: WatchProvider[]
    rent?: WatchProvider[]
    buy?: WatchProvider[]
  }
}>

// Filters
export type DetailsFilters = {
  language?: LanguageCode
  append_to_response?: AppendToResponse[]
}

export type AccountStatesFilters = {
  language?: LanguageCode
  guest_session_id?: string
  session_id?: string
}

export type AggregateCreditsFilters = {
  language?: LanguageCode
}

export type AlternativeTitlesFilters = {
  language?: LanguageCode
}

export type ChangesFilters = {
  start_date?: string
  end_date?: string
  page?: number
}

export type ContentRatingsFilters = {
  language?: LanguageCode
}

export type CreditsFilters = {
  language?: LanguageCode
}

export type EpisodeGroupsFilters = {
  language?: LanguageCode
}

export type ExternalIdsFilters = {
  language?: LanguageCode
}

export type ImagesFilters = {
  language?: LanguageCode
}

export type RecommendationsFilters = {
  language?: LanguageCode
  page?: number
}

export type ReviewsFilters = {
  language?: LanguageCode
  page?: number
}

export type SimilarFilters = {
  language?: LanguageCode
  page?: number
}

export type VideosFilters = {
  language?: LanguageCode
}

export type RateFilters = {
  guest_session_id?: string
  session_id?: string
}

export type LatestFilters = {
  language?: LanguageCode
}

export type AiringTodayFilters = {
  language?: LanguageCode
  page?: number
}

export type OnTheAirFilters = {
  language?: LanguageCode
  page?: number
}

export type PopularFilters = {
  language?: LanguageCode
  page?: number
}

export type TopRatedFilters = {
  language?: LanguageCode
  page?: number
}

// Body
export type RateBody = {
  value: number
}

// Responses
export type DetailsResponse = TMDBResponse<TVShowDetails>

export type AccountStatesResponse = TMDBResponse<TVShowAccountStates>

export type AggregateCreditsResponse = TMDBResponse<TVShowAggregateCredits>

export type AlternativeTitlesResponse = TMDBResponse<{
  id: number
  results: TVShowAlternativeTitle[]
}>

export type ChangesResponse = TMDBResponse<{
  changes: TVShowChange[]
}>

export type ContentRatingsResponse = TMDBResponse<{
  id: number
  results: TVShowAlternativeTitle[]
}>

export type CreditsResponse = TMDBResponse<{
  id: number
  cast: PersonCast[]
  crew: PersonCrew[]
}>

export type EpisodeGroupsResponse = TMDBResponse<{
  id: number
  results: TVEpisodeGroup[]
}>

export type ExternalIdsResponse = TMDBResponse<ExternalId>

export type ImagesResponse = TMDBResponse<{
  id: number
  posters: Image[]
  backdrops: Image[]
}>

export type KeywordsResponse = TMDBResponse<{
  id: number
  results: Keyword[]
}>

export type RecommendationsResponse = TMDBResponseList<TVShow[]>

export type ReviewsResponse = TMDBResponseList<Review[]>

export type ScreenedTheatricallyResponse = TMDBResponse<{
  id: number
  results: TVShowScreenedTheatrically[]
}>

export type SimilarResponse = TMDBResponseList<TVShow[]>

export type TranslationsResponse = TMDBResponse<{
  id: number
  translations: TVShowTranslation[]
}>

export type VideosResponse = TMDBResponse<{
  id: number
  results: Video[]
}>

export type WatchProvidersResponse = TMDBResponse<{
  id: number
  results: TVShowWatchProvider[]
}>

export type RateResponse = TMDBResponse<{
  status_code: number
  status_message: string
}>

export type LatestResponse = TMDBResponse<TVShow>

export type AiringTodayResponse = TMDBResponseList<TVShow[]>

export type OnTheAirResponse = TMDBResponseList<TVShow[]>

export type PopularResponse = TMDBResponseList<TVShow[]>

export type TopRatedResponse = TMDBResponseList<TVShow[]>