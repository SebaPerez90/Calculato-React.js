import React from "react";
import '../stylesheets/Header.css';

export default function Header(props) {
    return (
        <div className="header-container">
            <img
                onClick={props.showDetails}
                onMouseOver={props.hoverText}
                onMouseOut={props.hoverTextCancel}
                src={require('../imgs/foto-perfil.jpg')} alt="SebaPerez90"
                className="header-img" />
            <p className="header-text">Calculator React.Js<b className="bar">I</b></p>
        </div>
    );
}