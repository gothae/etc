import React, { Component } from 'react';

class RCC extends Component {
    render() {
        var ob1 = {one:1, two:2, other:0};
        var ob2 = {three : 3, four : 4, other : -1}

        var com =  {...ob1,...ob2}
        console.log(com)
        return (
            <div>
            </div>
        );
    }
}

export default RCC;