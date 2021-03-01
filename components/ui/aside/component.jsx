import React, { Component, useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import Router, { useRouter }  from 'next/router'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'
import store from '@/store'

import { connect } from "react-redux";
import { getUserProfile } from "@/actions/user/actions";
import Avatar from "@/components/ui/avatar"
import Tip from "@/components/ui/tip"

import { FiMessageSquare, FiX, FiMenu, FiBell, FiLogOut, FiAlertCircle, FiFile, FiChevronDown, FiStar, FiEdit, FiUser, FiSettings, FiHelpCircle, FiDatabase } from "react-icons/fi";
import { RiDashboardFill, RiAppsLine } from "react-icons/ri";
import { MdWidgets, MdWebAsset } from "react-icons/md"
import { BiNetworkChart, BiCalendarEvent, BiBuildings, BiBulb } from "react-icons/bi"

const Aside = (props) => {
    const {user, getUserProfile} = props;
    
    const router = useRouter();
    const{ organization_slug, asset_slug } = router.query;
    const aside = createRef();
    const perfectScrollbar = createRef();

    const [minimize, setMinimize] = useState(true);
    const [profileMenu, setProfileMenu] = useState(false);
    const [favouriteMenu, setFavouriteMenu] = useState(false);
    const [staredMenu, setStaredMenu] = useState(false);
    const [dashboardMenu, setDashboardMenu] = useState(false);
    const [widgetMenu, setWidgetMenu] = useState(false);
    const [datasourceMenu, setDatasourceMenu] = useState(false);
    const [analysisMenu, setAnalysisMenu] = useState(false);
    const [operationsMenu, setOperationsMenu] = useState(false);
    const [eventsMenu, setEventsMenu] = useState(false);
    const [triggerMenu, setTriggerMenu] = useState(false);
    const [alertsMenu, setAlertsMenu] = useState(false);
    const [organizationMenu, setOrganizationMenu] = useState(false);
    const [assetSettingMenu, setAssetSettingMenu] = useState(false);
    const [dashboardSettingMenu, setDashboardSettingMenu] = useState(false);
    const [widgetSettingMenu, setWidgetSettingMenu] = useState(false);
    const [datasourceSettingMenu, setDatasourceSettingMenu] = useState(false);
    const [externalAppsMenu, setExternalAppsMenu] = useState(false);

    function doMinimize(){
        setMinimize(!minimize);
    }

    useEffect(() => {
        getUserProfile();
        if (typeof window !== "undefined") {
            const mql = window.matchMedia('(min-width:992px) and (max-width: 1199px)');
            mql.addListener(doMinimize);
        }
    }, [])

    const handleMenuClick = event => {   
        event.preventDefault();
        if (window.matchMedia('(min-width: 992px)').matches){
            setMinimize(!minimize);
        }
    };

    return (<>
        <aside
            className={cx('aside', 'aside-fixed', minimize ? "minimize" : "", )}
            ref={aside}
        >
            <div className="aside-header">
                <a href="/" className="aside-logo">Fermat <span><sub>Euler</sub></span></a>
                <a className="aside-menu-link" onClick={handleMenuClick}>
                    <FiMenu/>
                    <FiX/>
                </a>
            </div>
            <PerfectScrollbar className="aside-body" options={{suppressScrollX:true}} ref={perfectScrollbar}>
                <div className="aside-loggedin">
                    <div className="d-flex align-items-center justify-content-start">
                        <Tip message={user? user.full_name : ''}>
                            <Avatar name={user? user.first_letter : ''} shape="rounded-circle"/>
                        </Tip>
                        <div className="aside-alert-link">
                            <Tip message={"You have 4 new Messages."}>
                                <a href="#" className="new"><FiMessageSquare/></a>
                            </Tip>
                            <Tip message={"You have 4 new Messages."}>
                                <a href="#" className="new"><FiBell/></a>
                            </Tip>
                            <Tip message={"Logout"}>
                                <a href="/logout/"><FiLogOut/></a>
                            </Tip>
                        </div>
                    </div>
                    <div className="aside-loggedin-user">
                        <a className="d-flex align-items-center justify-content-between mg-b-2" onClick={() => setProfileMenu(!profileMenu)}>
                            <h6 className="tx-semibold mg-b-0">{ user ? user.full_name : '' }</h6>
                            <FiChevronDown/>
                        </a>
                        <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
                    </div>
                    
                    <Collapse in={profileMenu} className="collapse">
                        <ul className="nav nav-aside mg-b-0">
                            <li className="nav-item">
                                <Link
                                    href={{
                                        pathname: '/user/[username]/profile/edit',
                                        query: { username: user? user.username : '',}
                                    }}
                                >
                                    <a className="nav-link"><FiEdit/> <span>Edit Profile</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={{
                                        pathname: '/user/[username]/profile',
                                        query: { username: user? user.username : '',}
                                    }}
                                >
                                    <a className="nav-link"><FiUser/> <span>View Profile</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={{
                                        pathname: '/user/[username]/settings',
                                        query: { username: user? user.username : '',}
                                    }}
                                >
                                    <a className="nav-link"><FiSettings/> <span>Account Settings</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={{
                                        pathname: '/help',
                                    }}
                                >
                                    <a className="nav-link"><FiHelpCircle/> <span>Help Center</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={{
                                        pathname: '/logout',
                                    }}
                                >
                                    <a className="nav-link"><FiLogOut/> <span>Sign Out</span></a>
                                </Link>
                            </li>
                        </ul>
                    </Collapse>
                </div>
                <ul className="nav nav-aside">
                    <li className="nav-label mg-t-25">Executive</li>
                    {user && user.permissions['dashboard.list_dashboard'] && user.permissions['dashboard.add_dashboard'] &&
                    <>
                    <a onClick={() => setDashboardMenu(!dashboardMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Dashboard Settings">
                                <RiDashboardFill/>
                            </Tip>
                            <span>Dashboards</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={dashboardMenu} className="collapse" >
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                {user && user.permissions['dashboard.add_dashboard'] &&
                                <li>{organization_slug && asset_slug && 
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/dashboard/add', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>Add New Dashboard</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                                {user && user.permissions['dashboard.list_dashboard'] &&
                                <li>
                                    {organization_slug && asset_slug ? 
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/dashboard', 
                                        query: {
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>List Dashboard</span></a>
                                    </Link>
                                    :
                                    <Link href={{pathname: '/dashboard'}}>
                                        <a><span>List Dashboard</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    {user && user.permissions['widgets.list_widget'] && user.permissions['widgets.add_widget'] &&
                    <>
                    <a onClick={() => setWidgetMenu(!widgetMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Widget Settings">
                                <MdWidgets/>
                            </Tip>
                            <span>Widgets</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={widgetMenu} className="collapse">   
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                {user && user.permissions['widgets.add_widget'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/widgets/add', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>Add New Widget</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                                {user && user.permissions['widgets.list_widget'] &&
                                <li>{organization_slug && asset_slug ?
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/widgets', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>List Widgets</span></a>
                                    </Link>
                                    :
                                    <Link href={{pathname: '/widgets'}}>
                                        <a><span>List Widgets</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    {user && user.permissions['asset.list_asset'] && user.permissions['asset.view_asset'] && user.permissions['asset.add_asset'] &&
                    <>
                    <a onClick={() => setAssetSettingMenu(!assetSettingMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Assets Settings">
                                <MdWebAsset/>
                            </Tip>
                            <span>Assets</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={assetSettingMenu} className="collapse">
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                {user && user.permissions['asset.list_asset'] &&
                                <li>{organization_slug ?
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            }
                                        }}>
                                        <a><span>List Assets</span></a>
                                    </Link>
                                    :
                                    <Link href={{pathname: '/assets'}}>
                                        <a><span>List Assets</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                                {user && user.permissions['asset.view_asset'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset',
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>View Asset</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                                {user && user.permissions['asset.add_asset'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/add',
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>Add Asset</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    {organization_slug &&
                    <a onClick={() => setDatasourceMenu(!datasourceMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Datasource Settings">
                                <FiDatabase/>
                            </Tip>
                            <span>Datasource</span>
                        </div>
                        <FiChevronDown/>
                    </a>}
                    {organization_slug &&
                    <Collapse in={datasourceMenu} className="collapse">   
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                <li>{organization_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/dataengine/add', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            }
                                        }}>
                                        <a><span>Add New Datasource</span></a>
                                    </Link>
                                    }
                                </li>
                                <li>
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/dataengine', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            }
                                        }}>
                                        <a><span>List Datasource</span></a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </Collapse>
                    }
                    {user && 
                    (user.permissions['analytics.list_analytics'] || 
                    user.permissions['analytics.view_analytics'] ||
                    user.permissions['analytics.add_analytics']) &&
                    <>
                    <li className="nav-label mg-t-25">Analytics</li>
                    <a onClick={() => setAnalysisMenu(!analysisMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Analytics Settings">
                                <BiNetworkChart/>
                            </Tip>
                            <span>Analytics</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={analysisMenu} className="collapse">   
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                {user && user.permissions['analytics.list_analytics'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/analytics', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>View Analytics</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                                {user && user.permissions['analytics.add_analytics'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/analytics/add', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>Add New Analytics</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    {user && 
                    (user.permissions['alerts.list_alerts'] || 
                    user.permissions['alerts.view_alerts'] ||
                    user.permissions['alerts.add_alerts']) &&
                    <>
                    <li className="nav-label mg-t-25">Events</li>
                    <a onClick={() => setEventsMenu(!eventsMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Events Settings">
                                <BiCalendarEvent/>
                            </Tip>
                            <span>Events</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={eventsMenu} className="collapse">   
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                {user && user.permissions['alerts.add_alerts'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/alerts/add', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>Add Remainder</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                                {user && user.permissions['alerts.list_alerts'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/alerts', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>List Events</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                                {user && user.permissions['alerts.list_alerts'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/alerts', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            alert_type: "unsolved"
                                            }
                                        }}>
                                        <a><span>Unsolved Events</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                                {user && user.permissions['alerts.list_alerts'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/alerts', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            alert_type: "solved"
                                            }
                                        }}>
                                        <a><span>Solved Events</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    {organization_slug && asset_slug &&
                    <a onClick={() => setTriggerMenu(!triggerMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Triggers Settings">                               
                                <BiBulb/>
                            </Tip>
                            <span>Triggers</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    }
                    {organization_slug && asset_slug &&
                    <Collapse in={triggerMenu} className="collapse">
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/alerts/unsolved', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>List Triggers</span></a>
                                    </Link>
                                    }
                                </li>
                                <li>
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/triggers/add', 
                                        query: {
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>Add New Trigger</span></a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </Collapse>
                    }
                    {user && 
                    (user.permissions['organization.list_organization'] || 
                    user.permissions['organization.change_organizationpreferences'] ||
                    user.permissions['organization.add_organization']) &&
                    <>
                    <li className="nav-label mg-t-25">Management</li>
                    <a onClick={() => setOrganizationMenu(!organizationMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Organization Settings">
                                <BiBuildings/>
                            </Tip>
                            <span>Organization</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={organizationMenu} className="collapse">
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                {user && user.permissions['organization.list_organization'] &&
                                <li>
                                    <Link href={{pathname: '/organization'}}>
                                        <a><span>List Organizations</span></a>
                                    </Link>
                                </li>
                                }
                                {user && user.permissions['organization.change_organizationpreferences'] &&
                                <li>{organization_slug && 
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/settings', 
                                        query: { 
                                            organization_slug: organization_slug
                                            }
                                        }}>
                                        <a><span>Organization Setting</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    <li className="nav-label mg-t-25">Settings</li>
                    {user && 
                    (user.permissions['asset.view_assetsettings'] || 
                    user.permissions['asset.add_assetsettings'] ||
                    user.permissions['asset.change_assetsettings']) &&
                    <>
                    <a onClick={() => setAssetSettingMenu(!assetSettingMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Assets Settings">
                                <MdWebAsset/>
                            </Tip>
                            <span>Assets</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={assetSettingMenu} className="collapse">
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                {user && user.permissions['asset.view_assetsettings'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/settings', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>Asset Setting</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    {user && user.permissions['dashboard.view_dashboardsettings'] &&
                    <>
                    <a onClick={() => setDashboardSettingMenu(!dashboardSettingMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Dashboard Settings">
                                <RiDashboardFill/>
                            </Tip>
                            <span>Dashboards</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={dashboardSettingMenu} className="collapse">
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                {user && user.permissions['dashboard.view_dashboardsettings'] &&
                                <li>{organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/dashboard/settings', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>Dashboard Setting</span></a>
                                    </Link>
                                    }
                                </li>
                                }
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    {user && user.permissions['widget.view_widget'] &&
                    <>
                    <a onClick={() => setWidgetSettingMenu(!widgetSettingMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Widgets Settings">
                                <MdWidgets/>
                            </Tip>
                            <span>Widgets</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={widgetSettingMenu} className="collapse">
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                <li>
                                    {organization_slug && asset_slug &&
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/asset/settings', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            asset_slug: asset_slug,
                                            }
                                        }}>
                                        <a><span>Widget Setting</span></a>
                                    </Link>
                                    }
                                </li>
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    {user && user.permissions['dataengine.view_dataenginesettings'] &&
                    <>
                    <a onClick={() => setDatasourceSettingMenu(!datasourceSettingMenu)} className="d-flex align-items-center justify-content-between mg-b-2 nav-link">
                        <div>
                            <Tip message="Datasource Settings">
                                <FiDatabase/>
                            </Tip>
                            <span>Datasource</span>
                        </div>
                        <FiChevronDown/>
                    </a>
                    <Collapse in={datasourceSettingMenu} className="collapse">
                        <li className="nav-item with-sub">
                            <ul className="nav nav-aside mg-b-0">
                                <li>
                                    <Link href={{
                                        pathname: '/organization/[organization_slug]/settings', 
                                        query: { 
                                            organization_slug: organization_slug,
                                            }
                                        }}>
                                        <a><span>Datasource Settings</span></a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </Collapse>
                    </>
                    }
                    <>
                    {organization_slug &&
                    <li className="nav-item">
                        <a className="nav-link">
                            <Tip message="External Apps">
                                <RiAppsLine/>
                            </Tip>
                            {organization_slug &&
                            <Link href={{
                                pathname: '/organization/[organization_slug]/apps', 
                                query: { 
                                    organization_slug: organization_slug,
                                    }
                                }}>
                                <span>Apps</span>
                            </Link>
                            }
                        </a>
                    </li>
                    }
                    </> 
                </ul>
            </PerfectScrollbar>
        </aside>
    </>)
}

Aside.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    user: PropTypes.object,
    organization_slug: PropTypes.string,
    asset_slug: PropTypes.string,
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
};

export default connect(mapStateToProps, { getUserProfile })(Aside);
