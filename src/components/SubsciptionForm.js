import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SUBSCRIBE_MUTATION = gql`
    mutation SubscribeUser($email: String, $labelIdList: [Int], $languageIdList: [Int]){
        subscribeUser (email: $email, labelIdList: $labelIdList, languageIdList: $languageIdList) {
            id
        }
    }
`

class SubscriptionForm extends Component {
    state = {
        email: '',
        labelIdList: [1],
        languageIdList: [1]
    }

    onEmailChange = e => {
        this.setState({ email: e.target.value })
    }

    render() {

        const { email, labelIdList, languageIdList } = this.state

        return (
            <form className="subscriptionForm">
                <div className="formField">
                    <span>Email:</span>
                    <input type="email"
                        name="email"
                        value={email}
                        onChange={this.onEmailChange} />
                </div>
                <div className="formField">
                    <span>Label:</span>
                    <input type="text"
                        name="label"
                        value=""
                        onChange={e => console.log("label changed")} />
                </div>
                <div className="formField">
                    <span>Language:</span>
                    <input type="text"
                        name="language"
                        value=""
                        onChange={e => console.log("language changed")} />
                </div>
                <div className="formField">
                    <Mutation mutation={SUBSCRIBE_MUTATION} variables={{ email, labelIdList, languageIdList }}>
                        {postMutation => (
                            <button type="submit"
                                onClick={postMutation}>Subscribe</button>
                        )}
                    </Mutation>
                </div>
            </form>
        )
    }
}

export default SubscriptionForm