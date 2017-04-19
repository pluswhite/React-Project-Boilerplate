import { connect } from 'react-redux'
import Header from '../components/Header'
import auth from 'react-jwt-auth-redux'

const mapStateToProps = (state) => {
  return {
    authenticated: auth.isAuthenticated()
  }
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(Header)
