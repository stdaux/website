import Link from 'next/link';
import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';
import axios from 'axios';

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Head from '@/components/ui/head';
import Card from '@/components/ui/card'
import Aside from '@/components/ui/aside'
import Loading from '@/components/ui/loading';
import Markdown from '@/components/ui/markdown'

import { FermatUrls } from "@/actions/fermat/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'
import NotAvailable from "@/components/ui/notavailable";

import { FiArrowRight, FiSearch } from 'react-icons/fi';

const LegalPage = (props) => {
    const [legals, setLegals] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        const listLegalURL = FermatUrls.listLegal;
        const token = getUserToken();
        axios.get(listLegalURL)
        .then((response) => {
            if (response.status == 200) {
                let data = response.data;
                return data;
            }
        })
        .then(json => {
            if (json != undefined){
                setLegals(json.data);
                console.log(json.data)
            }
        });
    }, [])

    if (error) {
        if (error.response.status == 404) {
            return <PageNotFound/>
        }
        else if (error.response.status == 403) {
            return <PageNotFound/>
        }
    }
    if (!legals) return <Loading height="ht-100v"/>

    return(
        <>  
            <Head
                title="Legal Policies | Fermat | StdAux"
                description="List of Legal Policies followed by Fermat | StdAux"
            />
            <Header className={"bg-black"}/>

            <div className="content pd-0">
                <div className="content-body">
                    <div className="container pd-t-80">
                        <div className="d-sm-flex align-items-center justify-content-between pd-b-10">
                            <div>
                                <h4 className="mg-b-5">Legal Policies</h4>
                                <p className="mg-b-0 tx-color-03"></p>
                            </div>
                            <div className="search-form mg-t-20 mg-sm-t-0">
                                <input type="search" className="form-control" placeholder="Search topic"/>
                                <button className="btn" type="button"><FiSearch/></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7 pd-x-20">
                                {legals.length > 0 &&
                                legals.map(legal => (
                                    <div className="pd-y-30">
                                        <h1 id={legal.slug} key={legal.slug} className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">{legal.name}</h1>
                                        <span className="tx-12 tx-color-03">Last Updated: {moment(legal.last_updated_at).format('MMMM d, yyyy')}</span>
                                        <Markdown>{legal.description}</Markdown>
                                    </div>
                                ))}
                            </div>
                            <div className="col-5 pd-x-20">
                                {legals.length > 0 &&
                                legals.map(legal => (
                                    <>
                                        <a key={legal.slug} href={`#${legal.slug}`}>
                                            <h5 key={legal.slug} className="tx-lato">{legal.name}</h5>
                                        </a>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LegalPage;