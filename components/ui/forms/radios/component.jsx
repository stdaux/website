import React from 'react';
import PropTypes from 'prop-types';

const Radio = (props) => {
    const {
        id,
        label,
        name,
        checked,
        disabled
    } = props;

    radio = (
        <>
        <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" name={name} id={id} disabled={disabled} checked={checked}/>
            <label className="custom-control-label" for={id}>{label}</label>
        </div>
        </>
    );

    return radio;
};

Radio.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Radio;
