import { BaseAPI } from '../base'
import type {
  NetworkAlternativeNamesResponse,
  NetworkDetailsResponse,
  NetworkImagesResponse,
} from './types'

export class NetworksAPI extends BaseAPI {
  /**
   * Get the details of a network.
   *
   * @see https://developers.themoviedb.org/3/networks/get-network-details
   */
  public async details(networkId: number): Promise<NetworkDetailsResponse> {
    const path = this.getPath(`/network/${networkId}`)

    return this.get<NetworkDetailsResponse>(path)
  }

  /**
   * Get the alternative names of a network.
   *
   * @see https://developers.themoviedb.org/3/networks/get-network-alternative-names
   */
  public async alternativeNames(
    networkId: number
  ): Promise<NetworkAlternativeNamesResponse> {
    const path = this.getPath(`/network/${networkId}/alternative_names`)

    return this.get<NetworkAlternativeNamesResponse>(path)
  }

  /**
   * Get the TV network logos by id.
   *
   * There are two image formats that are supported for networks, PNG's and SVG's. You can see which
   * type the original file is by looking at the file_type field. We prefer SVG's as they are
   * resolution independent and as such, the width and height are only there to reflect the original
   * asset that was uploaded. An SVG can be scaled properly beyond those dimensions if you call them
   * as a PNG.
   *
   * For more information about how SVG's and PNG's can be used, take a read through https://developers.themoviedb.org/3/getting-started/images.
   *
   * @see https://developers.themoviedb.org/3/networks/get-network-images
   */
  public async images(networkId: number): Promise<NetworkImagesResponse> {
    const path = this.getPath(`/network/${networkId}/images`)

    return this.get<NetworkImagesResponse>(path)
  }
}
