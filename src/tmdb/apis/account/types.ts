import {
  LanguageCode,
  TMDBResponseList,
  CountryCode,
  TMDBResponse,
  GenericResponse,
} from 'src/types'
import { ListItem } from '../lists/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv/types'
import { TVEpisodeItem } from '../tv-episodes/types'
import { Filters } from 'src/types/filters'

export type Account = {
  id: number
  name: string
  username: string
  iso_639_1: LanguageCode
  iso_3166_1: CountryCode
  include_adult: boolean
  avatar: {
    gravatar: {
      hash: string
    }
  }
}

// Body
export type MarkAsFavoriteBody = {
  media_type: 'movie' | 'tv'
  media_id: number
  favorite: boolean
}

export type AddToWatchlistBody = {
  media_type: 'movie' | 'tv'
  media_id: number
  watchlist: boolean
}

// Filters
type SortByFilter = { sort_by?: 'created_at.asc' | 'created_at.desc' }
type SessionIdFilter = Required<Pick<Filters, 'session_id'>>

type MediaFilters = SessionIdFilter &
  SortByFilter &
  Pick<Filters, 'page' | 'language'>

export type DetailsFilters = SessionIdFilter
export type CreatedListsFilters = Omit<MediaFilters, 'sort_by'>
export type FavoriteMoviesFilters = MediaFilters
export type FavoriteTVShowsFilters = MediaFilters
export type RatedMoviesFilters = MediaFilters
export type RatedTVShowsFilters = MediaFilters
export type RatedTVEpisodesFilters = MediaFilters
export type MovieWatchlistFilters = MediaFilters
export type TVShowWatchlistFilters = MediaFilters
export type MarkAsFavoriteFilters = SessionIdFilter
export type AddToWatchlistFilters = SessionIdFilter

// Responses
type ListsResponse = TMDBResponseList<ListItem[]>
type MoviesResponse = TMDBResponseList<MovieItem[]>
type TVShowsResponse = TMDBResponseList<TVShowItem[]>
type TVEpisodesResponse = TMDBResponseList<TVEpisodeItem[]>

export type DetailsResponse = TMDBResponse<Account>

export type CreatedListsResponse = ListsResponse

export type FavoriteMoviesResponse = MoviesResponse

export type FavoriteTVShowsResponse = TVShowsResponse

export type RatedMoviesResponse = MoviesResponse

export type RatedTVShowsResponse = TVShowsResponse

export type RatedTVEpisodesResponse = TVEpisodesResponse

export type MovieWatchlistResponse = MoviesResponse

export type TVShowWatchlistResponse = TVShowsResponse

export type MarkAsFavoriteResponse = TMDBResponse<GenericResponse>

export type AddToWatchlistResponse = TMDBResponse<GenericResponse>
