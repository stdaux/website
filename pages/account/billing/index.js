import React, { PureComponent, useEffect, useState } from 'react';
import Router, { useRouter }  from 'next/router';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';

import Head from '@/components/ui/head';
import Login from '@/components/forms/user/login'

import Card from '@/components/ui/card'
import CardHeader from "@/components/ui/card/header"
import CardBody from "@/components/ui/card/body"
import CardFooter from "@/components/ui/card/footer"

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Aside from '@/components/ui/aside'
import Avatar from "@/components/ui/avatar"
import Tip from "@/components/ui/tip"
import ListDashboard from "@/components/widgets/dashboard/list"
import { FiEdit3, FiImage, FiVideo, FiFileText, FiBriefcase, FiPhone, FiHome, FiSmartphone, FiMail, FiGift, FiSearch } from "react-icons/fi";
import { IoIosCog, IoIosLaptop, IoIosCart, IoIosFiling, IoMdArrowForward } from "react-icons/io";
import { getUserProfile } from "@/actions/user/actions";
import store from "@/store"
import { connect } from "react-redux";

const BillingPage = (props) => {
    const router = useRouter();
    const{ organization_slug, asset_slug } = router.query;

    return (
        <>
            <Head
                title="Billing | Fermat | StdAux"
                description="Billing Fermat StdAux"
            />
            <div className="content content-fixed pd-0">
                <Header withoutSearch={true}/>
                <div className="content-body">
                    <div className="container pd-x-0 tx-13">
                        <div className="d-sm-flex align-items-center justify-content-between">
                            <div>
                                <h1 className="mg-b-5">Billing</h1>
                            </div>
                        </div>
                    </div>
                    <hr className="mg-t-60 mg-b-30"/>
                    <div className="container pd-x-0 tx-13">
                        <div className="row">
                            <div className="col-lg-9 col-xl-10 mg-t-20">
                                <div className="bd pd-20">
                                    <h1 className="tx-sans tx-medium tx-spacing-1">Estimated costs for this billing period</h1>
                                    <p className="mg-b-10 tx-color-03">This is the current costs for your usage this billing period. A breakdown of your costs is available below.</p>
                                    <h1 className="tx-sans tx-medium tx-spacing-1 mg-b-10">$0.00</h1>
                                </div>
                            </div>
                            <div className="col-lg-9 col-xl-10 mg-t-20">
                                <div className="bd pd-20">
                                    <h1 className="tx-sans tx-medium tx-spacing-1">Billing Alerts</h1>
                                    <p className="mg-b-0 tx-color-03">Set up automated billing alerts to receive emails when a specified usage amount is reached.</p>
                                    <p className="mg-b-10 tx-color-03">Usage Amount</p>
                                    <h1 className="tx-sans tx-medium tx-spacing-1 mg-b-10">$0.00</h1>
                                </div>
                            </div>
                            <div className="col-lg-9 col-xl-10 mg-t-20">
                                <div className="bd pd-20">
                                    <h1 className="tx-sans tx-medium tx-spacing-1">Payment Methods</h1>
                                    <p className="mg-b-0 tx-color-03">Please enter your preferred payment method below. You can use a credit / debit card or prepay through PayPal.</p>
                                    <p className="mg-b-10 tx-color-03">Usage Amount</p>
                                    <h1 className="tx-sans tx-medium tx-spacing-1 mg-b-10">$0.00</h1>
                                </div>
                            </div>
                            <div className="col-lg-9 col-xl-10 mg-t-20">
                                <div className="bd pd-20">
                                    <h1 className="tx-sans tx-medium tx-spacing-1">Billing Settings</h1>
                                    <p className="mg-b-0 tx-color-03">Address</p>
                                    <p className="mg-b-10 tx-color-03">This address appears on your monthly invoice and should be the legal address of your home or business</p>
                                    <p className="tx-sans tx-medium tx-spacing-1 mg-b-10">Address</p>
                                    <h1 className="tx-sans tx-medium tx-spacing-1 mg-t-20">Taxation</h1>
                                    <p className="mg-b-10 tx-color-03">Registered business can enter their tax identification number to remove tax charges from future bills.</p>
                                    <p className="tx-sans tx-medium tx-spacing-1 mg-b-10">Tax Registration ID</p>
                                </div>
                            </div>
                            <div className="col-lg-9 col-xl-10 mg-t-20">
                                <h1 className="tx-sans tx-medium tx-spacing-1">Billing History</h1>
                                <div className="table-responsive">
                                    <table className="table table-borderless table-sm tx-nowrap mg-b-0">
                                        <thead>
                                            <tr className="tx-spacing-1 tx-sans tx-color-03">
                                                <th>Date</th>
                                                <th>Description</th>
                                                <th>Invoice #</th>
                                                <th>Amount</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i className="fab fa-chrome tx-primary op-6"></i></td>
                                                <td className="tx-medium">Google Chrome</td>
                                                <td>13,410</td>
                                                <td>40.95%</td>
                                                <td>Download: PDF . CSV </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer withDetails={true}/>
        </>
    )
}

export default BillingPage;