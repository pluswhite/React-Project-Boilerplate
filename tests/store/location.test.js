import {
  LOCATION_CHANGE,
  locationChange,
  updateLocation,
  default as locationReducer
} from 'store/location'
import sinon from 'sinon'

describe('(Internal Module) Location', () => {
  it('Should export a constant LOCATION_CHANGE.', () => {
    expect(LOCATION_CHANGE).toEqual('LOCATION_CHANGE')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(typeof locationReducer).toBe('function')
    })

    it('Should initialize with a location object.', () => {
      expect(typeof locationReducer(undefined, {})).toBe('string')
      expect(locationReducer(undefined, {})).toBe('/')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = locationReducer(undefined, {})
      expect(typeof state).toBe('string')
      expect(state).toBe('/')

      state = locationReducer(state, { type: '@@@@@@@' })
      expect(state).toBe('/')

      const locationState = { pathname: '/yup' }
      state = locationReducer(state, locationChange(locationState))
      expect(state).toEqual(locationState)
      expect(state).toHaveProperty('pathname', '/yup')

      state = locationReducer(state, { type: '@@@@@@@' })
      expect(state).toEqual(locationState)
      expect(state).toHaveProperty('pathname', '/yup')
    })
  })

  describe('(Action Creator) locationChange', () => {
    it('Should be exported as a function.', () => {
      expect(typeof locationChange).toBe('function')
    })

    it('Should return an action with type "LOCATION_CHANGE".', () => {
      expect(locationChange()).toHaveProperty('type', LOCATION_CHANGE)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      const locationState = { pathname: '/yup' }
      expect(locationChange(locationState)).toHaveProperty('payload', locationState)
    })

    it('Should default the "payload" property to "/" if not provided.', () => {
      expect(locationChange()).toHaveProperty('payload', '/')
    })
  })

  describe('(Specialized Action Creator) updateLocation', () => {
    let _globalState
    let _dispatchSpy

    beforeEach(() => {
      _globalState = {
        location : locationReducer(undefined, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          location : locationReducer(_globalState.location, action)
        }
      })
    })

    it('Should be exported as a function.', () => {
      expect(typeof updateLocation).toBe('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(typeof updateLocation({ dispatch: _dispatchSpy })).toBe('function')
    })

    // it('Should call dispatch exactly once.', () => {
    //   updateLocation({ dispatch: _dispatchSpy })('/')
    //   expect(expect(_dispatchSpy).have.been.calledOnce)
    // })
  })
})
