import {Component} from 'react'

import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideoItem from '../HomeVideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Banner,
  HomeBgContainer,
  HomeContainer,
  BannerUpper,
  HomeLogo,
  IntoButton,
  BannerLower,
  PlanPara,
  GetButton,
  InputCon,
  Input,
  SearchButton,
  VideosList,
  FailureCon,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'

const apiConstants = {
  onSuccess: 'SUCCESS',
  OnFailure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'iNITIAL',
}

class Saved extends Component {
  state = {
    isSuccess: apiConstants.initial,
    jsonData: [],
    searchInput: '',
    isBannerPresent: true,
  }

  componentDidMount() {
    this.GetVideosApi()
  }

  OnChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  GetVideosApi = async () => {
    this.setState({isSuccess: apiConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const json = await response.json()

    if (response.ok === true) {
      const {videos} = json
      const updatedData = videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({isSuccess: apiConstants.onSuccess, jsonData: updatedData})
    } else if (response.ok !== true) {
      this.setState({isSuccess: apiConstants.OnFailure})
    }
  }

  RenderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {saved, DarkTheme} = value
        return (
          <VideosList>
            {saved.length === 0 ? (
              <FailureCon DarkTheme={DarkTheme}>
                <FailureImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <FailureHeading DarkTheme={DarkTheme}>
                  No saved videos found
                </FailureHeading>
                <FailurePara DarkTheme={DarkTheme}>
                  Save your videos by clicking a button
                </FailurePara>
              </FailureCon>
            ) : (
              saved.map(each => <HomeVideoItem details={each} key={each.id} />)
            )}
          </VideosList>
        )
      }}
    </NxtWatchContext.Consumer>
  )

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
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {DarkTheme} = value
          return (
            <>
              <Header />
              <HomeBgContainer DarkTheme={DarkTheme}>
                <SideBar />
                <HomeContainer data-testid="savedVideos" DarkTheme={DarkTheme}>
                  <Banner data-testid="banner" DarkTheme={DarkTheme}>
                    <IntoButton DarkTheme={DarkTheme}>
                      <FaFire />
                    </IntoButton>
                    <FailureHeading DarkTheme={DarkTheme}>
                      Saved Videos
                    </FailureHeading>
                  </Banner>
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

export default Saved
