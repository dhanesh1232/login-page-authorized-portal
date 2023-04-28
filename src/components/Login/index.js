// Write your JS code here

import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  changeRoutePage = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  changeDisplayLogin = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.changeRoutePage(data.jwt_token)
    }
  }

  render() {
    return (
      <div className="login-page">
        <h1>Please Login</h1>
        <button type="button" onClick={this.changeDisplayLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
