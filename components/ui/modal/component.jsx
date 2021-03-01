import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import { Rnd } from "react-rnd";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'
import { connect } from "react-redux";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.modal = React.createRef();
        
    }

    static propTypes = {
        className: PropTypes.string,
        identity: PropTypes.string,
        children: PropTypes.node,
    }

    render() {
        const {className, identity, children} = this.state;

        let modal = null;
        modal = (
            <>
                <div className={cx('modal', 'fade', className)} id={identity} ref={this.modal} role="dialog">
                    <div className={cx('modal-dialog', 'modal-dialog-centered')} role="document">
                        <div className={cx('modal-content')}>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )
        return modal;
    }
}

class ModalHeader extends Component {
    constructor(props) {
        super(props);
        this.modalHeader = React.createRef();
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    }

    render() {
        const {className, children} = this.state;

        let modalheader = null;
        modalheader = (
            <>
                <div className={cx('modal-header', 'pd-y-20', 'pd-x-20', 'pd-sm-x-30', className)} ref={this.modalHeader}>
                    <a href="" role="button" className="close pos-absolute t-15 r-15" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </a>
                    {children}
                </div>
            </>
        )
        return modalheader;
    }
}

class ModalBody extends Component {
    constructor(props) {
        super(props);
        this.modalBody = React.createRef();
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    }

    render() {
        const {className, children} = this.state;

        let modalbody = null;
        modalbody = (
            <>
                <div className={cx('modal-body', 'pd-sm-t-30', 'pd-sm-b-40', 'pd-sm-x-30', className)} ref={this.modalBody}>
                    <a href="" role="button" className="close pos-absolute t-15 r-15" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </a>
                    {children}
                </div>
            </>
        )
        return modalbody;
    }
}

export default Modal;
export default ModalHeader;
export default ModalBody;
