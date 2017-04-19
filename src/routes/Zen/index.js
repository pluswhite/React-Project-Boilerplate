import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'zen',
  getComponent(nextState, next) {
    require.ensure([
      './containers/ZenContainer',
      './modules/zen'
    ], (require) => {
      const Zen = require('./containers/ZenContainer').default
      const zenReducer = require('./modules/zen').default

      injectReducer(store, {
        key: 'zen',
        reducer: zenReducer
      })

      next(null, Zen)
    })
  }
})
