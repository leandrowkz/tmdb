import { TMDBResponseList } from 'src/types'
import { CompanyItem } from '../companies/types'
import { CollectionItem } from '../collections/types'
import { Keyword } from '../keywords/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv/types'
import { PersonItem } from '../people/types'
import { Filters } from 'src/types/filters'

// Filters
export type SearchFilters = Required<Pick<Filters, 'query'>> &
  Pick<Filters, 'page'>

export type CollectionsFilters = SearchFilters & Pick<Filters, 'language'>

export type MoviesFilters = SearchFilters &
  Pick<
    Filters,
    'language' | 'include_adult' | 'region' | 'year' | 'primary_release_year'
  >

export type MultiSearchFilters = SearchFilters &
  Pick<Filters, 'language' | 'include_adult' | 'region'>

export type PeopleFilters = SearchFilters &
  Pick<Filters, 'language' | 'include_adult' | 'region'>

export type TVShowsFilters = SearchFilters &
  Pick<Filters, 'language' | 'include_adult' | 'first_air_date_year'>

// Responses
type MultiSearch = MovieItem | TVShowItem | PersonItem

export type CompaniesResponse = TMDBResponseList<CompanyItem[]>

export type CollectionsResponse = TMDBResponseList<CollectionItem[]>

export type KeywordsResponse = TMDBResponseList<Keyword[]>

export type MoviesResponse = TMDBResponseList<MovieItem[]>

export type MultiSearchResponse = TMDBResponseList<MultiSearch[]>

export type PeopleResponse = TMDBResponseList<PersonItem[]>

export type TVShowsResponse = TMDBResponseList<TVShowItem[]>
