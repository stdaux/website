import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import Router  from 'next/router'
import axios from 'axios';

import Card from "@/components/ui/card"
import CardHeader from "@/components/ui/card/header"
import CardBody from "@/components/ui/card/body"
import Table from "@/components/ui/table";
import DataEngine from "@/components/forms/dataengine";
import SupportForm from "@/components/forms/help/support";

import { DataEngineUrls } from "@/actions/dataengine/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'

import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

const AddSupport = (props) => {
    const {asset_id, className, edit} = props;
    return (
        <>
            {edit? 
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="pd-y-20 pd-x-20 pd-sm-x-30">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Asset
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pd-sm-t-30 pd-sm-b-40 pd-sm-x-30">
                    <AddAssetForm asset_id={asset_id} className="mg-t-10 pd-x-20"/>
                </Modal.Body>
            </Modal>
            :
            <div className={cx(className)}>
                <Card>
                    <CardHeader className="pd-10 bd-b-1 d-flex align-items-center justify-content-between">    
                        <h6 className=" lh-5 mg-b-0">Request for Support</h6>
                        <p className="d-none d-md-flex tx-12 tx-color-03 mg-b-0">Total Support Requests: 2 hours ago</p>
                    </CardHeader>
                    <CardBody>
                        <SupportForm className="mg-t-10"/>
                    </CardBody>
                </Card>
            </div>
            }
        </>
    )
}

AddSupport.propTypes = {
    className: PropTypes.string,
    asset_id: PropTypes.string,
    column: PropTypes.array,
    edit: PropTypes.bool
}

export default AddSupport;