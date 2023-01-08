import {Suspense} from 'react'

import {AppProvider} from 'appContext'
import {Products, Navbar} from 'screens'

function App() {
  return (
    <AppProvider>
      <main className="App">
        <Navbar />
        <Suspense fallback={<></>}>
          <Products />
        </Suspense>
      </main>
    </AppProvider>
  )
}

export default App
