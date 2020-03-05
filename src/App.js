import React from 'react';
import './App.css';
import {
    HashRouter,
    Route,
} from 'react-router-dom';

import Home from "./components/home"

function App() {
    return (
        <HashRouter>
            <Route exact path='/' component={Home}/>
        </HashRouter>
    );}

export default App;
