import { Movie } from 'src/tmdb/apis/movies/types'
import { TVShow } from './TVShow'

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
