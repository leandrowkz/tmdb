import { CountryCode } from './CountryCode'
import { Nullable } from './Nullable'

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
