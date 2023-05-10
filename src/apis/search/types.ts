import { TMDBResponseList } from 'src/types'
import { CompanyItem } from '../companies/types'
import { CollectionItem } from '../collections/types'
import { Keyword } from '../keywords/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv-shows/types'
import { PersonItem } from '../people/types'
import { Filters } from 'src/types/filters'

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
