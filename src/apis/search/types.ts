import type { TMDBResponseList } from '../../types'
import type { CompanyItem } from '../companies/types'
import type { CollectionItem } from '../collections/types'
import type { Keyword } from '../keywords/types'
import type { MovieItem } from '../movies/types'
import type { TVShowItem } from '../tv-shows/types'
import type { PersonItem } from '../people/types'
import type { Filters } from '../../types/filters'

// Filters
export type SearchFilters = Required<Pick<Filters, 'query'>> &
  Pick<Filters, 'page'>

export type SearchCollectionsFilters = SearchFilters & Pick<Filters, 'language'>

export type SearchMoviesFilters = SearchFilters &
  Pick<
    Filters,
    'language' | 'include_adult' | 'region' | 'year' | 'primary_release_year'
  >

export type SearchMultiSearchFilters = SearchFilters &
  Pick<Filters, 'language' | 'include_adult' | 'region'>

export type SearchPeopleFilters = SearchFilters &
  Pick<Filters, 'language' | 'include_adult' | 'region'>

export type SearchTVShowsFilters = SearchFilters &
  Pick<Filters, 'language' | 'include_adult' | 'first_air_date_year'>

// Responses
type MultiSearch = MovieItem | TVShowItem | PersonItem

export type SearchCompaniesResponse = TMDBResponseList<CompanyItem[]>

export type SearchCollectionsResponse = TMDBResponseList<CollectionItem[]>

export type SearchKeywordsResponse = TMDBResponseList<Keyword[]>

export type SearchMoviesResponse = TMDBResponseList<MovieItem[]>

export type SearchMultiSearchResponse = TMDBResponseList<MultiSearch[]>

export type SearchPeopleResponse = TMDBResponseList<PersonItem[]>

export type SearchTVShowsResponse = TMDBResponseList<TVShowItem[]>
