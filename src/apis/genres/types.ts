import type { TMDBResponse } from '../../types'
import type { Filters } from '../../types/filters'

export enum GenreCode {
  ACTION = 28,
  ADVENTURE = 12,
  ANIMATION = 16,
  COMEDY = 35,
  CRIME = 80,
  DOCUMENTARY = 99,
  DRAMA = 18,
  FAMILY = 10751,
  FANTASY = 14,
  HISTORY = 36,
  HORROR = 27,
  MUSIC = 10402,
  MISTERY = 9648,
  ROMANCE = 10749,
  SCIENCE_FICTION = 878,
  TV_MOVIE = 10770,
  THRILLER = 53,
  WAR = 10752,
  WESTERN = 37,
}

export interface Genre {
  id: GenreCode
  name: string
}

// Filters
export type GenresFilters = Pick<Filters, 'language'>

// Responses
export type GenresResponse = TMDBResponse<{
  genres: Genre[]
}>
