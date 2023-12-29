import React from 'react';

/***********************
    Nav Component
   ***********************/

const Nav = props => {
    return (
        <React.Fragment>
            <nav id="navbar">
                <div className="nav-wrapper">
                    <p className="brand">
                       Eugene <strong>Sang</strong>
                    </p>
                    <a
                        onClick={props.toggleMenu}
                        className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
                    >
                        <span />
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Nav;