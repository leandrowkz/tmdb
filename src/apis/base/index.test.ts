import { BaseAPI } from '.'
import { Fetcher } from 'src/core/Fetcher'
import type { TMDBOptions } from 'src/types'

jest.mock('src/core/Fetcher')

describe('BaseAPI', () => {
  test('should set API url with default value', async () => {
    const options: TMDBOptions = { apiKey: 'API_KEY' }

    new BaseAPI(options)

    expect(Fetcher).toHaveBeenCalledWith(BaseAPI.API_URL_V3, false)
  })

  test('should pass down to Fetcher correct params', async () => {
    const options: TMDBOptions = {
      apiKey: 'API_KEY',
      url: 'CUSTOM_URL',
      debug: true,
    }

    new BaseAPI(options)

    expect(Fetcher).toHaveBeenCalledWith('CUSTOM_URL', true)
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
