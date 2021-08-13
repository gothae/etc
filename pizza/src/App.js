import './App.css';
import { Component } from 'react';
import Menu from './components/Menu';

class App extends Component {
  state={
    pizza : [
      {id:1, name:"이의섭정수리냄새맛", price:10000},
      {id:2, name:"이의섭배꼽냄새맛", price:8000},
      {id:3, name:"이의섭발냄새맛", price:15000}
    ],
    order : {},
    orderTotal : 0
  };
  updateOrder = ({name,price}) => {
    var order = this.state.order;
    var orderTotal = 0;

    order[name] = price;
    for(var key in order){
      orderTotal += order[key]
    }
    this.setState({
      order : order,
      orderTotal : orderTotal
    })
  }
  render(){
    return (
      <div className="App">
        <h1>찌섯피자</h1>
        
        <Menu
          orderTotal = {this.state.orderTotal}
          updateOrder = {this.updateOrder}
        >
        </Menu>

      </div>
    );
  }
}

export default App;
