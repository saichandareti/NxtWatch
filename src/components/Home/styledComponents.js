import styled from 'styled-components'

export const Banner = styled.div`
  height: 250px;
  width: 75vw;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
`
export const HomeBgContainer = styled.div`
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`
export const HomeContainer = styled.div`
  height: 90vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${props => (props.DarkTheme ? '#181818' : '#f9f9f9')};
`
export const BannerUpper = styled.div`
  height: 60px;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const HomeLogo = styled.img`
  height: 30px;
`
export const IntoButton = styled.button`
  background-color: transparent;
  border: 0px solid;
  cursor: pointer;
  font-weight: 400;
  color: #231f20;
  font-size: 10px;
  margin-top: 0px;
`
export const BannerLower = styled.div`
  height: 140px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const PlanPara = styled.p`
  font-size: 20px;
  color: #212121;
  font-family: 'Roboto';
`
export const GetButton = styled.button`
  background-color: transparent;
  border: 1px solid #00306e;
  cursor: pointer;
  font-weight: 400;
  color: #00306e;
  font-size: 15px;
  margin-top: 0px;
  width: 150px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 500;
`
export const InputCon = styled.div`
  height: 30px;
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #64748b;
  margin-top: 20px;
`
export const Input = styled.input`
  width: 350px;
  height: 100%;
  background-color: transparent;
  padding: 6px;
  border: 0px solid;
  outline: none;
`
export const SearchButton = styled.button`
  background-color: #ebebeb;
  border: 0px solid;
  cursor: pointer;
  font-weight: 400;
  color: #231f20;
  font-size: 15px;
  margin-top: 0px;
  width: 50px;
  height: 100%;
  border-left: 1px solid #64748b;
`
export const VideosList = styled.ul`
  width: 79vw;
  height: auto;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${props => (props.DarkTheme ? '#181818' : '#f9f9f9')};
`
export const FailureCon = styled.div`
  height: 90vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 300px;
`
export const FailureHeading = styled.h1`
  font-size: 24px;
  color: #212121;
  font-family: 'Roboto';
`
export const FailurePara = styled.p`
  font-size: 16px;
  color: #475569;
  font-family: 'Roboto';
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  border: 0px solid;
  cursor: pointer;
  font-weight: 400;
  color: #ffffff;
  font-size: 15px;
  margin-top: 0px;
  width: 100px;
  height: 50px;
  border-left: 1px solid #64748b;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
`
