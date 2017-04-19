import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Account.scss'

import defaultPicture from '../assets/avatar.png'

const bioMaxLength = 160
const defaultState = {
	displayName: '',
	email: '',
	bio: '',
	bioCharsLeft: bioMaxLength
}

class Account extends Component {
  static propTypes = {
    getProfile: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    refreshToken: PropTypes.func.isRequired,
    token: PropTypes.shape({
      payload: PropTypes.object.isRequired,
      raw: PropTypes.string.isRequired
    })
  }

  constructor(props) {
		super(props)
		this.state = defaultState
		this.onSubmit = this.onSubmit.bind(this)
		this.onRefresh = this.onRefresh.bind(this)
	}
	updateState(state) {
		let bio = state.bio || this.state.bio
		let bioCharsLeft = bioMaxLength - bio.length
		this.setState(Object.assign({}, state, {
			bioCharsLeft
		}))
	}
	componentDidMount () {
		this.props.getProfile()
			.then((data) => this.updateState({
				email: data.email,
				displayName: data.displayName,
				picture: data.picture,
				bio: data.bio || ''
			})).catch((err) => console.error(err))
	}

	onChange(field) {
		return (event) => this.updateState({
			[field]: event.target.value,
		})
	}

	onSubmit () {
		this.props.updateProfile({
			bio: this.state.bio
		})
	}

	onRefresh () {
		this.props.refreshToken()
	}

	render() {
    const { picture, token } = this.props
    let exp = new Date(token.payload.exp * 1000)
		let tokenExpiryDate = exp.toUTCString()
    // console.log(this.props)
		return (
      <div className="container">
        <h2>Account</h2>
        <div className="col-md-6">
          <form className="form-horizontal">
            <div className="col-sm-4 col-xs-12">
              <div className="form-group">
                <label htmlFor="profileImage" className="control-label">Avatar</label>
              </div>
              <img src={picture || defaultPicture} style={{height: '5rem'}} />
            </div>
            <div className="col-sm-8 col-xs-12">
              <div className="form-group">
                <label htmlFor="profileUsername" className="control-label">Name</label>
                <input type="text" disabled placeholder="Display name" id="profileUsername" className="form-control" value={this.state.displayName} onChange={this.onChange('displayName')} />
              </div>
              <div className="form-group">
                <label htmlFor="profileEmail" className="control-label">Email</label>
                <input type="email" disabled placeholder="Email" id="profileEmail" className="form-control" value={this.state.email} onChange={this.onChange('email')} />
              </div>
            </div>
            <div className="col-xs-12">
              <div className="form-group">
                <label htmlFor="profileBio" className="control-label">Bio</label>
                <textarea cols="30" rows="10" placeholder="Bio" id="profileBio" className="form-control" style={{border: '1px solid #ccc'}} value={this.state.bio} onChange={this.onChange('bio')}></textarea>
                <div className="pull-right help-block">{this.state.bioCharsLeft}</div>
              </div>
              <button type="button" className="pull-right btn btn-primary" onClick={this.onSubmit}>UpdateInformation</button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Refresh Token</h3>
          <div className="">
            <button type="button" className="btn-xs pull-right btn btn-default" onClick={this.onRefresh}>Refresh</button>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              <strong>{tokenExpiryDate}</strong>
              <div style={{width: '100%', marginBottom: '10px', overflowX: 'scroll'}}>
                <textarea style={{width: '100%', marginBottom: '10px', overflowX: 'scroll'}} rows="3" readOnly value={token.raw}></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default Account
