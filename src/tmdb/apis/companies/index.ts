import { BaseAPI } from '../BaseAPI'
import {
  DetailsResponse,
  ImagesResponse,
  AlternativeNamesResponse,
} from './types'

export class Companies extends BaseAPI {
  /**
   * Get company details by id.
   *
   * @see https://developers.themoviedb.org/3/collections/get-company-details
   */
  public async details(companyId: number): Promise<DetailsResponse> {
    const path = this.getPath(`/company/${companyId}`)

    return this.get<DetailsResponse>(path)
  }

  /**
   * Get the alternative names of a company.
   *
   * @see https://developers.themoviedb.org/3/companies/get-company-alternative-names
   */
  public async alternativeNames(
    companyId: number
  ): Promise<AlternativeNamesResponse> {
    const path = this.getPath(`/company/${companyId}/alternative_names`)

    return this.get<AlternativeNamesResponse>(path)
  }

  /**
   * Get a companies logos by id.
   * There are two image formats that are supported for companies, PNG's and SVG's. You can see
   * which type the original file is by looking at the file_type field. We prefer SVG's as they
   * are resolution independent and as such, the width and height are only there to reflect the
   * original asset that was uploaded. An SVG can be scaled properly beyond those dimensions if you
   * call them as a PNG.
   *
   * For more information about how SVG's and PNG's can be used, take a read through
   * https://developers.themoviedb.org/3/getting-started/images.
   *
   * @see https://developers.themoviedb.org/3/companies/get-company-images
   */
  public async images(companyId: number): Promise<ImagesResponse> {
    const path = this.getPath(`/company/${companyId}/images`)

    return this.get<ImagesResponse>(path)
  }
}
