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
                title="Finding Solution to some Bigger Questions | StdAux"
                description="We are trying to solve some of the most pressing problems of humanity."
            >
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"/>
            </Head>
            <Header/>
            <Fullpage
                direction='vertical'
                sectionsColor={['#171717', '#171717', '#171717', '#171717', '#171717', '#171717']}
                anchors={['home', 'services', 'partners', 'research', 'contact']}
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
                            <section className="section bg-space">
                                <div className="bg-overlay bg-black op-1">
                                </div>
                                <div className="container full-screen pd-5 d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Accelerating Transition to Sustainable Development</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-100">
                                        <div className="d-flex flex-column text-center">
                                            <h3 className="tx-roboto tx-white">We envision a future where humanity thrives through space exploration and renewable energy solutions."</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-10 l-10 bg-white">
                                    <p className="tx-black tx-10 mg-x-5 mg-y-0">40 MWp Solar Power Plant, Dubai UAE</p>
                                </div>
                            </section>

                            <section className="section bg-renewable">
                                <div className="bg-overlay bg-black op-1">
                                </div>
                                <div className="container full-screen pd-5 d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Partner in Green & Sustainable Business</h1>
                                                <h5 className="tx-sans tx-white">Energy for a Sustainable World. </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-100">
                                        <div className="row">
                                            <div className="col-12 pd-5">
                                                <ul className="nav justify-content-between"> 
                                                    <div className="nav-item pd-x-10 d-flex flex-column">
                                                        <h1 className="tx-roboto tx-white align-self-center">700+</h1>
                                                        <p className="tx-lato tx-white">(MWp) Projects Completed</p>
                                                    </div>
                                                    <div className="nav-item pd-x-10 d-flex flex-column">
                                                        <h1 className="tx-roboto tx-white align-self-center">200+</h1>
                                                        <p className="tx-lato tx-white">Corporate Client</p>
                                                    </div>
                                                    <div className="nav-item pd-x-10 d-flex flex-column">
                                                        <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                        <p className="tx-lato tx-white">(MWp) Operating Capacity</p>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-50 wd-50p">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6 pd-5">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">Order Now</button>
                                            </div>
                                            <div className="col-lg-4 pd-5">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">View brochure</button>
                                            </div>
                                            <div className="col-lg-4 pd-5">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">Call Us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-10 l-10 bg-white">
                                    <p className="tx-black tx-10 mg-x-5 mg-y-0">Money-back guarantee</p>
                                </div>
                            </section>

                            <section className="section bg-research-ai">
                                <div className="bg-overlay bg-black op-1">
                                </div>
                                <div className="container full-screen d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Digital Technologies and Robotics</h1>
                                                <h3 className="tx-roboto tx-white">Developing innovative solutions for a Digital Era.</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-50 wd-30p">
                                        <div className="row">
                                            <div className="col-lg-6 pd-5">
                                                <a href="/research/publications">
                                                    <button type="button" className="btn btn-dark rounded-pill btn-block">What we do?</button>
                                                </a>
                                            </div>
                                            <div className="col-lg-6 pd-5">
                                                <a href="/research">
                                                    <button type="button" className="btn btn-light rounded-pill btn-block">Connect with us</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-10 l-10 bg-white">
                                    <p className="tx-black tx-10 mg-x-5 mg-y-0">Object Detection for Autonomous Driving</p>
                                </div>
                            </section>

                            <section className="section bg-research">
                                <div className="bg-overlay bg-black op-1">
                                </div>
                                <div className="container full-screen pd-5 d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Research & Consultancy</h1>
                                                <h5 className="tx-roboto tx-white">We conduct and perform research in areas related to energy and enviroment and find and develop custom innovative solutions for the problems.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-50 wd-30p">
                                        <div className="row">
                                            <div className="col-lg-6 pd-5">
                                                <a href="/research/publications">
                                                    <button type="button" className="btn btn-dark rounded-pill btn-block">What we do?</button>
                                                </a>
                                            </div>
                                            <div className="col-lg-6 pd-5">
                                                <a href="/research">
                                                    <button type="button" className="btn btn-light rounded-pill btn-block">Connect with us</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-10 l-10 bg-white">
                                    <p className="tx-black tx-10 mg-x-5 mg-y-0">View of Earth from ISS</p>
                                </div>
                            </section>
                            <section className="section bg-renewable">
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
                                                <h3 className="tx-roboto tx-white">Head Office</h3>
                                                <p className="tx-roboto tx-white mg-0">Standard Auxiliary Private Limited</p>
                                                <p className="tx-roboto tx-white mg-0">Sector-10, New Sanganer Road</p>
                                                <p className="tx-roboto tx-white mg-0">Near St. Wilfred College</p>
                                                <p className="tx-roboto tx-white mg-0">Jaipur PinCode-302020</p>
                                                <p className="tx-roboto tx-white">Rajasthan, India</p>
                                                <p className="tx-roboto tx-white">stdaux-main-001</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 bd-0 wd-100p">
                                                <h3 className="tx-roboto tx-white">Energy Division</h3>
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
                                                <h3 className="tx-roboto tx-white">Space Division</h3>
                                                <p className="tx-roboto tx-white mg-0">Earth Station - 001</p>
                                                <p className="tx-roboto tx-white mg-0">Sector-10, New Sanganer Road</p>
                                                <p className="tx-roboto tx-white mg-0">Near St. Wilfred College</p>
                                                <p className="tx-roboto tx-white mg-0">Jaipur PinCode-302020</p>
                                                <p className="tx-roboto tx-white">Rajasthan, India</p>
                                                <p className="tx-roboto tx-white mg-0">stdux-earth-001</p>
                                            </Card>
                                        </div>
                                    </div>
                                    <div className="row pos-absolute b-90 wd-35p">
                                        <div className="col-lg-6 text-center">
                                            <button type="button" className="btn btn-dark rounded-pill btn-block">Order Now</button>
                                        </div>
                                        <div className="col-lg-6 text-center">
                                            <button type="button" className="btn btn-light rounded-pill btn-block">Learn More</button>
                                        </div>
                                    </div>
                                    <div className="row pos-absolute b-30 mg-t-20">
                                        <ul className="nav justify-content-center">
                                            <a className="nav-link tx-roboto tx-white" href="https://stdaux.com">StdAux © 2021</a>
                                            <a className="nav-link tx-roboto tx-white" href="/legal">Legal</a>
                                            <a className="nav-link tx-roboto tx-white" href="/news">News</a>
                                            <a className="nav-link tx-roboto tx-white" href="/locations">Locations</a>
                                            <a className="nav-link tx-roboto tx-white" href="/research">Research</a>
                                            <a className="nav-link tx-roboto tx-white" href="/philantrophy">Philantrophy</a>
                                            <a className="nav-link tx-roboto tx-white" href="/contact">Contact</a>
                                            <a className="nav-link tx-roboto tx-white" href="/careers">Careers</a>
                                        </ul>
                                    </div>
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
