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

const GamingVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {DarkTheme} = value
        return (
          <VideoItem trending>
            <Link to={`/videos/${id}`} style={{'text-decoration': 'none'}}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoLower>
                <VideoRight>
                  <VideoName DarkTheme={DarkTheme}>{title}</VideoName>
                  <ViewsCon>
                    <ChannelName DarkTheme={DarkTheme}>
                      {viewCount} Watching Worldwide
                    </ChannelName>
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

export default GamingVideoItem
