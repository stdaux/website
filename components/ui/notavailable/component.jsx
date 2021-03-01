import React, { Component, useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import Router, { useRouter }  from 'next/router'
import store from '@/store'
import { connect } from "react-redux";

import Card from "@/components/ui/card"
import CardHeader from "@/components/ui/card/header"
import CardBody from "@/components/ui/card/body"
import CardFooter from "@/components/ui/card/footer"
import Table from "@/components/ui/table"
import axios from 'axios'
import moment from 'moment'

import { AlertsUrls } from "@/actions/alerts/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'

import {AsyncTypeahead, Menu, MenuItem} from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { FiSearch, FiClock, FiHelpCircle, FiGrid, FiAlignLeft, FiX, FiMaximize, FiEdit3, FiImage, FiMessageSquare, FiBell, FiMenu, FiUser, FiLogOut, FiLogIn } from "react-icons/fi";
import { FaDribbble, FaTwitter, FaGithub, FaFacebook, FaUser } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import {FermatUrls} from "@/actions/fermat/urls"

const NotAvailable = (props) => {
    const { className, title, body, redirect, support_redirect, image, height } = props;
    const router = useRouter();
    const{ organization_slug, asset_slug } = router.query;

    useEffect(() => {
    }, [])

    return (
        <>
            <div className={`media ${className}`}>
                <div className="media-body mg-x-20 mg-t-20">
                    <div className={`ht-${height}p d-flex flex-column align-items-center justify-content-center`}>
                        <div className="wd-100p mg-b-10"><img src={image} className="img-fluid" alt=""/></div>
                        <h4 className="tx-20 tx-sm-24">{title}</h4>
                        <p className="tx-color-03">{body}</p>
                        <div className="tx-13 tx-lg-14 mg-b-20">
                            {redirect}
                            {support_redirect &&
                            <Link 
                                href={{ 
                                    pathname: '/help/support', 
                                    query: {
                                        redirect_from: router.asPath,
                                    } 
                                }}
                            >
                                <a className="btn btn-white d-inline-flex align-items-center mg-l-5">Contact Support</a>
                            </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

NotAvailable.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    redirect: PropTypes.node,
    support_redirect: PropTypes.bool,
    image: PropTypes.string,
    height: PropTypes.number
};

NotAvailable.defaultProps = {
    title: "No Data Available",
    body: "No data available for your Query",
    support_redirect: true,
    image: "/images/loading_data.svg",
    height: 100
};

export default NotAvailable;