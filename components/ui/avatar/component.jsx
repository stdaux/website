import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { isTouch } from '../../../utils/browser';
import cx from 'classnames';

const Avatar = (props) => {
    const {className, size, shape, name, image} = props;

    let avatar = null;
    avatar = (
        <div className={`avatar avatar-${size} ${className}`} >
            {(!image && name) && <span className={cx('avatar-initial', shape)}>{name}</span>}
            {image && <img src={image} className={cx(shape)}/>}
        </div>

    );

    return avatar;
};

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  shape: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
};

export default Avatar;
