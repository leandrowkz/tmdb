import { LanguageCode } from 'src/types/LanguageCode'
import { TMDBResponseList } from 'src/types/TMDBResponseList'
import { Movie } from '../movies/types'
import { TMDBResponse } from 'src/types/TMDBResponse'

export type Keyword = {
  id: number
  name: string
}

export type KeywordMoviesFilters = {
  language?: LanguageCode
  include_adult?: boolean
}

export type KeywordDetailsResponse = TMDBResponse<Keyword>
export type KeywordMoviesResponse = TMDBResponseList<Movie[]> & { id: number }
