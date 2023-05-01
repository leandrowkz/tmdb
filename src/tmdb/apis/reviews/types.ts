import { LanguageCode, Nullable, TMDBResponse } from 'src/types'

export type Review = {
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

export type ReviewItem = Pick<
  Review,
  | 'id'
  | 'content'
  | 'created_at'
  | 'updated_at'
  | 'url'
  | 'author'
  | 'author_details'
>

export type DetailsResponse = TMDBResponse<Review>
