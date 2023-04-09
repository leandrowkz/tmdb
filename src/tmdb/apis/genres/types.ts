import { LanguageCode } from 'src/types/LanguageCode'
import { TMDBResponse } from 'src/types/TMDBResponse'

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
