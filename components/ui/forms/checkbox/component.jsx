import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';

const Checkbox = (props) => {
    const {
        id,
        name,
        label,
        checked,
        disabled,
    } = props;

    checkbox = (
        <>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id={id} name={name} disabled={disabled} checked={checked}/>
            <label className="custom-control-label" for={id}>{label}</label>
        </div>
        </>
    );

    return button;
};

Checkbox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Checkbox;


