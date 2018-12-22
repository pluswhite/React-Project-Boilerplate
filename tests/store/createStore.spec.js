import {
  default as createStore
} from 'store/createStore'

describe('(Store) createStore', () => {
  let store

  beforeAll(() => {
    store = createStore()
  })

  it('should have an empty asyncReducers object', () => {
    expect(typeof store.asyncReducers).toBe('object')
    expect(store.asyncReducers).toBeUndefined()
  })

  describe('(Location)', () => {
    it('store should be initialized with Location state', () => {
      const location = {
        pathname : '/echo'
      }
      store.dispatch({
        type    : 'LOCATION_CHANGE',
        payload : location
      })
      expect(store.getState().location).toEqual(location)
    })
  })
})
