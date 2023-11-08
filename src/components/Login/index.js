import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'
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
    const {
      showError,
      errorMsg,
      nameInput,
      passwordInput,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {DarkTheme} = value
          return (
            <LoginBgContainer DarkTheme={DarkTheme}>
              <LoginContainer DarkTheme={DarkTheme}>
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <InputCon>
                  <Label htmlFor="username" DarkTheme={DarkTheme}>
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={this.OnChangeNameInput}
                    value={nameInput}
                  />
                </InputCon>
                <InputCon>
                  <Label htmlFor="password" DarkTheme={DarkTheme}>
                    PASSWORD
                  </Label>
                  <Input
                    value={passwordInput}
                    type={showPassword ? 'text' : 'password'}
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
                  <Label htmlFor="show-password" DarkTheme={DarkTheme} show>
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
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
