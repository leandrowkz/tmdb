import type {
  LanguageCode,
  TMDBResponseList,
  CountryCode,
  TMDBResponse,
  GenericResponse,
} from 'src/types'
import type { ListItem } from '../lists/types'
import type { MovieItem } from '../movies/types'
import type { TVShowItem } from '../tv-shows/types'
import type { TVEpisodeItem } from '../tv-episodes/types'
import type { Filters } from 'src/types/filters'

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
export type AccountMarkAsFavoriteBody = {
  media_type: 'movie' | 'tv'
  media_id: number
  favorite: boolean
}

export type AccountAddToWatchlistBody = {
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

export type AccountDetailsFilters = SessionIdFilter
export type AccountCreatedListsFilters = Omit<MediaFilters, 'sort_by'>
export type AccountFavoriteMoviesFilters = MediaFilters
export type AccountFavoriteTVShowsFilters = MediaFilters
export type AccountRatedMoviesFilters = MediaFilters
export type AccountRatedTVShowsFilters = MediaFilters
export type AccountRatedTVEpisodesFilters = MediaFilters
export type AccountMovieWatchlistFilters = MediaFilters
export type AccountTVShowWatchlistFilters = MediaFilters
export type AccountMarkAsFavoriteFilters = SessionIdFilter
export type AccountAddToWatchlistFilters = SessionIdFilter

// Responses
type ListsResponse = TMDBResponseList<ListItem[]>
type MoviesResponse = TMDBResponseList<MovieItem[]>
type TVShowsResponse = TMDBResponseList<TVShowItem[]>
type TVEpisodesResponse = TMDBResponseList<TVEpisodeItem[]>

export type AccountDetailsResponse = TMDBResponse<Account>

export type AccountCreatedListsResponse = ListsResponse

export type AccountFavoriteMoviesResponse = MoviesResponse

export type AccountFavoriteTVShowsResponse = TVShowsResponse

export type AccountRatedMoviesResponse = MoviesResponse

export type AccountRatedTVShowsResponse = TVShowsResponse

export type AccountRatedTVEpisodesResponse = TVEpisodesResponse

export type AccountMovieWatchlistResponse = MoviesResponse

export type AccountTVShowWatchlistResponse = TVShowsResponse

export type AccountMarkAsFavoriteResponse = TMDBResponse<GenericResponse>

export type AccountAddToWatchlistResponse = TMDBResponse<GenericResponse>
