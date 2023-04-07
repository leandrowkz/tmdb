import { Language } from './Language'

export interface Movie {
  id: number
  genre_ids: number[]
  title: string
  overview: string
  original_title: string
  original_language: Language
  release_date: string
  poster_path: string
  backdrop_path: string
  popularity: number
  vote_count: number
  vote_average: number
  adult: boolean
  video: boolean
}
