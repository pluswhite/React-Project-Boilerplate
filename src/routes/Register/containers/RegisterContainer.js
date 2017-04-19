import { connect } from 'react-redux'
import auth from 'react-jwt-auth-redux'
import { browserHistory } from 'react-router'

import Register from '../components/Register'

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleSignup: loginData => auth
		.signup(loginData)
		.then(() => browserHistory.push('/'))
		.catch(err => console.error(err)),
	onSignInSuccess: () => browserHistory.push('/')
})

export default connect(false, mapDispatchToProps)(Register)
