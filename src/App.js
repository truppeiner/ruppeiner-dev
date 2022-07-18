import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Foot from "./components/Footer";

function App(){
    return (
        <>
        <Router>
            <div className="App">
            <Header></Header>
            <Routes>
                <Route
                    path="/"
                    element = {<Hero/>}
                />
                <Route 
                    path="/about"
                    element = {<About/>}
                />  
                <Route 
                    path="/projects"
                    element = {<Projects/>}
                />  
            </Routes>
            </div>
        <Foot></Foot>
        </Router>
        </>
    )
}

export default App;