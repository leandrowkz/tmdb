import { Country } from './Country'
import { Language } from './Language'

export type MovieVideo = {
  id: string
  iso_639_1: Language
  iso_3166_1: Country
  key: string
  name: string
  official: boolean
  published_at: string
  site: 'Youtube' | 'Vimeo'
  size: number
  type: 'Trailer'
}
