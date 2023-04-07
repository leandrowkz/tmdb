export interface Credit {
  id: string
  media_type: 'tv' | 'movie'
  credit_type: 'cast' | 'crew'
  department: string
  job: string
  media: {
    id: number
    name: string
    original_name: string
    character: string
    episodes: number[]
    seasons: {
      air_date: string
      poster_path: string
      season_number: number
    }[]
  }
  person: {
    id: number
    name: string
  }
}
