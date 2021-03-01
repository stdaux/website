import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import Router, { useRouter }  from 'next/router';

const Main = () => {

    useEffect(() => {
        Router.push('/home/');
    }, [])

    return(<></>)
};

export default Main;
