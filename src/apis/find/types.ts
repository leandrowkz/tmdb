import type { TMDBResponse } from 'src/types'
import type { PersonItem } from '../people/types'
import type { TVShowItem } from '../tv-shows/types'
import type { TVEpisodeItem } from '../tv-episodes/types'
import type { TVSeasonItem } from '../tv-seasons/types'
import type { MovieItem } from '../movies/types'
import type { Filters } from 'src/types/filters'

export type FindFilters = Pick<Filters, 'language'> &
  Required<Pick<Filters, 'external_source'>>

export type FindResponse = TMDBResponse<{
  movie_results: MovieItem[]
  person_results: PersonItem[]
  tv_results: TVShowItem[]
  tv_episode_results: TVEpisodeItem[]
  tv_season_results: TVSeasonItem[]
}>
