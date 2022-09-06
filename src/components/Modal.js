import React from "react";
const links = [['gaming general', 'gaming news', 'multiplayer games', 'mobile games', 'retro games']
            ,['comics & cartoons', 'technology', 'television & film', 'business & finance', 'weapons', 'science and math', 'outdoors', 'sports']
            ,['photography', 'food & cooking', 'artwork/critique', 'wallpapers', 'literature', 'music', 'fashion', '3d graphics', 'graphic design', 'diy']
            ,['africa', 'americas', 'asia', 'europe', 'japan']
            ,['5']
            ,['debate', 'left', 'right']
            ,['7']];
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