import React, { Component } from 'react'
import { Query } from 'react-apollo'
import Select from 'react-select';

class SelectComponent extends Component {
    render(props) {
        return (
            <Query query={this.props.query}>
                {({ loading, error, data }) => {
                    if (loading) return <Select />
                    if (error) return <Select />
                    const optionsData = data[this.props.name].map(item => ({ 'value': item.id, 'label': item.name }))

                    return (
                        <Select
                            isMulti='true'
                            onChange={this.props.handleChange}
                            options={optionsData}
                            placeholder={'Select ' + this.props.name + '...'}
                        />
                    )
                }}
            </Query>
        )
    }
}

export default SelectComponent
