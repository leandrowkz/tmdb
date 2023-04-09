import { LanguageCode } from 'src/types/LanguageCode'
import { TMDBResponse } from 'src/types/TMDBResponse'

export enum GenreType {
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
  id: string
  name: string
}

export type GenresFilters = {
  language?: LanguageCode
}

export type GenresResponse = TMDBResponse<{
  genres: Genre[]
}>
