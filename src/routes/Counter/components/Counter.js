import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    counter     : PropTypes.number.isRequired,
    doubleAsync : PropTypes.func.isRequired,
    increment   : PropTypes.func.isRequired
  }

  render() {
    const { counter, increment, doubleAsync } = this.props

    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Counter: {counter}</h2>
        <button className='btn btn-default' onClick={increment}>
          Increment
        </button>
        {' '}
        <button className='btn btn-default' onClick={doubleAsync}>
          Double (Async)
        </button>
      </div>
    )
  }
}

export default Counter
