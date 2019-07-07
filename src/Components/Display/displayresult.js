import React from 'react';
import Display from './display.js';

class Displayresult extends React.Component{
render(){
    return(
        <div className="display">
            <Display value={this.props.asked} className="asked"/>
            <Display value={this.props.result} className="result"/>
        </div>
    )
}
}
export default Displayresult;