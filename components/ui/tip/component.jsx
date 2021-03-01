import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Tip = (props) => {
    const { className, children, message, placement } = props;

    const handleToolTip = (props) => (
        <Tooltip className={cx(props.className)}>
            {props.message}
        </Tooltip>
    )

    let tip = null;
    tip = (
        <>
            <OverlayTrigger
                placement={placement}
                delay={{ show: 0, hide: 250 }}
                overlay={
                    <Tooltip>
                        {message}
                    </Tooltip>
                }
            >
                {children}
            </OverlayTrigger>
        </>
    )
    return tip;
}

Tip.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    message: PropTypes.string,
    placement: PropTypes.string,
};

Tip.defaultProps = {
    message: "",
    placement: "bottom",
};

export default Tip;
