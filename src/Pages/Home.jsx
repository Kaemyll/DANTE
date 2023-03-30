import React from 'react'

import Header from "../Layouts/Header/Header";


import '../App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {Container} from "react-bootstrap";

export default function Home() {

    return (
        <Container>
            <Header />
            <h1>TEST ROUTER PRINCIPAL</h1>
            <div>
                <p className="border-1">« Le diable n'est pas le principe de la matière, le diable est l'arrogance de l'esprit, la foi sans sourire, la vérité qui n'est jamais effleurée par le doute."</p>
                <p>Umberto Eco, in 'Le Nom de la rose'</p>
            </div>

        </Container>

    )

}
