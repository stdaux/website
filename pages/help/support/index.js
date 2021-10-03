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

import ListSupport from "@/components/widgets/support/list"
import AddSupport from "@/components/widgets/support/add"

import { FiEdit3, FiImage, FiVideo, FiFileText, FiBriefcase, FiPhone, FiHome, FiSmartphone, FiMail, FiGift, FiSearch } from "react-icons/fi";
import { IoIosCog, IoIosLaptop, IoIosCart, IoIosFiling, IoMdArrowForward } from "react-icons/io";
import { getUserProfile } from "@/actions/user/actions";
import store from "@/store"
import { connect } from "react-redux";

const SupportPage = (props) => {
    return (
        <>
            <Head
                title="Support | Fermat | StdAux"
                description="Support for Fermat"
            />
            <div className="content content-fixed pd-0">
                <Header withoutSearch={true}/>
                <div className="content-body">
                    <div className="container pd-x-0 tx-13">
                        <div className="row row-xs">
                            <div className="col-xl-4">
                                <AddSupport/>
                            </div>
                            <div className="col-xl-8">
                                <ListSupport/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer withDetails={true}/>
        </>
    )
}

export default SupportPage;