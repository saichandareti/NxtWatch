import styled from 'styled-components'

export const Banner = styled.div`
  //height: 2000px;
  width: 75vw;
  // background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 0px;
  background-color: ${props => (props.DarkTheme ? '#0f0f0f ' : '#f9f9f9')};
`
export const HomeBgContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`
export const HomeContainer = styled.div`
  height: 90vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.DarkTheme ? '#0f0f0f ' : '#f9f9f9')};
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
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#181818')};
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
  width: 100%;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#181818')};
`
export const FailurePara = styled.p`
  font-size: 16px;
  color: #475569;
  font-family: 'Roboto';
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#181818')};
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
export const VideoLower = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const VideoRight = styled.div`
  height: 60px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 50px;
`
export const VideoLeft = styled.div`
  height: 60px;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`
export const Profile = styled.img`
  height: 40px;
  align-self: flex-start;
`
export const VideoName = styled.p`
  font-size: 17px;
  color: #231f20;
  font-family: 'Roboto';
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#181818')};
`
export const LikeName = styled.p`
  font-size: ${props => (props.sub ? '12px' : '15px')};
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  margin-right: 10px;
  height: 20px;
`
export const ChannelName = styled.p`
  font-size: ${props => (props.sub ? '12px' : '15px')};
  color: ${props => (props.sub ? '#7e858e' : '#231f20')};
  font-family: 'Roboto';
  margin-right: 10px;
  height: 20px;
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#181818')};
`

export const DislikeName = styled.p`
  font-size: ${props => (props.sub ? '12px' : '15px')};
  color: ${props => (props.disliked ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  margin-right: 10px;
  height: 20px;
`

export const SaveName = styled.p`
  font-size: ${props => (props.sub ? '12px' : '15px')};
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  margin-right: 10px;
  height: 20px;
`
export const ViewsCon = styled.div`
  height: 60px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
`
export const LikeCon = styled.div`
  height: 50px;
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const DislikeCon = styled.div`
  height: 50px;
  width: 80;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
export const SaveCon = styled.div`
  height: 50px;
  width: 80;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
export const LikeButton = styled.button`
  color: ${props => (props.liked ? ' #2563eb ' : '#64748b')};
  border: 0px solid;
  cursor: pointer;
`
export const DislikeButton = styled.button`
  color: ${props => (props.disliked ? ' #2563eb ' : '#64748b')};
  border: 0px solid;
  cursor: pointer;
`
export const SaveButton = styled.button`
  color: ${props => (props.saved ? ' #2563eb ' : '#64748b')};
  border: 0px solid;
  cursor: pointer;
`
export const Line = styled.hr`
  border-top: 1px solid #64748b;
  border-bottom: 0px solid;
`
export const ChannelDetails = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ChannelLeft = styled.div`
  height: 200px;
  width: 10%;
`
export const ChannelRight = styled.div`
  height: 200px;
  width: 90%;
`
export const ChannelUpper = styled.div`
  height: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
