import React from 'react'

import Header from "./Layouts/Header/Header";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Contact} from './Pages/Contact';
import {About} from './Pages/About';
import {Home} from './Pages/Home';
import {Outils} from './Pages/Outils';
import {Authenticator} from "./Pages/Authenticator";

import './App.css'

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Outils' element={<Outils/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Authenticator' element={<Authenticator/>}/>
            </Routes>
        </Router>)
}
