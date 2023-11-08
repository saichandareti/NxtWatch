import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100vw;
  padding: 20px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.DarkTheme ? '#181818' : '#f9f9f9')};
`
export const LogoImage = styled.img`
  height: 30px;
`
export const RightContainer = styled.ul`
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
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#181818')};
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
export const PopUpCon = styled.div`
  height: 200px;
  width: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.DarkTheme ? '#212121' : '#ffffff')};
`
export const ListItem = styled.li`
  list-style-type: none;
`

export const ButtonCon = styled.div`
  height: 30px;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`
export const Caution = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #3b82f6;
`
export const CancelButton = styled.button`
  border: 1px solid #3b82f6;
  color: #3b82f6;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: transparent;
  cursor: pointer;
`
export const OutButton = styled.button`
  border: 1px solid #3b82f6;
  color: #ffffff;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #3b82f6;
  margin-left: 20px;
  cursor: pointer;
`
export const PopupBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
