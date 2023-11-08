import React from 'react'

const NxtWatchContext = React.createContext({
  DarkTheme: false,
  ChangeTheme: () => {},
  saved: [],
  AddToSaved: () => {},
})

export default NxtWatchContext
