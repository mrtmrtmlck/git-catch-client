import React from 'react'
import { Mutation } from 'react-apollo'

import UnsubscriptionResult from './UnsubscriptionResult'
import { MUTATION_UNSUBSCRIBE } from '../constants/GQLConstants'


function UnsubscribeUser(props) {
  const params = new URLSearchParams(props.location.search);
  return (
    <Mutation mutation={MUTATION_UNSUBSCRIBE} variables={{token:params.get('token')}}>
      {(unsubscribeUser, { data }) => (
        <UnsubscriptionResult unsubscribeUser={unsubscribeUser} data={data}/>
      )}
    </Mutation>
  )
}


export default UnsubscribeUser