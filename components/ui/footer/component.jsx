import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import { connect } from "react-redux";
import moment from 'moment';

import { getUserToken, getCookie } from  '@/actions/user/actions'
import { FermatUrls } from "@/actions/fermat/urls";
import axios from 'axios';

const Footer = (props) => {
    const { className, current_year, application_name, version, withDetails } = props;

    const [solutions, setSolutions] = useState()
    const [products, setProducts] = useState()
    const [error, setError] = useState();

    useEffect(() => {
        const listSolutionURL = FermatUrls.listSolution;
        axios.get(listSolutionURL)
        .then((response) => {
            if (response.status == 200) {
                let data = response.data;
                return data;
            }
        })
        .then(json => {
            if (json != undefined){
                setSolutions(json.data);
            }
        }).catch(error => {
            setError(error)
        });

        const listProductURL = FermatUrls.listProduct;
        axios.get(listProductURL)
        .then((response) => {
            if (response.status == 200) {
                let data = response.data;
                return data;
            }
        })
        .then(json => {
            if (json != undefined){
                setProducts(json.data);
            }
        }).catch(error => {
            setError(error)
        });

    }, [])

    return (
        <>
        {withDetails &&
        <div className="content content-fixed bg-black-9 tx-white pd-0">
            <div className="container pd-t-40">
                <h1 className="tx-white mg-b-5 center">Find out More</h1>
                <hr className="bd-teal bd-5 mg-b-20"/>
                <div className="row row-xs">
                    <div className="col-sm-3 col-lg-3 pd-t-10">
                        <div className="ht-100p d-flex flex-column pd-20">
                            <h3 className="tx-20 tx-white tx-bold tx-uppercase pd-b-10">Products</h3>
                            <ul className="list-unstyled profile-info-list">
                                {products && products.map(product => (
                                    <li><Link href={`/products/${product.slug}`}><a><span className="tx-white tx-16 mg-0">{product.title}</span></a></Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3 pd-t-10">
                        <div className="ht-100p d-flex flex-column pd-20 ">
                            <h3 className="tx-20 tx-white tx-bold tx-uppercase pd-b-10">Solutions</h3>
                            <ul className="list-unstyled profile-info-list">
                                {solutions && solutions.map(solution => (
                                    <li><Link href={`/solutions/${solution.slug}`}><a><span className="tx-white tx-16 mg-0">{solution.title}</span></a></Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3 pd-t-10">
                        <div className="ht-100p d-flex flex-column pd-20 ">
                            <h3 className="tx-20 tx-white tx-bold tx-uppercase pd-b-10">Partners</h3>
                            <ul className="list-unstyled profile-info-list">
                                <li><Link href="/partners"><a><span className="tx-white tx-16 mg-0">Connect with Partners</span></a></Link></li>
                                <li><Link href="/partners/register"><a><span className="tx-white tx-16 mg-0">Become a Partner</span></a></Link></li>
                            </ul>
                            <h3 className="tx-20 tx-white tx-bold tx-uppercase pd-b-10">Earth Climate Services</h3>
                            <ul className="list-unstyled profile-info-list">
                                <li><Link href="/about"><a><span className="tx-white tx-16 mg-0">NASA</span></a></Link></li>
                                <li><Link href="/about"><a><span className="tx-white tx-16 mg-0">ESA</span></a></Link></li>
                                <li><Link href="/about"><a><span className="tx-white tx-16 mg-0">ISRO</span></a></Link></li>
                                <li><Link href="/about"><a><span className="tx-white tx-16 mg-0">Google Earth Engine</span></a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3 pd-t-10">
                        <div className="ht-100p d-flex flex-column pd-20 ">
                            <h3 className="tx-20 tx-white tx-bold tx-uppercase pd-b-10">Company</h3>
                            <ul className="list-unstyled profile-info-list">
                                <li><Link href="/about"><a><span className="tx-white tx-16 mg-0">About Us</span></a></Link></li>
                                <li><Link href="/team"><a><span className="tx-white tx-16 mg-0">Our Team</span></a></Link></li>
                                <li><Link href="/careers"><a><span className="tx-white tx-16 mg-0">Careers</span></a></Link></li>
                                <li><Link href="/press"><a><span className="tx-white tx-16 mg-0">Press</span></a></Link></li>
                                <li><Link href="/research/publications"><a><span className="tx-white tx-16 mg-0">Publications</span></a></Link></li>
                                <li><Link href="/open/data"><a><span className="tx-white tx-16 mg-0">Data & Earth Insights</span></a></Link></li>
                                <li><Link href="/open/data"><a><span className="tx-white tx-16 mg-0">Stand for Earth</span></a></Link></li>
                                <li><Link href="/philantrophy"><a><span className="tx-white tx-16 mg-0">Philantrophy</span></a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        <footer className="footer">
            <div>
                <span>&copy; {current_year} {application_name} {version} </span>
                <span>Created by <a href="https://stdaux.com">{process.env.APP_AUTHOR}</a></span>
            </div>
            <div>
                <nav className="nav">
                    <a href="https://stdaux.com/licenses" className="nav-link">Licenses</a>
                    <a href="/legal" className="nav-link">Legal</a>
                    <a href="/legal/privacy-policy" className="nav-link">Privacy Policy</a>
                    <a href="/legal/terms-service-agreement" className="nav-link">Terms of Service</a>
                    <a href="https://fermat.stdaux.com/support" className="nav-link">Support on Fermat</a>
                    <a href="https://stdaux.com/contact" className="nav-link">Contact StdAux</a>
                </nav>
            </div>
        </footer>
        </>
    )
}

Footer.propTypes = {
    className: PropTypes.string,
    current_year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    application_name: PropTypes.string,
    version: PropTypes.string,
    withDetails: PropTypes.bool
}

Footer.defaultProps = {
    className: '',
    current_year: moment().format('YYYY'),
    application_name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    withDetails: false
}

export default Footer;
