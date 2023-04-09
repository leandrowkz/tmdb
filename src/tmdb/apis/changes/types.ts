import { Nullable } from '../../../types/Nullable'
import { TMDBResponseList } from '../../../types/TMDBResponseList'

export type ChangesFilters = {
  end_date?: string
  start_date?: string
  page?: number
}

export type ChangesResponse = TMDBResponseList<{
  id: number
  adult: Nullable<boolean>
}>
