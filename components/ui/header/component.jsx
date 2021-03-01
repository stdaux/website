import React, {useState, Fragment, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';
import Router, { useRouter }  from 'next/router';

import { getUserToken, getCookie } from  '@/actions/user/actions'
import axios from 'axios'
import {FermatUrls} from "@/actions/fermat/urls"
import Dropdown from 'react-bootstrap/Dropdown'
import { CustomMenu, CustomToggle } from '@/components/ui/dropdown';
import Avatar from "@/components/ui/avatar"
import Card from "@/components/ui/card"

import { FiSearch, FiHelpCircle, FiGrid, FiAlignLeft, FiX, FiMaximize, FiEdit3, FiImage, FiMessageSquare, FiBell, FiMenu, FiUser, FiLogOut, FiLogIn, FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaDribbble, FaTwitter, FaGithub, FaFacebook, FaUser } from "react-icons/fa";
import { ImEarth } from "react-icons/im";

import store from "@/store"
import { connect } from "react-redux";

const Header = (props) => {
    const {
        extLink,
        link,
        children,
        className,
        theme,
        disabled,
        active,
        onClick,
        tooltip,
        background,
        target,
        withoutSearch,
        enableSocial,
    } = props;

    const [sideMenuActive, setSideMenuActive] = useState(false);

    let header = null;
    header = (
        <>  
            <header>
                <nav className={`navbar navbar-top-default navbar-expand-lg navbar-standard pd-y-10 ${className}`}>
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="lh-5">
                            <a href="https://stdaux.com" title="Home of StdAux" className="link logo scroll">
                                <img src="/images/logo-white-stdaux.png" className="stdaux-logo tx-white ht-100" alt="logo"/>
                            </a>
                        </div>
                        <div className="lh-5">
                            {children}
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="mg-x-10 justify-content-center">
                                <a href="https://internal.stdaux.com/login" className="tx-spacing-1 link-03 tx-white tx-uppercase">Login</a>
                            </div>
                            {!sideMenuActive &&
                            <div className="d-flex align-items-center mg-x-10 justify-content-center" onClick={() => setSideMenuActive(!sideMenuActive)}>
                                <FiMenu className="tx-white"/>
                            </div>
                            }
                        </div>
                    </div>
                </nav>
                {sideMenuActive &&
                <div className={`side-menu ${sideMenuActive?"side-menu-active":""}`}>
                    <div className="inner-wrapper">
                        <span className="btn-close link" onClick={() => setSideMenuActive(!sideMenuActive)}></span>
                        <div className="row side-nav d-flex justify-content-center flex-row">
                            <div className="col-lg-2 col-sm-4 tx-roboto tx-white justify-content-center">
                                <h2 className="tx-roboto tx-white">Services</h2>
                                <a href="/services/energy">
                                    <h6 className="tx-lato tx-white">Renewable Energy</h6>
                                </a>
                                <a href="/services/it">
                                    <h6 className="tx-lato tx-white">Information Technology</h6>
                                </a>
                                <a href="/services/air">
                                    <h6 className="tx-lato tx-white">AI & Robotics</h6>
                                </a>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <h2 className="tx-roboto tx-white">Research</h2>
                                <a href="/research/active">
                                    <h6 className="tx-lato tx-white">Active Research</h6>
                                </a>
                                <a href="/research/publications">
                                    <h6 className="tx-lato tx-white">Publications</h6>
                                </a>
                                <a href="/research/patents">
                                    <h6 className="tx-lato tx-white">Patents</h6>
                                </a>
                                <a href="/research/grants/apply">
                                    <h6 className="tx-lato tx-white">Apply for Grant</h6>
                                </a>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <h2 className="tx-roboto tx-white">Partners</h2>
                                <a href="/partners/">
                                    <h6 className="tx-lato tx-white">Suppliers</h6>
                                </a>
                                <a href="/legal/supplier-code-of-confuct">
                                    <h6 className="tx-lato tx-white">Suppliers Code of Conduct</h6>
                                </a>
                                <a href="/quality/process">
                                    <h6 className="tx-lato tx-white">QAP Process</h6>
                                </a>
                                <a href="/partners/register">
                                    <h6 className="tx-lato tx-white">Partner Registeration</h6>
                                </a>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <h2 className="tx-roboto tx-white">Policies</h2>
                                <a href="/legal/hse-policy">
                                    <h6 className="tx-lato tx-white">Health, Safety & Enviroment Policy</h6>
                                </a>
                                <a href="/legal/privacy-policy">
                                    <h6 className="tx-lato tx-white">Privacy Policy</h6>
                                </a>
                                <a href="/legal/employee-code-of-conduct">
                                    <h6 className="tx-lato tx-white">Employee Code of Conduct</h6>
                                </a>
                                <a href="/legal/certificates">
                                    <h6 className="tx-lato tx-white">Certificates</h6>
                                </a>
                                <a href="/legal">
                                    <h6 className="tx-lato tx-white">Legal</h6>
                                </a>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <h2 className="tx-roboto tx-white">Open</h2>
                                <a href="/open/data">
                                    <h6 className="tx-lato tx-white">Earth Data</h6>
                                </a>
                                <a href="https://terra.stdaux.com">
                                    <h6 className="tx-lato tx-white">Earth Insights</h6>
                                </a>
                                <a href="/open/data/nasa">
                                    <h6 className="tx-lato tx-white">NASA</h6>
                                </a>
                                <a href="/open/data/esa">
                                    <h6 className="tx-lato tx-white">ESA</h6>
                                </a>
                                <a href="https://developers.google.com/earth-engine/datasets/catalog">
                                    <h6 className="tx-lato tx-white">GEE</h6>
                                </a>
                                <a href="https://github.com/stdaux">
                                    <h6 className="tx-lato tx-white">Github</h6>
                                </a>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <h2 className="tx-roboto tx-white">Company</h2>
                                <a href="/about">
                                    <h6 className="tx-lato tx-white">About Us</h6>
                                </a>
                                <a href="/philantrophy">
                                    <h6 className="tx-lato tx-white">Philantrophy</h6>
                                </a>
                                <a href="/locations">
                                    <h6 className="tx-lato tx-white">Locations</h6>
                                </a>
                                <a href="/careers">
                                    <h6 className="tx-lato tx-white">Careers</h6>
                                </a>
                                <a href="/blog">
                                    <h6 className="tx-lato tx-white">Blog</h6>
                                </a>
                                <a href="/news">
                                    <h6 className="tx-lato tx-white">News</h6>
                                </a>
                            </div>
                        </div>                        

                        <div className="side-footer text-white w-100">
                            <ul className="social-icons-simple">
                                {process.env.FACEBOOK_LINK && 
                                <li className="animated-wrap"><a href={process.env.FACEBOOK_LINK} className="animated-element"><FiFacebook/></a> </li>
                                }
                                {process.env.TWITTER_LINK &&
                                <li className="animated-wrap"><a href={process.env.TWITTER_LINK} className="animated-element"><FiTwitter/></a> </li>
                                }
                                {process.env.LINKEDIN_LINK &&
                                <li className="animated-wrap"><a href={process.env.LINKEDIN_LINK} className="animated-element"><FiLinkedin/></a> </li>
                                }
                                {process.env.INSTAGRAM_LINK &&
                                <li className="animated-wrap"><a href={process.env.INSTAGRAM_LINK} className="animated-element"><FiInstagram/></a> </li>
                                }
                            </ul>
                            <p className="whitecolor">&copy; 2020 StdAux. Made With Love by <a className="web-link text-white" href="https://stdaux.com/design">Design Team of StdAux</a></p>
                        </div>
                    </div>
                </div>
                }
                {enableSocial &&
                <div className="slider-social d-md-block d-none">
                    <ul className="list-unstyled">
                        {process.env.FACEBOOK_LINK && 
                        <li className="animated-wrap"><a href={process.env.FACEBOOK_LINK} className="animated-element"><FiFacebook/></a> </li>
                        }
                        {process.env.TWITTER_LINK &&
                        <li className="animated-wrap"><a href={process.env.TWITTER_LINK} className="animated-element"><FiTwitter/></a> </li>
                        }
                        {process.env.LINKEDIN_LINK &&
                        <li className="animated-wrap"><a href={process.env.LINKEDIN_LINK} className="animated-element"><FiLinkedin/></a> </li>
                        }
                        {process.env.INSTAGRAM_LINK &&
                        <li className="animated-wrap"><a href={process.env.INSTAGRAM_LINK} className="animated-element"><FiInstagram/></a> </li>
                        }
                    </ul>
                </div>
                }
            </header>
        </>
    );
    return header;
};

Header.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    theme: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    withoutSearch: PropTypes.bool,
    onClick: PropTypes.func,
    extLink: PropTypes.string,
    tooltip: PropTypes.object,
    buttonClicked: PropTypes.func,
    background: PropTypes.string,
    target: PropTypes.string,
    enableSocial: PropTypes.bool,
};

Error.defaultProps = {
    enableSocial: true,
}

export default Header;
