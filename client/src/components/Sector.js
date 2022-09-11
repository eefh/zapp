import React, { useState } from "react";
import SectorItem from "./SectorItem";
import Modal from './Modal';
import "./styles/Card.css"

const Sector = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="content-block" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <span className="material-symbols-outlined icon">
                {props.icon}
            </span>
            <h3>{props.name}</h3>
            <Modal open={isOpen} type={props.name}/>
        </div>
    );
};

export default Sector;