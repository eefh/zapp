import React from 'react';
const Header = (props) => {

    return (
        <div className='header'>
            <a href="/"className='title'>
                <h1 className={props.darkMode}>zerl<span className="material-symbols-outlined">public</span>g</h1>
            </a>
            <div className='options'>
                <span className="material-symbols-rounded">
                settings
                </span>
                <span className="material-symbols-rounded">
                person
                </span>
            </div>
        </div>
       
    );
}

export default Header;