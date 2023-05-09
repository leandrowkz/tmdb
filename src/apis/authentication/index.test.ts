import { AuthenticationAPI } from '.'

const makeSUT = () => {
  const bodies = {
    createSession: {
      request_token: 'REQUEST_TOKEN',
    },
    createSessionWithLogin: {
      username: 'USERNAME',
      password: 'PASSWORD',
      request_token: 'REQUEST_TOKEN',
    },
    createSessionConvertV4: {
      access_token: 'ACCESS_TOKEN',
    },
    deleteSession: {
      session_id: 'SESSION_ID',
    },
  }

  const api = new AuthenticationAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()
  api['post'] = jest.fn()
  api['delete'] = jest.fn()

  return { api, bodies }
}

describe('Authentication API', () => {
  test('createGuestSession should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.createGuestSession()

    expect(api['get']).toHaveBeenCalledWith(
      '/authentication/guest_session/new?api_key=API_KEY'
    )
  })

  test('createRequestToken should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.createRequestToken()

    expect(api['get']).toHaveBeenCalledWith(
      '/authentication/token/new?api_key=API_KEY'
    )
  })

  test('createSession should call TMDB URL properly', async () => {
    const { api, bodies } = makeSUT()

    await api.createSession(bodies.createSession)

    expect(api['post']).toHaveBeenCalledWith(
      '/authentication/session/new?api_key=API_KEY',
      bodies.createSession
    )
  })

  test('createSessionWithLogin should call TMDB URL properly', async () => {
    const { api, bodies } = makeSUT()

    await api.createSessionWithLogin(bodies.createSessionWithLogin)

    expect(api['post']).toHaveBeenCalledWith(
      '/authentication/token/validate_with_login?api_key=API_KEY',
      bodies.createSessionWithLogin
    )
  })

  test('createSessionConvertV4 should call TMDB URL properly', async () => {
    const { api, bodies } = makeSUT()

    await api.createSessionConvertV4(bodies.createSessionConvertV4)

    expect(api['post']).toHaveBeenCalledWith(
      '/authentication/session/convert/4?api_key=API_KEY',
      bodies.createSessionConvertV4
    )
  })

  test('deleteSession should call TMDB URL properly', async () => {
    const { api, bodies } = makeSUT()

    await api.deleteSession(bodies.deleteSession)

    expect(api['delete']).toHaveBeenCalledWith(
      '/authentication/session?api_key=API_KEY',
      bodies.deleteSession
    )
  })
})
