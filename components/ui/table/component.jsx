import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Table extends Component {
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
    };

    static defaultProps = {
        striped: true,
        highlightOnHover: true,
        responsive: true,
        fixedHeader: true,
        allowOverflow: true,
        columns: [],
        data: []
    };

    render() {
        const { className, children, title, columns, data, id, striped, theme, other, highlightOnHover, responsive, fixedHeader, allowOverflow } = this.props;
        let table=null;
        table = (
            <>
                <table className={cx("table", "table-primary", "table-responsive", className)}>
                    <thead>
                        <tr className="tx-uppercase tx-10 tx-spacing-1 tx-semibold">
                            <th scope="col">#</th>
                            {columns.map((column) =>
                                <th scope="col">{column}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index+1}>
                                <th scope="row"><strong>{index+1}</strong></th>
                                {columns.map(column => (
                                    <td className="text-left tx-rubik" scope="col">{row[column]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
        return table;
    }
}

export default Table;
