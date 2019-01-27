import React, { Component } from 'react'
import SubscriptionForm from './SubsciptionForm'
import SubscribeUser from './SubscribeUser'
import { Route } from 'react-router-dom'
import { Segment, Grid, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Segment size="large" className="main-segment">
        <Grid columns={2} stackable divided>
          <Grid.Column textAlign="center" className="column-left">
            <Header size="large">What is GitCatch?</Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p>
            <br />
            <Header size="large">Why should I subscribe?</Header>
            <p>Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
          </Grid.Column>
          <Grid.Column verticalAlign='middle' className="column-right">
            <SubscriptionForm />
          </Grid.Column>
        </Grid>
        <Route path='/completeSubscription' component={SubscribeUser} />
      </Segment>
    );
  }
}

export default App
