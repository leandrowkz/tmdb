import { BaseAPI } from '../base'
import type { ReviewDetailsResponse } from './types'

export class ReviewsAPI extends BaseAPI {
  /**
   * Retrieve the details of a movie or TV show review.
   *
   * @see https://developers.themoviedb.org/3/reviews/get-review-details
   */
  public async details(reviewId: string): Promise<ReviewDetailsResponse> {
    const path = this.getPath(`/review/${reviewId}`)

    return this.get<ReviewDetailsResponse>(path)
  }
}
