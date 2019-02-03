import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { Form, Button, Input } from 'semantic-ui-react'

import EmailVerificationResult from './EmailVerificationResult'
import MultiSelect from './MultiSelect'
import { QUERY_LABEL, QUERY_LANGUAGE, MUTATION_SEND_VERIFICATION_EMAIL } from '../constants/GQLConstants'


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
    }

    render() {
        const { email } = this.state
        return (
            <Mutation mutation={MUTATION_SEND_VERIFICATION_EMAIL}>
                {(subscribeUser, { data }) => (
                    data && data['sendVerificationEmail']['succeed'] ? <EmailVerificationResult /> :
                        <Form className="subscriptionForm" onSubmit={e => this.onFormSubmit(e, subscribeUser)}>
                            <Form.Field>
                                <Input placeholder='Email' type='email'
                                    name='email'
                                    value={email}
                                    onChange={this.onEmailChange} />
                            </Form.Field>

                            <Form.Field>
                                <MultiSelect
                                    name='labels'
                                    query={QUERY_LABEL}
                                    handleChange={selectedOptions => this.handleSelectComponentChange(selectedOptions, 'labelIdList')}></MultiSelect>
                            </Form.Field>

                            <Form.Field>
                                <MultiSelect
                                    name='languages'
                                    query={QUERY_LANGUAGE}
                                    handleChange={selectedOptions => this.handleSelectComponentChange(selectedOptions, 'languageIdList')}></MultiSelect>
                            </Form.Field>
                            <Button fluid size='huge' type='submit' content='Subscribe' color='teal' />
                        </Form>
                )}
            </Mutation>
        )
    }
}

export default SubscriptionForm