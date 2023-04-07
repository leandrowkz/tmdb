import { TMDBResponse } from './TMDBResponse'

export type TMDBResponseList<T> = TMDBResponse<{
  results: T
  pages: number
  total_pages: number
  total_results: number
}>
