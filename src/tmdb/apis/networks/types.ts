import { Image, Nullable, TMDBResponse } from 'src/types'

export type Network = {
  id: number
  name: string
  origin_country: string
  logo_path: Nullable<string>
}

export type NetworkDetails = {
  id: number
  name: string
  origin_country: string
  headquarters: string
  homepage: string
  logo_path: Nullable<string>
}

export type DetailsResponse = TMDBResponse<NetworkDetails>

export type AlternativeNamesResponse = TMDBResponse<{
  id: number
  results: {
    name: string
    type: string
  }[]
}>

export type ImagesResponse = TMDBResponse<{
  id: number
  logos: Image[]
}>
