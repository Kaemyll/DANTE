import React from 'react';

import NavbarCustom from "../../Components/Header/NavbarCustom";

import logo from '../../Assets/Images/logo.svg';

export default function Header() {
    return (
        <header className='Container'>
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
            />
            <NavbarCustom/>
        </header>
    );
};
