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
                title="Information Technology | StdAux"
                description="IT | StdAux"
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
                                <div className="bg-overlay bg-black op-4">
                                </div>
                                <div className="container full-screen pd-5 d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Partner in Green & Sustainable Business</h1>
                                                <h5 className="tx-sans tx-white">Leading Renewable Power Company in India</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-100">
                                        <div className="row">
                                            <div className="col-12 pd-5">
                                                <ul className="nav justify-content-between"> 
                                                    <div className="nav-item pd-x-10 d-flex flex-column">
                                                        <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                        <p className="tx-lato tx-white">Projects Completed</p>
                                                    </div>
                                                    <div className="nav-item pd-x-10 d-flex flex-column">
                                                        <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                        <p className="tx-lato tx-white">Corporate Client</p>
                                                    </div>
                                                    <div className="nav-item pd-x-10 d-flex flex-column">
                                                        <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                        <p className="tx-lato tx-white">Operating Capacity</p>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-50 wd-50p">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6 pd-5">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">View brochure</button>
                                            </div>
                                            <div className="col-lg-4 pd-5">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">Enquire Now</button>
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
                            <section className="section bg-services">
                                <div className="bg-overlay bg-black op-4">
                                </div>
                                <div className="container full-screen d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Reinventing Solar Service</h1>
                                                <h5 className="tx-sans tx-white">Customized Solar Services made Easy</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-xs">
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                <h3 className="tx-roboto tx-white align-self-center">On-Site</h3>
                                                <p className="tx-roboto tx-white">Customized solar power solutions as per your needs to help you realise your business goals. It can be Rooftop, Ground Mount or Carport. At CleanMax, we are committed to offering you the best onsite solar solution for your needs at low-cost and high-efficiency right from designing and installation to maintenance.</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                <h3 className="tx-roboto tx-white align-self-center">Solar Farm</h3>
                                                <p className="tx-roboto tx-white">Open access solar farm is a popular power procurement option that gives enterprises an opportunity to meet their RE100 aspirations at tariffs lower than prevailing grid electricity tariffs. CleanMax constructs, operates and maintains these private solar farms over its lifetime.</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                <h3 className="tx-roboto tx-white align-self-center">Energy Storage</h3>
                                                <p className="tx-roboto tx-white">Solar energy + storage is an excellent combination for alternate source of energy. At CleanMax, we offer your business a Lithium-Ion-based Energy Storage Solution (ESS) that can address the concerns of power imbalance at zero investment. Compared to traditional technologies our solutions are safer and cost effective.</p>
                                            </Card>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-100">
                                        <div className="row">
                                            <div className="col-12 pd-5">
                                                <ul className="nav justify-content-between"> 
                                                    <div className="nav-item pd-x-10 d-flex flex-column">
                                                        <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                        <p className="tx-lato tx-white">Projects Completed</p>
                                                    </div>
                                                    <div className="nav-item pd-x-10 d-flex flex-column">
                                                        <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                        <p className="tx-lato tx-white">Corporate Client</p>
                                                    </div>
                                                    <div className="nav-item pd-x-10 d-flex flex-column">
                                                        <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                        <p className="tx-lato tx-white">Operating Capacity</p>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pos-absolute b-50 wd-30p">
                                        <div className="row">
                                            <div className="col-lg-6 pd-5">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">Order Now</button>
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
                            <section className="section bg-partners">
                                <div className="bg-overlay bg-black op-4">
                                </div>
                                <div className="container full-screen d-flex align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">What our Clients Say?</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-xs">
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                <h3 className="tx-roboto tx-white align-self-center">On-Site</h3>
                                                <p className="tx-roboto tx-white">Customized solar power solutions as per your needs to help you realise your business goals. It can be Rooftop, Ground Mount or Carport. At CleanMax, we are committed to offering you the best onsite solar solution for your needs at low-cost and high-efficiency right from designing and installation to maintenance.</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                <h3 className="tx-roboto tx-white align-self-center">Solar Farm</h3>
                                                <p className="tx-roboto tx-white">Open access solar farm is a popular power procurement option that gives enterprises an opportunity to meet their RE100 aspirations at tariffs lower than prevailing grid electricity tariffs. CleanMax constructs, operates and maintains these private solar farms over its lifetime.</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                <h3 className="tx-roboto tx-white align-self-center">Energy Storage</h3>
                                                <p className="tx-roboto tx-white">Solar energy + storage is an excellent combination for alternate source of energy. At CleanMax, we offer your business a Lithium-Ion-based Energy Storage Solution (ESS) that can address the concerns of power imbalance at zero investment. Compared to traditional technologies our solutions are safer and cost effective.</p>
                                            </Card>
                                        </div>
                                    </div>
                                    <div className="row pos-absolute b-100 d-flex align-items-center">
                                        <ul className="nav justify-content-center"> 
                                            <div className="nav-item d-flex justify-content-center flex-column align-items-center">
                                                <img src="images/ge.png" className="pd-x-10 stdaux-logo" alt="logo"/>
                                                <p className="tx-white tx-10 mg-x-5 pd-t-5 mg-y-0">General Electric</p>
                                            </div>
                                            <div className="nav-item d-flex justify-content-center flex-column align-items-center">
                                                <img src="images/abb.png" className="pd-x-10 stdaux-logo" alt="logo"/>
                                                <p className="tx-white tx-10 mg-x-5 pd-t-5 mg-y-0">ABB</p>
                                            </div>
                                            <div className="nav-item d-flex justify-content-center flex-column align-items-center">
                                                <img src="images/siemens.png" className="pd-x-10 stdaux-logo" alt="logo"/>
                                                <p className="tx-white tx-10 mg-x-5 pd-t-5 mg-y-0">Siemens</p>
                                            </div>
                                            <div className="nav-item d-flex justify-content-center flex-column align-items-center">
                                                <img src="images/rockwell.png" className="pd-x-10 stdaux-logo" alt="logo"/>
                                                <p className="tx-white tx-10 mg-x-5 pd-t-5 mg-y-0">Rockwell</p>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="section bg-about">
                                <div className="bg-overlay bg-black op-4">
                                </div>
                                <div className="container full-screen d-flex align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">What our Clients Say?</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-xs">
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                <h3 className="tx-roboto tx-white align-self-center">On-Site</h3>
                                                <p className="tx-roboto tx-white">Customized solar power solutions as per your needs to help you realise your business goals. It can be Rooftop, Ground Mount or Carport. At CleanMax, we are committed to offering you the best onsite solar solution for your needs at low-cost and high-efficiency right from designing and installation to maintenance.</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                <h3 className="tx-roboto tx-white align-self-center">Solar Farm</h3>
                                                <p className="tx-roboto tx-white">Open access solar farm is a popular power procurement option that gives enterprises an opportunity to meet their RE100 aspirations at tariffs lower than prevailing grid electricity tariffs. CleanMax constructs, operates and maintains these private solar farms over its lifetime.</p>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Card className="bg-transparent pd-10 ht-300">
                                                <h1 className="tx-roboto tx-white align-self-center">500+</h1>
                                                <h3 className="tx-roboto tx-white align-self-center">Energy Storage</h3>
                                                <p className="tx-roboto tx-white">Solar energy + storage is an excellent combination for alternate source of energy. At CleanMax, we offer your business a Lithium-Ion-based Energy Storage Solution (ESS) that can address the concerns of power imbalance at zero investment. Compared to traditional technologies our solutions are safer and cost effective.</p>
                                            </Card>
                                        </div>
                                    </div>
                                    <div className="row pos-absolute b-100 d-flex align-items-center">
                                        <ul className="nav justify-content-center"> 
                                            <div className="nav-item d-flex justify-content-center flex-column align-items-center">
                                                <img src="images/ge.png" className="pd-x-10 stdaux-logo" alt="logo"/>
                                                <p className="tx-white tx-10 mg-x-5 pd-t-5 mg-y-0">General Electric</p>
                                            </div>
                                            <div className="nav-item d-flex justify-content-center flex-column align-items-center">
                                                <img src="images/abb.png" className="pd-x-10 stdaux-logo" alt="logo"/>
                                                <p className="tx-white tx-10 mg-x-5 pd-t-5 mg-y-0">ABB</p>
                                            </div>
                                            <div className="nav-item d-flex justify-content-center flex-column align-items-center">
                                                <img src="images/siemens.png" className="pd-x-10 stdaux-logo" alt="logo"/>
                                                <p className="tx-white tx-10 mg-x-5 pd-t-5 mg-y-0">Siemens</p>
                                            </div>
                                            <div className="nav-item d-flex justify-content-center flex-column align-items-center">
                                                <img src="images/rockwell.png" className="pd-x-10 stdaux-logo" alt="logo"/>
                                                <p className="tx-white tx-10 mg-x-5 pd-t-5 mg-y-0">Rockwell</p>
                                            </div>
                                        </ul>
                                    </div>
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
                            <section className="section bg-contact">
                                <div className="bg-overlay bg-black op-4">
                                </div>
                                <div className="container full-screen d-flex justify-content-center flex-column align-items-center">
                                    <div className="row pos-absolute t-100">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column text-center">
                                                <h1 className="tx-roboto tx-white">Solar for New Roofs</h1>
                                                <h5 className="tx-sans tx-white">Solar Roof Costs Less Than a New Roof Plus Solar Panels</h5>
                                            </div>
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