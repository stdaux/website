import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Rnd } from "react-rnd";
import PerfectScrollbar from 'react-perfect-scrollbar'

class Progress extends Component {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        status: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        children: PropTypes.node,
    }

    render() {
        const { className, type, status, min, max, children } = this.props;
        let progress=null;
        progress = (
            <>
            <div 
                className={cx(
                    'progress',
                    className,
                )}
            >
                <div 
                    className={cx(
                        'progress-bar', 
                        `bg-${type}`, 
                        `wd-${status}p`
                    )} 
                    role="progressbar" 
                    aria-valuenow={status} 
                    aria-valuemin={min} 
                    aria-valuemax={max}
                >
                    {children}
                </div>
            </div>
            </>
        )
        return progress;
    }
}

export default Progress;
