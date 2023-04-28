import { TMDBResponse } from 'src/types'

export type CreateSessionBody = {
  request_token: string
}

export type CreateSessionWithLoginBody = {
  username: string
  password: string
  request_token: string
}

export type CreateSessionConvertV4Body = {
  access_token: string
}

export type DeleteSessionBody = {
  session_id: string
}

export type CreateGuestSessionResponse = TMDBResponse<{
  success: boolean
  guest_session_id: string
  expires_at: string
}>

export type CreateRequestTokenResponse = TMDBResponse<{
  success: boolean
  token: string
  expires_at: string
}>

export type CreateSessionResponse = TMDBResponse<{
  success: boolean
  session_id: string
}>

export type CreateSessionWithLoginResponse = TMDBResponse<{
  success: boolean
  token: string
  expires_at: string
}>

export type DeleteSessionResponse = TMDBResponse<{
  success: boolean
}>
