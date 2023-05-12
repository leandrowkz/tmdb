import { CertificationsAPI } from '.'

const makeSUT = () => {
  const api = new CertificationsAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api }
}

describe('Certifications API', () => {
  test('movies should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.movie()

    expect(api['get']).toHaveBeenCalledWith(
      '/certification/movie/list?api_key=API_KEY'
    )
  })

  test('tv should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.tv()

    expect(api['get']).toHaveBeenCalledWith(
      '/certification/tv/list?api_key=API_KEY'
    )
  })
})
