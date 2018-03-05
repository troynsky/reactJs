import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class CustomInput extends Component {

    static contextTypes = {
        addUser: PropTypes.func.isRequired,
        dropAll: PropTypes.func.isRequired,
        users: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    state = {
        msg: ''
    };

    onChange = e => {
        this.setState({ msg: e.target.value })
    };

    onClick = () => {
        this.context.addUser(this.state.msg);
        this.setState({ msg: '' });
    };

    onClear = () => {
        this.context.dropAll();

    };

    render () {
        return (
            <div>
                <input type="text" value={this.state.msg} onChange={this.onChange}/>
                <button onClick={this.onClick}>Добавить</button>
                <button onClick={this.onClear}>Очистить</button>
            </div>
        )
    }

}