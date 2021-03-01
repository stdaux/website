import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class CardHeader extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        title: PropTypes.string,
    };

    render() {
        const { className, children, title } = this.props;
        let cardheader=null;
        cardheader = (
            <>
                <div className={cx("card-header", "d-flex", "justify-content-between", className,)} >
                    {children}
                </div>
            </>
        )
        return cardheader;
    }
}

export default CardHeader;
