import { BaseAPI } from './BaseAPI'

describe('BaseAPI', () => {
  test('should throw error if url is not provided', async () => {
    const action = () => new BaseAPI({ apiKey: 'API_KEY' })

    expect(action).toThrowError()
    expect(action).toThrow('Missing URL')
  })

  test('getPath should return properly', async () => {
    const api = new BaseAPI({ url: 'URL', apiKey: 'API_KEY' })

    const queryString = {
      fooString: 'bar',
      fooArray: ['OPTION_1', 'OPTION_2'],
      fooBoolean: false,
      fooNumber: 100,
    }

    const path = api['getPath']('/path', queryString)

    expect(path).toEqual(
      '/path?fooString=bar&fooArray=OPTION_1%2COPTION_2&fooBoolean=false&fooNumber=100&api_key=API_KEY'
    )
  })
})
