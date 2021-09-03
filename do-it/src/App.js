import React, { Component } from 'react';
import ChildProperty from './03/ChildProperty';
import Counter from './03/Counter';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count : 1
    };
  }
  increaseCount(){
    this.setState( ({count}) => ({count : count + 1}))
  }
  render() {
    return (
      <Counter count={0}/>
    );
  }
}

export default App;