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

const ResearchPage = () => {

    useEffect(() => {
    }, [])

    return(<>
        <Head
            title="Research Areas | StdAux"
            description="Areas in which we perform research | StdAux"
        >
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"/>
        </Head>
        <Header/>
        <Fullpage
            direction='vertical'
            sectionsColor={['#171717', '#171717', '#171717', '#171717', '#171717', '#171717']}
            anchors={['intro', 'earth', 'ai', 'bio', 'space']}
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
                        <section className="section bg-research-home">
                            <div className="bg-overlay bg-black op-4">
                            </div>
                            <div className="container full-screen pd-5 d-flex justify-content-center flex-column align-items-center">
                                <div className="row pos-absolute t-100">
                                    <div className="col-md-12">
                                        <div className="d-flex flex-column text-center">
                                            <h1 className="tx-roboto tx-white">Research Areas</h1>
                                            <h5 className="tx-sans tx-white">We perform research & develop solutions for some of the most challenging problems related to all sentient beings.</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-100">
                                    <div className="row">
                                        <div className="col-12 pd-5">
                                            <ul className="nav justify-content-between"> 
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">7 Nos</h1>
                                                    <p className="tx-lato tx-white">Publications</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">3 Nos</h1>
                                                    <p className="tx-lato tx-white">Patents Registered</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">1 Lakh</h1>
                                                    <p className="tx-lato tx-white">Research Grants Allocated</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">3 Nos</h1>
                                                    <p className="tx-lato tx-white">Active Research</p>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-50 wd-40p">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6 pd-5">
                                            <a href="/research/grants/apply">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">Apply for Grant</button>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 pd-5">
                                            <a href="/research/publications">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">View Publications</button>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 pd-5">
                                            <a href="#">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">View Active Research</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pos-absolute b-10 l-10 bg-white">
                                <p className="tx-black tx-10 mg-x-5 mg-y-0">Plantation View from Satellite</p>
                            </div>
                        </section>
                        <section className="section bg-research-earth">
                            <div className="bg-overlay bg-black op-4">
                            </div>
                            <div className="container full-screen d-flex justify-content-center flex-column align-items-center">
                                <div className="row pos-absolute t-100">
                                    <div className="col-md-12">
                                        <div className="d-flex flex-column text-center">
                                            <h1 className="tx-roboto tx-white">Climate & Earth Science Research</h1>
                                            <h5 className="tx-sans tx-white"></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-xs">
                                </div>
                                <div className="pos-absolute b-100">
                                    <div className="row">
                                        <div className="col-12 pd-5">
                                            <ul className="nav justify-content-between"> 
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">500 ppm</h1>
                                                    <p className="tx-lato tx-white">Current Earth CO<sub>2</sub> Level</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">32 C</h1>
                                                    <p className="tx-lato tx-white">Current Earth Temperature</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">500 ppm</h1>
                                                    <p className="tx-lato tx-white">Current Earth GHG Emissions</p>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-50 wd-30p">
                                    <div className="row">
                                        <div className="col-lg-6 pd-5">
                                            <a href="/research/publications">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">View Publications</button>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 pd-5">
                                            <a href="/research">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">View Research</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pos-absolute b-10 l-10 bg-white">
                                <p className="tx-black tx-10 mg-x-5 mg-y-0">View of Earth from Copernicus</p>
                            </div>
                        </section>
                        <section className="section bg-research-ai">
                            <div className="bg-overlay bg-black op-6">
                            </div>
                            <div className="container full-screen d-flex justify-content-center flex-column align-items-center">
                                <div className="row pos-absolute t-100">
                                    <div className="col-md-12">
                                        <div className="d-flex flex-column text-center">
                                            <h1 className="tx-roboto tx-white">Artificial Intelligence & Robotics</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-xs">
                                </div>
                                <div className="pos-absolute b-100">
                                    <div className="row">
                                        <div className="col-12 pd-5">
                                            <ul className="nav justify-content-between"> 
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">500 ppm</h1>
                                                    <p className="tx-lato tx-white">Current Earth CO<sub>2</sub> Level</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">32 C</h1>
                                                    <p className="tx-lato tx-white">Current Earth Temperature</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">500 ppm</h1>
                                                    <p className="tx-lato tx-white">Current Earth GHG Emissions</p>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-50 wd-30p">
                                    <div className="row">
                                        <div className="col-lg-6 pd-5">
                                            <a href="/research/publications">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">View Publications</button>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 pd-5">
                                            <a href="/research">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">View Research</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pos-absolute b-10 l-10 bg-white">
                                <p className="tx-black tx-10 mg-x-5 mg-y-0">Object Detection for Autonomous Driving</p>
                            </div>
                        </section>
                        <section className="section bg-research-bio">
                            <div className="bg-overlay bg-black op-4">
                            </div>
                            <div className="container full-screen d-flex justify-content-center flex-column align-items-center">
                                <div className="row pos-absolute t-100">
                                    <div className="col-md-12">
                                        <div className="d-flex flex-column text-center">
                                            <h1 className="tx-roboto tx-white">Bioscience</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-xs">
                                </div>
                                <div className="pos-absolute b-100">
                                    <div className="row">
                                        <div className="col-12 pd-5">
                                            <ul className="nav justify-content-between"> 
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">500 ppm</h1>
                                                    <p className="tx-lato tx-white">Current Earth CO<sub>2</sub> Level</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">32 C</h1>
                                                    <p className="tx-lato tx-white">Current Earth Temperature</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">500 ppm</h1>
                                                    <p className="tx-lato tx-white">Current Earth GHG Emissions</p>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-50 wd-30p">
                                    <div className="row">
                                        <div className="col-lg-6 pd-5">
                                            <a href="/research/publications">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">View Publications</button>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 pd-5">
                                            <a href="/research">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">View Research</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pos-absolute b-10 l-10 bg-white">
                                <p className="tx-black tx-10 mg-x-5 mg-y-0">Protein Folding Simulation</p>
                            </div>
                        </section>
                        <section className="section bg-research-space">
                            <div className="bg-overlay bg-black op-4">
                            </div>
                            <div className="container full-screen pd-5 d-flex justify-content-center flex-column align-items-center">
                                <div className="row pos-absolute t-100">
                                    <div className="col-md-12">
                                        <div className="d-flex flex-column text-center">
                                            <h1 className="tx-roboto tx-white">Space Science</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-xs">
                                </div>
                                <div className="pos-absolute b-100">
                                    <div className="row">
                                        <div className="col-12 pd-5">
                                            <ul className="nav justify-content-between"> 
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">8</h1>
                                                    <p className="tx-lato tx-white">Planets in Solar System</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">200+</h1>
                                                    <p className="tx-lato tx-white">Moons in Solar System</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">3216</h1>
                                                    <p className="tx-lato tx-white">Confirmed Exoplanets</p>
                                                </div>
                                                <div className="nav-item pd-x-10 d-flex flex-column">
                                                    <h1 className="tx-roboto tx-white align-self-center">5</h1>
                                                    <p className="tx-lato tx-white">Interstellar Probs</p>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute b-50 wd-30p">
                                    <div className="row">
                                        <div className="col-lg-6 pd-5">
                                            <a href="/research/publications">
                                                <button type="button" className="btn btn-dark rounded-pill btn-block">View Publications</button>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 pd-5">
                                            <a href="/research">
                                                <button type="button" className="btn btn-light rounded-pill btn-block">View Research</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pos-absolute b-10 l-10 bg-white">
                                <p className="tx-black tx-10 mg-x-5 mg-y-0">First Image of Blackhole</p>
                            </div>
                        </section>
                        <section className="section bg-research-footer">
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
                                        <a className="nav-link tx-roboto tx-white" href="#">News</a>
                                        <a className="nav-link tx-roboto tx-white" href="/locations">Locations</a>
                                        <a className="nav-link tx-roboto tx-white" href="/research">Research</a>
                                        <a className="nav-link tx-roboto tx-white" href="/philantrophy">Philantrophy</a>
                                        <a className="nav-link tx-roboto tx-white" href="/careers">Careers</a>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                );
            }}
        />
    </>)
};

export default ResearchPage;
