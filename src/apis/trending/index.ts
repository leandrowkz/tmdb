import { BaseAPI } from '../base'
import type { TrendingResponse } from './types'

export class TrendingAPI extends BaseAPI {
  /**
   * Get the daily or weekly trending movies. The daily trending list tracks
   * items over the period of a day while items have a 24 hour half life.
   * The weekly list tracks items over a 7 day period, with a 7 day half life.
   *
   * @see https://developers.themoviedb.org/3/trending/get-trending
   */
  public async getTrending(
    mediaType: 'all' | 'movie' | 'tv' | 'person',
    timeWindow: 'day' | 'week'
  ): Promise<TrendingResponse> {
    const path = this.getPath(`/trending/${mediaType}/${timeWindow}`)

    return this.get<TrendingResponse>(path)
  }
}
