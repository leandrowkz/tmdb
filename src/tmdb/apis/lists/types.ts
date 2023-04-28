import { LanguageCode, Nullable, TMDBResponse } from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv/types'

export type List = {
  id: number
  name: string
  description: string
  poster_path: Nullable<string>
  favorite_count: number
  item_count: number
  iso_639_1: LanguageCode
  list_type: 'movie' | 'tv'
}

export type ListDetails = {
  id: number
  name: string
  description: string
  poster_path: Nullable<string>
  favorite_count: number
  item_count: number
  iso_639_1: LanguageCode
  created_by: string
  items: (MovieItem | TVShowItem)[]
}

export type DetailsFilters = {
  language?: LanguageCode
}

export type ItemStatusFilters = {
  movie_id: number
}

export type CreateListFilters = {
  session_id: string
}

export type AddItemFilters = {
  session_id: string
}

export type RemoveItemFilters = {
  session_id: string
}

export type ClearListFilters = {
  session_id: string
  confirm: boolean
}

export type DeleteListFilters = {
  session_id: string
}

export type CreateListBody = {
  name: string
  description: string
  language: LanguageCode
}

export type AddItemBody = {
  media_id: number
}

export type RemoveItemBody = {
  media_id: number
}

export type DetailsResponse = TMDBResponse<ListDetails>

export type ItemStatusResponse = TMDBResponse<{
  id: string
  item_present: boolean
}>

export type CreateListResponse = TMDBResponse<{
  list_id: number
  success: boolean
  status_code: number
  status_message: string
}>

export type AddItemResponse = TMDBResponse<{
  status_code: number
  status_message: string
}>

export type RemoveItemResponse = TMDBResponse<{
  status_code: number
  status_message: string
}>

export type ClearListResponse = TMDBResponse<{
  status_code: number
  status_message: string
}>

export type DeleteListResponse = TMDBResponse<{
  status_code: number
  status_message: string
}>
