import React from 'react';

import 'material-icons/iconfont/material-icons.css';
const Header = (props) => {

    return (
        <div className='header'>

                <span className="material-icons settings">
                settings
                </span>
                <a href="/">
                <h1 className={props.darkMode}>zerl<span className="material-icons-outlined globe">public</span>g</h1>
                </a>
                <span className="material-icons settings">
                person
                </span>
        </div>
       
    );
}

export default Header;