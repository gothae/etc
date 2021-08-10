import './App.css';
import React,{ Component } from 'react';
import TOC from "./components/TOC.js";
import Content from './components/Content.js';
import Subject from './components/Subject.js';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title = "web" sub = "world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText ~~"></Content>
      </div>
    );
  }
}

export default App;
