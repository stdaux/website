import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';

const Filebrowser = (props) => {
    const {
        id,
        name,
        label,
        accept,
        multiple
    } = props;

    filebrowser = (
        <>
        <div className="custom-file">
            <input type="file" className="custom-control-input" id={id} name={name} accept={accept} multiple={multiple}/>
            <label className="custom-file-label" for={id}>{label}</label>
        </div>
        </>
    );

    return filebrowser;
};

Filebrowser.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
};

export default Filebrowser;


