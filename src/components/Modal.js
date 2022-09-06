import React from "react";
import ReactDom from 'react-dom';
const links = [['gaming general', 'gaming news', 'multiplayer games', 'mobile games', 'retro games', 'rpg games']
            ,['comics & film', 'technology', 'business & finance', 'science and math', 'outdoors', 'sports']
            ,['food & cooking', 'artwork/critique', 'literature', 'music', 'fashion', 'graphic design']
            ,['africa', 'north america', 'south america', 'asia', 'europe', 'japan']
            ,['random', 'diy', 'cool', 'zerblog', 'zerlog star', 'secret']
            ,['debate', 'left', 'right', 'twitter', 'ideologies', 'activism']
            ,['lgbt', 'advice', 'current news', 'paranormal', 'travel', 'fitness']];
export default function Modal(props){
    if (!props.open) return null
    let sec;
    switch(props.type){
        case 'Gaming':
            sec = 0;
            break;
        case 'Interests':
            sec = 1;
            break;
        case 'Creative':
            sec = 2;
            break;
        case 'Global':
            sec = 3;
            break;
        case 'Misc.':
            sec = 4;
            break;
        case 'Politics':
            sec = 5;
            break;
        case 'Other':
            sec = 6;
            break;
        default:
            break;
    }
    return (
        <div className="modal">
            <p>{links[sec][0]}</p>
            <p>{links[sec][1]}</p>
            <p>{links[sec][2]}</p>
            <p>{links[sec][3]}</p>
            <p>{links[sec][4]}</p>
            <p>{links[sec][5]}</p>
            <p>{links[sec][6]}</p>
            <p>{links[sec][7]}</p>
        </div>
    )
}