import React from 'react'

import { Routes } from 'routes'
import { BrowserRouter as Router } from 'react-router-dom'

import 'styles/global.scss'

const App = (): React.ReactElement => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  )
}

export default App
