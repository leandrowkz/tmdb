import {
  GenericResponse,
  LanguageCode,
  Nullable,
  TMDBResponse,
} from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv/types'
import { Filters } from 'src/types/filters'

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
type MediaIdFilter = Required<Pick<Filters, 'media_id'>>
type SessionIdFilter = Required<Pick<Filters, 'session_id'>>

export type DetailsFilters = Pick<Filters, 'language'>

export type ItemStatusFilters = Pick<Filters, 'movie_id'>

export type CreateListFilters = SessionIdFilter

export type AddItemFilters = SessionIdFilter

export type RemoveItemFilters = SessionIdFilter

export type ClearListFilters = SessionIdFilter & Pick<Filters, 'confirm'>

export type DeleteListFilters = SessionIdFilter

// Body
export type CreateListBody = {
  name: string
  description: string
  language: LanguageCode
}

export type AddItemBody = MediaIdFilter

export type RemoveItemBody = MediaIdFilter

// Responses
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
