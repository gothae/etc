import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World
      <FuncComp></FuncComp>
      <ClassComp></ClassComp>
    </div>
  );
}

function FuncComp(){
  return(
    <div className = "container">
      <h2>function style component</h2>
    </div>
  );
}

class ClassComp extends Component{
  render(){
    return(
      <div className="contatiner">
        <h2>class style component</h2>
      </div>
    );
  }
}
export default App;
