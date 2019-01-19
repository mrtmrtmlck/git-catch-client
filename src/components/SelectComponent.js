import React, { Component } from 'react'
import { Query } from 'react-apollo'

class SelectComponent extends Component {
    render(props) {
        return (
            <Query query={this.props.query}>
                {({ loading, error, data }) => {
                    if (loading) return <option value=""></option>
                    if (error) return <option value=""></option>
                    const items = data[this.props.name]

                    return (
                        <select name={this.props.name} onChange={this.props.handleChange} multiple>
                            {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                        </select>
                    )
                }}
            </Query>
        )
    }
}

export default SelectComponent
