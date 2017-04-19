import React, { Component } from 'react'
import ListSection from '../../../components/ListSection'
import ListLoading from '../../../components/ListLoading'
import './HomeView.scss'

class HomeView extends Component {
  render() {
    const { fetchNews } = this.props
    return (
      <div className="list_content">
        {/*<button type="button" onClick={fetchNews}>
          Fetch News.
        </button>*/}
        <ListSection />
        <ListSection />
        <ListSection />
        <ListSection />
        <ListSection />
        <ListLoading />
      </div>
    )
  }
}

export default HomeView
