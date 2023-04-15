import { Lists } from '.'

const makeSUT = () => {
  const filters = {
    details: {
      language: <const>'en-US',
    },
    itemStatus: {
      movie_id: 1414,
    },
    sessionId: {
      session_id: 'SESSION_ID',
    },
    clearList: {
      session_id: 'SESSION_ID',
      confirm: true,
    },
  }

  const bodies = {
    createList: {
      name: 'LIST',
      description: 'LIST_DESCRIPTION',
      language: <const>'en-US',
    },
    item: {
      media_id: 1414,
    },
  }

  const api = new Lists({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()
  api['post'] = jest.fn()
  api['delete'] = jest.fn()

  return { api, bodies, filters }
}

describe('Lists API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details('LIST_ID', filters.details)

    expect(api['get']).toHaveBeenCalledWith(
      '/list/LIST_ID?language=en-US&api_key=API_KEY'
    )
  })

  test('itemStatus should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.itemStatus('LIST_ID', filters.itemStatus)

    expect(api['get']).toHaveBeenCalledWith(
      '/list/LIST_ID/item_status?movie_id=1414&api_key=API_KEY'
    )
  })

  test('create should call TMDB URL properly', async () => {
    const { api, bodies, filters } = makeSUT()

    await api.create(bodies.createList, filters.sessionId)

    expect(api['post']).toHaveBeenCalledWith(
      '/list?session_id=SESSION_ID&api_key=API_KEY',
      bodies.createList
    )
  })

  test('addItem should call TMDB URL properly', async () => {
    const { api, bodies, filters } = makeSUT()

    await api.addItem('LIST_ID', bodies.item, filters.sessionId)

    expect(api['post']).toHaveBeenCalledWith(
      '/list/LIST_ID/add_item?session_id=SESSION_ID&api_key=API_KEY',
      bodies.item
    )
  })

  test('removeItem should call TMDB URL properly', async () => {
    const { api, bodies, filters } = makeSUT()

    await api.removeItem('LIST_ID', bodies.item, filters.sessionId)

    expect(api['post']).toHaveBeenCalledWith(
      '/list/LIST_ID/remove_item?session_id=SESSION_ID&api_key=API_KEY',
      bodies.item
    )
  })

  test('clear should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.clear('LIST_ID', filters.clearList)

    expect(api['post']).toHaveBeenCalledWith(
      '/list/LIST_ID/clear?session_id=SESSION_ID&confirm=true&api_key=API_KEY'
    )
  })

  test('remove should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.remove('LIST_ID', filters.sessionId)

    expect(api['delete']).toHaveBeenCalledWith(
      '/list/LIST_ID?session_id=SESSION_ID&api_key=API_KEY'
    )
  })
})
