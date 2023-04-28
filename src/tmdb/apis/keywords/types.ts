import { LanguageCode, TMDBResponse, TMDBResponseList } from 'src/types'
import { MovieItem } from '../movies/types'

export type Keyword = {
  id: number
  name: string
}

export type KeywordMoviesFilters = {
  language?: LanguageCode
  include_adult?: boolean
}

export type KeywordDetailsResponse = TMDBResponse<Keyword>
export type KeywordMoviesResponse = TMDBResponseList<MovieItem[]> & {
  id: number
}
