import { Nullable } from 'src/types/Nullable'

export type TVEpisode = {
  id: number
  air_date: string
  episode_number: number
  name: string
  overview: string
  production_code: string
  season_number: number
  still_path: Nullable<string>
  vote_average: number
  vote_count: number
}
