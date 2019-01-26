import React, { Component } from 'react'
import SubscriptionForm from './SubsciptionForm'
import SubscribeUser from './SubscribeUser'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Github Issue Catcher</h1>
        <SubscriptionForm />
        <Route path='/completeSubscription' component={SubscribeUser} />
      </div>
    );
  }
}

export default App
