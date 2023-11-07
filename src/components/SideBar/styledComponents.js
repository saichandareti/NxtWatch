import styled from 'styled-components'

export const SidebarCon = styled.div`
  height: 70vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const UpperCon = styled.div`
  height: 35vh;
  width: 300px;
  padding: 20px;
`
export const LowerCon = styled.div`
  height: 35vh;
  width: 300px;
  padding-left: 20px;
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
`
export const Option = styled.p`
  color: ${props => (props.contact ? '#606060' : '#231f20')};
  margin-left: 10px;
  font-weight: ${props => (props.contact ? 'bold' : 'normal')};
  font-family: 'Roboto';
`
export const EndPara = styled.p`
  color: #606060;
  margin-left: 10px;
  font-family: 'Roboto';
`
