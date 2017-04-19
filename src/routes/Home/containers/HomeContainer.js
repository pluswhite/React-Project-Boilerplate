import { connect } from 'react-redux'
import { fetchNews } from '../modules/home'

import Home from '../components/HomeView'

const mapActionCreators = {
  fetchNews
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapActionCreators)(Home)
