import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItem = styled.li`
  list-style-type: none;
  height: 550px;
  width: 32%;
  margin-right: 10px;
  margin-bottom: 20px;
`
export const ThumbnailImage = styled.img`
  height: 400px;
  width: 100%;
`
export const VideoLower = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`
export const VideoRight = styled.div`
  height: 200px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 50px;
  margin-left: 10px;
`
export const Profile = styled.img`
  height: 40px;
  align-self: flex-start;
`
export const VideoName = styled.p`
  font-size: 17px;
  color: #231f20;
  font-family: 'Roboto';
  color: ${props => (props.DarkTheme ? '#616e7c' : '#313131')};
`
export const ChannelName = styled.p`
  font-size: 15px;
  color: #616e7c;
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
