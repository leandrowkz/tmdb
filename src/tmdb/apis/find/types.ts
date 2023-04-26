import { LanguageCode } from '../../../types/LanguageCode'
import { Person } from '../people/types'
import { TVShow } from '../tv/types'
import { TVEpisode } from '../tv-episodes/types'
import { TVSeason } from '../tv-seasons/types'
import { TMDBResponse } from 'src/types/TMDBResponse'
import { Movie } from '../movies/types'

export type FindFilters = {
  language?: LanguageCode
  external_source:
    | 'imdb_id'
    | 'freebase_mid'
    | 'freebase_id'
    | 'tvdb_id'
    | 'tvrage_id'
    | 'facebook_id'
    | 'twitter_id'
    | 'instagram_id'
}

export type FindResponse = TMDBResponse<{
  movie_results: Movie[]
  person_results: Person[]
  tv_results: TVShow[]
  tv_episode_results: TVEpisode[]
  tv_season_results: TVSeason[]
}>
