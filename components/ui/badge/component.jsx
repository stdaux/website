import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Rnd } from "react-rnd";

class Badge extends Component {    
    static propTypes = {
        link: PropTypes.string,
        type: PropTypes.string,
        children: PropTypes.node,
        className: PropTypes.string,
        pill: PropTypes.bool
    }

    render() {
        const { link, type, text, pill } = this.props;
        let p = null;
        if(pill==true){
            p = 'badge-pill'
        }

        let badge = null;
        if (link){
            badge = (
                <>
                <a 
                    href={link} 
                    className={cx(
                        'badge',
                        `badge-${type}`,
                        {p},
                        className,
                    )}
                >
                    {children}
                </a>
                </>
            )
        }
        else{
            badge = (
                <>
                <span 
                    className={cx(
                        'badge',
                        `badge-${type}`,
                        {p},
                        className,
                    )}
                >
                    {children}
                </span>
                </>
            )
        }
        return badge;
    }
}

export default Badge;
