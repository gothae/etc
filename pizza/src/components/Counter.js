import React, { Component } from "react";

class Counter extends Component{
    state ={
        quantity : 0
    }
    updateQuantity(modifier){
        const minimum = this.props.min || 0;
        const maximum = this.props.max || 99999;
        const _quantity = this.state.quantity + modifier;

        if(_quantity < minimum || _quantity > maximum){
            return;
        }

        this.setState({
            quantity : _quantity
        }, ()=>{
            this.props.updateOrder({
                name : this.props.name,
                price : this.getPrice()
            });
        });
    }
    getPrice(){
        return this.props.price * this.state.quantity;
    }
    render(){
        return(
            <div className="counter">
                <span className ="name">{this.props.name}</span>
                <span className ="price">{this.props.price}</span>
                <div className="btn-wrap">
                    <button className="btnMinus" 
                    onClick = {() =>{this.updateQuantity(-1)}}>-</button>
                    <span className="quantity">{this.state.quantity}</span>
                    <button className="btnPlus" 
                    onClick = {() =>{this.updateQuantity(1)}}>+</button>
                </div>
                <span className="total">{this.getPrice()}</span>
            </div>
        );
    }
}
export default Counter;