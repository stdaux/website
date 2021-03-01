import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';
import Router, { useRouter }  from 'next/router'
import Link from 'next/link';

import Head from '@/components/ui/head';
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Card from '@/components/ui/card'
import Aside from '@/components/ui/aside'
import Markdown from '@/components/ui/markdown'
import axios from 'axios';
import Loading from '@/components/ui/loading';

import { FermatUrls } from "@/actions/fermat/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'
import NotAvailable from "@/components/ui/notavailable";

const LegalPolicyPage = (props) => {
    const router = useRouter();
    const{ legal_slug } = router.query;
    const [legal, setLegal] = useState([])
    const [error, setError] = useState();

    useEffect(() => {
        if (legal_slug !== undefined){
            const viewLegalURL = FermatUrls.viewLegal;
            const token = getUserToken();
            axios.get(viewLegalURL, {
                params: {
                    legal_slug: legal_slug
                },
            })
            .then((response) => {
                if (response.status == 200) {
                    let data = response.data;
                    return data;
                }
            })
            .then(json => {
                if (json != undefined){
                    setLegal(json.data);
                }
            });
        }
    }, [legal_slug])

    if (error) {
        if (error.response.status == 404) {
            return <PageNotFound/>
        }
        else if (error.response.status == 403) {
            return <PageNotFound/>
        }
    }
    if (!legal) return <Loading height="ht-100v"/>

    return(
        <>
        <Head
            title={`Legal - ${legal? legal.name:''} | Fermat | StdAux`}
            description={`${legal? legal.name:''}`}
        />
        <Header className={"bg-black"}/>
        <div className="content pd-0">
            <div className="content-body">
                <div className="container pd-t-80">
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
                        <div>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">{legal.name}</h1>
                        <span className="tx-12 tx-color-03">Last Updated: {moment(legal.last_updated_at).format('MMMM d, yyyy')}</span>
                        <Markdown>{legal.description}</Markdown>
                    </div>
                </div>
            </div>
        </div>
        <Footer withDetails={true}/>
        </>
    )
}

export default LegalPolicyPage;