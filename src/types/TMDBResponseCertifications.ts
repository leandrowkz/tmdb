import { Certification } from './Certification'
import { TMDBResponse } from './TMDBResponse'

export type MovieResponse = TMDBResponse<{
  certifications: {
    US: Certification[]
    CA: Certification[]
    DE: Certification[]
    GB: Certification[]
    AU: Certification[]
    BR: Certification[]
    FR: Certification[]
    NZ: Certification[]
    IN: Certification[]
  }
}>

export type TVResponse = TMDBResponse<{
  certifications: {
    US: Certification[]
    CA: Certification[]
    AU: Certification[]
    FR: Certification[]
    RU: Certification[]
    DE: Certification[]
    TH: Certification[]
    KR: Certification[]
    GB: Certification[]
    BR: Certification[]
  }
}>
