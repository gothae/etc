import React ,{ Component } from "react";
import Counter from "./Counter";
class Menu extends Component{
    render(){
        return(
            <div>
                <div className="'wrap">
                    <Counter
                        name = "이의섭정수리냄새맛"
                        price = {10000}
                        max = {10}
                        updateOrder = {this.props.updateOrder}/>
                    <Counter
                        name = "이의섭배꼽냄새맛"
                        price = {8000}
                        updateOrder = {this.props.updateOrder}/>
                    <Counter
                        name = "이의섭발냄새맛"
                        price = {15000}
                        updateOrder = {this.props.updateOrder}/>
                </div>
                <div className="total-all">총 계 : {this.props.orderTotal}</div>
            </div>
        );
    }
}
export default Menu;