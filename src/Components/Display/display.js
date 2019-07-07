import React from 'react';
import './display.css';

function Display(props){
    return(
    <div className="Displays">
        <input value={props.value} readOnly className="display"></input>
    </div>
        );
}
export default Display;