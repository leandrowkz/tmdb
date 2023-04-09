import { TMDBResponseList } from 'src/types/TMDBResponseList'
import { BaseAPI } from '../BaseAPI'
import { Movie } from '../movies/types'
import { TrendingFilters } from './types'

export class Trending extends BaseAPI {
  /**
   * Get the daily or weekly trending movies. The daily trending list tracks
   * items over the period of a day while items have a 24 hour half life.
   * The weekly list tracks items over a 7 day period, with a 7 day half life.
   *
   * @see https://developers.themoviedb.org/3/trending/get-trending
   */
  public async movies({
    media_type,
    time_window,
  }: TrendingFilters): Promise<TMDBResponseList<Movie[]>> {
    const path = this.getPath(`/trending/${media_type}/${time_window}`)

    return this.get<TMDBResponseList<Movie[]>>(path)
  }
}
