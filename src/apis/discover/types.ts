import type { TMDBResponseList } from '../../types'
import type { MovieItem } from '../movies/types'
import type { TVShowItem } from '../tv-shows/types'
import type { Filters } from '../../types/filters'

export type DiscoverMovieFilters = Pick<
  Filters,
  | 'page'
  | 'sort_by'
  | 'language'
  | 'region'
  | 'certification_country'
  | 'certification'
  | 'include_adult'
  | 'include_video'
  | 'year'
  | 'primary_release_year'
  | 'with_release_type'
  | 'with_cast'
  | 'with_crew'
  | 'with_people'
  | 'with_companies'
  | 'without_companies'
  | 'with_genres'
  | 'without_genres'
  | 'with_keywords'
  | 'without_keyword'
  | 'with_original_language'
  | 'watch_region'
  | 'with_watch_providers'
  | 'with_watch_monetization_types'
  | 'screened_theatrically'
  | 'with_runtime.gte'
  | 'with_runtime.lte'
  | 'primaty_release_date.gte'
  | 'primaty_release_date.lte'
  | 'release_date.gte'
  | 'release_date.lte'
  | 'certification.lte'
  | 'certification.gte'
  | 'vote_count.gte'
  | 'vote_count.lte'
  | 'vote_average.gte'
  | 'vote_average.lte'
>

export type DiscoverTVShowFilters = Pick<
  Filters,
  | 'language'
  | 'sort_by'
  | 'air_date.gte'
  | 'air_date.lte'
  | 'first_air_date.gte'
  | 'first_air_date.lte'
  | 'first_air_date_year'
  | 'page'
  | 'timezone'
  | 'vote_average.gte'
  | 'vote_count.gte'
  | 'with_genres'
  | 'with_networks'
  | 'without_genres'
  | 'with_runtime.gte'
  | 'with_runtime.lte'
  | 'include_null_first_air_dates'
  | 'with_original_language'
  | 'without_keywords'
  | 'screened_theatrically'
  | 'with_companies'
  | 'with_keywords'
  | 'with_watch_providers'
  | 'watch_region'
  | 'with_watch_monetization_types'
  | 'with_status'
  | 'with_type'
  | 'without_companies'
>

// Responses
export type DiscoverMovieResponse = TMDBResponseList<MovieItem[]>

export type DiscoverTVShowResponse = TMDBResponseList<TVShowItem[]>
