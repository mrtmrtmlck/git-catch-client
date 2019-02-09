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
        languageIdList: [],
        error: {}
    }

    onEmailChange = e => {
        const targetVal = e.target.value
        this.setState({ email: targetVal })
        this.updateErrorState('email', targetVal) 
    }

    handleSelectComponentChange = (selectedOptions, listName, data) => {
        const listIds = selectedOptions.map(item => item.value)
        this.setState({ [listName]: listIds })
        this.updateErrorState(listName, listIds) 
    }

    updateErrorState = (type, value) => {
        if(!value) {
            return
        }

        let error = this.state.error
        error[type] = ''
        this.setState({ error : error })
    }

    isFormValid = e => {
        let isValid = true
        let error = {}

        if(this.state.email.length === 0) {
            error['email'] = 'Please enter your email address'
            isValid = false
        }

        if(this.state.labelIdList.length === 0) {
            error['labelIdList'] = 'Please select at least one label'
            isValid = false
        }

        if(this.state.languageIdList.length === 0) {
            error['languageIdList'] = 'Please select at least one language'
            isValid = false
        }
        
        this.setState({ error : error })

        return isValid
    }
    
    displayValidationError = fieldName => {
        if(!this.state.error[fieldName]) {
            return ''
        }

        return (
            <span class='error'>{this.state.error[fieldName]}</span>
        )
    }
    onFormSubmit = (e, subscribeUser) => {
        e.preventDefault();

        if(!this.isFormValid()) {
            return
        }

        subscribeUser({ variables: this.state })
        this.setState({
            email: '',
            labelIdList: [],
            languageIdList: [],
            error: {}
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
                                {this.displayValidationError('email')}
                            </Form.Field>

                            <Form.Field>
                                <MultiSelect
                                    name='labels'
                                    query={QUERY_LABEL}
                                    handleChange={selectedOptions => this.handleSelectComponentChange(selectedOptions, 'labelIdList')}></MultiSelect>
                                {this.displayValidationError('labelIdList')}
                            </Form.Field>

                            <Form.Field>
                                <MultiSelect
                                    name='languages'
                                    query={QUERY_LANGUAGE}
                                    handleChange={selectedOptions => this.handleSelectComponentChange(selectedOptions, 'languageIdList')}></MultiSelect>
                                {this.displayValidationError('languageIdList')}
                            </Form.Field>
                            <Button fluid size='huge' type='submit' content='Subscribe' color='teal' />
                        </Form>
                )}
            </Mutation>
        )
    }
}

export default SubscriptionForm