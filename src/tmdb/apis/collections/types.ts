import { LanguageCode } from 'src/types/LanguageCode'
import { Image } from 'src/types/Image'
import { Movie } from '../movies/types'
import { Nullable } from 'src/types/Nullable'
import { TMDBResponse } from 'src/types/TMDBResponse'
import { Translation } from 'src/types/Translation'

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
  parts: Movie[]
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
  translations: Translation[]
}>
