import React from 'react'
import { Mutation } from 'react-apollo'

import SubscriptionResult from './SubscriptionResult'
import { MUTATION_SUBSCRIBE } from '../constants/GQLConstants'


function SubscribeUser(props) {
  const params = new URLSearchParams(props.location.search);
  return (
    <Mutation mutation={MUTATION_SUBSCRIBE} variables={{token:params.get('token')}}>
      {subscribeUser => (
        <SubscriptionResult subscribeUser={subscribeUser} />
      )}
    </Mutation>
  )
}


export default SubscribeUser