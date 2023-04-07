import React from 'react';
import '../stylesheets/ClearBtn.css'

function ClearBtn(props) {
    return (
        <button
        onClick={props.clearInput}
        className='clearBtn' >
            Clear
        </button>
    );
}

export default ClearBtn;