import { BaseAPI } from '../../base-api'
import { DetailsFilters, DetailsResponse } from './types'

export class TVEpisodeGroupsAPI extends BaseAPI {
  /**
   * Get the details of a TV episode group. Groups support 7 different types which are enumerated
   * as the following:
   *
   * 1. Original air date
   * 2. Absolute
   * 3. DVD
   * 4. Digital
   * 5. Story arc
   * 6. Production
   * 7. TV
   *
   * @see https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details
   */
  public async details(
    episodeGroupId: number,
    filters?: DetailsFilters
  ): Promise<DetailsResponse> {
    const path = this.getPath(`/tv/episode_group/${episodeGroupId}`, filters)

    return this.get<DetailsResponse>(path)
  }
}
