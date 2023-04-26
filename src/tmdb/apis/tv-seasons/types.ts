import { Nullable } from 'src/types/Nullable'

export type TVSeason = {
  id: number
  name: string
  overview: string
  poster_path: Nullable<string>
  season_number: number
  episode_count: number
  air_date: string
}
