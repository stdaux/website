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

import { FiSearch, FiHelpCircle, FiGrid, FiAlignLeft, FiX, FiMaximize, FiEdit3, FiImage, FiMessageSquare, FiBell, FiMenu, FiUser, FiLogOut, FiLogIn } from "react-icons/fi";
import { FaDribbble, FaTwitter, FaGithub, FaFacebook, FaUser } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import {FermatUrls} from "@/actions/fermat/urls"

import { AssetUrls } from "@/actions/asset/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'

const Search = (props) => {
    const {className, organization_slug} = props;
    const [assets, setAssets] = useState([]);
    const router = useRouter();

    useEffect(() => {
    }, [])

    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = (query) => {
        setIsLoading(true);

        const token = getUserToken();
        axios.get(FermatUrls.searchFermat, {
            headers: {
                authorization: `JWT ${token}`
            },
            params: {
                query: query,
                application: process.env.APP_NAME,
                version: process.env.APP_VERSION,
                searchParameter: 'asset'
            },
        }).then((response) => {
            if (response.status === 200 || response.status === 201) {
                let json = response;
                let data = json.data;
                return data;
            }
            if (response.status === 204) {
                return undefined;
            }
            if (response.status === 404) {
                console.log("Not Found")
                Router.push('/login');
            }
            if (response.status === 403) {
                console.log("Forbidden")
                Router.push('/login');
            }
            if (response.status === 400) {
                console.log("Bad Request")
                console.log(response.json)
            }
            if (response.status === 401) {
                logoutUser();
                Router.push('/login');
            }
            if (response.status === 500) {
                console.log("Internal Server Error")
                Router.push('/login');
            }
            if (response.status === 503) {
                console.log("Service Unavailable")
                Router.push('/login');
            }
        }).then((data) => {
            setOptions(data.data);
        }).catch((error) => {
            console.log(error);
        });
    };
    
    const filterBy = () => true;

    return (
        <>
            <div className="d-flex align-items-center pd-x-20 wd-100p">
                <div className="d-flex align-items-center justify-content-center wd-auto">
                    <FiSearch/>
                </div>
                <AsyncTypeahead
                    filterBy={filterBy}
                    id="async-example"
                    isLoading={isLoading}
                    size='small'
                    labelKey={option => `${option.name} (${option.asset_id}) under ${option.organization.name}`}
                    minLength={1}
                    onSearch={handleSearch}
                    options={options}
                    clearButton={true}
                    className="bd-0 wd-100p"
                    placeholder="Search for Assets..."
                    renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
                        <input
                            style={{"border":"none", "outline": "none", "width": "100%"}}
                            className="bd-0 tx-15 form-control wd-100p"
                            {...inputProps}
                            ref={(input) => {
                                inputRef(input);
                                referenceElementRef(input);
                            }}
                        />
                    )}
                    renderMenu={(results, menuProps) => (
                        <Menu {...menuProps}>
                        {results.map((option, position) => (
                            <MenuItem 
                                key={position} 
                                option={option} 
                                position={position} 
                                onClick={() => {
                                    console.log(option);
                                    let link = `/organization/${option.organization.slug}/${option.slug}`
                                    Router.push(link);
                                }}>
                                <Fragment>
                                    <div className="pd-sm-x-20">
                                        <h6 className="tx-13 mg-b-2"><strong>{option.name}</strong> under <strong>{option.organization.name}</strong> ({option.asset_id})</h6>
                                        <p className="tx-color-03 tx-12 mg-b-10">{option.description}</p>
                                    </div>
                                    <div className="d-flex pd-sm-x-20">
                                        <div className="avatar d-md-block">
                                            <span className="avatar-initial rounded-circle bg-indigo op-5">
                                                <i className="icon ion-md-return-left"></i>
                                            </span>
                                        </div>
                                        <div className="pd-sm-l-10">
                                            <p className="tx-medium mg-b-2">Active Alerts for {option.name}</p>
                                            <p className="tx-medium mg-b-2">Widgets for {option.name}</p>
                                        </div>
                                        <div className="mg-l-auto text-right">
                                            <p className="tx-medium mg-b-2">{option.activeAlerts ? option.activeAlerts.length:0} Alerts</p>
                                            <p className="tx-medium mg-b-2">{option.widgets ? option.widgets.length:0} Widgets</p>
                                        </div>
                                    </div>
                                </Fragment>
                            </MenuItem>
                        ))}
                        </Menu>
                    )}
                />
            </div>
        </>
    )
    
}

Search.propTypes = {
    className: PropTypes.string,
};

Search.defaultProps = {
};

export default Search;