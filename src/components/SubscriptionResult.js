import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

class SubscriptionResult extends Component {
  componentDidMount() {
    this.props.subscribeUser()
  }

  getResultContent = function() {
    const data = this.props.data
    if(data && data['subscribeUser']['success']) {
      return (
        <div>
          <Icon name='check circle outline' color='green' size='huge' />
          You've successfully subscribed!
        </div>
      )
    }

    return (
      <div>
        Something went wrong. Please try again.
      </div>
    )
  }

  render() {
    return (
      <Header icon textAlign='center'>
        {this.getResultContent()}
      </Header>
    )
  }

}

export default SubscriptionResult