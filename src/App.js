import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'
import HomePage from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage } />
      </Switch>
    </Router>
  )
}

export default App
