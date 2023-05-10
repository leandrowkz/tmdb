import { TMDBResponse, TMDBResponseList, WithId } from 'src/types'
import { MovieItem } from '../movies/types'
import { Filters } from 'src/types/filters'

export type Keyword = {
  id: number
  name: string
}

// Filters
export type KeywordMoviesFilters = Pick<Filters, 'include_adult' | 'language'>

// Responses
export type KeywordDetailsResponse = TMDBResponse<Keyword>
export type KeywordMoviesResponse = WithId<TMDBResponseList<MovieItem[]>>
