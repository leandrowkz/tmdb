import { LanguageCode, TMDBResponseList } from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShow } from '../tv/types'
import { TVEpisode } from '../tv-episodes/types'

export type RatedFilters = {
  language?: LanguageCode
  sort_by?: 'created_at.asc' | 'created_at.desc'
}

type Rating = {
  rating: number
}

export type RatedMoviesResponse = TMDBResponseList<(MovieItem & Rating)[]>
export type RatedTVShowsResponse = TMDBResponseList<(TVShow & Rating)[]>
export type RatedTVEpisodesResponse = TMDBResponseList<(TVEpisode & Rating)[]>
