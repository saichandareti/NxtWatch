import './App.css'
import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import NxtWatchContext from './context/NxtWatchContext'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ProtectedRoute from './components/ProtectedRoute'
import Saved from './components/Saved'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {savedList: [], darkTheme: false}

  OnClickAdd = details => {
    const {savedList} = this.state
    if (savedList.length !== 0) {
      const filterd = savedList.filter(each => each.id === details.id)
      if (filterd.length !== 0) {
        const newList = savedList.filter(each => each.id !== details.id)
        this.setState({savedList: newList})
      } else {
        savedList.push(details)
        this.setState({savedList})
      }
    } else {
      savedList.push(details)
      this.setState({savedList})
    }
  }

  OnclickChangeTheme = () => {
    this.setState(props => ({darkTheme: !props.darkTheme}))
  }

  render() {
    const {savedList, darkTheme} = this.state
    console.log(savedList)
    return (
      <NxtWatchContext.Provider
        value={{
          saved: savedList,
          AddToSaved: this.OnClickAdd,
          DarkTheme: darkTheme,
          ChangeTheme: this.OnclickChangeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
