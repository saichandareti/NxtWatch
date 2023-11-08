import {Component} from 'react'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Banner,
  HomeBgContainer,
  HomeContainer,
  VideoLeft,
  FailureCon,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  PlanPara,
  LikeCon,
  VideoLower,
  VideoRight,
  ViewsCon,
  ChannelName,
  SaveCon,
  DislikeCon,
  LikeButton,
  DislikeButton,
  SaveButton,
  Line,
  ChannelDetails,
  ChannelLeft,
  ChannelRight,
  ChannelUpper,
  Profile,
  LikeName,
  DislikeName,
  SaveName,
} from './styledComponents'

const apiConstants = {
  onSuccess: 'SUCCESS',
  OnFailure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'iNITIAL',
}

class VideoItemDetails extends Component {
  state = {
    isSuccess: apiConstants.initial,
    jsonData: [],
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.GetVideosApi()
  }

  OnclickLike = () => {
    const {disliked, liked} = this.state
    if (disliked === false && liked === false) {
      this.setState({liked: true})
    } else if (disliked === true && liked === false) {
      this.setState({liked: true, disliked: false})
    } else if (disliked === false && liked === true) {
      this.setState({liked: false, disliked: false})
    }
  }

  OnclickDislike = () => {
    const {disliked, liked} = this.state
    if (disliked === false && liked === false) {
      this.setState({disliked: true})
    } else if (disliked === false && liked === true) {
      this.setState({liked: false, disliked: true})
    } else if (disliked === true && liked === false) {
      this.setState({liked: false, disliked: false})
    }
  }

  OnclickSave = () => {
    this.setState(prev => ({saved: !prev.saved}))
  }

  OnChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  OnClickRemoveBanner = () => {
    this.setState({isBannerPresent: false})
  }

  GetVideosApi = async () => {
    this.setState({isSuccess: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const json = await response.json()

    if (response.ok === true) {
      const videoDetails = json.video_details
      const updatedData = {
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
        videoUrl: videoDetails.video_url,
      }

      this.setState({
        isSuccess: apiConstants.onSuccess,
        jsonData: updatedData,
      })
    } else if (response.ok !== true) {
      this.setState({isSuccess: apiConstants.OnFailure})
    }
  }

  RenderSuccessView = () => {
    const {jsonData, liked, disliked, saved} = this.state
    const dateObject = new Date(jsonData.publishedAt)

    const newDate = formatDistanceToNow(
      new Date(
        dateObject.getFullYear(),
        dateObject.getMonth(),
        dateObject.getDate(),
      ),
    )

    const {channel} = jsonData
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {AddToSaved, DarkTheme} = value

          const videoSave = () => {
            AddToSaved(jsonData)
          }

          return (
            <Banner DarkTheme={DarkTheme}>
              <ReactPlayer
                url={jsonData.videoUrl}
                width="74vw"
                height="500px"
              />
              <PlanPara DarkTheme={DarkTheme}>{jsonData.title}</PlanPara>
              <VideoLower>
                <VideoRight>
                  <ViewsCon>
                    <ChannelName DarkTheme={DarkTheme}>
                      {jsonData.viewCount} views
                    </ChannelName>
                    <ChannelName>•</ChannelName>
                    <ChannelName DarkTheme={DarkTheme}>{newDate}</ChannelName>
                  </ViewsCon>
                </VideoRight>
                <VideoLeft>
                  <LikeCon>
                    <AiOutlineLike />
                    <LikeButton
                      type="button"
                      onClick={this.OnclickLike}
                      liked={liked}
                    >
                      Like
                    </LikeButton>
                  </LikeCon>
                  <DislikeCon>
                    <AiOutlineDislike />
                    <DislikeButton
                      type="button"
                      onClick={this.OnclickDislike}
                      disliked={disliked}
                    >
                      Dislike
                    </DislikeButton>
                  </DislikeCon>
                  <SaveCon>
                    <BiListPlus onClick={videoSave} />
                    <SaveButton
                      type="button"
                      onClick={this.OnclickSave}
                      saved={saved}
                    >
                      {saved ? 'Saved' : 'Save'}
                    </SaveButton>
                  </SaveCon>
                </VideoLeft>
              </VideoLower>
              <Line />
              <ChannelDetails>
                <ChannelLeft>
                  <Profile src={channel.profileImageUrl} alt="channel logo" />
                </ChannelLeft>
                <ChannelRight>
                  <ChannelUpper>
                    <ChannelName DarkTheme={DarkTheme}>
                      {channel.name}
                    </ChannelName>
                    <ChannelName DarkTheme={DarkTheme}>
                      {channel.subscriberCount} Subscribers
                    </ChannelName>
                  </ChannelUpper>
                  <ChannelName DarkTheme={DarkTheme}>
                    {jsonData.description}
                  </ChannelName>
                </ChannelRight>
              </ChannelDetails>
            </Banner>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  RenderContent = () => {
    const {isSuccess} = this.state

    switch (isSuccess) {
      case apiConstants.onSuccess:
        return this.RenderSuccessView()
      case apiConstants.OnFailure:
        return (
          <FailureCon>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailurePara>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <RetryButton onClick={this.GetVideosApi}>Retry</RetryButton>
          </FailureCon>
        )
      case apiConstants.inProgress:
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )

      default:
        return null
    }
  }

  render() {
    const {liked} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {DarkTheme} = value
          return (
            <>
              <Header />
              <HomeBgContainer DarkTheme={DarkTheme}>
                <SideBar />
                <HomeContainer
                  DarkTheme={DarkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.RenderContent()}
                </HomeContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
