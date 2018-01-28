import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AT1 extends Component {

    static propTypes = {
        initialValue: PropTypes.string
    };

    static defaultProps = {
        initialValue: ''
    };

    state = {
        text: this.props.initialValue || 'placeholder'
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };


    render() {
        return (
            <div>
                {"\n"}
                Type something:&nbsp;&nbsp;&nbsp;&nbsp;
                <input onChange={this.handleChange}
                       value={this.state.text}/>

                <p>my new input value is: {this.state.text === "placeholder" ? '' : this.state.text}</p>
            </div>
        );
    }
}

export default AT1;
