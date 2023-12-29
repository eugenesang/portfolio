import React from 'react';

// Date from 2021

function calculateYearsFromJanuary2020() {
    const january2021 = new Date('2020-06-15');
    const currentDate = new Date();

    const yearsDifference = currentDate.getFullYear() - january2021.getFullYear();
    const monthsDifference = currentDate.getMonth() - january2021.getMonth();

    const fractionalYears = monthsDifference / 12;

    const totalYears = yearsDifference + fractionalYears;

    return `${totalYears.toFixed(1)}+`;
}




/***********************
   About Component
  ***********************/

const About = props => {
    const time = calculateYearsFromJanuary2020();
    return (
        <section id="about">
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>Who's this guy?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc full">
                        <h4 className="subtitle">My name is Eugene.</h4>
                        <p>
                            I am a fullstack web developer from Kenya.
                        </p>
                        <p>
                            <strong>
                                I'm a {time} Year Web Dev Wizard, Ready to Conjure Up {/* Bold text */}<b>Magical Experiences</b> ✨
                            </strong>
                            <p>
                                I weave code like spells, crafting {/* Bold text */}<b>enchanting websites</b> that captivate users on desktops, mobiles, and beyond.
                            </p>
                            <p>
                                My wand of choice? A potent blend of HTML, CSS, Node-JS, and JavaScript. I'm fluent in the languages of APIs, third-party integrations, and databases, and I'm obsessed with crafting experiences that adhere to the highest standards of design, UX, and lightning-fast speed.
                            </p>
                            <p>
                                Seeking a collaborative team to join forces with? I'm your sorcerer! Let's create something truly {/* Bold text */}<b>spellbinding</b> together.
                            </p>
                        </p>
                    </div>
                    <div className="title">
                        <h3>What do I do?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">I'm a web developer.</h4>
                        <p>
                            I'm the Gandalf of front-ends, wielding JavaScript like a staff, summoning ReactJS and Svelte like loyal companions, and weaving CSS spells to make the web sing. SVG? My trusty ring.
                            Can't stop, won't stop building pixel-perfect UIs. JavaScript is my kryptonite, ReactJS and Svelte my sidekicks, and CSS and SVG my paintbrush. Let's create something awesome.
                        </p>
                        <p>
                            Back-end chameleon here, fluent in JavaScript (NodeJS, Express, MongoDB, MySql), PHP (WordPress, Laravel), and Python (Django, Flask). I adapt to any project's needs.
                            I build back-ends that power experiences. JavaScript, PHP, Python—you name it, I've got it covered.
                        </p>
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">Also a designer.</h4>
                        <p>
                            I harness the creative potential of tools like Figma, Adobe Photoshop, Adobe Illustrator, and Canva, seamlessly integrating their features to produce visually compelling designs. Additionally, I draw inspiration from platforms like Pinterest and utilize resources from Freepik and Unsplash to enhance and diversify my design projects.
                        </p>
                        <p>
                            I specialize in creating seamless app design mockups and visually striking card designs, showcasing a keen eye for intuitive user experiences and impactful visual communication
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};


export default About;