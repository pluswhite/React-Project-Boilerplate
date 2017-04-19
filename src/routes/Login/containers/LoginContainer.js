import { connect } from 'react-redux'
import auth from 'react-jwt-auth-redux'
import { browserHistory } from 'react-router';
import { fetchAuth } from '../modules/login'

import Login from '../components/Login'

const mapDispatchToProps = (dispatch, ownProps) => ({
	onLoginFormSubmit: (loginData) => {
    auth.login(loginData)
		  .then(() => {
        browserHistory.push('/')
      })
		  .catch(err => {
        console.error(err)
      })
  },
	onSignInSuccess: () => browserHistory.push('/'),
  fetchAuth: fetchAuth
})

export default connect(false, mapDispatchToProps)(Login)
