import React, {Component, forwardRef} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Card = forwardRef(({ className, children, ...other }, ref) => {
    let card=null;
    card = (
        <>
            <div className={cx("card", className,)} {...other} ref={ref}>
                {children}
            </div>
        </>
    )
    return card;
})

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Card;
