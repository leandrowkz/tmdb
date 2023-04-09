import { TVEpisode } from './TVEpisode'

export interface TVSeason {
  _id: string
  id: number
  season_number: number
  name: string
  overview: string
  air_date: string
  poster_path: string
  episodes: TVEpisode[]
}
