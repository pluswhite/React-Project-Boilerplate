import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
// import FaUser from 'react-icons/fa/user'
import './Header.scss'
import Nav from '../../containers/NavContainer'

class Header extends Component {
  render() {
    // console.log(this.props)
    const FaRefresh = require('react-icons/lib/fa/refresh')
    const FaUser = require('react-icons/lib/fa/user')
    const FaEnvelopeO = require('react-icons/lib/fa/envelope-o')
    // console.log(FaUser)
    return (
      <div id="indexHeader" className="header">
        <div className="top_bar">
          {/*<div className="abs_l">
            <a href="#" className="msg_box">
              <FaEnvelopeO size={24} color='white' />
            </a>
          </div>*/}
          <div className="abs_m">
            React Starter Kit with Redux
            {' '}
            {/*<FaRefresh style={{
              fontSize: '12px',
              fontWeight: 'bold'
            }} />*/}
          </div>
          {/*<div className="abs_r">
            <Link className="search" to='/account'>
              <FaUser size={24} color='white' />
            </Link>
          </div>*/}
        </div>
        <Nav />
      </div>
    )
  }
}

export default Header
