import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import ListGrants from "@/components/widgets/research/grant/list"
import Router, { useRouter }  from 'next/router'

import Head from '@/components/ui/head';
import Header from '@/components/ui/header'

const GrantPage = () => {
    const {className} = props;
    const [grants, setGrants] = useState([]);

    useEffect(() => {
    }, [])

    return(<>
        <Head
            title="List of Research Grants | StdAux"
            description="List of research grants given by StdAux"
        />
        <Header/>
        <div className="content pd-0">
            <div className="container pd-t-40">
                <div className="row">
                    <div className="col-12">
                        <ListGrants className="bg-transparent bd-0 tx-white"/>
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default GrantPage;
