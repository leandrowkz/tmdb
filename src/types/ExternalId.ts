import { Nullable } from './Nullable'

export type ExternalId = {
  id: number
  imdb_id: Nullable<string>
  freebase_mid: Nullable<string>
  freebase_id: Nullable<string>
  tvdb_id: Nullable<number>
  tvrage_id: Nullable<number>
  facebook_id: Nullable<string>
  instagram_id: Nullable<string>
  twitter_id: Nullable<string>
}
