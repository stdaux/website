import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import Router, { useRouter }  from 'next/router'
import store from '@/store'
import { connect } from "react-redux";

import Table from "@/components/ui/table"
import axios from 'axios'

import {AsyncTypeahead, Menu, MenuItem} from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css';

import NotAvailable from "@/components/ui/notavailable";

import { FiSearch, FiHelpCircle, FiGrid, FiPlus, FiAlignLeft, FiX, FiMaximize, FiEdit3, FiImage, FiMessageSquare, FiBell, FiMenu, FiUser, FiLogOut, FiLogIn } from "react-icons/fi";
import { FaDribbble, FaTwitter, FaGithub, FaFacebook, FaUser } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import {FermatUrls} from "@/actions/fermat/urls"
import moment from "moment";
import { HelpUrls } from "@/actions/help/urls";

const ListGrants = (props) => {
    const {className} = props;
    const [grants, setGrants] = useState([]);

    useEffect(() => {
        const listGrantURL = ResearchUrls.listGrant;
        axios.get(listGrantURL).then(response => {
            let json = response.data;
            setGrants(json.data)
        }).catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <>  
            {grants.length > 0?
            <div className="row row-xs">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="bd mg-t-10">
                        <ul className="list-unstyled media-list tx-12 tx-sm-13 mg-b-0">
                        {grants &&
                        grants.map(request => (
                            <>
                            <li className="media pd-y-10 pd-x-15">
                                <div className="avatar">
                                    <img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/>
                                </div>
                                <div className="media-body mg-l-15">
                                    <h6 className="tx-13 mg-b-2">
                                        {request.name}{'  '}
                                        {request.labels &&
                                        request.labels.map(label => (
                                            <>
                                            <span className={`badge badge-${label.category}`}>{label.title}</span>{' '}
                                            </>
                                        ))}
                                    </h6>
                                    <span className="d-block tx-color-03">#{request.pk+1} opened {moment.duration(moment(request.start_date).diff(moment())).humanize(true)} by {request.created_by.username}</span>
                                </div>
                                <div className="dropdown-message">
                                    <div className="btn btn-icon mg-10 pd-0 dropdown-link new-indicator"><FiMessageSquare/><span>2</span></div>
                                </div>
                            </li>
                            </>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
            :
            <NotAvailable
                title="No Support Requests Available"
                body="No Support Request has been raised by you or publicly available."
            />
            }
        </>
    )
    
}

ListGrants.propTypes = {
    className: PropTypes.string,
};

export default ListGrants;