import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class CardBody extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        title: PropTypes.string,
        columns: PropTypes.array,
        data: PropTypes.array,
        id: PropTypes.string,
        striped: PropTypes.bool,
        theme: PropTypes.string,
        highlightOnHover: PropTypes.bool,
        responsive: PropTypes.bool,
        fixedHeader: PropTypes.bool,
        allowOverflow: PropTypes.bool,
    }
    static defaultProps = {
        striped: true,
        highlightOnHover: true,
        responsive: true,
        fixedHeader: true,
        allowOverflow: true,
    };

    render() {
        const { className, children, title, columns, data, id, striped, theme, other, highlightOnHover, responsive, fixedHeader, allowOverflow } = this.props;
        let cardbody=null;
        cardbody = (
            <>
                <div className={cx("card-body", className,)} >
                    {children}
                </div>
            </>
        )
        return cardbody;
    }
}

export default CardBody;
