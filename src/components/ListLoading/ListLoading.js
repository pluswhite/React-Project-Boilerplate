import React, { Component } from 'react';
import './ListLoading.scss'

class ListLoading extends Component {
  render() {
    return (
      <div className="list_bottom">
        <section>
          <a href="#">
            Loading...
          </a>
        </section>
      </div>
    );
  }
}

export default ListLoading;
