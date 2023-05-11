import { TMDBResponseError } from '.'

describe('TMDBResponseError', () => {
  test('Should format error properly', () => {
    const error = new TMDBResponseError('MESSAGE', 'STATUS_MESSAGE', 401)

    const response = {
      status: 'MESSAGE',
      status_message: 'STATUS_MESSAGE',
      status_code: 401,
    }

    expect(error.message).toEqual('MESSAGE')
    expect(error.statusMessage).toEqual('STATUS_MESSAGE')
    expect(error.statusCode).toEqual(401)
    expect(error.getResponse()).toEqual(response)
  })
})
