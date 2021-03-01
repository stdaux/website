import React, { PureComponent, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';

import Head from '@/components/ui/head';
import Login from '@/components/forms/user/login'
import Header from '@/components/ui/header'
import Aside from '@/components/ui/aside'
import Avatar from "@/components/ui/avatar"
import Card from '@/components/ui/card'
import CardHeader from '@/components/ui/card/header'
import CardFooter from '@/components/ui/card/footer'
import CardBody from '@/components/ui/card/body'
import Tip from "@/components/ui/tip"
import { FiEdit3, FiImage, FiVideo, FiFileText, FiBriefcase, FiPhone, FiHome, FiSmartphone, FiMail, FiGift } from "react-icons/fi";
import { getUserProfile } from "@/actions/user/actions";
import store from "@/store"

import ListAsset from '@/components/widgets/asset/list'
import ListAlerts from "@/components/widgets/alerts/list"
import ListNotification from "@/components/widgets/notification/list"

import { connect } from "react-redux";

const ProfilePage = (props) => {

    const { children, fullScreen, showHeader, showFooter, title, description, keywords, noIndex, embed, setSearchQuery, user, getUserProfile } = props;

    useEffect(() => {
    }, [user])

    return(
        <>
        <Head
            title={`${user? user.full_name: ''} | Profile | Fermat`}
        />
        <Aside/>
        <div className="content ht-100v pd-0 page-profile">
            <Header/>
            <div className="content-body">
                <div className="container pd-x-0 tx-13">
                    <div className="media d-block d-lg-flex">
                        <div className="profile-sidebar profile-sidebar-two pd-lg-r-15">
                            <div className="row">
                                <div className="col-sm-12 col-md-2 col-lg">
                                    <Avatar name={user? user.first_letter : ''} image={user? user.profile_image : ''} className="avatar-online" size="xxl" shape="rounded-circle"/>
                                </div>
                                <div className="col-sm-12 col-md-7 col-lg mg-t-20 mg-sm-t-0 mg-lg-t-25">
                                    <h5 className="mg-b-2 tx-spacing--1">{user? user.full_name : ''}</h5>
                                    <p className="tx-color-03 mg-b-25">@{user? user.username : ''}</p>
                                    <div className="d-flex mg-b-25">
                                        <button className="btn btn-xs btn-white flex-fill">Edit</button>
                                        <button className="btn btn-xs btn-primary flex-fill mg-l-10">Change Password</button>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg mg-t-10">
                                    <label className="tx-sans tx-10 tx-semibold tx-uppercase tx-color-01 tx-spacing-1 mg-b-15">Contact Information</label>
                                    <ul className="list-unstyled profile-info-list">
                                        <li><FiBriefcase/> <span className="tx-color-03">{user? user.current_address:''}</span></li>
                                        <li><FiHome/> <span className="tx-color-03">{user? user.permanent_address:''}</span></li>
                                        <li><FiSmartphone/> <a href="">{user? user.phone_number:''}</a></li>
                                        <li><FiPhone/> <a href="">{user? user.alternate_phone_number:''}</a></li>
                                        <li><FiMail/> <a href="">{user? user.email:''}</a></li>
                                        <li><FiGift/> <a href="">{user? user.date_of_birth:''}</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg mg-t-10">
                                    <label className="tx-sans tx-10 tx-semibold tx-uppercase tx-color-01 tx-spacing-1 mg-b-15">Explore</label>
                                    <ul className="list-unstyled profile-info-list">
                                        <li><FiBriefcase/> <a href="/organization">Go to Organizations</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="media-body mg-t-40 mg-lg-t-0 pd-lg-x-10">
                            <ListAlerts enableSearch={false} listSize={5} enableFooter={false}/>
                        </div>
                        <div className="profile-sidebar profile-sidebar-two mg-t-40 mg-lg-t-0 pd-lg-l-15">
                            <div className="row row-xs">
                                <div className="col-sm-6 col-md-5 col-lg-12">
                                    <ListNotification enableSearch={false} listSize={5} enableFooter={false}/>
                                </div>
                                <div className="col-sm-6 col-md-5 col-lg mg-t-40 mg-sm-t-0 mg-lg-t-40">
                                </div>
                                <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                                </div>
                                <div className="col-sm-6 col-md-5 col-lg mg-t-40 order-sm-1">
                                </div>
                                <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )    
}

ProfilePage.propTypes = {
    children: PropTypes.node,
    router: PropTypes.object,
    fullScreen: PropTypes.bool,
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    noIndex: PropTypes.bool,
    embed: PropTypes.bool,
    setSearchQuery: PropTypes.func,
    lang: PropTypes.string,
    getUserProfile: PropTypes.func.isRequired,
    user: PropTypes.object,
}

ProfilePage.defaultProps = {
    showHeader: true,
    showFooter: true,
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
};

export default connect(mapStateToProps, { getUserProfile })(ProfilePage);
