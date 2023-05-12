import { CreditsAPI } from '.'

const makeSUT = () => {
  const api = new CreditsAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api }
}

describe('Credits API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.details('CREDIT_ID')

    expect(api['get']).toHaveBeenCalledWith('/credit/CREDIT_ID?api_key=API_KEY')
  })
})
