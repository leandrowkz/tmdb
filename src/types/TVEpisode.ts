export interface TVEpisode {
  id: number
  season_number: number
  air_date: string
  episode_number: 1
  name: string
  overview: string
  production_code: string
  still_path: string
  vote_average: number
  vote_count: number
  crew: {
    id: number
    credit_id: string
    name: string
    department: string
    job: string
    profile_path: string
  }[]
  guest_stars: {
    id: number
    credit_id: string
    name: string
    character: string
    order: number
    profile_path: string
  }[]
}
