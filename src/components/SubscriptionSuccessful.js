import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default function SubscriptionSuccessful() {
  return (
    <Header icon textAlign='center'>
      <Icon name='check circle outline' color='green' size='huge'/> 
      You've successfully subscribed!
    </Header>
  );
}
