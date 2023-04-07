import { LanguageCode } from './LanguageCode'

export interface Movie {
  id: number
  genre_ids: number[]
  title: string
  overview: string
  original_title: string
  original_language: LanguageCode
  release_date: string
  poster_path: string
  backdrop_path: string
  popularity: number
  vote_count: number
  vote_average: number
  adult: boolean
  video: boolean
}
