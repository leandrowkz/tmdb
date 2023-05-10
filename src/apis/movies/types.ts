import {
  CountryCode,
  Image,
  LanguageCode,
  Nullable,
  Translation,
  TMDBResponse,
  TMDBResponseList,
  Country,
  Language,
  Video,
  WithId,
  ExternalId,
  GenericResponse,
} from 'src/types'
import { Collection } from '../collections/types'
import { Genre, GenreCode } from '../genres/types'
import { CompanyItem } from '../companies/types'
import { PersonCast, PersonCrew } from '../people/types'
import { CertificationCode } from '../certifications/types'
import { ListItem } from '../lists/types'
import { ReviewItem } from '../reviews/types'
import { WatchProvider } from '../watch-providers/types'
import { Filters } from 'src/types/filters'

export type Movie = {
  id: number
  imdb_id: string
  media_type?: 'movie'
  title: string
  backdrop_path: Nullable<string>
  belongs_to_collection: Nullable<Collection>
  budget: number
  genres: Genre[]
  genre_ids?: GenreCode[]
  homepage: string
  original_language: LanguageCode
  original_title: string
  overview: Nullable<string>
  popularity: number
  poster_path: Nullable<string>
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
  tagline: Nullable<string>
  adult: false
  video: boolean
  vote_average: number
  vote_count: number
  production_companies: CompanyItem[]
  production_countries: Country[]
  spoken_languages: Language[]
}

export type MovieItem = Pick<
  Movie,
  | 'id'
  | 'media_type'
  | 'poster_path'
  | 'adult'
  | 'overview'
  | 'release_date'
  | 'genre_ids'
  | 'original_title'
  | 'original_language'
  | 'title'
  | 'backdrop_path'
  | 'popularity'
  | 'vote_count'
  | 'video'
  | 'vote_average'
>

export type MovieAccountStates = {
  id: number
  favorite: boolean
  rated: { value: number } | boolean
  watchlist: boolean
}

export type MovieAlternativeTitles = {
  id: number
  titles: {
    iso_3166_1: CountryCode
    title: string
    type: string
  }[]
}

export type MovieChanges = {
  changes: {
    key: keyof Movie
    items: {
      id: string
      action: 'updated'
      time: string
      iso_639_1: LanguageCode
      value: string
      original_value: string
    }[]
  }[]
}

export type MovieTranslations = {
  id: number
  translations: Translation<{
    title: string
    overview: string
    homepage: string
  }>[]
}

export type MovieReleaseDates = {
  id: number
  results: {
    ido_3166_1: CountryCode
    release_dates: {
      certification: CertificationCode
      iso_639_1: LanguageCode
      release_date: string
      type: number
      note: string
    }[]
  }
}

export type MovieCredits = {
  id: number
  cast: PersonCast[]
  crew: PersonCrew[]
}

export type MovieImages = {
  id: number
  backdrops: Image[]
  posters: Image[]
}

export type MovieKeyworks = {
  id: number
  keywords: {
    id: number
    name: string
  }[]
}

export type MovieVideos = {
  id: number
  results: Video[]
}

export type MovieWatchProviders = {
  id: number
  results: {
    [key in CountryCode]?: {
      link: string
      flatrate?: WatchProvider[]
      rent?: WatchProvider[]
      buy?: WatchProvider[]
    }
  }
}

// Filters
type SessionFilters = Pick<Filters, 'guest_session_id'> &
  Required<Pick<Filters, 'session_id'>>

export type DetailsFilters = Pick<Filters, 'append_to_response' | 'language'>

export type AccountStatesFilters = SessionFilters

export type AlternativeTitlesFilters = Pick<Filters, 'country'>

export type ChangesFilters = Pick<Filters, 'page' | 'start_date' | 'end_date'>

export type CreditsFilters = Pick<Filters, 'language'>

export type ImagesFilters = Pick<Filters, 'language' | 'include_image_language'>

export type ListsFilters = Pick<Filters, 'language' | 'page'>

export type RecommendationsFilters = Pick<Filters, 'language' | 'page'>

export type ReviewsFilters = Pick<Filters, 'language' | 'page'>

export type SimilarFilters = Pick<Filters, 'language' | 'page'>

export type VideosFilters = Pick<Filters, 'language' | 'include_image_language'>

export type LatestFilters = Pick<Filters, 'language'>

export type RateFilters = Pick<Filters, 'session_id' | 'guest_session_id'>

export type NowPlayingFilters = Pick<Filters, 'language' | 'page' | 'region'>

export type PopularFilters = Pick<Filters, 'language' | 'page' | 'region'>

export type TopRatedFilters = Pick<Filters, 'language' | 'page' | 'region'>

export type UpcomingFilters = Pick<Filters, 'language' | 'page' | 'region'>

// Body
export type RateBody = {
  value: number
}

// Responses
type WithDates<T> = T & {
  dates: {
    maximum: string
    minimum: string
  }
}

export type DetailsResponse = TMDBResponse<Movie>

export type AccountStatesResponse = TMDBResponse<MovieAccountStates>

export type AlternativeTitlesResponse = TMDBResponse<MovieAlternativeTitles>

export type ChangesResponse = TMDBResponse<MovieChanges>

export type CreditsResponse = TMDBResponse<MovieCredits>

export type ExternalIdsResponse = TMDBResponse<ExternalId>

export type ImagesResponse = TMDBResponse<MovieImages>

export type KeywordsResponse = TMDBResponse<MovieKeyworks>

export type LatestResponse = TMDBResponse<Movie>

export type ListsResponse = WithId<TMDBResponseList<ListItem[]>>

export type RecommendationsResponse = TMDBResponseList<Movie[]>

export type ReleaseDatesResponse = TMDBResponse<MovieReleaseDates>

export type ReviewsResponse = WithId<TMDBResponseList<ReviewItem[]>>

export type SimilarResponse = TMDBResponseList<MovieItem[]>

export type TranslationsResponse = TMDBResponse<MovieTranslations>

export type VideosResponse = TMDBResponse<MovieVideos>

export type WatchProvidersResponse = TMDBResponse<MovieWatchProviders>

export type RateResponse = TMDBResponse<GenericResponse>

export type NowPlayingResponse = WithDates<TMDBResponseList<Movie[]>>

export type UpcomingResponse = WithDates<TMDBResponseList<Movie[]>>

export type PopularResponse = TMDBResponseList<MovieItem[]>

export type TopRatedResponse = TMDBResponseList<MovieItem[]>