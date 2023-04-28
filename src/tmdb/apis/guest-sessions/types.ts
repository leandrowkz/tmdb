import { LanguageCode, TMDBResponseList } from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShow } from '../tv/types'
import { TVEpisodeItem } from '../tv-episodes/types'

export type RatedFilters = {
  language?: LanguageCode
  sort_by?: 'created_at.asc' | 'created_at.desc'
}

type Rating = { rating: number }

type MovieItemRating = MovieItem & Rating
type TVShowItemRating = TVShow & Rating
type TVEpisodeItemRating = TVEpisodeItem & Rating

export type RatedMoviesResponse = TMDBResponseList<MovieItemRating[]>
export type RatedTVShowsResponse = TMDBResponseList<TVShowItemRating[]>
export type RatedTVEpisodesResponse = TMDBResponseList<TVEpisodeItemRating[]>
