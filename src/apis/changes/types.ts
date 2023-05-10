import type { Nullable, TMDBResponseList } from 'src/types'
import type { Filters } from 'src/types/filters'

export type ChangesFilters = Pick<Filters, 'end_date' | 'start_date' | 'page'>

export type ChangesResponse = TMDBResponseList<{
  id: number
  adult: Nullable<boolean>
}>
