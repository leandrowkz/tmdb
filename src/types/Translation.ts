import { LanguageCode } from './LanguageCode'

export interface Translation {
  iso_3166_1: LanguageCode
  iso_639_1: LanguageCode
  name: string
  english_name: string
  data: {
    title: string
    overview: string
    homepage: string
  }
}
