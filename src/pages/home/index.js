import React from 'react';
import Hero from './Hero';
import AboutSection from './About';

const HomePage = () => {
    return (
    <div id="home" className='app-container'>
        <div className='scroll-snap-section'>
            <Hero />
        </div>
        <div className='scroll-snap-section'>
            <AboutSection />
        </div>
    </div>);
}

export default HomePage;