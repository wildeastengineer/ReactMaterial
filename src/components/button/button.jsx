import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('./button.scss');

class Button extends Component {
    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.oneOf(['raised', 'flat', 'floating']),
        children: PropTypes.node
    };

    static defaultProps = {
        className: '',
        type: 'raised',
        children: null
    };

    render() {
        const {
            id,
            className,
            type,
            children
        } = this.props;

        return (
            <button
                id={id}
                type='button'
                className={`rm-button rm-button-${type} ${className}`.trim()}
            >
                {children}
            </button>
        );
    }
}

export default Button;
