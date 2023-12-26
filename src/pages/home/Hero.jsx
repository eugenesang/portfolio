import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';



const generateRandomText = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/[]{}|';
    const charactersLength = characters.length;

    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * charactersLength))).join('');
};



const Box = ({ letter, index, revealDelay, arrows, symbols }) => {
    const [currentText, setCurrentText] = React.useState(generateRandomText(1));
    const [completed, setCompleted] = useState(false);
    const isSymbol = !("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('')).includes(letter);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCompleted(false)
            setCurrentText(generateRandomText(1));
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            setCurrentText(letter);
            setCompleted(true);
        }, 1000 + index * 25);

        return () => clearInterval(interval);
    }, [letter, index, revealDelay]);

    return (
        <div className={`box ${isSymbol ? completed ?'symbol': '': ''}`}>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {currentText}
                {arrows && <i className="fas fa-arrow-right"></i>}
                {symbols && <span>✨</span>}
            </motion.span>
        </div>
    );
};


const Hero = () => {
    const texts = [
        { intro: "What if your website", explanation: "wowed users with sleek design?" },
        { intro: "What if your online presence", explanation: "kept customers coming back?" },
        { intro: "What if your website", explanation: "worked seamlessly on any device?" },
        { intro: "What if your digital space", explanation: "used a cutting-edge tech to lead the way?" },
        { intro: "What if your website", explanation: "was a fortress against online threats?" },
        { intro: "What if your success", explanation: "was our top priority?" },
        {intro: "What if your vision", explanation: "could be brought to life?"}
    ];

    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 7000); // Change the delay (in milliseconds) between sentences

        return () => clearInterval(interval);
    }, [texts.length]);



    return (
        <div className="hero">
            <div className="hero-content">
                <motion.h3
                    key={currentSentenceIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {texts[currentSentenceIndex].intro}
                </motion.h3>
                <div className="boxes-container">
                    {texts[currentSentenceIndex]['explanation'].split(' ').map((word, i) => (
                        <div className="word" key={i}>
                            {word.trim().split('').map((text, index) => {
                                return (
                                    <Box
                                        key={index}
                                        letter={text}
                                        index={(i * 10) + index}
                                        revealDelay={Math.random()}
                                        arrows={index === 0}
                                    />
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;