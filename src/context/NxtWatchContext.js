import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  ChangeTheme: () => {},
})

export default NxtWatchContext
