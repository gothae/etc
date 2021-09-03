import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const nums = [1,2,3,4];
        return (
            nums.map((num) => (
            <input type="radio" key={`${num}`} value={num} label={`${num}개`} name="option1"/>
            )));
    }
}

export default Counter;