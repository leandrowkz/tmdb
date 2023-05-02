import { TMDBResponse, TMDBResponseList, WithId } from 'src/types'
import { MovieItem } from '../movies/types'
import { Filters } from 'src/types/filters'

export type Keyword = {
  id: number
  name: string
}

// Filters
export type MoviesFilters = Pick<Filters, 'include_adult' | 'language'>

// Responses
export type DetailsResponse = TMDBResponse<Keyword>
export type MoviesResponse = WithId<TMDBResponseList<MovieItem[]>>
