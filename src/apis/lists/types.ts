import type {
  GenericResponse,
  LanguageCode,
  Nullable,
  TMDBResponse,
} from 'src/types'
import type { MovieItem } from '../movies/types'
import type { TVShowItem } from '../tv-shows/types'
import type { Filters } from 'src/types/filters'

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

export type ListDetailsFilters = Pick<Filters, 'language'>

export type ListItemStatusFilters = Pick<Filters, 'movie_id'>

export type ListCreateListFilters = SessionIdFilter

export type ListAddItemFilters = SessionIdFilter

export type ListRemoveItemFilters = SessionIdFilter

export type ListClearListFilters = SessionIdFilter & Pick<Filters, 'confirm'>

export type ListDeleteListFilters = SessionIdFilter

// Body
export type ListCreateListBody = {
  name: string
  description: string
  language: LanguageCode
}

export type ListAddItemBody = MediaIdFilter

export type ListRemoveItemBody = MediaIdFilter

// Responses
export type ListDetailsResponse = TMDBResponse<List>

export type ListItemStatusResponse = TMDBResponse<{
  id: string
  item_present: boolean
}>

export type ListCreateListResponse = TMDBResponse<
  GenericResponse & {
    list_id: number
    success: boolean
  }
>

export type ListAddItemResponse = TMDBResponse<GenericResponse>

export type ListRemoveItemResponse = TMDBResponse<GenericResponse>

export type ListClearListResponse = TMDBResponse<GenericResponse>

export type ListDeleteListResponse = TMDBResponse<GenericResponse>
