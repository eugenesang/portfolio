import React, { useState, useEffect } from 'react';
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

  function placeStrings(sentence) {
    const words = sentence.split(' ');
    let rows = [];
    let curString = '';

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

  return placeStrings(text).map((str) => placeStringInArray(str));
}


const GridRow = ({ sentence }) => {
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const classes = sentence ? sentence.map((d) => (d !== ' ' && d ? 'filled' : 'empty')) : ids.map(() => 'empty');
  
    return (
      <div className="why-us-grid-row">
        {ids.map((id) => (
          <div className={`why-us-cell ${classes[id - 1]}`} key={id}>
            <span>{sentence ? sentence[id - 1] : ' '}</span>
          </div>
        ))}
      </div>
    );
  };


const WhyUs = () => {
  const ids = [1, 2, 3];
  const texts = [
    "Sleek design wows users",
    "Strong online presence",
    "Seamless on any device",
    "Tech for digital leadership",
    "Fortify against online threats",
    "Your success our priority",
    "Bring vision to life",
  ].map((d) => placeSentence(d));

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [sentence, setSentence] = useState(texts[sentenceIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSentenceIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [texts]);

  useEffect(() => {
    setSentence(texts[sentenceIndex]);
  }, [sentenceIndex]);

  return (
    <div className="why-us">
      <div className="why-us-container">
        {ids.map((id) => (
          <GridRow key={id} sentence={sentence[id - 1]} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;