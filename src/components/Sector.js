import React from "react";
import SectorItem from "./SectorItem";
import "./styles/Card.css"
const Linker = {
    'videogame_asset': ['gaming general',
                'gaming news',
                'multiplayer games',
                'mobile games',
                'retro games'],
    'interests': [''],
    'creative': [''],
    'japan': [''],
    'other': [''],
    'misc': [''],
    'politics': ['']
};
const Sector = (props) => {

    return (
        <div className="content-block">
            <span className="material-symbols-outlined icon">
                {props.icon}
            </span>
            <h3>{props.name}</h3>

        </div>
    );
};

export default Sector;