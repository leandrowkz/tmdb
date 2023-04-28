import {
  LanguageCode,
  TMDBResponseList,
  CountryCode,
  TMDBResponse,
} from 'src/types'
import { List } from '../lists/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv/types'
import { TVEpisodeItem } from '../tv-episodes/types'

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

type MediaFilters = {
  session_id: string
  page?: number
  language?: LanguageCode
  sort_by?: 'created_at.asc' | 'created_at.desc'
}

export type DetailsFilters = {
  session_id: string
}

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

export type CreatedListsFilters = Omit<MediaFilters, 'sort_by'>
export type FavoriteMoviesFilters = MediaFilters
export type FavoriteTVShowsFilters = MediaFilters
export type RatedMoviesFilters = MediaFilters
export type RatedTVShowsFilters = MediaFilters
export type RatedTVEpisodesFilters = MediaFilters
export type MovieWatchlistFilters = MediaFilters
export type TVShowWatchlistFilters = MediaFilters
export type MarkAsFavoriteFilters = Pick<MediaFilters, 'session_id'>
export type AddToWatchlistFilters = Pick<MediaFilters, 'session_id'>

type ListsResponse = TMDBResponseList<List[]>
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

export type MarkAsFavoriteResponse = TMDBResponse<{
  status_code: number
  status_message: string
}>

export type AddToWatchlistResponse = TMDBResponse<{
  status_code: number
  status_message: string
}>
