import { LanguageCode, TMDBResponse, TMDBResponseList, WithId } from 'src/types'
import { MovieItem } from '../movies/types'

export type Keyword = {
  id: number
  name: string
}

export type MoviesFilters = {
  language?: LanguageCode
  include_adult?: boolean
}

export type DetailsResponse = TMDBResponse<Keyword>
export type MoviesResponse = WithId<TMDBResponseList<MovieItem[]>>
