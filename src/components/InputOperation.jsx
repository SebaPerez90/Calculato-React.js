import React from 'react';
import '../stylesheets/InputOperation.css'

function InputOperation(props) {
    return (
        <div 
        className='input-container'>
            {props.inputDisplay}
        </div>
    );
}
export default InputOperation;