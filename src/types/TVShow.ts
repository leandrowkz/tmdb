import { CountryCode } from './CountryCode'
import { LanguageCode } from './LanguageCode'

export interface TVShow {
  id: number
  genre_ids: number[]
  name: string
  original_name: string
  poster_path: string
  backdrop_path: string
  popularity: number
  overview: string
  first_air_date: string
  origin_country: CountryCode[]
  original_language: LanguageCode
  vote_count: number
  vote_average: number
}
