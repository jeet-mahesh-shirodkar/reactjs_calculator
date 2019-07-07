import React from 'react';
import './buttons.css';

function Buttons(props){
    return(
        <input type="button" className = "num" value={props.value} onClick={props.handleClick}/>
    );
}
export default Buttons;