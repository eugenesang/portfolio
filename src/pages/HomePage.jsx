import React, { useState } from 'react';
import Menu from '../components/Menu';
import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


import "../css/yago-home-page.css";
import PageLoader from '../components/PageLoader';

const HomePage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuState, setMenuState] = useState('deactive');
    const [pageLoading, setPageLoading] = useState(true);

    setTimeout(()=>{
        setPageLoading(false);
    }, 10000)


    function toggleMenu() {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            setMenuState('active');
        } else {
            setMenuState('deactive');
        }
    }
    return (<div className="home-page">
        {pageLoading && <PageLoader/>}
        <Menu toggleMenu={toggleMenu} showMenu={menuState} />
        <Nav toggleMenu={toggleMenu} showMenu={menuState} />

        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />

    </div>);
}

export default HomePage;