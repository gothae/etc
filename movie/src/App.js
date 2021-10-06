import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    console.log('hello');
  }
  componentDidMount(){
    console.log('didmount');
  }
  componentDidUpdate(){
    console.log('didupdate')
  }
  componentWillUnmount(){
    console.log('unmount')
  }
  state = {
    count : 0
  }
  add = () => (this.setState({ count: this.state.count + 1 }))
  minus = () => (this.setState({ count: this.state.count - 1 }))
  render() {
    console.log('render');
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

export default App;