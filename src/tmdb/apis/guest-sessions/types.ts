import { LanguageCode } from 'src/types/LanguageCode'
import { TMDBResponseList } from 'src/types/TMDBResponseList'
import { Movie } from '../movies/types'
import { TVShow } from 'src/types/TVShow'
import { TVEpisode } from 'src/types/TVEpisode'

export type RatedFilters = {
  language?: LanguageCode
  sort_by?: 'created_at.asc' | 'created_at.desc'
}

export type RatedMoviesResponse = TMDBResponseList<Movie[]>
export type RatedTVShowsResponse = TMDBResponseList<TVShow[]>
export type RatedTVEpisodesResponse = TMDBResponseList<TVEpisode[]>
