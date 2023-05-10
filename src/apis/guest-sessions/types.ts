import { TMDBResponseList } from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv-shows/types'
import { TVEpisodeItem } from '../tv-episodes/types'
import { Filters } from 'src/types/filters'

type Rating = { rating: number }

type MovieItemRating = MovieItem & Rating
type TVShowItemRating = TVShowItem & Rating
type TVEpisodeItemRating = TVEpisodeItem & Rating

// Filters
export type GuestSessionsSortByFilter = {
  sort_by?: 'created_at.asc' | 'created_at.desc'
}
export type GuestSessionsRatedFilters = Pick<Filters, 'language'> &
  GuestSessionsSortByFilter

// Responses
export type GuestSessionsRatedMoviesResponse = TMDBResponseList<
  MovieItemRating[]
>
export type GuestSessionsRatedTVShowsResponse = TMDBResponseList<
  TVShowItemRating[]
>
export type GuestSessionsRatedTVEpisodesResponse = TMDBResponseList<
  TVEpisodeItemRating[]
>
