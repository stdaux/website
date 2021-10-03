import React, { PureComponent, useEffect, useState } from 'react';
import Router, { useRouter }  from 'next/router';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';

import Head from '@/components/ui/head';


import Card from '@/components/ui/card'
import CardHeader from "@/components/ui/card/header"
import CardBody from "@/components/ui/card/body"
import CardFooter from "@/components/ui/card/footer"

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Aside from '@/components/ui/aside'
import Avatar from "@/components/ui/avatar"
import Tip from "@/components/ui/tip"
import { FiEdit3, FiImage, FiVideo, FiFileText, FiBriefcase, FiPhone, FiHome, FiSmartphone, FiMail, FiGift, FiSearch } from "react-icons/fi";
import { IoIosCog, IoIosLaptop, IoIosCart, IoIosFiling, IoMdArrowForward } from "react-icons/io";
import { getUserProfile } from "@/actions/user/actions";
import store from "@/store"
import { connect } from "react-redux";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

const APIPage = (props) => {
    const router = useRouter();
    const{ organization_slug, asset_slug } = router.query;

    return (
        <>
            <Head
                title="API Access | Fermat | StdAux"
                description="API Access Fermat StdAux"
            />
            <div className="content content-fixed pd-0">
                <Header withoutSearch={true}/>
                <div className="content-body">
                    <div className="container pd-x-0 tx-13">
                        <div className="d-sm-flex align-items-center justify-content-between">
                            <div>
                                <h1 className="mg-b-5">Applications & API</h1>
                            </div>
                        </div>
                    </div>
                    <hr className="mg-t-60 mg-b-30"/>
                    <div className="container pd-x-0 tx-13">
                        <Tab.Container defaultActiveKey="tokens">
                            <Nav className="nav-line nav-line-profile mg-b-30">
                                <Nav.Item>
                                    <Nav.Link className="pd-0" eventKey="tokens">
                                        <a href="" className="nav-link d-flex align-items-center">Tokens/Keys <span className="badge">340</span></a>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="pd-0" eventKey="oauth_applications">
                                        <a href="" className="nav-link d-flex align-items-center">OAuth Applications <span className="badge">340</span></a>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="pd-0" eventKey="access">
                                        <a href="" className="nav-link d-flex align-items-center">Access <span className="badge">340</span></a>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="tokens">
                                    <h5><a href="">Barbara Marion</a></h5>
                                    <p>Tech Executive</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="oauth_applications">
                                    <h5><a href="">Barbara Marion</a></h5>
                                    <p>Tech Executive</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="access">
                                    <h5><a href="">Barbara Marion</a></h5>
                                    <p>Tech Executive</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
            <Footer withDetails={true}/>
        </>
    )
}

export default APIPage;