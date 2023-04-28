import { LanguageCode, Nullable, TMDBResponse } from 'src/types'
import { Network } from '../networks/types'
import { TVEpisode } from '../tv-episodes/types'

export type TVEpisodeGroup = {
  id: string
  name: string
  description: string
  episode_count: number
  group_count: number
  type: number
  network: Nullable<Network>
  groups?: {
    id: string
    name: string
    order: number
    episodes: TVEpisode[]
  }[]
}

// Filters
export type DetailsFilters = {
  language?: LanguageCode
}

// Responses
export type DetailsResponse = TMDBResponse<TVEpisodeGroup>
