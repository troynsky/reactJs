import React, {Component} from 'react';

function Div (props) {
    return (
        <div>
            It is custom component. I liked moved moved )
            {props.children}
        </div>
    );
}

export default Div;
