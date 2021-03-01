import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import cx from 'classnames';

const Logo = (props) => {
  const {
    link,
    src,
    className,
    size,
    shape,
    name,
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

  let logo = null;
    logo = (
        <a href="http://themepixels.me/index.html" className="stdaux-logo">dash<span>forge</span></a>
    );

  return logo;
};

Logo.propTypes = {
  className: PropTypes.string,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  src: PropTypes.string,
  size: PropTypes.string,
  shape: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  tooltip: PropTypes.object,
  background: PropTypes.string,
  target: PropTypes.string,
};

export default Logo;
