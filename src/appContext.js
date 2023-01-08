import * as React from 'react'

const AppContext = React.createContext()

function AppProvider(props) {
  const initialStates = {
    products: [],
  }

  const [appState, setAppState] = React.useState(initialStates)

  const value = [appState, setAppState]

  return <AppContext.Provider value={value} {...props} />
}

export {AppProvider, AppContext}
