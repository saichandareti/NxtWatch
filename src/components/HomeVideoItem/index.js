import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItem,
  ThumbnailImage,
  VideoLower,
  VideoRight,
  Profile,
  VideoName,
  ChannelName,
  ViewsCon,
} from './styledComponents'

const HomeVideoItem = props => {
  const {details, trending} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = details
  const {name, profileImageUrl} = channel

  const dateObject = new Date(publishedAt)

  const newDate = formatDistanceToNow(
    new Date(
      dateObject.getFullYear(),
      dateObject.getMonth(),
      dateObject.getDate(),
    ),
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {DarkTheme} = value
        return (
          <VideoItem Dark={DarkTheme}>
            <Link to={`/videos/${id}`} style={{'text-decoration': 'none'}}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoLower>
                <Profile src={profileImageUrl} alt="channel logo" />
                <VideoRight>
                  <VideoName Dark={DarkTheme}>{title}</VideoName>
                  <ChannelName Dark={DarkTheme}>{name}</ChannelName>
                  <ViewsCon>
                    <ChannelName Dark={DarkTheme}>
                      {viewCount} views
                    </ChannelName>
                    <ChannelName Dark={DarkTheme}>•</ChannelName>
                    <ChannelName Dark={DarkTheme}>{newDate}</ChannelName>
                  </ViewsCon>
                </VideoRight>
              </VideoLower>
            </Link>
          </VideoItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideoItem
