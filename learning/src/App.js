import React, { Component } from 'react';
import AddColorForm from './06/AddColorForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors : []
    }
  }
  render() {
    const { colors } = this.state;
    return (
      <div className="App">
        <AddColorForm/>
      </div>
    );
  }
}

export default App;