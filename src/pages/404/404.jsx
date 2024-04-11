import React from 'react';
import "./404.css";
import errorImage from './errorImage.png';
const Error404 = () => {
    return ( <>
        {/* Hello world */}
        <div className="container" id='page_404'>
          <h3>
            <span className="red-text">Oops!</span> That is awkward... you are looking
            for something that does not exist
          </h3>
          <div className="img-container">
            <img src={errorImage} alt="" />
          </div>
          <button className="page-btn">
            <a href="/">Go Back Friend, Go back</a>
          </button>
        </div>
        
      </>
      );
}
 
export default Error404;