import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    errorMsg: '',
    userName: '',
    passWord: '',
    showError: false,
  }

  userNameChange = e => {
    this.setState({userName: e.target.value})
  }

  passwordChange = e => {
    this.setState({passWord: e.target.value})
  }

  submitForm = async e => {
    e.preventDefault()
    const {userName, passWord} = this.state
    const bodyDetails = {
      username: userName,
      password: passWord,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(bodyDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      const {history} = this.props
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      const message = data.error_msg
      this.setState({showError: true, errorMsg: message})
    }
  }

  render() {
    const {errorMsg, userName, passWord, showError} = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-login-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="website-logo"
            alt="website logo"
          />
          <form className="login-form" onSubmit={this.submitForm}>
            <label className="label" htmlFor="input1">
              USERNAME
            </label>
            <input
              type="text"
              className="input-element"
              id="input1"
              placeholder="Username"
              value={userName}
              onChange={this.userNameChange}
            />
            <label className="label" htmlFor="input2">
              PASSWORD
            </label>
            <input
              type="password"
              className="input-element"
              id="input2"
              placeholder="Password"
              value={passWord}
              onChange={this.passwordChange}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            {showError && <p className="error-display">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
