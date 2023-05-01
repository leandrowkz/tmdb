import {
  Image,
  Nullable,
  LanguageCode,
  Translation,
  TMDBResponse,
} from 'src/types'
import { MovieItem } from '../movies/types'

export type Collection = {
  id: number
  name: string
  overview: string
  poster_path: Nullable<string>
  backdrop_path: Nullable<string>
  parts: MovieItem[]
}

export type CollectionItem = Pick<
  Collection,
  'id' | 'name' | 'backdrop_path' | 'poster_path'
>

export type CollectionImages = {
  id: number
  backdrops: Image[]
  posters: Image[]
}

export type CollectionTranslations = {
  id: number
  translations: Translation<{
    title: string
    overview: string
    homepage: string
  }>[]
}

// Filters
export type CollectionsFilters = {
  language?: LanguageCode
}

// Responses
export type CollectionDetailsResponse = TMDBResponse<Collection>

export type CollectionImagesResponse = TMDBResponse<CollectionImages>

export type CollectionTranslationsResponse =
  TMDBResponse<CollectionTranslations>
