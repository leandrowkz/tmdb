import { Nullable } from 'src/types/Nullable'
import { Network } from '../networks/types'

export type TVEpisodeGroup = {
  id: string
  name: string
  description: string
  episode_count: number
  group_count: number
  type: number
  network: Nullable<Network>
}
