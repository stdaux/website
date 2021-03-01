import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import { Rnd } from "react-rnd";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'
import { connect } from "react-redux";

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.alerts = React.createRef();
    }

    static propTypes = {
        className: PropTypes.string,
        link: PropTypes.string,
        invoice: PropTypes.object,
    }

    static defaultProps = {
        title: 'Events',
    }

    render() {
        const {className, link, invoice} = this.state;

        return (
            <>
                <div className="content content-fixed bd-b">
                    <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                        <div className="d-sm-flex align-items-center justify-content-between">
                            <div>
                                <h4 className="mg-b-5">Invoice {invoice.number}</h4>
                                <p className="mg-b-0 tx-color-03">{inoice.status.type} on {invoice.status.date}</p>
                            </div>
                            <div className="mg-t-20 mg-sm-t-0">
                                <button className="btn btn-white"><i data-feather="printer" className="mg-r-5"></i> Print</button>
                                <button className="btn btn-white mg-l-5"><i data-feather="mail" className="mg-r-5"></i> Email</button>
                                <button className="btn btn-primary mg-l-5"><i data-feather="credit-card" className="mg-r-5"></i> Pay</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content tx-13">
                    <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="tx-sans tx-uppercase tx-10 tx-medium tx-spacing-1 tx-color-03">Billed From</label>
                                <h6 className="tx-15 mg-b-10">{invoice.billed.from.name}</h6>
                                <p className="mg-b-0">{invoice.billed.from.address}</p>
                                <p className="mg-b-0">{invoice.billed.from.phone_number}</p>
                                <p className="mg-b-0">Email: {invoice.billed.from.email}</p>
                            </div>
                            <div className="col-sm-6 tx-right d-none d-md-block">
                                <label className="tx-sans tx-uppercase tx-10 tx-medium tx-spacing-1 tx-color-03">Invoice Number</label>
                                <h1 className="tx-normal tx-color-04 mg-b-10 tx-spacing--2">{invoice.number}</h1>
                            </div>
                            <div className="col-sm-6 col-lg-8 mg-t-40 mg-sm-t-0 mg-md-t-40">
                                <label className="tx-sans tx-uppercase tx-10 tx-medium tx-spacing-1 tx-color-03">Billed To</label>
                                <h6 className="tx-15 mg-b-10">{invoice.billed.to.name}</h6>
                                <p className="mg-b-0">{invoice.billed.to.address}</p>
                                <p className="mg-b-0">Tel No: {invoice.billed.to.phone_number}</p>
                                <p className="mg-b-0">Email: {invoice.billed.to.email}</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 mg-t-40">
                                <label className="tx-sans tx-uppercase tx-10 tx-medium tx-spacing-1 tx-color-03">Invoice Information</label>
                                <ul className="list-unstyled lh-7">
                                    <li className="d-flex justify-content-between">
                                        <span>Invoice Number</span>
                                        <span>{invoice.number}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <span>Product ID</span>
                                        <span>{invoice.product_id}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <span>Issue Date</span>
                                        <span>{invoice.issue_date}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <span>Due Date</span>
                                        <span>{invoice.due_date}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="table-responsive mg-t-40">
                            <table className="table table-invoice bd-b">
                                <thead>
                                    <tr>
                                        <th className="wd-20p">Type</th>
                                        <th className="wd-40p d-none d-sm-table-cell">Description</th>
                                        <th className="tx-center">QNTY</th>
                                        <th className="tx-right">Unit Price</th>
                                        <th className="tx-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {invoice.items.map(item => (
                                    <tr>
                                        <td className="tx-nowrap">{item.type}</td>
                                        <td className="d-none d-sm-table-cell tx-color-03">{item.description}</td>
                                        <td className="tx-center">{item.quantity}</td>
                                        <td className="tx-right">{item.price}</td>
                                        <td className="tx-right">{item.total_price}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-sm-6 col-lg-6 order-2 order-sm-0 mg-t-40 mg-sm-t-0">
                                <label className="tx-sans tx-uppercase tx-10 tx-medium tx-spacing-1 tx-color-03">Notes</label>
                                <p>{invoice.notes} </p>
                            </div>
                            <div className="col-sm-6 col-lg-4 order-1 order-sm-0">
                                <ul className="list-unstyled lh-7 pd-r-10">
                                    <li className="d-flex justify-content-between">
                                        <span>Sub-Total</span>
                                        <span>{invoice.sub_total}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <span>Tax ({invoice.taxable_percent}%)</span>
                                        <span>{invoice.taxable_amount}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <span>Discount</span>
                                        <span>-{invoice.discount}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Total Due</strong>
                                        <strong>{invoice.total_amount}</strong>
                                    </li>
                                </ul>
                                <button className="btn btn-block btn-primary">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Invoice;