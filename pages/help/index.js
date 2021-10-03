import React, { PureComponent, useEffect, useState } from 'react';
import Router, { useRouter }  from 'next/router';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';

import Head from '@/components/ui/head';

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { FiEdit3, FiImage, FiVideo, FiFileText, FiBriefcase, FiPhone, FiHome, FiSmartphone, FiMail, FiGift, FiSearch } from "react-icons/fi";
import { IoIosCog, IoIosLaptop, IoIosCart, IoIosFiling, IoMdArrowForward } from "react-icons/io";
import { getUserProfile } from "@/actions/user/actions";
import store from "@/store"
import { connect } from "react-redux";

const HelpPage = (props) => {
    const router = useRouter();
    const{ organization_slug, asset_slug } = router.query;

    return (
        <>
            <Head
                title="List of Associated Organization | Fermat | StdAux"
                description="List of Organization acssociated with User"
            />
            <div className="content content-fixed pd-0">
                <Header withoutSearch={true}/>
                <div className="content-body">
                    <div className="container pd-x-0 tx-13">
                        <div className="d-sm-flex align-items-center justify-content-between">
                            <div>
                                <h4 className="mg-b-5">Help Support Center</h4>
                                <p className="mg-b-0 tx-color-03">Search for any help questions or topics.</p>
                            </div>
                            <div className="search-form mg-t-20 mg-sm-t-0">
                                <input type="search" className="form-control" placeholder="Search topic"/>
                                <button className="btn" type="button"><FiSearch/></button>
                            </div>
                        </div>
                    </div>
                    <hr className="mg-t-60 mg-b-30"/>
                    <div className="container pd-x-0 tx-13">
                        <div className="row">
                            <div className="col-lg-9 col-xl-10">
                                <h3 className="mg-b-25">It will be added in future.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer withDetails={true}/>
        </>
    )
}

export default HelpPage;