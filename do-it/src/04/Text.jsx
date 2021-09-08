import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Text extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <div>
                <span>{children}</span>
            </div>
        );
    }
}

Text.propTypes = {
    children : PropTypes.node.isRequired
};

export default Text;