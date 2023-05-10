import type { TMDBResponse } from 'src/types'

// Body
export type AuthenticationCreateSessionBody = {
  request_token: string
}

export type AuthenticationCreateSessionWithLoginBody = {
  username: string
  password: string
  request_token: string
}

export type AuthenticationCreateSessionConvertV4Body = {
  access_token: string
}

export type AuthenticationDeleteSessionBody = {
  session_id: string
}

// Responses
export type AuthenticationCreateGuestSessionResponse = TMDBResponse<{
  success: boolean
  guest_session_id: string
  expires_at: string
}>

export type AuthenticationCreateRequestTokenResponse = TMDBResponse<{
  success: boolean
  token: string
  expires_at: string
}>

export type AuthenticationCreateSessionResponse = TMDBResponse<{
  success: boolean
  session_id: string
}>

export type AuthenticationCreateSessionWithLoginResponse = TMDBResponse<{
  success: boolean
  token: string
  expires_at: string
}>

export type AuthenticationDeleteSessionResponse = TMDBResponse<{
  success: boolean
}>
