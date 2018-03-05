import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {CustomInput} from "./CustomInput";
import {AllUsers} from "./AllUsers";

class App extends Component {

    static childContextTypes = {
        addUser: PropTypes.func.isRequired,
        dropAll: PropTypes.func.isRequired,
        users: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    getChildContext = () => ({
        addUser: this.addUser,
        dropAll: this.dropAll,
        users: this.users
    });

    users = ['smith', 'lenart', 'johnson'];

    addUser = user => {
        this.users.push(user);
        this.setState({})
    };

    dropAll = () => {
        this.users = [];
        this.setState({})
    };

    render() {
        return (
            <div>
                <CustomInput/>
                <AllUsers/>
            </div>
        );
    }

}

export default App;
