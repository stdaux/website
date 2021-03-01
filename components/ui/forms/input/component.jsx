import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const {
        className, 
        type,
        other,
        placeholder,
        onChange,
        value
    } = props;

    let input = null;

    input = (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            {...other}
            ref = {React.createRef()}
        />
    );
    return input;
}

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
    className: '',
    type: 'text',
};

export default Input;
