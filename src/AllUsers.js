import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class AllUsers extends Component {

    static contextTypes = {
        users: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    render() {
        return (
            <div>
                {this.context.users.map(user => <div key={user}>{user}</div>)}
            </div>
        )
    }

}