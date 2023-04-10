import { Movie } from 'src/tmdb/apis/movies/types'
import { TVShow } from './TVShow'
import { Nullable } from './Nullable'

interface MovieTyped extends Movie {
  media_type: 'movie'
}

interface TVShowTyped extends TVShow {
  media_type: 'tv'
}

export interface Person {
  id: number
  adult: boolean
  profile_path: string
  name: string
  popularity: string
  known_for: MovieTyped | TVShowTyped
}

export type CastPerson = {
  id: number
  cast_id: number
  credit_id: string
  gender: Nullable<number>
  adult: boolean
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: Nullable<string>
  character: string
  order: number
}

export type CrewPerson = {
  id: number
  credit_id: string
  gender: Nullable<string>
  adult: boolean
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: Nullable<string>
  department: string
  job: string
}
