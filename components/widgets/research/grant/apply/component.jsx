import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import Router  from 'next/router'
import axios from 'axios';

import Card from "@/components/ui/card"
import CardHeader from "@/components/ui/card/header"
import CardBody from "@/components/ui/card/body"
import ResearchGrantForm from "@/components/forms/research/grant";

import { DataEngineUrls } from "@/actions/dataengine/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'

const ApplyForGrant = (props) => {
    const {className} = props;
    return (
        <>
            <div>
                <Card className={cx(className)}>
                    <CardBody>
                        <h1 className="mg-b-10 d-flex justify-content-center tx-roboto tx-white">Apply for Grant</h1>
                        <h5 className="d-flex justify-content-center tx-roboto mg-b-10 tx-white">Any researcher, including nonprofit researchers and those at government institutions or non-commercial early adopters may apply for Grant.</h5>
                        <ResearchGrantForm className="mg-t-10"/>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

ApplyForGrant.propTypes = {
    className: PropTypes.string,
}

export default ApplyForGrant;