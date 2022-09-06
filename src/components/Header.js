import React from 'react';
const Header = (props) => {

    return (
        <div className='header'>

                <span className="material-symbols-rounded settings">
                settings
                </span>
                            <a href="/"className='title'>
                <h1 className={props.darkMode}>zerl<span className="material-symbols-outlined">public</span>g</h1>
            </a>
                <span className="material-symbols-rounded settings">
                person
                </span>
        </div>
       
    );
}

export default Header;