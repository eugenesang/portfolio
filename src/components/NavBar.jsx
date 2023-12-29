import React from 'react';

import logo from "../assets/logo-mini.svg";
import "../css/nav.css";

const Navbar = () => {
    return (<nav>
        <div className="nav-left">
            <div className='img-container'>
                <img src={logo} alt="" />
            </div>
            <div className='name-container'>
                Eugene Sang
            </div>
        </div>
        <div className="nav-right">
            <button>About</button>
            <button>Projects</button>
        </div>
    </nav>);
}

export default Navbar;