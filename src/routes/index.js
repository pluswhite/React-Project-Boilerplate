// We only need to import the modules necessary for initial render
import auth from 'react-jwt-auth-redux'
import CoreLayout from '../layouts/CoreLayout'
import HomeRoute from './Home'
import RegisterRoute from './Register'
import LoginRoute from './Login'
import LogoutRoute from './Logout'
import AccountRoute from './Account'

// Auth route check
const authRouteCheck = (nextState, replace, authState, redirectPath) => {
  // console.log(auth.isAuthenticated())
  if (auth.isAuthenticated() !== authState) {
    replace(redirectPath)
  }
}

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */
export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : HomeRoute(store),
  childRoutes : [
    LoginRoute(store, authRouteCheck),
    LogoutRoute(store, authRouteCheck),
    AccountRoute(store, authRouteCheck),
    RegisterRoute(store, authRouteCheck)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
