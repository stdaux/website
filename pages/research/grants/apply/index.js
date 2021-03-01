import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import ApplyForGrant from "@/components/widgets/research/grant/apply"
import Router, { useRouter }  from 'next/router'

import Head from '@/components/ui/head';
import Header from '@/components/ui/header'

const ApplyForGrantPage = () => {

    useEffect(() => {
    }, [])

    return(<>
        <Head
            title="Home | Fermat | StdAux"
            description="Home Page of Fermat"
        />
        <Header/>
        <div className="content pd-0 bg-black">
            <div className="container pd-t-40">
                <div className="row">
                    <div className="col-12">
                        <ApplyForGrant className="bg-transparent bd-0 tx-white"/>
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default ApplyForGrantPage;
