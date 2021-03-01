import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { isTouch } from '../../../utils/browser';
import cx from 'classnames';

import { Tooltip } from 'react-tippy';
import Tip from 'components/ui/tip';

import './styles.scss';

const Breadcrumbs = (props) => {
  const {
    extLink,
    link,
    src,
    className,
    disabled,
    active,
    size,
    shape,
    name,
    status,
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
  let avatar = null;
  
  if (extLink) {
    avatar = (
      <a
        className={cx(
          'avatar',
          size,
          status,
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
        if (src && !name ){
          <img src={src} className={cx(shape)}></img>
        }
        else if (!src && name){
          <span className={cx('avatar-initial', shape)}>{name}</span>
        }
      </a>
    );
  } else if (link) {
    avatar = (
      <Link href={link}>
        <a>
          <button
            className={cx(
              'avatar',
              size,
              status,
              className,
              { disabled },
              { '--active': active }
            )}
            disabled={disabled}
            onClick={handleClick}
          >
            if (src && !name ){
              <img src={src} className={cx(shape)}></img>
            }
            else if (!src && name){
              <span className={cx('avatar-initial', shape)}>{name}</span>
            }
          </button>
        </a>
      </Link>
    );
  } else {
    avatar = (
      <div
        className={cx(
          'avatar',
          size,
          status,
          className,
          { disabled },
          { '--active': active }
        )}
        onClick={handleClick}
        disabled={disabled}
        style={background && { background }}
      >
        if (src && !name ){
          <img src={src} className={cx(shape)}></img>
        }
        else if (!src && name){
          <span className={cx('avatar-initial', shape)}>{name}</span>
        }
      </div>
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

Breadcrumbs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  src: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  size: PropTypes.string,
  shape: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
  onClick: PropTypes.func,
  extLink: PropTypes.string,
  tooltip: PropTypes.object,
  avatarClicked: PropTypes.func,
  background: PropTypes.string,
  target: PropTypes.string,
};

export default Breadcrumbs;
