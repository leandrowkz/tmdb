import { ReviewsAPI } from '.'

const makeSUT = () => {
  const api = new ReviewsAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api }
}

describe('Reviews API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.details('REVIEW_ID')

    expect(api['get']).toHaveBeenCalledWith('/review/REVIEW_ID?api_key=API_KEY')
  })
})
