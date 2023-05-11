import type { Image, Nullable, CountryCode, TMDBResponse } from '../../types'

export type Company = {
  id: number
  name: string
  description: string
  headquarters: string
  homepage: string
  logo_path: Nullable<string>
  origin_country: CountryCode
  parent_company: Nullable<Company>
}

export type CompanyItem = Pick<
  Company,
  'id' | 'name' | 'logo_path' | 'origin_country'
>

export type CompanyImages = {
  id: number
  logos: Image[]
}

export type CompanyAlternativeNames = {
  id: number
  results: {
    name: string
    type: string
  }[]
}

// Responses
export type CompanyDetailsResponse = TMDBResponse<Company>

export type CompanyAlternativeNamesResponse =
  TMDBResponse<CompanyAlternativeNames>

export type CompanyImagesResponse = TMDBResponse<CompanyImages>
