import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import { validateEmail, validateDisplayName, validatePassword, validatePassword2 } from './user-validators'

import './Register.scss'

class Register extends Component {
  static propTypes = {
    handleSignup: PropTypes.func.isRequired
  }

  constructor(props) {
		super(props)
		this.onSignupClick = this.onSignupClick.bind(this)
		this.onChange = this.onChange.bind(this)
    this.state = {
      displayName: { value: '', valid: false, error: null },
      email: { value: '', valid: false, error: null },
      password: { value: '', valid: false, error: null },
      password2: { value: '', valid: false, error: null },
    }

		this.onSignInSuccess = this.props.onSignInSuccess.bind(this)
	}

	isFormReady() {
		return this.state.displayName.valid
			&& this.state.email.valid
			&& this.state.password.valid
			&& this.state.password2.valid
	}

	onSignupClick () {
		this.props.handleSignup({
			displayName: this.state.displayName.value,
			email: this.state.email.value,
			password: this.state.password.value
		})
	}

	onChange(key) {
		return (event) => {
			let value = event.target.value
			let valid, error
			({valid, error} = this.validate(key, value))
			let state = {}
			state[key] = {
				value: value,
				valid: valid,
				error: error
			}
			this.setState(state)
		}
	}

	getValidationState(key) {
		if (!this.state[key].value) return
		return this.state[key].valid
			? 'success'
			: 'error'
	}

	validate(key, value) {
		switch (key) {
			case 'email': return validateEmail(value)
			case 'password': return validatePassword(value)
			case 'password2': return validatePassword2(value, this.state.password.value)
			case 'displayName': return validateDisplayName(value)
		}
		return true
	}

	render () {
		let email = this.state.email
		let displayName = this.state.displayName
		let password = this.state.password
		let password2 = this.state.password2

		return (
			<div className="container">
        <h2>Register account</h2>
        <form className="form-horizontal">
          <div className="form-group has-feedback">
            <label htmlFor="signupDisplayName" className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" placeholder="Display name" id="signupDisplayName" className="form-control" value={displayName.value} onChange={this.onChange('displayName')} />
              <div className="help-block"></div>
            </div>
          </div>
          <div className="form-group has-feedback">
            <label htmlFor="signupEmail" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" placeholder="Email" id="signupEmail" className="form-control" className="form-control" value={email.value} onChange={this.onChange('email')} />
              <div className="help-block"></div>
            </div>
          </div>
          <div className="form-group has-feedback">
            <label htmlFor="signupPassword" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" placeholder="Password" value="" id="signupPassword" value={password.value} onChange={this.onChange('password')} />
              <div className="help-block"></div>
            </div>
          </div>
          <div className="form-group has-feedback">
            <label htmlFor="signupPassword2" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" placeholder="Confirm Password" id="signupPassword2" className="form-control" value={password2.value} onChange={this.onChange('password2')} />
              <div className="help-block"></div>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-block" onClick={this.onSignupClick} disabled={!this.isFormReady()}>Register</button>
          <div className="help-block" style={{textAlign: 'inherit', marginTop: '1em'}}>
            <span style={{paddingRight: '0.5em'}}>Registered already?</span>
            <Link to="/login">Log in</Link>
          </div>
        </form>
      </div>
		)
	}
}

export default Register
