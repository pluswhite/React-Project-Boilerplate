import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Col, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'

import { validateEmail, validatePassword } from './user-validators'

import './login.scss'

const css = {
	signupBlock: { textAlign: 'center', marginTop: '1em' },
	signupSpan: { paddingRight: '0.5em' },
	panelTitle: { fontSize: '.5rem' }
}

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
			<Grid>
				<Col md={8}>
					<Panel><Col xs={10} xsPush={1}>
            <h2 style={css.panelTitle}>Login with email</h2>
						<Form horizontal>
							<FormGroup controlId="loginEmail" validationState={this.getValidationState('email')}>
								<Col componentClass={ControlLabel} sm={2}>
									<ControlLabel>
										Email
									</ControlLabel>
								</Col>
								<Col sm={10}>
									<FormControl type="email" placeholder="Email"
										value={email.value}
										onChange={this.onChange('email')}
									/>
									<FormControl.Feedback />
									<HelpBlock>
										{email.error}
									</HelpBlock>
								</Col>
							</FormGroup>
							<FormGroup controlId="loginPassword" validationState={this.getValidationState('password')}>
								<Col componentClass={ControlLabel} sm={2}>
									Password
								</Col>
								<Col sm={10}>
									<FormControl type="password" placeholder="Password"
										value={password.value}
										onChange={this.onChange('password')}
									/>
									<FormControl.Feedback />
									<HelpBlock>
										{password.error}
									</HelpBlock>
								</Col>
							</FormGroup>

							<Button bsStyle="primary" block
								disabled={!formIsReady}
								onClick={this.onLoginClick}>
								Log in
							</Button>
						</Form>
						<HelpBlock style={css.signupBlock}>
								<span style={css.signupSpan}>
									Don't have an account yet?
								</span>
								<Link to="/register">Register</Link>
						</HelpBlock>
					</Col></Panel>
				</Col>
			</Grid>
		)
	}

  /*render() {
    // console.log(this.props)
    const { fetchAuth } = this.props
    return (
      <div>
        <h2>Auth</h2>
        <button onClick={fetchAuth}>
          Fetch Auth
        </button>
      </div>
    )
  }*/
}

export default Login
