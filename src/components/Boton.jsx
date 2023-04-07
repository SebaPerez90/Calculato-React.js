import React from "react";
import '../stylesheets/Boton.css'

function Boton(props) {
    return (
        <div 
        onClick={()=> props.addInput(props.children)}
        className={props.type == 'operator'? 'boton-container operator' : 'boton-container'}>
            {props.children}
        </div>
    );
}

export default Boton;