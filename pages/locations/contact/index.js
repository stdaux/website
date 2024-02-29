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
import ContactForm from "@/components/forms/contact"

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
                            <section className="section bg-renewable">
                                <div className="bg-overlay bg-black op-6">
                                </div>
                                <div className="container full-screen pd-5 d-flex justify-content-center flex-column align-items-center">
                                    <ContactForm className="bg-transparent bd-0 tx-white"/>
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