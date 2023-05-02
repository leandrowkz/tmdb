import { BaseAPI } from '../../base-api'
import { DetailsResponse } from './types'

export class Reviews extends BaseAPI {
  /**
   * Retrieve the details of a movie or TV show review.
   *
   * @see https://developers.themoviedb.org/3/reviews/get-review-details
   */
  public async details(reviewId: string): Promise<DetailsResponse> {
    const path = this.getPath(`/review/${reviewId}`)

    return this.get<DetailsResponse>(path)
  }
}
