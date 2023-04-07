import { Company } from './Company'
import { Image } from './Image'
import { TMDBResponse } from './TMDBResponse'

export type DetailsResponse = TMDBResponse<Company>

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
