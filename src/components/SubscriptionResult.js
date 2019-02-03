import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

class SubscriptionResult extends Component {
  componentDidMount() {
    this.props.subscribeUser();
  }
  render() {
    return (
      <Header icon textAlign='center'>
        <Icon name='check circle outline' color='green' size='huge' />
        You've successfully subscribed!
      </Header>
    )
  }

}

export default SubscriptionResult