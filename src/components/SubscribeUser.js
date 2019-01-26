import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION_SUBSCRIBE = gql`
  mutation SubscribeUser($token: String) {
    subscribeUser(token: $token) {
      succeed
    }
  }
`

export default function SubscribeUser(props) {
  const params = new URLSearchParams(props.location.search);
  console.log(params.get('token'))
  return (
    <Mutation mutation={MUTATION_SUBSCRIBE} variables={{token:params.get('token')}}>
      {subscribeUser => (
        <EmailVerificationResult subscribeUser={subscribeUser} />
      )}
    </Mutation>
  )
}

class EmailVerificationResult extends Component {
  componentDidMount() {
    this.props.subscribeUser();
  }
  render() {
    return <div>SUCCESSFUL</div>;
  }
}
