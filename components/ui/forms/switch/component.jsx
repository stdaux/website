import React from 'react';
import PropTypes from 'prop-types';

const Switch = (props) => {
    const {
        id,
        label,
        name,
        checked,
        disabled
    } = props;

    let radio = (
        <>
        <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" name={name} id={id} disabled={disabled} checked={checked}/>
            <label className="custom-control-label" htmlFor={id}>{label}</label>
        </div>
        </>
    );

    return radio;
};

Switch.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Switch;
