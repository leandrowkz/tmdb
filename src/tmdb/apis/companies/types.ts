import { Image, Nullable, CountryCode, TMDBResponse } from 'src/types'

export type Company = {
  id: number
  name: string
  logo_path: Nullable<string>
  origin_country?: CountryCode
}

export type CompanyDetails = {
  id: number
  name: string
  description: string
  headquarters: string
  homepage: string
  logo_path: string
  origin_country: CountryCode
  parent_company: Nullable<CompanyDetails>
}

export type DetailsResponse = TMDBResponse<CompanyDetails>

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
