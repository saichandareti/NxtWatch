import {Component} from 'react'
import {ImCross} from 'react-icons/im'
import {AiOutlineSearch} from 'react-icons/ai'
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

class Home extends Component {
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

  OnClickRemoveBanner = () => {
    this.setState({isBannerPresent: false})
  }

  GetVideosApi = async () => {
    this.setState({isSuccess: apiConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  RenderSuccessView = () => {
    const {jsonData} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {DarkTheme} = value
          return (
            <VideosList DarkTheme={DarkTheme}>
              {jsonData.length === 0 ? (
                <FailureCon>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <FailureHeading DarkTheme={DarkTheme}>
                    No Search results found
                  </FailureHeading>
                  <FailurePara DarkTheme={DarkTheme}>
                    Try different key words or remove search filter
                  </FailurePara>
                  <RetryButton
                    DarkTheme={DarkTheme}
                    onClick={this.GetVideosApi}
                  >
                    Retry
                  </RetryButton>
                </FailureCon>
              ) : (
                jsonData.map(each => (
                  <HomeVideoItem details={each} key={each.id} />
                ))
              )}
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
                <FailureCon>
                  {DarkTheme ? (
                    <FailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                      alt="failure view"
                    />
                  ) : (
                    <FailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                      alt="failure view"
                    />
                  )}
                  <FailureHeading>Oops! Something Went Wrong</FailureHeading>
                  <FailurePara>
                    We are having some trouble to complete your request. Please
                    try again.
                  </FailurePara>
                  <RetryButton type="button" onClick={this.GetVideosApi}>
                    Retry
                  </RetryButton>
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
    const {isBannerPresent} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {DarkTheme} = value
          return (
            <>
              <Header />
              <HomeBgContainer>
                <SideBar />
                <HomeContainer data-testid="home" DarkTheme={DarkTheme}>
                  {isBannerPresent ? (
                    <Banner data-testid="banner">
                      <BannerUpper>
                        <HomeLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <IntoButton
                          type="button"
                          onClick={this.OnClickRemoveBanner}
                          data-testid="close"
                        >
                          <ImCross />
                        </IntoButton>
                      </BannerUpper>
                      <BannerLower>
                        <PlanPara>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </PlanPara>
                        <GetButton type="button">GET IT NOW</GetButton>
                      </BannerLower>
                    </Banner>
                  ) : null}
                  <InputCon>
                    <Input
                      type="search"
                      onChange={this.OnChangeSearchInput}
                      placeholder="Search"
                    />
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      onClick={this.GetVideosApi}
                    >
                      <AiOutlineSearch />
                    </SearchButton>
                  </InputCon>
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

export default Home
