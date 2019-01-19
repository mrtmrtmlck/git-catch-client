import React, { Component } from 'react'
import SelectComponent from './SelectComponent'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY_LABEL = gql`
    query {
        labels {
            id
            name
        }
    }
`

const QUERY_LANGUAGE = gql`
    query {
        languages {
            id
            name
        }
    }
`

const MUTATION_SUBSCRIBE = gql`
    mutation SubscribeUser($email: String, $labelIdList: [Int], $languageIdList: [Int]){
        subscribeUser (email: $email, labelIdList: $labelIdList, languageIdList: $languageIdList) {
            id
        }
    }
`

class SubscriptionForm extends Component {

    state = {
        email: '',
        labelIdList: [],
        languageIdList: []
    }

    onEmailChange = e => {
        this.setState({ email: e.target.value })
    }

    handleSelectComponentChange = (e, listName) => {
        // This logic will change after the new component added
        const val = e.target.value
        const list = this.state[listName]
        this.setState({ [listName]: [...list, val] })
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
                    <SelectComponent
                        name="labels"
                        query={QUERY_LABEL}
                        handleChange={ e => this.handleSelectComponentChange(e, 'labelIdList')}></SelectComponent>
                </div>
                <div className="formField">
                    <span>Language:</span>
                    <SelectComponent
                        name="languages"
                        query={QUERY_LANGUAGE}
                        handleChange={ e => this.handleSelectComponentChange(e, 'languageIdList')}></SelectComponent>
                </div>
                <div className="formField">
                    <Mutation mutation={MUTATION_SUBSCRIBE} variables={{ email, labelIdList, languageIdList }}>
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