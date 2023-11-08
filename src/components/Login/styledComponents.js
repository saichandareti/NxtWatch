import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.DarkTheme ? '#181818' : '#f9f9f9')};
`
export const LoginContainer = styled.form`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 box-shadow:${props => (props.DarkTheme ? '' : '20px 16px 20px 16px  #f4f4f4')}
  background-color: ${props => (props.DarkTheme ? '#000000' : '#f9f9f9')};
`
export const LogoImage = styled.img`
  height: 30px;
  margin-bottom: 40px;
`
export const Label = styled.label`
  font-size: 10px;
  font-family: 'Roboto';
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#000000')};
  font-weight: bold;
  margin-bottom: 4px;
  width: 300px;
`
export const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const Input = styled.input`
  background-color: transparent;
  padding: 6px;
  padding-left: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  width: ${props => (props.show ? '20px' : '300px')};
  outline: none;
  font-size: 10px;
`
export const ShowCon = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  width: 100px;
  align-self: flex-start;
  margin-left: 30px;
  margin-bottom: 20px;
  margin-right: 0px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: 0px solid;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  cursor: pointer;
`
export const ErrorM = styled.p`
  color: #ff0000;
  font-size: 10px;
  font-family: 'Roboto';
`
