import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Foot from "./components/Footer";
import './css/App.css'
function App(){
    return (
        <>
        <Router className = "App">
            <div className="App">
            <Header></Header>
            <Routes>
                <Route
                    path="/ruppeiner-dev"
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
        <Foot className='footer'></Foot>
        </Router>
        </>
    )
}

export default App;