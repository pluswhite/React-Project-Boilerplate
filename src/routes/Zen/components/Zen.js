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
    const { zen, saved, fetchZen, saveCurrentZen } = this.props
    return (
      <div>
        <div>
          <h2>Zen</h2>
          <p>Example -- Fetch Remote Data</p>
          <h3 className="zenHeader">
            {zen ? zen.value : ''}
          </h3>
          <div>
            <button className="btn btn-default" onClick={fetchZen}>
              Fetch a wisdom
            </button>
            {' '}
            <button className="btn btn-default" onClick={saveCurrentZen}>
              Save
            </button>
          </div>
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
