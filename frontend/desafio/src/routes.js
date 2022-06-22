import React from 'react';
import { BrowserRouter, Routes as Rotas, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

function Routes() {
    return (
        <BrowserRouter>
            <Rotas>
                <Route path="/" exact element={<Login />} />
                <Route path="/cadastrar" element={<Register />} />
            </Rotas>
        </BrowserRouter>
    );
};

export default Routes;