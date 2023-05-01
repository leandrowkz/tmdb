import { Image, Nullable, TMDBResponse } from 'src/types'

export type Network = {
  id: number
  name: string
  origin_country: string
  headquarters: string
  homepage: string
  logo_path: Nullable<string>
}

export type NetworkItem = Pick<
  Network,
  'id' | 'name' | 'origin_country' | 'logo_path'
>

export type NetworkAlternativeNames = {
  id: number
  results: {
    name: string
    type: string
  }[]
}

export type NetworkImages = {
  id: number
  logos: Image[]
}

// Responses
export type DetailsResponse = TMDBResponse<Network>

export type AlternativeNamesResponse = TMDBResponse<NetworkAlternativeNames>

export type ImagesResponse = TMDBResponse<NetworkImages>
