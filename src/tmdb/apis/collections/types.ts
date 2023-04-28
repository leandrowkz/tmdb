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
  backdrop_path: Nullable<string>
  poster_patH: Nullable<string>
}

export type CollectionDetails = {
  id: number
  name: string
  overview: string
  poster_path: Nullable<string>
  backdrop_path: Nullable<string>
  parts: MovieItem[]
}

export type CollectionsFilters = {
  language?: LanguageCode
}

export type CollectionDetailsResponse = TMDBResponse<CollectionDetails>

export type CollectionImagesResponse = TMDBResponse<{
  id: number
  backdrops: Image[]
  posters: Image[]
}>

export type CollectionTranslationsResponse = TMDBResponse<{
  id: number
  translations: Translation<{
    title: string
    overview: string
    homepage: string
  }>[]
}>
