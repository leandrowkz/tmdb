import { CertificationCode } from 'src/tmdb/apis/certifications/types'
import { AppendToResponse, CountryCode, ExternalId, LanguageCode } from '.'

type SortBy =
  | 'popularity.asc'
  | 'popularity.desc'
  | 'release_date.asc'
  | 'release_date.desc'
  | 'revenue.asc'
  | 'revenue.desc'
  | 'primary_release_date.asc'
  | 'primary_release_date.desc'
  | 'original_title.asc'
  | 'original_title.desc'
  | 'vote_average.asc'
  | 'vote_average.desc'
  | 'vote_count.asc'
  | 'vote_count.desc'

type MonetizationTypes = 'flatrate' | 'free' | 'ads' | 'rent' | 'buy'

export type Filters = {
  page?: number
  sort_by?: SortBy
  language?: LanguageCode
  region?: CountryCode
  certification_country?: CountryCode
  certification?: CertificationCode
  include_adult?: boolean
  include_video?: boolean
  year?: number
  primary_release_year?: number
  with_release_type?: number
  with_cast?: string[]
  with_crew?: string[]
  with_people?: string[]
  with_companies?: string[]
  without_companies?: string[]
  with_genres?: string[]
  without_genres?: string[]
  with_keywords?: string[]
  without_keyword?: string[]
  with_original_language?: LanguageCode
  watch_region?: CountryCode
  with_watch_providers?: string[]
  with_watch_monetization_types?: MonetizationTypes
  screened_theatrically?: boolean
  'with_runtime.gte'?: number
  'with_runtime.lte'?: number
  'primaty_release_date.gte'?: string
  'primaty_release_date.lte'?: string
  'release_date.gte'?: string
  'release_date.lte'?: string
  'certification.lte'?: string
  'certification.gte'?: string
  'vote_count.gte'?: number
  'vote_count.lte'?: number
  'vote_average.gte'?: number
  'vote_average.lte'?: number
  'air_date.gte'?: string
  'air_date.lte'?: string
  'first_air_date.gte'?: string
  'first_air_date.lte'?: string
  first_air_date_year?: number
  timezone?: string
  with_networks?: string[]
  include_image_language?: LanguageCode[]
  include_null_first_air_dates?: boolean
  without_keywords?: string[]
  with_status?: ('0' | '1' | '2' | '3' | '4' | '5')[]
  with_type?: ('0' | '1' | '2' | '3' | '4' | '5' | '6')[]
  end_date?: string
  start_date?: string
  append_to_response?: AppendToResponse[]
  guest_session_id?: string
  session_id?: string
  external_source?: keyof ExternalId
  media_id?: number
  movie_id?: number
  confirm?: boolean
  country?: CountryCode
  query?: string
}
