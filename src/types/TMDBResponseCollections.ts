import { Image } from './Image'
import { Movie } from './Movie'
import { Nullable } from './Nullable'
import { TMDBResponse } from './TMDBResponse'
import { Translation } from './Translation'

export type CollectionDetailsResponse = TMDBResponse<{
  id: number
  name: string
  overview: string
  poster_path: Nullable<string>
  backdrop_path: Nullable<string>
  parts: Movie[]
}>

export type CollectionImagesResponse = TMDBResponse<{
  id: number
  backdrops: Image[]
  posters: Image[]
}>

export type CollectionTranslationsResponse = TMDBResponse<{
  id: number
  translations: Translation[]
}>
