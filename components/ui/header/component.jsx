import React, {useState, Fragment, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';
import Router, { useRouter }  from 'next/router';

import { getUserToken, getCookie } from  '@/actions/user/actions'
import axios from 'axios'
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
        backgroundColor,
        disabled,
        active,
        onClick,
        tooltip,
        background,
        target,
        withoutSearch,
        user,
    } = props;

    const [sideMenuActive, setSideMenuActive] = useState(false);

    let header = null;
    header = (
        <>  
            <header>
                <nav className={`bg-${backgroundColor} navbar navbar-top-default navbar-expand-lg navbar-standard pd-t-10 pd-b-10`}>
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="lh-5">
                            <a href="https://stdaux.com" title="Pioneer Power Systems | Home" className="link logo scroll">
                                <img src="/images/logo/stdaux/logo-white-stdaux.png" className="stdaux-logo pd-l-5" alt="logo"/>
                            </a>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="mg-x-10 justify-content-center">
                                <a href="https://internal.stdaux.com" className="tx-spacing-1 link-03 tx-white tx-uppercase">Login</a>
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
                                <a href="/services/air">
                                    <h6 className="tx-lato tx-white">AI & Robotics</h6>
                                </a>
                                <a href="/services/energy">
                                    <h6 className="tx-lato tx-white">Renewable Energy</h6>
                                </a>
                                <a href="/services/it">
                                    <h6 className="tx-lato tx-white">Information Technology</h6>
                                </a>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <h2 className="tx-roboto tx-white">Research</h2>
                                <a href="/research/grants/apply">
                                    <h6 className="tx-lato tx-white">Apply for Grant</h6>
                                </a>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <h2 className="tx-roboto tx-white">Partners</h2>
                                <a href="/partners/">
                                    <h6 className="tx-lato tx-white">Suppliers</h6>
                                </a>
                                <a href="/legals/supplier-code-of-confuct">
                                    <h6 className="tx-lato tx-white">Suppliers Code of Conduct</h6>
                                </a>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <h2 className="tx-roboto tx-white">Company</h2>
                                <a href="/locations">
                                    <h6 className="tx-lato tx-white">Locations</h6>
                                </a>
                            </div>
                        </div>
                        
                        <nav className="side-nav active">
                            <ul className="navbar-nav" id="side-menu">
                                <li className="nav-item">
                                    <a className="nav-link link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link" href="/research">Research</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link" href="/locations">Locations</a>
                                </li>
                            </ul>
                        </nav>
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
                            <p className="whitecolor">&copy; 2021 Pioneer Power Systems. Made With Love by <a className="web-link text-white" href="https://stdaux.com/design">Design Team of StdAux</a></p>
                        </div>
                    </div>
                </div>
                }
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
            </header>
        </>
    );
    return header;
};

Header.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    backgroundColor: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    withoutSearch: PropTypes.bool,
    onClick: PropTypes.func,
    extLink: PropTypes.string,
    tooltip: PropTypes.object,
    buttonClicked: PropTypes.func,
    background: PropTypes.string,
    target: PropTypes.string,
    user: PropTypes.object,
};

Header.defaultProps = {
    backgroundColor: "",
}

export default Header;
