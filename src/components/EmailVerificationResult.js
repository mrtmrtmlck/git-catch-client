import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

function EmailVerificationResult() {
  return (
    <Header icon textAlign='center'>
      <Icon name='mail' />A verification email has been sent to your email address.
    </Header>
  )
}

export default EmailVerificationResult