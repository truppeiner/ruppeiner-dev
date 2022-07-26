import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Foot from "./components/Footer";
import Resume from "./components/Resume";
import './css/App.css'
import { AnimatePresence } from "framer-motion";


function App(){
    // set state to current page
    const [ currentPage, setCurrentPage] = useState('Hero');
    // render selected page
    const renderPage = () => {
        if (currentPage === 'Hero'){
            return <Hero/>;
        } else if (currentPage === 'About'){
            return <About/>
        } else if (currentPage === 'Projects'){
            return <Projects/>
        } else if (currentPage === 'Resume'){
            return <Resume/>
        }
    }
    const pageChange = (page) => setCurrentPage(page);
    return (
        <AnimatePresence>
        <>
            <div>
                <div>
                    <Header currentPage={currentPage} pageChange = {pageChange}/>
                </div>
                <main>
                    {renderPage()}
                </main>
                <div>
                    <Foot/>
                </div>
            </div>
        </>
        </AnimatePresence>
    )
}

export default App;