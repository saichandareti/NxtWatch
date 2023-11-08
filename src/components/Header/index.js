import {Component} from 'react'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {BsMoon, BsSun} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  LogoImage,
  RightContainer,
  ThemeButton,
  LogoutButton,
  PopUpCon,
  ButtonCon,
  Caution,
  CancelButton,
  OutButton,
  PopupBg,
  ListItem,
} from './styledComponent'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {ChangeTheme, DarkTheme} = value

        const changeThemeColor = () => {
          ChangeTheme()
        }
        return (
          <HeaderContainer DarkTheme={DarkTheme}>
            <Link to="/" style={{'text-decoration': 'none'}}>
              {DarkTheme ? (
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              ) : (
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}
            </Link>
            <RightContainer>
              {DarkTheme ? (
                <ThemeButton
                  type="button"
                  onClick={changeThemeColor}
                  DarkTheme={DarkTheme}
                  data-testid="theme"
                >
                  <BsSun />
                </ThemeButton>
              ) : (
                <ThemeButton
                  type="button"
                  onClick={changeThemeColor}
                  DarkTheme={DarkTheme}
                  data-testid="theme"
                >
                  <BsMoon />
                </ThemeButton>
              )}
              <ListItem>
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ListItem>
              <PopupBg>
                <Popup
                  modal
                  trigger={
                    <ListItem>
                      <LogoutButton type="button" onClick={onClickLogout}>
                        Logout
                      </LogoutButton>
                    </ListItem>
                  }
                >
                  {close => (
                    <PopUpCon DarkTheme={DarkTheme}>
                      <Caution>Are you sure, you want to logout?</Caution>
                      <ButtonCon>
                        <CancelButton onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <OutButton onClick={onClickLogout}>Confirm</OutButton>
                      </ButtonCon>
                    </PopUpCon>
                  )}
                </Popup>
              </PopupBg>
            </RightContainer>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
