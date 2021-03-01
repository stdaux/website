import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import { connect } from "react-redux";
import moment from 'moment';

const errorType = {
    "401": {
        "title": "Error 401: Unauthorized",
        "description": "Oopps. You are Unauthorized to access this resource.",
        "text": "You can access this resource by providing authentication. Please go to Login Page for authentication.",
        "enableSearch": false,
        "img": "401.png"
    },
    "404": {
        "title": "Error 404: Page Not Found",
        "description": "Oopps. The page you were looking for doesn't exist.",
        "text": "You may have mistyped the address or the page may have moved. Try searching below.",
        "enableSearch": false,
        "img": "404.png"
    },
    "451": {
        "title": "Error 451: Unavailable for Legal Reasons",
        "description": "Oopps. No Access to this Resource.",
        "text": "The specific resource can't be accessed due to legal request from the Respected National Government.",       
        "enableSearch": false,
        "img": "451.png"
    },
    "500": {
        "title": "Error 500: Internal Server Error",
        "description": "Oopps. There was an error, please try again later.",
        "text": "The server encountered an internal server error and was unable to complete your request.",
        "enableSearch": false,
        "img": "500.png"
    },
    "503": {
        "title": "Error 503: Internal Server Error",
        "description": "Oopps. There was an error, please try again later.",
        "text": "The server encountered an internal server error and was unable to complete your request.",
        "enableSearch": false,
        "img": "500.png"
    },
    "504": {
        "title": "Error 504: Server Timeout Error",
        "description": "Oopps. Time has ran out. Please try again later.",
        "text": "Service did not respond within the time frame that the gateway was willing to wait.",
        "enableSearch": false,
        "img": "504.png"
    },
    "505": {
        "title": "Error 505: Forbidden Page",
        "description": "Oopps. You are trying to enter Area 51. You will be reported.",
        "text": "We've been automatically alerted of the issue and will work to fix it asap.",
        "enableSearch": false,
        "img": "500.png"
    },
}

const Error = (props) => {
    const { className, errorCode } = props;
    const [error, setError] = useState();
    useEffect(() => {
        if (typeof errorCode == "string"){
            setError(errorType[errorCode]);
        }
        else if (typeof errorCode == "object"){
            setError(errorCode)
        }
        else if (typeof errorCode == "number"){
            setError(errorType[errorCode.toString()])
        }
    }, [])

    return (
        <>
        {error &&
        <div className={className}>
            <div className="wd-70p wd-sm-250 wd-lg-300 mg-b-15"><img src={`/images/${error.img}`} className="img-fluid" alt=""/></div>
            <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">{error.title}</h1>
            <h5 className="tx-16 tx-sm-18 tx-lg-20 tx-normal mg-b-20">{error.description}</h5>
            <p className="tx-color-03 mg-b-30">{error.text}</p>
            {error.enableSearch &&
            <div className="d-flex mg-b-40">
                <input type="text" className="form-control wd-200 wd-sm-250" placeholder="Search"/>
                <button className="btn btn-brand-02 bd-0 mg-l-5 pd-sm-x-25">Search</button>
            </div>
            }
        </div>
        }
        </>
    )
}

Error.propTypes = {
    className: PropTypes.string,
    errorCode: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ])
}

Error.defaultProps = {
    className: "ht-100p d-flex flex-column align-items-center justify-content-center",
}

export default Error;
