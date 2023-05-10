import type { TMDBResponse } from 'src/types'

export type CertificationCode =
  | '0'
  | '6'
  | '7'
  | '9'
  | '10'
  | '12'
  | '13'
  | '15'
  | '16'
  | '18'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'G'
  | 'M'
  | 'L'
  | 'P'
  | 'S'
  | 'U'
  | 'X'
  | 'AL'
  | 'KK'
  | 'NR'
  | 'PG'
  | 'RC'
  | 'UA'
  | '12A'
  | '18A'
  | '14A'
  | 'R18'
  | 'R18+'
  | 'X18+'
  | 'K-7'
  | 'K-12'
  | 'K-16'
  | 'K-18'
  | 'R-13'
  | 'R-16'
  | 'R-18'
  | 'PG-13'
  | 'NC-17'
  | 'MA15+'
  | 'APTA'
  | 'M/3'
  | 'M/6'
  | 'M/12'
  | 'M/14'
  | 'M/16'
  | 'M/18'
  | 'Públicos'

export type Certification = {
  certification: CertificationCode
  meaning: string
  order: number
}

export type CertificationMovieResponse = TMDBResponse<{
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

export type CertificationTVResponse = TMDBResponse<{
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
