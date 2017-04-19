import React, { Component } from 'react'
import './HomeView.scss'

import DockImage from '../assets/Duck.jpg'

class HomeView extends Component {
  render() {
    const { fetchNews } = this.props
    return (
      <div className="list_content">
        <h2>Home Page</h2>
        <div style={{
          textAlign: 'center'
        }}>
          <img className="home-img" src={DockImage} alt="Yellow Dock" />
        </div>
      </div>
    )
  }
}

export default HomeView
