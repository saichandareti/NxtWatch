import {Component} from 'react'

import {IoLogoGameControllerB} from 'react-icons/io'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideoItem from '../GameVideoItem'
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

class Gaming extends Component {
  state = {
    isSuccess: apiConstants.initial,
    jsonData: [],
    searchInput: '',
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
    const url = `https://apis.ccbp.in/videos/gaming`
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
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({isSuccess: apiConstants.onSuccess, jsonData: updatedData})
    } else if (response.ok !== true) {
      this.setState({isSuccess: apiConstants.OnFailure})
    }
  }

  RenderSuccessView = () => {
    const {jsonData} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {DarkTheme} = value
          return (
            <VideosList DarkTheme={DarkTheme}>
              {jsonData.map(each => (
                <GamingVideoItem details={each} key={each.id} />
              ))}
            </VideosList>
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
          <NxtWatchContext.Consumer>
            {value => {
              const {DarkTheme} = value
              return (
                <FailureCon DarkTheme={DarkTheme}>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    alt="failure view"
                  />
                  <FailureHeading DarkTheme={DarkTheme}>
                    Oops! Something Went Wrong
                  </FailureHeading>
                  <FailurePara DarkTheme={DarkTheme}>
                    We are having some trouble to complete your request. Please
                    try again.
                  </FailurePara>
                  <RetryButton onClick={this.GetVideosApi}>Retry</RetryButton>
                </FailureCon>
              )
            }}
          </NxtWatchContext.Consumer>
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
                <HomeContainer data-testid="gaming" DarkTheme={DarkTheme}>
                  <Banner data-testid="banner" DarkTheme={DarkTheme}>
                    <IntoButton DarkTheme={DarkTheme}>
                      <IoLogoGameControllerB />
                    </IntoButton>
                    <FailureHeading DarkTheme={DarkTheme}>
                      Gaming
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

export default Gaming
