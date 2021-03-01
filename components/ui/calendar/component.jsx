import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import { Rnd } from "react-rnd";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'
import { connect } from "react-redux";

import { getUserProfile } from "../../../actions/user/actions";

import { FiMessageSquare, FiX, FiMenu, FiBell, FiLogOut, FiAlertCircle, FiFile, FiChevronDown, FiStar, FiEdit, FiUser, FiSettings, FiHelpCircle, FiDatabase } from "react-icons/fi";
import { RiDashboardFill, RiAppsLine } from "react-icons/ri";
import { MdWidgets, MdWebAsset } from "react-icons/md"
import { BiNetworkChart, BiCalendarEvent, BiBuildings, BiBulb } from "react-icons/bi"

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.perfectScrollbar = React.createRef();
        this.aside = React.createRef();
        this.state = {
            minimize: false,
            profileMenu: false,
            favouriteMenu: false,
            staredMenu: false,
            dashboardMenu: false,
            widgetMenu: false,
            datasourceMenu: false,
            analysisMenu: false,
            operationsMenu: false,
            eventsMenu: false,
            triggerMenu: false,
            alertsMenu: false,
            organizationMenu: false,
            assetSettingMenu: false,
            dashboardSettingMenu: false,
            widgetSettingMenu: false,
            datasourceSettingMenu: false,
            externalAppsMenu: false,
            getUserProfile: getUserProfile,
            user: null,
        };
    }

    componentWillMount(){
        if (typeof window !== "undefined") {
            const mql = window.matchMedia('(min-width:992px) and (max-width: 1199px)');
            mql.addListener(this.doMinimize);
        }
    }

    static propTypes = {
        className: PropTypes.string,
        getUserProfile: PropTypes.func.isRequired,
        user: PropTypes.object
    }

    render() {
        const {
            minimize,
            profileMenu, 
            favouriteMenu, 
            staredMenu, 
            dashboardMenu, 
            widgetMenu, 
            datasourceMenu, 
            analysisMenu,
            operationsMenu,
            eventsMenu,
            triggerMenu,
            alertsMenu,
            organizationMenu,
            assetSettingMenu,
            dashboardSettingMenu,
            widgetSettingMenu,
            datasourceSettingMenu,
            externalAppsMenu,
        } = this.state;

        const { user } = this.props;

        const handleMenuClick = event => {   
            event.preventDefault();
            if (window.matchMedia('(min-width: 992px)').matches){
                this.setState({minimize: !this.state.minimize});
            }   
        };

        return (<>
            <aside
                className={cx(
                    'aside',
                    'aside-fixed',
                    this.state.minimize ? "minimize" : "",
                )}
                ref={this.aside}
            >
                <div className="aside-header">
                    <a href="{% url 'home'%}" className="aside-logo">Fermat <span><sub>Euler</sub></span></a>
                    <a 
                        href="#" 
                        className="aside-menu-link" 
                        onClick={handleMenuClick}
                    >
                        <FiMenu/>
                        <FiX/>
                    </a>
                </div>
                <PerfectScrollbar
                    className="aside-body"
                    options={{suppressScrollX:true}}
                    ref={this.perfectScrollbar}
                >
                    <div className="aside-loggedin">
                        <div className="d-flex align-items-center justify-content-start">
                            <a href="#" className="avatar">
                                <span className="avatar-initial rounded-circle bg-gray-700 tx-normal">user.get_first_letter</span>
                            </a>
                            <div className="aside-alert-link">
                                <a href="#" className="new" data-toggle="tooltip" title="You have 2 unread messages"><FiMessageSquare/></a>
                                <a href="#" className="new" data-toggle="tooltip" title="You have 4 new notifications"><FiBell/></a>
                                <a href="{% url 'logout' %}" data-toggle="tooltip" title="Sign out"><FiLogOut/></a>
                            </div>
                        </div>
                        <div className="aside-loggedin-user">
                            <a
                                className="d-flex align-items-center justify-content-between mg-b-2"
                                onClick={() => this.setState({profileMenu: !profileMenu})}
                            >
                                <h6 className="tx-semibold mg-b-0">user.username</h6>
                                <FiChevronDown/>
                            </a>
                            <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
                        </div>
                        
                        <Collapse 
                            in={this.state.profileMenu}
                            className="collapse"
                        >
                            <ul className="nav nav-aside mg-b-0">
                                <li className="nav-item"><a href="{% url 'profile_edit' %}" className="nav-link"><FiEdit/> <span>Edit Profile</span></a></li>
                                <li className="nav-item"><a href="{% url 'profile' %}" className="nav-link"><FiUser/> <span>View Profile</span></a></li>
                                <li className="nav-item"><a href="#" className="nav-link"><FiSettings/> <span>Account Settings</span></a></li>
                                <li className="nav-item"><a href="#" className="nav-link"><FiHelpCircle/> <span>Help Center</span></a></li>
                                <li className="nav-item"><a href="{% url 'logout' %}" className="nav-link"><FiLogOut/> <span>Sign Out</span></a></li>
                            </ul>
                        </Collapse>
                    </div>
                    <ul className="nav nav-aside">
                        <li className="nav-label">Favourites</li>
                        <a 
                            onClick={() => this.setState({favouriteMenu: !favouriteMenu})} 
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <FiStar/> 
                                <span>Favourite</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse 
                            in={this.state.favouriteMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>
                        
                        <a 
                            onClick={() => this.setState({staredMenu: !staredMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <FiStar/> 
                                <span>Stared</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse 
                            in={this.state.staredMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>

                        <li className="nav-label mg-t-25">Executive</li>
                        <a 
                            onClick={() => this.setState({dashboardMenu: !dashboardMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <RiDashboardFill/>
                                <span>Dashboards</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.dashboardMenu}
                            className="collapse"
                        >
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>
                        <a
                            onClick={() => this.setState({widgetMenu: !widgetMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <MdWidgets/>
                                <span>Widgets</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.widgetMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>
                        <a
                            onClick={() => this.setState({datasourceMenu: !datasourceMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <FiDatabase/>
                                <span>Datasource</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.datasourceMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>
                        
                        <li className="nav-label mg-t-25">Analytics</li>
                        <a
                            onClick={() => this.setState({analysisMenu: !analysisMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <BiNetworkChart/>
                                <span>Analysis</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.analysisMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>

                        <li className="nav-item">
                            <a href="#" className="nav-link"><FiFile/> <span>Operations</span></a>
                        </li>

                        <li className="nav-label mg-t-25">Events</li>
                        <a
                            onClick={() => this.setState({eventsMenu: !eventsMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <BiCalendarEvent/>
                                <span>Events</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.eventsMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>
                        <a
                            onClick={() => this.setState({triggerMenu: !triggerMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <BiBulb/>
                                <span>Triggers</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.triggerMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>
                        <a
                            onClick={() => this.setState({alertsMenu: !alertsMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <FiAlertCircle/>
                                <span>Alerts</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.alertsMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>

                        <li className="nav-label mg-t-25">Management</li>
                        <a
                            onClick={() => this.setState({organizationMenu: !organizationMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <BiBuildings/>
                                <span>Organization</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.organizationMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>

                        <li className="nav-label mg-t-25">Settings</li>
                        <a
                            onClick={() => this.setState({assetSettingMenu: !assetSettingMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <MdWebAsset/>
                                <span>Assets</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.assetSettingMenu}
                            className="collapse"
                        >
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>
                        <a
                            onClick={() => this.setState({dashboardSettingMenu: !dashboardSettingMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <RiDashboardFill/>
                                <span>Dashboards</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.dashboardSettingMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>
                        <a
                            onClick={() => this.setState({widgetSettingMenu: !widgetSettingMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <MdWidgets/>
                                <span>Widgets</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.widgetSettingMenu}
                            className="collapse"
                        >   
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>
                        <a
                            onClick={() => this.setState({datasourceSettingMenu: !datasourceSettingMenu})}
                            className="d-flex align-items-center justify-content-between mg-b-2 nav-link"
                        >
                            <div>
                                <MdWidgets/>
                                <span>Datasource</span>
                            </div>
                            <FiChevronDown/>
                        </a>
                        <Collapse
                            in={this.state.datasourceSettingMenu}
                            className="collapse"
                        >
                            <li className="nav-item with-sub">
                                <ul className="nav nav-aside mg-b-0">
                                    <li><a href="{% url 'profile_edit' %}"><FiEdit/> <span>Edit Profile</span></a></li>
                                    <li><a href="{% url 'profile' %}"><FiUser/> <span>View Profile</span></a></li>
                                </ul>
                            </li>
                        </Collapse>

                        <li className="nav-item">
                            <a href="dashboard-one.html" className="nav-link">
                                <RiAppsLine/><span>Apps</span>
                            </a>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </aside>
        </>)
    }

}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { getUserProfile } )(Aside);
