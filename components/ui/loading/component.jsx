import React, { Component, useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import Router, { useRouter }  from 'next/router'
import store from '@/store'
import { connect } from "react-redux";

const Loading = (props) => {
    const { className, image, height, width } = props;
    const router = useRouter();

    useEffect(() => {
    }, [])

    return (
        <>
            <div className={`media ${className} ${height}`}>
                <div className="media-body mg-x-20">
                    <div className={`d-flex flex-column align-items-center justify-content-center`}>
                        <div className={`${width} mg-y-30`}>
                            <img src={image} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Loading.propTypes = {
    image: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
};

Loading.defaultProps = {
    image: "/images/loading_data.svg",
    className: "",
    height: "ht-100p",
    width: "wd-50p"
};

export default Loading;