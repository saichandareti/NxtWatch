import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SidebarCon,
  UpperCon,
  LowerCon,
  OptionCon,
  Option,
  EndPara,
  Social,
} from './styledComponents'

class SideBar extends Component {
  state = {activeOption: ''}

  OnclickChangeHome = () => {
    this.setState({activeOption: 'Home'})
  }

  OnclickChangeTrending = () => {
    this.setState({activeOption: 'Trending'})
  }

  OnclickChangeGaming = () => {
    this.setState({activeOption: 'Gaming'})
  }

  OnclickChangeSaved = () => {
    this.setState({activeOption: 'Saved'})
  }

  render() {
    const {activeOption} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {DarkTheme} = value
          return (
            <SidebarCon DarkTheme={DarkTheme}>
              <UpperCon>
                <Link
                  to="/"
                  style={{'text-decoration': 'none'}}
                  onClick={this.OnclickChangeHome}
                >
                  <OptionCon
                    DarkTheme={DarkTheme}
                    isActive={activeOption === 'Home'}
                  >
                    <AiFillHome />
                    <Option DarkTheme={DarkTheme}>Home</Option>
                  </OptionCon>
                </Link>
                <Link
                  to="/trending"
                  style={{'text-decoration': 'none'}}
                  onClick={this.OnclickChangeTrending}
                >
                  <OptionCon
                    DarkTheme={DarkTheme}
                    isActive={activeOption === 'Trending'}
                  >
                    <AiFillFire />
                    <Option DarkTheme={DarkTheme}>Trending</Option>
                  </OptionCon>
                </Link>
                <Link
                  to="/gaming"
                  style={{'text-decoration': 'none'}}
                  onClick={this.OnclickChangeGaming}
                >
                  <OptionCon
                    DarkTheme={DarkTheme}
                    isActive={activeOption === 'Gaming'}
                  >
                    <IoLogoGameControllerB />
                    <Option DarkTheme={DarkTheme}>Gaming</Option>
                  </OptionCon>
                </Link>
                <Link
                  to="/saved-videos"
                  style={{'text-decoration': 'none'}}
                  onClick={this.OnclickChangeSaved}
                >
                  <OptionCon
                    DarkTheme={DarkTheme}
                    isActive={activeOption === 'Saved'}
                  >
                    <BiListPlus />
                    <Option DarkTheme={DarkTheme}>Saved Videos</Option>
                  </OptionCon>
                </Link>
              </UpperCon>
              <LowerCon>
                <Option DarkTheme={DarkTheme}>Contact Us</Option>
                <OptionCon>
                  <Social
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Social
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Social
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </OptionCon>
                <EndPara DarkTheme={DarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </EndPara>
              </LowerCon>
            </SidebarCon>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default SideBar
