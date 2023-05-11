import type { Nullable, TMDBResponse } from '../../types'
import type { NetworkItem } from '../networks/types'
import type { TVEpisode } from '../tv-episodes/types'
import type { Filters } from '../../types/filters'

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
export type TVEpisodeGroupDetailsFilters = Pick<Filters, 'language'>

// Responses
export type TVEpisodeGroupDetailsResponse = TMDBResponse<TVEpisodeGroup>
