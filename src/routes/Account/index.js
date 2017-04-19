export default (store, authRouteCheck) => ({
  path: 'account',
  onEnter: (nextState, replace) => {
    authRouteCheck(nextState, replace, true, '/login')
  },
  getComponent(nextState, next) {
    require.ensure([
      './containers/AccountContainer',
    ], (require) => {
      const Account = require('./containers/AccountContainer').default

      next(null,Account)
    })
  }
})
