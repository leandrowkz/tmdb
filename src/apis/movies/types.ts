import type {
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
import type { Collection } from '../collections/types'
import type { Genre, GenreCode } from '../genres/types'
import type { CompanyItem } from '../companies/types'
import type { PersonCast, PersonCrew } from '../people/types'
import type { CertificationCode } from '../certifications/types'
import type { ListItem } from '../lists/types'
import type { ReviewItem } from '../reviews/types'
import type { WatchProvider } from '../watch-providers/types'
import type { Filters } from 'src/types/filters'

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

export type MovieDetailsFilters = Pick<
  Filters,
  'append_to_response' | 'language'
>

export type MovieAccountStatesFilters = SessionFilters

export type MovieAlternativeTitlesFilters = Pick<Filters, 'country'>

export type MovieChangesFilters = Pick<
  Filters,
  'page' | 'start_date' | 'end_date'
>

export type MovieCreditsFilters = Pick<Filters, 'language'>

export type MovieImagesFilters = Pick<
  Filters,
  'language' | 'include_image_language'
>

export type MovieListsFilters = Pick<Filters, 'language' | 'page'>

export type MovieRecommendationsFilters = Pick<Filters, 'language' | 'page'>

export type MovieReviewsFilters = Pick<Filters, 'language' | 'page'>

export type MovieSimilarFilters = Pick<Filters, 'language' | 'page'>

export type MovieVideosFilters = Pick<
  Filters,
  'language' | 'include_image_language'
>

export type MovieLatestFilters = Pick<Filters, 'language'>

export type MovieRateFilters = Pick<Filters, 'session_id' | 'guest_session_id'>

export type MovieNowPlayingFilters = Pick<
  Filters,
  'language' | 'page' | 'region'
>

export type MoviePopularFilters = Pick<Filters, 'language' | 'page' | 'region'>

export type MovieTopRatedFilters = Pick<Filters, 'language' | 'page' | 'region'>

export type MovieUpcomingFilters = Pick<Filters, 'language' | 'page' | 'region'>

// Body
export type MovieRateBody = {
  value: number
}

// Responses
type WithDates<T> = T & {
  dates: {
    maximum: string
    minimum: string
  }
}

export type MovieDetailsResponse = TMDBResponse<Movie>

export type MovieAccountStatesResponse = TMDBResponse<MovieAccountStates>

export type MovieAlternativeTitlesResponse =
  TMDBResponse<MovieAlternativeTitles>

export type MovieChangesResponse = TMDBResponse<MovieChanges>

export type MovieCreditsResponse = TMDBResponse<MovieCredits>

export type MovieExternalIdsResponse = TMDBResponse<ExternalId>

export type MovieImagesResponse = TMDBResponse<MovieImages>

export type MovieKeywordsResponse = TMDBResponse<MovieKeyworks>

export type MovieLatestResponse = TMDBResponse<Movie>

export type MovieListsResponse = WithId<TMDBResponseList<ListItem[]>>

export type MovieRecommendationsResponse = TMDBResponseList<Movie[]>

export type MovieReleaseDatesResponse = TMDBResponse<MovieReleaseDates>

export type MovieReviewsResponse = WithId<TMDBResponseList<ReviewItem[]>>

export type MovieSimilarResponse = TMDBResponseList<MovieItem[]>

export type MovieTranslationsResponse = TMDBResponse<MovieTranslations>

export type MovieVideosResponse = TMDBResponse<MovieVideos>

export type MovieWatchProvidersResponse = TMDBResponse<MovieWatchProviders>

export type MovieRateResponse = TMDBResponse<GenericResponse>

export type MovieNowPlayingResponse = WithDates<TMDBResponseList<Movie[]>>

export type MovieUpcomingResponse = WithDates<TMDBResponseList<Movie[]>>

export type MoviePopularResponse = TMDBResponseList<MovieItem[]>

export type MovieTopRatedResponse = TMDBResponseList<MovieItem[]>
