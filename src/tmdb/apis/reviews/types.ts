import { LanguageCode, Nullable, TMDBResponse } from 'src/types'

export type Review = {
  id: string
  content: string
  created_at: string
  updated_at: string
  url: string
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: Nullable<string>
    rating: number
  }
}

export type ReviewDetails = {
  id: string
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: Nullable<string>
    rating: Nullable<number>
  }
  media_id: number
  media_title: string
  media_type: 'movie' | 'tv'
  content: string
  created_at: string
  updated_at: string
  url: string
  iso_639_1: LanguageCode
}

export type DetailsResponse = TMDBResponse<ReviewDetails>
