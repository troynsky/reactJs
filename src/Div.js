import React from 'react';
import './mainLess.less'

function Div (props) {
    return (
        <div className="z1">
            It is custom component. I liked moved moved )
            {props.children}

            <p id="inZ1">Check Less</p>
        </div>
    );
}

export default Div;
