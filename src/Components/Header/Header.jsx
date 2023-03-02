import React from 'react';

import {Navbar} from 'react-bootstrap';
import logo from '../../Assets/Images/logo.svg';

export default function Header() {
    return (
        <header>
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
            />
            <Navbar/>
        </header>
    );
};
