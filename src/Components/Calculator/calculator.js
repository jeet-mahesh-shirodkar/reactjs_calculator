import React from 'react';
import Buttons from '../Buttons/buttons.js';
// import Display from '../Display/displayresult.js';
import Displayresult from '../Display/displayresult.js';
// import { async } from 'q';
// import * as math from 'mathjs';
import './calculator.css'; 

class Calculator extends React.Component{
    constructor(props){
         super(props);
         this.state={
           asked:'',
           result:'',
           operatorPressed: 0
         }
         this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const value=event.target.value;
        if((value ==="+" ||value ==="-" || value ==="*" ||value ==="/")){
            console.log(value)
            this.setState({
                result:this.state.asked+=value,
                operatorPressed:this.state.operatorPressed+=1
            });
        }
        else{
            if(event.target.className === "num" && value !== "=" && value !=="clear"){
             this.setState({
                 result:this.state.asked+=value,
                 operatorPressed:0
             })
            }
            else if(value === "="){
                     var ask ='';
                try {
                    ask = eval(this.state.result)
                } catch (error) {
                    this.setState({result:"Wrong Input"})
                }
                if(ask === undefined){
                    this.setState({result:"Wrong input"})
                }
                else{
                    
                    this.setState({asked:'',result:ask, operatorPressed: 0 })
                }
            }
            else if(value ==="clear"){
               this.setState({
                   asked:'', result:'', operatorPressed:0
               })
            }   
        }

        if(this.state.operatorPressed===2){
            alert("Don't Repeat Operators")
            this.setState({
                asked:'',result:'',operatorPressed: 0
            })
        }
        
    }

render(){
    return(
        <div className="screen">
            <div className="calculation">
                <Displayresult asked={this.state.asked} result={this.state.result}/>
               <div className="buttons-row">
                   <Buttons value={'1'} handleClick={this.handleClick}/>
                   <Buttons value={'2'} handleClick={this.handleClick}/>
                   <Buttons value={'3'} handleClick={this.handleClick}/>
                   <Buttons value={'+'} handleClick={this.handleClick}/>
               </div>
               <div className="buttons-row">
                   <Buttons value={'4'} handleClick={this.handleClick}/>
                   <Buttons value={'5'} handleClick={this.handleClick}/>
                   <Buttons value={'6'} handleClick={this.handleClick}/>
                   <Buttons value={'-'} handleClick={this.handleClick}/>
               </div>
               <div className="buttons-row">
                   <Buttons value={'7'} handleClick={this.handleClick}/>
                   <Buttons value={'8'} handleClick={this.handleClick}/>
                   <Buttons value={'9'} handleClick={this.handleClick}/>
                   <Buttons value={'*'} handleClick={this.handleClick}/>
               </div>
               <div className="buttons-row">
                   <Buttons value={'0'} handleClick={this.handleClick}/>
                   <Buttons value={'/'} handleClick={this.handleClick}/>
                   <Buttons value={'clear'} handleClick={this.handleClick}/>
                   <Buttons value={'='} handleClick={this.handleClick}/>
               </div>
            </div>
        </div>
    );
}
}
export default Calculator;