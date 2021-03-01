import React, { PureComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import Router, { useRouter }  from 'next/router';
import PropTypes from 'prop-types';
import dynamic from "next/dynamic";
import cx from 'classnames';
import moment from 'moment';

import Head from '@/components/ui/head';
import Header from '@/components/ui/header'
import Section from "@/components/ui/section"
import Card from "@/components/ui/card"
import Map from "@/components/ui/map"

import ReactDOM from "react-dom";
import Fullpage from "@fullpage/react-fullpage";

import { FiArrowRight } from 'react-icons/fi';
import 'owl.carousel/dist/assets/owl.carousel.css';

import Swiper from 'react-slider-swiper';

const OwlCarousel = dynamic(import("react-owl-carousel"), {
    ssr: false,
});

const Main = (props) => {
    const router = useRouter();
    const{ } = router.query;
    let main = null;

    main = (
        <>
            <Head
                title="Home | Fermat | StdAux"
                description="Home Page of Fermat"
            >
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"/>
            </Head>
            <Header/>
            <Fullpage
                direction='vertical'
                sectionsColor={['#171717', '#171717', '#171717', '#171717', '#171717', '#171717']}
                anchors={['home', 'services', 'partners', 'research', 'about', 'contact']}
                scrollingSpeed={500}
                easing='linear'
                loopBottom={false}
                loopTop={false}
                css3={true}
                navigation={{
                    'bulletsColor': '#fff',
                    'position': 'right',
                }}
                licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
                render={({ state, fullpageApi }) => {
                    return (
                        <div>
                            <section className="section bg-home">
                                <div className="bg-overlay bg-black op-6">
                                </div>
                                <div className="container full-screen pd-5 d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Find Us at</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-xs">
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 bd-0 wd-100p">
                                                <h3 className="tx-roboto tx-white">Main</h3>
                                                <p className="tx-roboto tx-white mg-0">Standard Auxiliary</p>
                                                <p className="tx-roboto tx-white mg-0">Sector-10, New Sanganer Road</p>
                                                <p className="tx-roboto tx-white mg-0">Near St. Wilfred College</p>
                                                <p className="tx-roboto tx-white mg-0">Jaipur PinCode-302020</p>
                                                <p className="tx-roboto tx-white">Rajasthan, India</p>
                                                <p className="tx-roboto tx-white">stdaux-main-001</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 bd-0 wd-100p">
                                                <h3 className="tx-roboto tx-white">Weather</h3>
                                                <p className="tx-roboto tx-white mg-0">Earth Station - 001</p>
                                                <p className="tx-roboto tx-white mg-0">Sector-10, New Sanganer Road</p>
                                                <p className="tx-roboto tx-white mg-0">Near St. Wilfred College</p>
                                                <p className="tx-roboto tx-white mg-0">Jaipur PinCode-302020</p>
                                                <p className="tx-roboto tx-white">Rajasthan, India</p>
                                                <p className="tx-roboto tx-white mg-0">stdux-earth-001</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 bd-0 wd-100p">
                                                <h3 className="tx-roboto tx-white">Communication</h3>
                                                <p className="tx-roboto tx-white mg-0">Earth Station - 001</p>
                                                <p className="tx-roboto tx-white mg-0">Sector-10, New Sanganer Road</p>
                                                <p className="tx-roboto tx-white mg-0">Near St. Wilfred College</p>
                                                <p className="tx-roboto tx-white mg-0">Jaipur PinCode-302020</p>
                                                <p className="tx-roboto tx-white">Rajasthan, India</p>
                                                <p className="tx-roboto tx-white mg-0">stdux-earth-001</p>
                                            </Card>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-50 wd-50p">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6 pd-5">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">Schedule Visit</button>
                                            </div>
                                            <div className="col-lg-4 pd-5">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">Enquire Now</button>
                                            </div>
                                            <div className="col-lg-4 pd-5">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">Call Us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-10 l-10 bg-white">
                                    <p className="tx-black tx-10 mg-x-5 mg-y-0">Money-back guarantee</p>
                                </div>
                            </section>
                        </div>
                    );
                }}
            />
        </>
    )
    return main
}

export default Main;