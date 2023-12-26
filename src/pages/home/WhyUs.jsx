import React, { useState, useEffect, cloneElement } from 'react';
import '../../css/why-us.css';


function placeSentence(text) {
    function placeStringInArray(inputString) {
        const arrayLength = 12;
        const resultArray = Array(arrayLength).fill(' ');

        const stringLength = inputString.length;
        const startIndex = Math.floor((arrayLength - stringLength) / 2);

        for (let i = 0; i < stringLength; i++) {
            resultArray[startIndex + i] = inputString[i];
        }

        return resultArray;
    }

    /**
     * 
     * @param {String} sentence 
     */
    function placeStrings(sentence) {
        const words = sentence.split(' ');
        let rows = [];
        var curString = '';
        for (let word of words) {
            if ((curString + word).length > 11) {
                rows.push(curString);
                curString = word;
            } else {
                const separator = curString.length ? '·' : ' ';
                curString = curString + separator + word;
            }
        }

        rows.push(curString);

        return rows;
    }

    const ans = placeStrings(text).map(str => placeStringInArray(str));
    
    return ans;
};



const GridRow = ({sentence}) => {
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    const classes = sentence ? sentence.map(d=>d != ' ' && d ?'filled': 'empty'): ids.map(d=>'empty');


    return (
        <div className="why-us-grid-row">
            {ids.map((id) => {
                return (
                    <div className={`why-us-cell ${classes[id - 1]}`} key={id}>
                        <span>{sentence? sentence[id-1] : ' '}</span>
                    </div>
                )
            })}
        </div>
    )
}

const WhyUs = () => {
    const ids = [1, 2, 3];
    var curIndex = 0;

    const texts = [
        "Sleek design wows users",
        "got Strong online presence",
        "Seamless on any device",
        "Tech for digital leadership",
        "Fortify against online threats",
        "Your success, our priority",
        "Bring vision to life"
    ].map(d=>placeSentence(d));

    const [sentence, setSentence] = useState(texts[curIndex]);

    setInterval(()=>{
        if(curIndex>= texts.length){
            curIndex =0;
        }

        console.log(curIndex);
        setSentence(texts[curIndex++]);
    }, 2500)
    return (
        <div className="why-us">
            <div className="why-us-container">
                {ids.map((id) => {
                    return (
                        <GridRow key={id} sentence={sentence[id-1]} />
                    )
                })}
            </div>
        </div>
    );
};

export default WhyUs;