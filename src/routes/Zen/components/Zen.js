import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Zen.scss'

class Zen extends Component {
  static propTypes = {
    zen: PropTypes.object,
    saved: PropTypes.array.isRequired,
    fetchZen: PropTypes.func.isRequired,
    saveCurrentZen: PropTypes.func.isRequired
  }

  render() {
    // console.log(this.props)
    const { zen, saved, fetchZen, saveCurrentZen } = this.props
    // console.log(saved)
    return (
      <div>
        <div>
          <h2 className="zenHeader">
            {zen ? zen.value : ''}
          </h2>
          <button className="btn btn-default" onClick={fetchZen}>
            Fetch a wisdom
          </button>
          {' '}
          <button className="btn btn-default" onClick={saveCurrentZen}>
            Save
          </button>
        </div>
        {saved.length ?
          <div className="savedWisdoms">
            <h3>
              Saved wisdoms
            </h3>
            <ul>
              {saved.map(item => (
                <li key={item.id}>
                  {item.value}
                </li>
                )
              )}
            </ul>
          </div>
          : null
        }
      </div>
    )
  }
}

export default Zen
