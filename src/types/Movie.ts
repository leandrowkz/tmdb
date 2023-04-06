import { Company } from './Company'
import { MovieGenre } from './MovieGenre'
import { MovieCountry } from './MovieCountry'
import { MovieLanguage } from './MovieLanguage'
import { Language } from './Language'
import { MovieStatus } from './MovieStatus'
import { MovieVideo } from './MovieVideo'
import { Person } from './Person'
import { Genre } from './Genre'

export type Movie = {
  id: number
  imdb_id: string
  adult: boolean
  backdrop_path: string
  belongs_to_collection: boolean | null
  budget: number
  genres: MovieGenre[]
  genre_ids?: Genre[]
  homepage: string
  original_language: Language
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Company[]
  production_countries: MovieCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: MovieLanguage[]
  status: MovieStatus
  tagline: string
  title: string
  video: boolean
  videos: { results: MovieVideo[] }
  vote_average: number
  vote_count: number
  casts: {
    cast: Person[]
    crew: Person[]
  }
}
