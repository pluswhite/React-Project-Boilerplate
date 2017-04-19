import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../containers/HeaderContainer'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends Component {
  static propTypes = {
    children : PropTypes.element.isRequired
  }
  render() {
    const{ children } = this.props

    return (
      <div className='wrapper text-center'>
        <Header />
        <div className='core-layout__viewport'>
          {children}
        </div>
      </div>
    )
  }
}

export default CoreLayout
