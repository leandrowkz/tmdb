import { LanguageCode } from 'src/types/LanguageCode'
import { CollectionDetails } from '../collections/types'
import { Nullable } from 'src/types/Nullable'
import { Genre } from '../genres/types'
import { Company } from '../companies/types'
import { CountryCode } from 'src/types/CountryCode'
import { TMDBResponse } from 'src/types/TMDBResponse'
import { PersonCast, PersonCrew } from '../people/types'
import { Image } from 'src/types/Image'
import { TMDBResponseList } from 'src/types/TMDBResponseList'
import { CertificationCode } from '../certifications/types'
import { Translation } from 'src/types/Translation'
import { List } from '../lists/types'
import { Review } from '../reviews/types'

export interface Movie {
  id: number
  media_type?: 'movie'
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

export type MovieKeyword = {
  id: number
  name: string
}

export type MovieReleaseDate = {
  certification: CertificationCode
  iso_639_1: LanguageCode
  release_date: string
  type: number
  note: string
}

export type MovieWatchProvider = {
  provider_id: number
  provider_name: string
  logo_path: string
  display_priority: number
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

export type ImagesFilters = {
  language?: LanguageCode
  include_image_language?: LanguageCode[]
}

export type ListsFilters = {
  page?: number
  language?: LanguageCode
}

export type RecommendationsFilters = {
  page?: number
  language?: LanguageCode
}

export type ReviewsFilters = {
  page?: number
  language?: LanguageCode
}

export type SimilarFilters = {
  page?: number
  language?: LanguageCode
}

export type VideosFilters = {
  language?: LanguageCode
  include_video_language?: LanguageCode[]
}

export type LatestFilters = {
  language?: LanguageCode
}

export type RateFilters = {
  session_id?: string
  guest_session_id?: string
}

export type RateBody = {
  value: number
}

export type NowPlayingFilters = {
  language?: LanguageCode
  region?: CountryCode
  page?: number
}

export type PopularFilters = {
  language?: LanguageCode
  region?: CountryCode
  page?: number
}

export type TopRatedFilters = {
  language?: LanguageCode
  region?: CountryCode
  page?: number
}

export type UpcomingFilters = {
  language?: LanguageCode
  region?: CountryCode
  page?: number
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
  cast: PersonCast[]
  crew: PersonCrew[]
}>

export type ExternalIdsResponse = TMDBResponse<{
  id: number
  imdb_id: Nullable<string>
  facebook_id: Nullable<string>
  instagram_id: Nullable<string>
  twitter_id: Nullable<string>
}>

export type ImagesResponse = TMDBResponse<{
  id: number
  backdrops: Image[]
  posters: Image[]
}>

export type KeywordsResponse = TMDBResponse<{
  id: number
  keywords: MovieKeyword[]
}>

export type ListsResponse = TMDBResponseList<List[]> & { id: number }

export type RecommendationsResponse = TMDBResponseList<Movie[]>

export type ReleaseDatesResponse = TMDBResponse<{
  id: number
  results: {
    ido_3166_1: CountryCode
    release_dates: MovieReleaseDate[]
  }
}>

export type ReviewsResponse = TMDBResponseList<Review[]> & { id: number }

export type SimilarResponse = TMDBResponseList<Movie[]>

export type TranslationsResponse = TMDBResponse<{
  id: number
  translations: Translation[]
}>

export type VideosResponse = TMDBResponse<{
  id: number
  results: MovieVideo[]
}>

export type WatchProvidersResponse = TMDBResponse<{
  id: number
  results: {
    [key in CountryCode]?: {
      link: string
      flatrate?: MovieWatchProvider[]
      rent?: MovieWatchProvider[]
      buy?: MovieWatchProvider[]
    }
  }
}>

export type RateResponse = TMDBResponse<{
  status_code: number
  status_message: string
}>

export type NowPlayingResponse = TMDBResponseList<Movie[]> & {
  dates: {
    maximum: string
    minimum: string
  }
}

export type UpcomingResponse = TMDBResponseList<Movie[]> & {
  dates: {
    maximum: string
    minimum: string
  }
}

export type PopularResponse = TMDBResponseList<Movie[]>

export type TopRatedResponse = TMDBResponseList<Movie[]>
