import { LanguageCode, Nullable, TMDBResponse } from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv/types'

export type List = {
  id: number
  list_type?: 'movie' | 'tv'
  name: string
  description: string
  poster_path: Nullable<string>
  favorite_count: number
  item_count: number
  iso_639_1: LanguageCode
  created_by: string
  items: (MovieItem | TVShowItem)[]
}

export type ListItem = Pick<
  List,
  | 'id'
  | 'name'
  | 'description'
  | 'poster_path'
  | 'favorite_count'
  | 'item_count'
  | 'iso_639_1'
>

// Filters
type LanguageFilter = { language?: LanguageCode }
type MediaIdFilter = { media_id: number }
type SessionIdFilter = { session_id: string }

export type DetailsFilters = LanguageFilter

export type ItemStatusFilters = { movie_id: number }

export type CreateListFilters = SessionIdFilter

export type AddItemFilters = SessionIdFilter

export type RemoveItemFilters = SessionIdFilter

export type ClearListFilters = SessionIdFilter & {
  confirm: boolean
}

export type DeleteListFilters = SessionIdFilter

export type CreateListBody = {
  name: string
  description: string
  language: LanguageCode
}

export type AddItemBody = MediaIdFilter

export type RemoveItemBody = MediaIdFilter

// Responses
type GenericResponse = {
  status_code: number
  status_message: string
}

export type DetailsResponse = TMDBResponse<List>

export type ItemStatusResponse = TMDBResponse<{
  id: string
  item_present: boolean
}>

export type CreateListResponse = TMDBResponse<
  GenericResponse & {
    list_id: number
    success: boolean
  }
>

export type AddItemResponse = TMDBResponse<GenericResponse>

export type RemoveItemResponse = TMDBResponse<GenericResponse>

export type ClearListResponse = TMDBResponse<GenericResponse>

export type DeleteListResponse = TMDBResponse<GenericResponse>
