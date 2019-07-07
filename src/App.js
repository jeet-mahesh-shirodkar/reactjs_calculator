import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator/calculator.js';

class App extends React.Component{ 
  render(){
  return (
    <div className="App">
     <h4> ReactJS Calculator</h4> 
     <Calculator/>
    </div>
  );
}}

export default App;
