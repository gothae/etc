import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count : 1
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount(){
    this.setState( ({count}) => ({count : count + 1}))
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;