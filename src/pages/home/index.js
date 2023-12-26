import React from 'react';
import Hero from './Hero';
import AboutSection from './About';
import WhyUs from './WhyUs';

const HomePage = () => {
    return (
    <div id="home" className='app-container'>
        <div className='scroll-snap-section'>
            <Hero />
        </div>
        <div className='scroll-snap-section'>
            <AboutSection />
        </div>
        <div className='scroll-snap-section'>
            <WhyUs/>
        </div>
    </div>);
}

export default HomePage;