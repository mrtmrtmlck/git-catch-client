import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

class UnsubscriptionResult extends Component {
  componentDidMount() {
    this.props.unsubscribeUser()
  }

  getResultContent = function() {
    const data = this.props.data
    if(data && data['unsubscribeUser']['success']) {
      return (
        <div>
          <Icon name='check circle outline' color='green' size='huge' />
          You've successfully unsubscribed.
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

export default UnsubscriptionResult