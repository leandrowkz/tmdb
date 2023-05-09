import { Nullable, TMDBResponse } from 'src/types'
import { NetworkItem } from '../networks/types'
import { TVEpisode } from '../tv-episodes/types'
import { Filters } from 'src/types/filters'

export type TVEpisodeGroup = {
  id: string
  name: string
  description: string
  episode_count: number
  group_count: number
  type: number
  network: Nullable<NetworkItem>
  groups?: {
    id: string
    name: string
    order: number
    episodes: TVEpisode[]
  }[]
}

// Filters
export type DetailsFilters = Pick<Filters, 'language'>

// Responses
export type DetailsResponse = TMDBResponse<TVEpisodeGroup>
