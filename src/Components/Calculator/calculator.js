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

    // handleClick(event){
    //     const value = event.target.value;   
    //     if(event.target.className === "num" && value !== "=" && value !== "clear"){ 

    //         console.log(value, event.target.className);

    //         if((value ==="+" ||value ==="-" || value ==="*" ||value ==="/") ){
    //             this.setState({operatorPressed: this.state.operatorPressed += 1});
    //             console.log(this.state.operatorPressed);  

    //         }
    //         var finalresult='';
    //         finalresult= this.state.asked +=value;
    //         this.setState({
    //             result: finalresult
    //         });

    //         if(this.state.operatorPressed===2){
    //             alert('err')
    //             this.setState({
    //                 result:'',
    //                 asked:'',
    //                 operatorPressed: 0
    //             });

    //         }
    //       // this.setState
    //     } 
    //     else if (value === "="){
    //         // console.log(typeof this.state.result);
    //         // console.log(eval(this.state.result));
    //         this.setState({
    //             result:eval(this.state.result)
    //         })
    //     }
    //     else if(value === "clear"){
    //         this.setState({
    //             asked:'',result:''
    //         })
    //     }
    //     else{
    //         this.setState({operatorPressed:0})
    //     } 

    // }
        
        
        // //  answer='';
        // if(value === '='){
        //     // var answer='';
        //     // var answer = (eval(this.state.asked +=value));
        //     this.setState({
        //         result: eval(this.state.asked +=value)
        //     })
                
        // }
        // else if(value === 'clear'){
        //    this.setState=({
        //        asked:'',result:''
        //    })
        // }
        // else{
        //     var finalresult='';
        //    finalresult= this.state.asked +=value;
        //    console.log(this.state.asked +=value);
        //     this.setState({
        //         result:finalresult
        //     })
        // }
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