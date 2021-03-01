import React, { PureComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import Router, { useRouter }  from 'next/router';
import PropTypes from 'prop-types';import store from "@/store"
import { connect } from "react-redux";
import cx from 'classnames';
import moment from 'moment';

import Head from '@/components/ui/head';
import Header from '@/components/ui/header'
import Avatar from "@/components/ui/avatar"
import Tip from "@/components/ui/tip"
import Map from "@/components/ui/map"
import Footer from '@/components/ui/footer';
import Markdown from '@/components/ui/markdown'
import axios from 'axios';
import Loading from '@/components/ui/loading';

import { FermatUrls } from "@/actions/fermat/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'
import NotAvailable from "@/components/ui/notavailable";

import { FiEdit3, FiImage, FiVideo, FiFileText, FiBriefcase, FiPhone, FiHome, FiSmartphone, FiMail, FiGift, FiSearch, FiArrowRight } from "react-icons/fi";
import { FcBarChart, FcProcess, FcBullish } from "react-icons/fc";
import { IoIosCog, IoIosLaptop, IoIosCart, IoIosFiling, IoMdArrowForward } from "react-icons/io";
import { getUserProfile } from "@/actions/user/actions";

import Error from 'next/error'
import PageNotFound from '@/pages/404';

const ProductPage = (props) => {
    const router = useRouter();
    const{ product_slug } = router.query;
    const [product, setProduct] = useState()
    const [error, setError] = useState();

    useEffect(() => {
        if (product_slug !== undefined){
            const viewProductURL = FermatUrls.viewProduct;
            const token = getUserToken();
            axios.get(viewProductURL, {
                params: {
                    product_slug: product_slug
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
                    setProduct(json.data);
                }
            });
        }
    }, [product_slug])

    if (error) {
        if(error.response != undefined){
            if (error.response.status == 404) {
                return <PageNotFound/>
            }
            else if (error.response.status == 403) {
                return <PageNotFound/>
            }
            else if (error.response.status == 401) {
                Router.push({ pathname: '/login', query: { redirect_url: window.location.href }})
            }
        }
        else{
            return <NotAvailable title="No Data Available" body="" support_redirect={false}/>
        }
    }
    if (!product) return <Loading height="ht-100v"/>

    return (
        <>
            <Head
                title={`${product && product.title} by Fermat | Fermat | StdAux`}
                description={product.long_description}
            />
            <div className="content content-fixed pd-0">
                <Header withoutSearch={true}/>
                <div className="mg-0 pos-relative pd-0 ht-lg-600 ht-md-600 ht-xl-600 wd-100p">
                    <div className="pos-absolute t-100 r-100 z-index-10 bg-white pd-10 rounded d-none d-xl-block d-lg-block d-md-block">
                        <div className="ht-100p wd-400 d-flex flex-column justify-content-center pd-20">
                            <h3 className="tx-24 mg-b-15 mg-md-b-20 tx-bold">{product && product.title}</h3>
                            <Markdown>{product && product.short_description}</Markdown>
                            {product &&
                                <>
                                {product.whitepaper &&
                                    <a href={`${process.env.STDAUX_ROOT_URL}${product.whitepaper.pdf}`} className="btn btn-primary btn-block wd-200">Get the White Paper</a>
                                }
                                </>
                            }
                        </div>
                    </div>
                    <div className="mg-0 pd-0 ht-lg-600 ht-md-600 ht-xl-600 ht-xl-600 wd-100p">
                        <img src={`${process.env.STDAUX_ROOT_URL}${product.image}`} className="img-fit-cover" alt=""/>
                    </div>
                </div>
                <div className="container pd-t-40">
                    <h1 className="tx-color-01 mg-b-5 center">Features</h1>
                    <p className="tx-color-03 tx-16 mg-b-40">{product.long_description}</p>
                    {product.features && product.features.map((feature, index) => (
                        <div key={feature.pk} className="row row-xs pd-y-20">
                            <div className="col-sm-12 col-lg-6 pd-t-10">
                                <div className="carousel slide ht-100p">
                                    <div className="carousel-inner ht-100p">
                                        {feature.images && feature.images.map(image => (
                                            <div key={image.pk} className="carousel-item active">
                                                <div className="mg-0 pd-0 ht-100p d-flex align-items-center">
                                                    <img src={`${process.env.STDAUX_ROOT_URL}${image.image}`} className="img-fit-cover ht-100p" alt=""/>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6 pd-t-10">
                                <div className="ht-100p d-flex flex-column justify-content-center pd-t-0 pd-x-20">
                                    <h3 className="tx-24 mg-b-15 mg-md-b-20">{feature.title}</h3>
                                    <p className="tx-14 tx-md-16 tx-color-02">{feature.description}</p>
                                    <Markdown>{feature.points}</Markdown>
                                    {feature.external_url &&
                                    <a href={feature.external_url} className="btn btn-primary btn-block wd-200 btn-uppercase">Learn More</a>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer withDetails={true}/>
        </>
    )
}

export default ProductPage;