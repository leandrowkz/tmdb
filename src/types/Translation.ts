import { LanguageCode } from './LanguageCode'

export interface Translation<T> {
  iso_3166_1: LanguageCode
  iso_639_1: LanguageCode
  name: string
  english_name: string
  data: T
}
