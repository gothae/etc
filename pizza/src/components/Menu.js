import React ,{ Component } from "react";
import Counter from "./Counter";

class Menu extends Component{
    render(){
        var pizza = this.props.pizza;
        var lists = [];
        var i = 0;
        while(i < pizza.length){
            lists.push(
                <Counter
                    key = {pizza[i].id}
                    name = {pizza[i].name}
                    price = {pizza[i].price}
                    updateOrder = {this.props.updateOrder}/>
            )
            i += 1;
        }
        return(
            <div>
                <div className="'wrap">
                    {lists}
                </div>
                <div className="total-all">총 계 : {this.props.orderTotal}</div>
            </div>
        );
    }
}
export default Menu;