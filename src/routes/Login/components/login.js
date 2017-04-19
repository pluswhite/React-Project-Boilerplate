import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import { validateEmail, validatePassword } from './user-validators'

import './login.scss'

class Login extends Component {
  static propTypes = {
    onLoginFormSubmit: PropTypes.func.isRequired,
    children: PropTypes.node
  }

  constructor(props) {
		super(props)

		this.state = {
			email:  { value: '', valid: false, error: null},
			password: { value: '', valid: false, error: null }
		}

		this.onLoginClick = this.onLoginClick.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onSignInSuccess = this.props.onSignInSuccess.bind(this)
	}

	onChange(key) {
		return (event) => {
			let value = event.target.value
			let validated =  this.validate(key, value)
			this.setState({
				[key]: {
					value: value,
					valid: validated.valid,
					error: validated.error
				}
			})
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
		}
		return true
	}

	onLoginClick () {
		this.props.onLoginFormSubmit({
			email: this.state.email.value,
			password: this.state.password.value
		})
	}

	render() {
		let email = this.state.email
		let password = this.state.password
		let formIsReady = email.valid && password.valid

		const tooltip = (msg) => (
  		!!msg ? <Tooltip id="tooltip"><strong>{msg}</strong></Tooltip> : false
		);

		return (
			<div className="container">
        <h2>Login with email</h2>
        <form className="form-horizontal">
          <div className="form-group has-feedback has-success">
            <label htmlFor="loginEmail" className="control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" placeholder="Email" id="loginEmail" className="form-control" value={email.value} onChange={this.onChange('email')} />
              <span className="form-control-feedback glyphicon glyphicon-ok"></span>
              <div className="help-block">{email.error}</div>
            </div>
          </div>
          <div className="form-group has-feedback">
            <label htmlFor="loginPassword" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" placeholder="Password" id="loginPassword" className="form-control" value={password.value} onChange={this.onChange('password')} />
              <span className="form-control-feedback glyphicon glyphicon-ok"></span>
              <div className="help-block">{password.error}</div>
            </div>
          </div>
          <button className="btn btn-primary btn-block" disabled={!formIsReady} onClick={this.onLoginClick} type="button">Log in</button>
        </form>
        <div className="help-block" style={{textAlign: 'inherit', marginTop: '1em'}}>
          <span style={{paddingRight: '0.5em'}}>Don't have an account yet?</span>
          <Link to="/register">Register</Link>
        </div>
      </div>
		)
	}
}

export default Login
