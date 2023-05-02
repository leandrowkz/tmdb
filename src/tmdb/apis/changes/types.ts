import { Nullable, TMDBResponseList } from 'src/types'
import { Filters } from 'src/types/filters'

export type ChangesFilters = Pick<Filters, 'end_date' | 'start_date' | 'page'>

export type ChangesResponse = TMDBResponseList<{
  id: number
  adult: Nullable<boolean>
}>
