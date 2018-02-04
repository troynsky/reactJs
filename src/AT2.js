import React, {Component} from 'react';
import Div from "./Div";

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
                <Div>
                    <p>Custom Div</p>
                    <p>child1</p>
                    <p>child2</p>
                </Div>
            </div>
        );
    }

}

export default AT2;
