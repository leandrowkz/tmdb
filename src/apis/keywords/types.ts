import type { TMDBResponse, TMDBResponseList, WithId } from 'src/types'
import type { MovieItem } from '../movies/types'
import type { Filters } from 'src/types/filters'

export type Keyword = {
  id: number
  name: string
}

// Filters
export type KeywordMoviesFilters = Pick<Filters, 'include_adult' | 'language'>

// Responses
export type KeywordDetailsResponse = TMDBResponse<Keyword>
export type KeywordMoviesResponse = WithId<TMDBResponseList<MovieItem[]>>
