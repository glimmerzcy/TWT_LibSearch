import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="header inverted-color">
            <div className="fixed-width-container">
                <img className="nav-logo" src={require("./assets/headerlogo.svg")} alt="twt" />
                <div className="nav-personal-info">
                    <img className="account-icon" src={require("./assets/account.svg")} alt="tou" />
                    <span className="account-name">John Doe</span>
                </div>
            </div>
        </div>
    );
}

export default Header;