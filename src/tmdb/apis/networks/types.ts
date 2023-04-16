import { Image } from 'src/types/Image'
import { Nullable } from 'src/types/Nullable'
import { TMDBResponse } from 'src/types/TMDBResponse'

export type Network = {
  id: number
  name: string
  origin_country: string
  headquarters: string
  homepage: string
  logo_path: Nullable<string>
}

export type DetailsResponse = TMDBResponse<Network>

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
