import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ChildProperty extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

ChildProperty.propTypes = {
    children : Proptypes.node
};
export default ChildProperty;