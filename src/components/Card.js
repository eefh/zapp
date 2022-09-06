import React from "react";
import "./styles/Card.css";
import Sector from "./Sector"
const Card = (props) => {

    return (
        <div className='card'>
            <div className='banner'>
                <h3 className={[props.darkMode]}>{props.name}</h3>
            </div>
            <div className='card-content'>
                <Sector name='Gaming' icon='videogame_asset'/>
                <Sector name='Interests' icon='interests'/>
                <Sector name='Creative' icon='emoji_objects'/>
                <Sector name='はい Japan'/>
                <Sector name='Misc.' icon='casino'/>
                <Sector name='Politics' icon='gavel'/>
                <Sector name='Other' icon='more_horiz'/>
            </div>
        </div>

    );
}

export default Card;