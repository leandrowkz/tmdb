import { TMDBResponse } from 'src/types'
import { PersonItem } from '../people/types'
import { TVShowItem } from '../tv-shows/types'
import { TVEpisodeItem } from '../tv-episodes/types'
import { TVSeasonItem } from '../tv-seasons/types'
import { MovieItem } from '../movies/types'
import { Filters } from 'src/types/filters'

export type FindFilters = Pick<Filters, 'language'> &
  Required<Pick<Filters, 'external_source'>>

export type FindResponse = TMDBResponse<{
  movie_results: MovieItem[]
  person_results: PersonItem[]
  tv_results: TVShowItem[]
  tv_episode_results: TVEpisodeItem[]
  tv_season_results: TVSeasonItem[]
}>
