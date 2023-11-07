import {Component} from 'react'
import {BsMoon} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'
import {
  HeaderContainer,
  LogoImage,
  RightContainer,
  ThemeButton,
  LogoutButton,
} from './styledComponent'

const Header = () => {
  let k
  return (
    <HeaderContainer>
      <LogoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <RightContainer>
        <ThemeButton type="button">
          <BsMoon />
        </ThemeButton>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <LogoutButton>Logout</LogoutButton>
      </RightContainer>
    </HeaderContainer>
  )
}
export default Header
