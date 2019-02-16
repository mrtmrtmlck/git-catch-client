import gql from 'graphql-tag'

export const QUERY_LABEL = gql`
    query {
        labels {
            id
            name
        }
    }
`

export const QUERY_LANGUAGE = gql`
    query {
        languages {
            id
            name
        }
    }
`

export const MUTATION_SEND_VERIFICATION_EMAIL = gql`
    mutation SendVerificationEmail($email: String, $labelIdList: [Int], $languageIdList: [Int]) {
        sendVerificationEmail (email: $email, labelIdList: $labelIdList, languageIdList: $languageIdList) {
            success
        }
    }
`

export const MUTATION_SUBSCRIBE = gql`
    mutation SubscribeUser($token: String) {
        subscribeUser(token: $token) {
            success
        }
    }
`

export const MUTATION_UNSUBSCRIBE = gql`
    mutation UnsubscribeUser($token: String) {
        unsubscribeUser(token: $token) {
            success
        }
    }
`
