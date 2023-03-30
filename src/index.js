import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './Pages/Home';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
