import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoImage = styled.img`
  height: 30px;
`
export const RightContainer = styled.div`
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px solid;
  font-size: 30px;
  cursor: pointer;
  color: ${props => (props.profile ? ' #3b82f6' : '')};
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid #3b82f6;
  font-size: 10px;
  cursor: pointer;
  color: #3b82f6;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: bold;
`
