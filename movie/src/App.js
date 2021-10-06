import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoading : true,
  };
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <p1>{isLoading ?'Loading' : 'We Are Ready'}</p1>
      </div>
    );
  }
}

export default App;