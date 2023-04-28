import { CountryCode, LanguageCode, TMDBResponseList } from 'src/types'
import { Company } from '../companies/types'
import { Collection } from '../collections/types'
import { Keyword } from '../keywords/types'
import { MovieItem } from '../movies/types'
import { TVShow } from '../tv/types'
import { Person } from '../people/types'

export type SearchFilters = {
  query: string
  page?: number
}

export type CollectionsFilters = SearchFilters & {
  language?: LanguageCode
}

export type MoviesFilters = SearchFilters & {
  language?: LanguageCode
  include_adult?: boolean
  region?: CountryCode
  year?: number
  primary_release_year?: number
}

export type MultiSearchFilters = SearchFilters & {
  language?: LanguageCode
  include_adult?: boolean
  region?: CountryCode
}

export type PeopleFilters = SearchFilters & {
  language?: LanguageCode
  include_adult?: boolean
  region?: CountryCode
}

export type TVShowsFilters = SearchFilters & {
  language?: LanguageCode
  include_adult?: boolean
  first_air_date_year?: number
}

export type CompaniesResponse = TMDBResponseList<Company[]>

export type CollectionsResponse = TMDBResponseList<Collection[]>

export type KeywordsResponse = TMDBResponseList<Keyword[]>

export type MoviesResponse = TMDBResponseList<MovieItem[]>

export type MultiSearchResponse = TMDBResponseList<
  (MovieItem | TVShow | Person)[]
>

export type PeopleResponse = TMDBResponseList<Person[]>

export type TVShowsResponse = TMDBResponseList<TVShow[]>
