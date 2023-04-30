import { TMDBResponse, LanguageCode, ExternalId } from 'src/types'
import { PersonItem } from '../people/types'
import { TVShowItem } from '../tv/types'
import { TVEpisodeItem } from '../tv-episodes/types'
import { TVSeasonItem } from '../tv-seasons/types'
import { MovieItem } from '../movies/types'

export type FindFilters = {
  language?: LanguageCode
  external_source: keyof ExternalId
}

export type FindResponse = TMDBResponse<{
  movie_results: MovieItem[]
  person_results: PersonItem[]
  tv_results: TVShowItem[]
  tv_episode_results: TVEpisodeItem[]
  tv_season_results: TVSeasonItem[]
}>
