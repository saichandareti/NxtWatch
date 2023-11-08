import styled from 'styled-components'

export const SidebarCon = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.DarkTheme ? '#181818' : '#f9f9f9')};
`
export const UpperCon = styled.div`
  height: 45vh;
  width: 300px;
  padding: 20px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 0px;
  margin: 0px;
`
export const LowerCon = styled.div`
  height: 50vh;
  width: 300px;
  padding-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const OptionCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //   justify-content: center;
  color: #383838;
  height: 38px;
  color: ${props => (props.DarkTheme ? '#f1f1f1' : '#231f20')};
  background-color: ${props => (props.isActive ? '#cccccc' : 'transparent')};
`
export const Option = styled.p`
  color: ${props => (props.DarkTheme ? '#f1f1f1' : '#231f20')};
  margin-left: 10px;
  font-weight: ${props => (props.contact ? 'bold' : 'normal')};
  font-family: 'Roboto';
`
export const EndPara = styled.p`
  color: ${props => (props.DarkTheme ? '#f1f1f1' : '#231f20')};
  margin-left: 10px;
  font-family: 'Roboto';
  width: 150px;
`
export const Social = styled.img`
  height: 30px;
  margin-left: 10px;
`
