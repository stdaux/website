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
                            <section className="section bg-home">
                                <div className="bg-overlay bg-black op-4">
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
                                            <h3 className="tx-roboto tx-white">Accelerating Transition to Sustainable Development</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-10 l-10 bg-white">
                                    <p className="tx-black tx-10 mg-x-5 mg-y-0">40 MWp Solar Power Plant, Dubai UAE</p>
                                </div>
                            </section>

                            <section className="section bg-services">
                                <div className="bg-overlay bg-black op-4">
                                </div>
                                <div className="container full-screen d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Services & Solutions</h1>
                                                <h5 className="tx-sans tx-white">We provide services & solution in the following sectors</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-xs mg-t-40">
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h3 className="tx-roboto tx-white align-self-center">Renewable Energy</h3>
                                                <p className="tx-roboto tx-white">Customized zero investment based solar energy solutions as per your needs to help you reduce electricity bill & contributing in green energy. You pay only for the energy generated, which is typically 30-40% cheaper than industrial grid tariffs.</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h3 className="tx-roboto tx-white align-self-center">Information Technology</h3>
                                                <p className="tx-roboto tx-white">Development & implementation of IT Systems across the premises enabling fast & automated services for the Client business. We develop softwares, hardwares and interfaces for user interaction & data processing, manipulationa and storage for future use.</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h3 className="tx-roboto tx-white align-self-center">AI & Robotics</h3>
                                                <p className="tx-roboto tx-white">Reseach, Development & Implementation of IOT, AI and robotics solution for automated or semi-automated work automation. Our AI & Robotics solutions can be deployed anywhere across the planet and beyond.</p>
                                            </Card>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-50 wd-30p">
                                        <div className="row">
                                            <div className="col-lg-6 pd-5">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">Explore Service</button>
                                            </div>
                                            <div className="col-lg-6 pd-5">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-10 l-10 bg-white">
                                    <p className="tx-black tx-10 mg-x-5 mg-y-0">Money-back guarantee</p>
                                </div>
                            </section>

                            <section className="section bg-research">
                                <div className="bg-overlay bg-black op-4">
                                </div>
                                <div className="container full-screen pd-5 d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Research & Publications</h1>
                                                <h5 className="tx-roboto tx-white">We’re looking for university researchers, academics, and scientists who are working in Climate Change & Global Warming Field.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-50 wd-60p">
                                        <div className="row">
                                            <div className="col-lg-3 col-sm-6 pd-5">
                                                <a href="/research">
                                                    <button type="button" className="btn btn-light rounded-pill btn-block">Research Areas</button>
                                                </a>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 pd-5">
                                                <a href="/research/grant/apply">
                                                    <button type="button" className="btn btn-light rounded-pill btn-block">Apply For Grant</button>
                                                </a>
                                            </div>
                                            <div className="col-lg-3 pd-5">
                                                <a href="/research/publications">
                                                    <button type="button" className="btn btn-light rounded-pill btn-block">View Publications</button>
                                                </a>
                                            </div>
                                            <div className="col-lg-3 pd-5">
                                                <a href="/research/active">
                                                    <button type="button" className="btn btn-light rounded-pill btn-block">Active Research</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* 
                            <section className="section bg-protein-folding">
                                <div className="bg-overlay">
                                </div>
                                <div className="container h-100">
                                    <div className="row h-100">
                                        <div className="offset-md-6 col-md-6 my-auto">
                                            <OwlCarousel
                                                className='owl-theme' 
                                                dotclassName="owl-dot link" 
                                                loop={true} 
                                                dots={true} 
                                                nav={false}
                                                mouseDrag={false}
                                                items={1}
                                                autoplay={true}
                                                animateOut='fadeOut'
                                                animateIn='fadeIn'
                                                autoplayTimeout={5000}
                                                autoplaySpeed={5}
                                            >
                                                <div className="services-item text-center text-md-right">
                                                    <div className="services-icon per-slide">
                                                        <FiArrowRight className="wow fadeInUp"/>
                                                    </div>
                                                    <h1 className="text-white mb-4 wow per-slide fadeInRight font-weight-light shining-text">Creative Designs</h1>
                                                    <div className="testimonial-line wow fadeInRight"></div>
                                                    <p className="mb-5 per-slide text-white wow fadeInLeft">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit</p>
                                                </div>
                                                <div className="services-item item text-center text-md-right">
                                                    <div className="services-icon per-slide">
                                                        <FiArrowRight className="wow fadeInUp"/>
                                                    </div>
                                                    <h1 className="mb-4 text-white per-slide wow fadeInRight font-weight-light shining-text"> Publicity</h1>
                                                    <div  className="testimonial-line wow fadeInRight"></div>
                                                    <p className="mb-5 per-slide text-white wow fadeInLeft">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                                </div>
                                                <div className="services-item item text-center text-md-right">
                                                    <div className="services-icon per-slide">
                                                        <FiArrowRight className="wow fadeInUp"/>
                                                    </div>
                                                    <h1 className="mb-4 text-white per-slide wow fadeInRight font-weight-light shining-text">MegaOne </h1>
                                                    <div  className="testimonial-line wow fadeInRight"></div>
                                                    <p className="mb-5 per-slide text-white wow fadeInLeft">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                                </div>
                                                <div className="services-item item text-center text-md-right">
                                                    <div className="services-icon per-slide">
                                                        <FiArrowRight className="wow fadeInUp"/>
                                                    </div>
                                                    <h1 className="mb-4 text-white per-slide wow fadeInRight font-weight-light shining-text">MegaOne Publicity</h1>
                                                    <div  className="testimonial-line wow fadeInRight"></div>
                                                    <p className="mb-5 per-slide text-white wow fadeInLeft">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </section> 
                            */}
                            <section className="section bg-earth">
                                <div className="bg-overlay bg-black op-6">
                                </div>
                                <div className="container full-screen d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Climate Monitoring & Earth</h1>
                                                <h5 className="tx-sans tx-white">Climate change is most pressing problem. At StdAux, we perform research into finding sustainable and cost effective solutions for climate change.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pos-absolute b-90 wd-35p">
                                        <div className="col-lg-6 text-center">
                                            <button type="button" className="btn btn-dark rounded-pill btn-block">Contact Us</button>
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
                                <div className="pos-absolute b-10 l-10 bg-white">
                                    <p className="tx-black tx-10 mg-x-5 mg-y-0">Climate Pattern of Two Decades</p>
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