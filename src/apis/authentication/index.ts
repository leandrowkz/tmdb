import { BaseAPI } from '../base'
import {
  AuthenticationCreateGuestSessionResponse,
  AuthenticationCreateRequestTokenResponse,
  AuthenticationCreateSessionBody,
  AuthenticationCreateSessionConvertV4Body,
  AuthenticationCreateSessionResponse,
  AuthenticationCreateSessionWithLoginBody,
  AuthenticationCreateSessionWithLoginResponse,
  AuthenticationDeleteSessionBody,
  AuthenticationDeleteSessionResponse,
} from './types'

export class AuthenticationAPI extends BaseAPI {
  /**
   * This method will let you create a new guest session. Guest sessions are a type of session
   * that will let a user rate movies and TV shows but not require them to have a TMDB user
   * account. More information about user authentication can be found https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id.
   *
   * Please note, you should only generate a single guest session per user (or device) as you will
   * be able to attach the ratings to a TMDB user account in the future. There is also IP limits in
   * place so you should always make sure it's the end user doing the guest session actions.
   *
   * If a guest session is not used for the first time within 24 hours, it will be automatically
   * deleted.
   *
   * @see https://developers.themoviedb.org/3/authentication/create-guest-session
   */
  public async createGuestSession(): Promise<AuthenticationCreateGuestSessionResponse> {
    const path = this.getPath('/authentication/guest_session/new')

    return this.get<AuthenticationCreateGuestSessionResponse>(path)
  }

  /**
   * Create a temporary request token that can be used to validate a TMDB user login. More details
   * about how this works can be found https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id.
   *
   * @see https://developers.themoviedb.org/3/authentication/create-request-token
   */
  public async createRequestToken(): Promise<AuthenticationCreateRequestTokenResponse> {
    const path = this.getPath('/authentication/token/new')

    return this.get<AuthenticationCreateRequestTokenResponse>(path)
  }

  /**
   * You can use this method to create a fully valid session ID once a user has validated the
   * request token. More information about how this works can be found https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id.
   *
   * @see https://developers.themoviedb.org/3/authentication/create-session
   */
  public async createSession(
    data: AuthenticationCreateSessionBody
  ): Promise<AuthenticationCreateSessionResponse> {
    const path = this.getPath('/authentication/session/new')

    return this.post<AuthenticationCreateSessionResponse>(path, data)
  }

  /**
   * This method allows an application to validate a request token by entering a username and
   * password.
   *
   * Not all applications have access to a web view so this can be used as a substitute.
   *
   * Please note, the preferred method of validating a request token is to have a user authenticate
   * the request via the TMDB website. You can read about that method https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id.
   *
   * If you decide to use this method please use HTTPS.
   *
   * @see https://developers.themoviedb.org/3/authentication/validate-request-token
   */
  public async createSessionWithLogin(
    data: AuthenticationCreateSessionWithLoginBody
  ): Promise<AuthenticationCreateSessionWithLoginResponse> {
    const path = this.getPath('/authentication/token/validate_with_login')

    return this.post<AuthenticationCreateSessionWithLoginResponse>(path, data)
  }

  /**
   * Use this method to create a v3 session ID if you already have a valid v4 access token. The v4
   * token needs to be authenticated by the user. Your standard "read token" will not validate to
   * create a session ID.
   *
   * @see https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token
   */
  public async createSessionConvertV4(
    data: AuthenticationCreateSessionConvertV4Body
  ): Promise<AuthenticationCreateSessionResponse> {
    const path = this.getPath('/authentication/session/convert/4')

    return this.post<AuthenticationCreateSessionResponse>(path, data)
  }

  /**
   * If you would like to delete (or "logout") from a session, call this method with a valid
   * session ID.
   *
   * @see https://developers.themoviedb.org/3/authentication/delete-session
   */
  public async deleteSession(
    data: AuthenticationDeleteSessionBody
  ): Promise<AuthenticationDeleteSessionResponse> {
    const path = this.getPath('/authentication/session')

    return this.delete<AuthenticationDeleteSessionResponse>(path, data)
  }
}
