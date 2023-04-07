import { Nullable } from './Nullable'
import { TMDBResponseList } from './TMDBResponseList'

export type ChangesResponse = TMDBResponseList<{
  id: number
  adult: Nullable<boolean>
}>
