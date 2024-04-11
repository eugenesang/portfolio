import React from 'react';
const Background = () => {
    return (<div className="background">
        <style jsx="true" >
        {`
        .background{
            position: fixed;
            z-index: -1;
            top: 0;
            right: 0;
            height: 100vh;
            width: 100vw;
            background-color: #010c1a;
            opacity: 50%;
        }
        `}
        </style>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">

            <defs>
                <pattern id="pattern-circles" x="0" y="0" width="100" height="150" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                    <circle id="pattern-circle" cx="5" cy="5" r="1.6257413380501518" fill="#888"></circle>
                </pattern>
            </defs>

            <rect id="rect" x="0" y="150" width="100%" height="100%" fill="url(#pattern-circles)">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="0 -150" dur="10s" repeatCount="indefinite" />
            </rect>

        </svg>

    </div>);
}

export default Background;