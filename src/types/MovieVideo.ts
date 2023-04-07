import { CountryCode } from './CountryCode'
import { LanguageCode } from './LanguageCode'

export type MovieVideo = {
  id: string
  iso_639_1: LanguageCode
  iso_3166_1: CountryCode
  key: string
  name: string
  official: boolean
  published_at: string
  site: 'Youtube' | 'Vimeo'
  size: number
  type: 'Trailer'
}
