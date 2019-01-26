import React, { Component } from 'react'
import SelectComponent from './SelectComponent'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Segment, Form, Button } from 'semantic-ui-react'

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

    handleSelectComponentChange = (selectedOptions, listName, data) => {
        const listIds = selectedOptions.map(item => item.value)
        this.setState({ [listName]: listIds })
    }

    onFormSubmit = (e, subscribeUser) => {
        e.preventDefault();
        subscribeUser({ variables: this.state })
        this.setState({
            email: '',
            labelIdList: [],
            languageIdList: []
        })
        // TODO: Show message to the user and clean the form
    }

    render() {
        const { email } = this.state
        return (
            <Mutation mutation={MUTATION_SUBSCRIBE}>
                {subscribeUser => (
                    <Segment>
                        <Form className="subscriptionForm" onSubmit={e => this.onFormSubmit(e, subscribeUser)}>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email' type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.onEmailChange} />
                            </Form.Field>

                            <Form.Field>
                                <label>Label</label>
                                <SelectComponent
                                    name="labels"
                                    query={QUERY_LABEL}
                                    handleChange={selectedOptions => this.handleSelectComponentChange(selectedOptions, 'labelIdList')}></SelectComponent>
                            </Form.Field>

                            <Form.Field>
                                <label>Language</label>
                                <SelectComponent
                                    name="languages"
                                    query={QUERY_LANGUAGE}
                                    handleChange={selectedOptions => this.handleSelectComponentChange(selectedOptions, 'languageIdList')}></SelectComponent>
                            </Form.Field>
                            <Button type="submit">Subscribe</Button>
                        </Form>
                    </Segment>
                )}
            </Mutation>
        )
    }
}

export default SubscriptionForm