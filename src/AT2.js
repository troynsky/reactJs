import React, {Component} from 'react';
import CustomTag from "./CustomTag";

class AT2 extends Component {

    render() {
        return (
            <div>
                {"\n"}
                <a href={'https://www.w3.org/'}>Link on www.w3.org</a>
                <p>
                    <button onClick={() => alert('Welcome ' + this.props.text)}>
                        PRESS ME
                    </button>
                </p>
                <p>
                    This is my props: {this.props.text}
                </p>
                <CustomTag/>
            </div>
        );
    }

}

export default AT2;
