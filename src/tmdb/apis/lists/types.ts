import { LanguageCode } from 'src/types/LanguageCode'
import { Nullable } from 'src/types/Nullable'

export type List = {
  id: number
  name: string
  description: string
  poster_path: Nullable<string>
  favorite_count: number
  item_count: number
  iso_639_1: LanguageCode
  list_type: 'movie' | 'tv'
}
