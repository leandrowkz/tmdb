import {
  Department,
  ExternalId,
  Image,
  Nullable,
  TMDBResponse,
  TMDBResponseList,
  Translation,
  WithId,
} from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv/types'
import { Filters } from 'src/types/filters'

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

export type PersonChanges = {
  key: keyof Person
  items: {
    id: string
    action: string
    time: string
    original_value: {
      [key: string]: Record<string, string | number | boolean | object>
    }
  }[]
}

type WithPersonCast<T> = T & Pick<PersonCast, 'character' | 'credit_id'>
type WithPersonCrew<T> = T &
  Pick<PersonCrew, 'department' | 'credit_id' | 'job'>

export type PersonMovieCredits = {
  id: number
  cast: WithPersonCast<MovieItem>[]
  crew: WithPersonCrew<MovieItem>[]
}

export type PersonTVCredits = {
  id: number
  cast: WithPersonCast<TVShowItem>[]
  crew: WithPersonCrew<TVShowItem>[]
}

export type PersonCombinedCredits = {
  id: number
  cast: WithPersonCast<MovieItem | TVShowItem>[]
  crew: WithPersonCrew<MovieItem | TVShowItem>[]
}

export type PersonTranslations = {
  id: number
  translations: Translation<{ biography: string }>[]
}

// Filters
export type DetailsFilters = Pick<Filters, 'language' | 'append_to_response'>

export type ChangesFilters = Pick<Filters, 'page' | 'start_date' | 'end_date'>

export type LanguageFilters = Pick<Filters, 'language'>

export type LanguageAndPageFilters = Pick<Filters, 'page' | 'language'>

// Responses
type TaggedImage = Image & {
  media: MovieItem | TVShowItem
  media_type: 'tv' | 'movie'
}

export type DetailsResponse = TMDBResponse<Person>

export type ChangesResponse = TMDBResponse<PersonChanges>

export type MovieCreditsResponse = TMDBResponse<PersonMovieCredits>

export type TVCreditsResponse = TMDBResponse<PersonTVCredits>

export type CombinedCreditsResponse = TMDBResponse<PersonCombinedCredits>

export type ExternalIdsResponse = TMDBResponse<ExternalId>

export type ImagesResponse = WithId<TMDBResponseList<Image>>

export type TaggedImagesResponse = WithId<TMDBResponseList<TaggedImage>>

export type TranslationsResponse = TMDBResponse<PersonTranslations>

export type LatestResponse = TMDBResponse<Person>

export type PopularResponse = TMDBResponseList<Person>
