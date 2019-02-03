import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import SubscribeUser from './SubscribeUser'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/completeSubscription' component={SubscribeUser} />
      </div>
    )
  }
}

export default App
