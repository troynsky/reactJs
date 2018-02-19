import React, {PureComponent} from 'react';

class Button  extends PureComponent {

    render(){
        return (
            <input
                type="button"
                onClick={this.props.handleClick}
               /* onKeyPress={props.handleClick}*/
                value={this.props.label}
            />
        );
    }
}

export default Button;