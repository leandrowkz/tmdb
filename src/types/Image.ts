import { LanguageCode } from './LanguageCode'
import { Nullable } from './Nullable'

export interface Image {
  file_path: string
  file_type: string
  height: number
  width: number
  aspect_ratio: number
  iso_639_1: Nullable<LanguageCode>
  vote_average: number
  vote_count: number
}
