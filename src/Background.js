import React from 'react';
import './Background.css';

function Background() {
    return (
        <img className="background" src={require("./assets/background.png")} alt="background"/>
    );
}

export default Background;