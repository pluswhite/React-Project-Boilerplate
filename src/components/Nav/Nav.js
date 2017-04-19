import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import './Nav.scss'

class Nav extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { authenticated, dispatch } = this.props
    return (
      <div className="top_menu_bar">
        <div className="top_menu_list">
          <IndexLink className="btn" to='/' activeClassName='active'>
            Home
          </IndexLink>
          <Link className="btn" to='/counter' activeClassName='active'>
            Counter
          </Link>
          <Link className="btn" to='/zen' activeClassName='active'>
            Zen
          </Link>
          {!authenticated &&
            <Link className="btn" to='/login' activeClassName='active'>
              Login
            </Link>
          }
          {authenticated &&
            <Link className="btn" to='/account' activeClassName='active'>
              Account
            </Link>
          }
          {authenticated &&
            <Link className="btn" to='/logout' activeClassName='active'>
              Logout
            </Link>
          }
          {!authenticated &&
            <Link className="btn" to='/register' activeClassName='active'>
              Register
            </Link>
          }
          {/*<Link className="btn" to='/login' activeClassName='active'>
            Login
          </Link>
          <Link className="btn" to='/account' activeClassName='active'>
            Account
          </Link>
          <Link className="btn" to='/logout' activeClassName='active'>
            Logout
          </Link>
          <Link className="btn" to='/register' activeClassName='active'>
            Register
          </Link>*/}
          {/*<a href="#" className="btn">SNS</a>
          <a href="#" className="btn">Tech</a>
          <a href="#" className="btn">Sports</a>
          <a href="#" className="btn">Inter</a>
          <a href="#" className="btn">Fashion</a>*/}
        </div>
      </div>
    );
  }
}

export default Nav;
