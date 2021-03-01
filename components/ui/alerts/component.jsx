import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';

import Logo from '@/components/ui/logo'
import Button from '@/components/ui/button'

const Alerts = (props) => {
    const {
        children,
        className,
        theme,
    } = props;

    let alerts = null;
    alerts = (
        <>
        <div className={cx('alert', 'd-flex', 'align-items-center', theme, className,)} role="alert">
            {children}
        </div>
        </>
    );
    return alerts;
};

Alerts.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.string,
};

export default Alerts;
