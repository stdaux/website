import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Rnd } from "react-rnd";
import PerfectScrollbar from 'react-perfect-scrollbar'

class Icon extends Component {
    
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.perfectScrollbar = React.createRef();
        this.aside = {
            minimize: false
        };
    }
    
    static propTypes = {
        default1: PropTypes.object,
        className: PropTypes.string,
        size: PropTypes.object,
        position: PropTypes.object,
        maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        enableResizing: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        disableDragging: PropTypes.bool,
        dragAxis: PropTypes.string,
        children: PropTypes.node,
        bounds: PropTypes.string,
    }

    componentDidMount() {
        const match = window.matchMedia('(min-width:992px) and (max-width: 1199px)');
    }

    render() {
        return (<>
            <aside className="aside aside-fixed">
                <div className="aside-header">
                    <a href="{% url 'home'%}" className="aside-logo">Fermat <span><sub>Euler</sub></span></a>
                    <a href="#" className="aside-menu-link">
                        <i data-feather="menu"></i>
                        <i data-feather="x"></i>
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
                                <a href="#" className="new" data-toggle="tooltip" title="You have 2 unread messages"><i data-feather="message-square"></i></a>
                                <a href="#" className="new" data-toggle="tooltip" title="You have 4 new notifications"><i data-feather="bell"></i></a>
                                <a href="{% url 'logout' %}" data-toggle="tooltip" title="Sign out"><i data-feather="log-out"></i></a>
                            </div>
                        </div>
                        <div className="aside-loggedin-user">
                            <a href="#loggedinMenu" className="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
                                <h6 className="tx-semibold mg-b-0">request.user.get_full_name</h6>
                                <i data-feather="chevron-down"></i>
                            </a>
                            <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
                        </div>
                        <div className="collapse" id="loggedinMenu">
                            <ul className="nav nav-aside mg-b-0">
                                <li className="nav-item"><a href="{% url 'profile_edit' %}" className="nav-link"><i data-feather="edit"></i> <span>Edit Profile</span></a></li>
                                <li className="nav-item"><a href="{% url 'profile' %}" className="nav-link"><i data-feather="user"></i> <span>View Profile</span></a></li>
                                <li className="nav-item"><a href="#" className="nav-link"><i data-feather="settings"></i> <span>Account Settings</span></a></li>
                                <li className="nav-item"><a href="#" className="nav-link"><i data-feather="help-circle"></i> <span>Help Center</span></a></li>
                                <li className="nav-item"><a href="{% url 'logout' %}" className="nav-link"><i data-feather="log-out"></i> <span>Sign Out</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="nav nav-aside">
                        <li className="nav-label mg-t-25">Favourites</li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="star"></i> <span>Favourites</span></a>
                            <ul>
                                <li><a href="page-profile-view.html">View Profile</a></li>
                            </ul>
                        </li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="star"></i> <span>Stared</span></a>
                            <ul>
                                <li><a href="page-timeline.html">Timeline</a></li>
                            </ul>
                        </li>
                        <li className="nav-label mg-t-25">Executive</li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="pie-chart"></i> <span>Dashboards</span></a>
                            <ul>
                                <li><a href="{% url 'list_dashboard' organization_slug=organization.slug %}">List Dashboards</a></li>
                                <li><a href="{% url 'create_dashboard' organization_slug=organization.slug %}">Create Dashboard</a></li>
                            </ul>
                        </li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="bar-chart"></i> <span>Widgets</span></a>
                            <ul>
                                <li><a href="{% url 'list_widget' organization_slug=organization.slug %}">List Widgets</a></li>
                                <li><a href="{% url 'create_widget' organization_slug=organization.slug %}">Create Widget</a></li>
                            </ul>
                        </li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="database"></i> <span>DataSource</span></a>
                            <ul>
                                <li><a href="{% url 'list_dataengine' organization_slug=organization.slug %}">List Data Sources</a></li>
                                <li><a href="{% url 'create_dataengine' organization_slug=organization.slug %}">Create Data Source</a></li>
                            </ul>
                        </li>

                        <li className="nav-label mg-t-25">Analytics</li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="terminal"></i> <span>Analysis</span></a>
                            <ul>
                                <li><a href="{% url 'view_analytics' organization_slug=organization.slug %}">Create Analysis</a></li>
                                <li><a href="{% url 'view_analytics' organization_slug=organization.slug %}">View Analysis</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><i data-feather="file"></i> <span>Operations</span></a>
                        </li>

                        <li className="nav-label mg-t-25">Events</li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="activity"></i> <span>Events</span></a>
                            <ul>
                                <li><a href="{% url 'create_event' organization_slug=organization.slug %}">Create Event</a></li>
                                <li><a href="{% url 'list_events' organization_slug=organization.slug %}">View Events</a></li>
                            </ul>
                        </li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="activity"></i> <span>Triggers</span></a>
                            <ul>
                                <li><a href="page-timeline.html">Timeline</a></li>
                            </ul>
                        </li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="activity"></i> <span>Alerts</span></a>
                            <ul>
                                <li><a href="{% url 'create_alert' organization_slug=organization.slug %}">Create Alert</a></li>
                                <li><a href="{% url 'view_alerts' organization_slug=organization.slug %}">View Alerts</a></li>
                            </ul>
                        </li>

                        <li className="nav-label mg-t-25">Management</li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="pie-chart"></i> <span>Organization</span></a>
                            <ul>
                                <li><a href="{% url 'settings_organization' organization.slug %}">Add Users</a></li>
                                <li><a href="{% url 'query_list' organization_slug=organization.slug %}">Available Queries</a></li>
                                <li><a href="{% url 'variable_list' organization_slug=organization.slug %}">Available Variables</a></li>
                            </ul>
                        </li>

                        <li className="nav-label mg-t-25">Settings</li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="pie-chart"></i> <span>Assets</span></a>
                            <ul>
                                <li><a href="{% url 'create_asset' organization_slug=organization.slug %}">Create Assets</a></li>
                                <li><a href="{% url 'list_assets' organization_slug=organization.slug %}">List Assets</a></li>
                            </ul>
                        </li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="pie-chart"></i> <span>Dashboards</span></a>
                            <ul>
                                <li><a href="page-profile-view.html">Create Dashboard</a></li>
                                <li><a href="page-connections.html">List Dashboard</a></li>
                            </ul>
                        </li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="bar-chart"></i> <span>Widgets</span></a>
                            <ul>
                                <li><a href="page-timeline.html">Create Widgets</a></li>
                                <li><a href="page-timeline.html">List Widgets</a></li>
                            </ul>
                        </li>
                        <li className="nav-item with-sub">
                            <a href="#" className="nav-link"><i data-feather="database"></i> <span>DataSource</span></a>
                            <ul>
                                <li><a href="page-timeline.html">Timeline</a></li>
                                <li><a href="page-timeline.html">List Widgets</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="dashboard-one.html" className="nav-link">
                                <i data-feather="aperture"></i><span>Apps</span>
                            </a>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </aside>
        </>)
    }

}

export default Icon;
