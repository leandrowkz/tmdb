import {
  AppendToResponse,
  CountryCode,
  Department,
  Image,
  LanguageCode,
  Nullable,
  TMDBResponse,
  TMDBResponseList,
} from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv/types'

export type DetailsFilters = {
  language?: LanguageCode
  append_to_response?: AppendToResponse[]
}

export type Person = {
  id: number
  imdb_id: string
  cast_id?: number
  credit_id?: string
  media_type?: 'person'
  adult: boolean
  name: string
  original_name?: string
  gender: Nullable<number>
  birthday: string
  deathday: Nullable<string>
  also_known_as: string[]
  known_for?: MovieItem | TVShowItem
  known_for_department: Department
  department?: Department
  biography: string
  popularity: number
  place_of_birth: Nullable<string>
  profile_path: Nullable<string>
  homepage: Nullable<string>
  order?: number
  job?: string
  character?: string
}

export type PersonItem = Pick<
  Person,
  'id' | 'adult' | 'profile_path' | 'name' | 'popularity' | 'known_for'
>

export type PersonCast = Pick<
  Person,
  | 'id'
  | 'cast_id'
  | 'credit_id'
  | 'gender'
  | 'adult'
  | 'known_for_department'
  | 'name'
  | 'original_name'
  | 'popularity'
  | 'profile_path'
  | 'character'
  | 'order'
>

export type PersonCrew = Pick<
  Person,
  | 'id'
  | 'credit_id'
  | 'gender'
  | 'adult'
  | 'known_for_department'
  | 'name'
  | 'original_name'
  | 'popularity'
  | 'profile_path'
  | 'department'
  | 'job'
>

export type ChangesFilters = {
  page?: number
  start_date?: string
  end_date?: string
}

export type LanguageFilters = {
  language?: LanguageCode
}

export type LanguageAndPageFilters = {
  page?: number
  language?: LanguageCode
}

export type DetailsResponse = TMDBResponse<Person>

export type ChangesResponse = TMDBResponse<{
  key: keyof Person
  items: {
    id: string
    action: string
    time: string
    original_value: {
      [key: string]: Record<string, string | number | boolean | object>
    }
  }[]
}>

export type MovieCreditsResponse = TMDBResponse<{
  id: number
  cast: (MovieItem & Pick<PersonCast, 'character' | 'credit_id'>)[]
  crew: (MovieItem & Pick<PersonCrew, 'department' | 'credit_id' | 'job'>)[]
}>

export type TVCreditsResponse = TMDBResponse<{
  id: number
  cast: (TVShowItem & Pick<PersonCast, 'character' | 'credit_id'>)[]
  crew: (TVShowItem & Pick<PersonCrew, 'department' | 'credit_id' | 'job'>)[]
}>

export type CombinedCreditsResponse = TMDBResponse<{
  id: number
  cast: ((TVShowItem | MovieItem) &
    Pick<PersonCast, 'character' | 'credit_id'>)[]
  crew: ((TVShowItem | MovieItem) &
    Pick<PersonCrew, 'department' | 'credit_id' | 'job'>)[]
}>

export type ExternalIdsResponse = TMDBResponse<{
  id: number
  imdb_id: Nullable<string>
  instagram_id: Nullable<string>
  facebook_id: Nullable<string>
  freebase_mid: Nullable<string>
  freebase_id: Nullable<string>
  tvrage_id: Nullable<number>
  twitter_id: Nullable<string>
}>

type TaggedImage = Image & { media: MovieItem | TVShowItem }

export type ImagesResponse = TMDBResponseList<Image> & { id: number }

export type TaggedImagesResponse = TMDBResponseList<TaggedImage> & {
  id: number
}

export type TranslationsResponse = TMDBResponse<{
  id: number
  translations: {
    iso_639_1: LanguageCode
    iso_3166_1: CountryCode
    name: string
    data: Record<string, string>
    english_name: LanguageCode
  }[]
}>

export type LatestResponse = TMDBResponse<Person>

export type PopularResponse = TMDBResponseList<Person>
