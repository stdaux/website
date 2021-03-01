import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { isTouch } from '../../../utils/browser';
import cx from 'classnames';

import { Tooltip } from 'react-tippy';
import Tip from '../tip';

const Button = (props) => {
  const {
    extLink,
    link,
    children,
    className,
    theme,
    disabled,
    active,
    onClick,
    tooltip,
    background,
    target,
  } = props;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const isDeviceTouch = isTouch();
  let button = null;
  if (extLink) {
    button = (
      <a
        className={cx(
          'btn',
          theme,
          className,
          { disabled },
          { '--active': active }
        )}
        href={extLink}
        target={target || '_blank'}
        rel="noopener"
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </a>
    );
  } else {
    button = (
      <button
        className={cx(
          'btn',
          theme,
          className,
          { disabled },
          { '--active': active }
        )}
        onClick={handleClick}
        disabled={disabled}
        style={background && { background }}
      >
        <div className="button-wrapper">{children}</div>
      </button>
    );
  }

  if (tooltip) {
    return (
      <Tooltip
        theme="tip"
        position="top"
        arrow
        disabled={isDeviceTouch}
        html={<Tip text={tooltip.text} />}
        hideOnClick
        {...tooltip}
      >
        {button}
      </Tooltip>
    );
  }
  return button;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  extLink: PropTypes.string,
  tooltip: PropTypes.object,
  buttonClicked: PropTypes.func,
  background: PropTypes.string,
  target: PropTypes.string,
};

export default Button;
