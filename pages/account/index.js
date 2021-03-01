import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import Router, { useRouter }  from 'next/router'

import Head from '@/components/ui/head';

const Main = () => {

    useEffect(() => {
        Router.push('/account/billing/');
    }, [])

    return null;
};

export default Main;
