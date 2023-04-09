import { Image } from '../../../types/Image'
import { TMDBResponse } from '../../../types/TMDBResponse'
import { CountryCode } from '../../../types/CountryCode'
import { Nullable } from '../../../types/Nullable'

export type Company = {
  id: number
  name: string
  description: string
  headquarters: string
  homepage: string
  logo_path: string
  origin_country: CountryCode
  parent_company: Nullable<Company>
}

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
