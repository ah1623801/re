import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";



import React from 'react';

function App(){
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Html" element={<Html />} />
                <Route path="/Css" element={<Css />} />
                <Route path="/Javascript" element={<Javascript />} />
            </Routes>
        </div>
    );
}

export default App;

