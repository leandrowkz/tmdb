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
export type SortByFilter = { sort_by?: 'created_at.asc' | 'created_at.desc' }
export type RatedFilters = Pick<Filters, 'language'> & SortByFilter

// Responses
export type RatedMoviesResponse = TMDBResponseList<MovieItemRating[]>
export type RatedTVShowsResponse = TMDBResponseList<TVShowItemRating[]>
export type RatedTVEpisodesResponse = TMDBResponseList<TVEpisodeItemRating[]>
