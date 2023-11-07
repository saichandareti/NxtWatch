import {Component} from 'react'

import Cookies from 'js-cookie'
import {
  LoginBgContainer,
  LoginContainer,
  LogoImage,
  InputCon,
  Label,
  Input,
  ShowCon,
  LoginButton,
  ErrorM,
} from './styledComponents'

class Login extends Component {
  state = {
    nameInput: '',
    passwordInput: '',
    showError: false,
    errorMsg: '',
    showPassword: false,
  }

  OnChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  OnChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  OnSubmitSuccess = jwtToken => {
    this.setState({nameInput: '', passwordInput: ''})
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    console.log(jwtToken)
    const {history} = this.props
    history.replace('/')
  }

  OnSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  OnClickShow = event => {
    this.setState({showPassword: event.target.checked})
  }

  LoginCreds = async event => {
    event.preventDefault()

    const {nameInput, passwordInput} = this.state

    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: nameInput, password: passwordInput}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const jsonData = await response.json()

    if (response.ok === true) {
      Cookies.set('username', nameInput, {expires: 30})
      Cookies.set('password', passwordInput, {expires: 30})
      this.OnSubmitSuccess(jsonData.jwt_token)
    } else if (response.ok !== true) {
      this.OnSubmitFailure(jsonData.error_msg)
    }
  }

  render() {
    const {showError, errorMsg, passwordInput, showPassword} = this.state

    return (
      <LoginBgContainer>
        <LoginContainer>
          <LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <InputCon>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              type="text"
              placeholder="Username"
              id="username"
              onChange={this.OnChangeNameInput}
            />
          </InputCon>
          <InputCon>
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              value={passwordInput}
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.OnChangePasswordInput}
            />
          </InputCon>
          <ShowCon>
            <Input
              type="checkbox"
              id="show-password"
              onChange={this.OnClickShow}
            />
            <Label htmlFor="show-password" show>
              Show Password
            </Label>
          </ShowCon>
          <LoginButton type="submit" onClick={this.LoginCreds}>
            Login
          </LoginButton>
          {showError ? <ErrorM>{errorMsg}</ErrorM> : ''}
        </LoginContainer>
      </LoginBgContainer>
    )
  }
}

export default Login
