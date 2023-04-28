import { TMDBResponse, LanguageCode, ExternalId } from 'src/types'
import { Person } from '../people/types'
import { TVShow } from '../tv/types'
import { TVEpisode } from '../tv-episodes/types'
import { TVSeason } from '../tv-seasons/types'
import { MovieItem } from '../movies/types'

export type FindFilters = {
  language?: LanguageCode
  external_source: keyof ExternalId
}

export type FindResponse = TMDBResponse<{
  movie_results: MovieItem[]
  person_results: Person[]
  tv_results: TVShow[]
  tv_episode_results: TVEpisode[]
  tv_season_results: TVSeason[]
}>
