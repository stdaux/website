import '@/styles/stdaux.scss'

import React from "react";
import { StaticRouter, BrowserRouter  } from "react-router-dom";
import { Provider } from "react-redux";
import Router from 'next/router';

import CountryProvider from "@/providers/country";
import UserProvider from "@/providers/user";
import MaintenanceProvider from "@/providers/maintenance";

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import store from "@/store";
NProgress.configure({ showSpinner: false });
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <StaticRouter>
                <MaintenanceProvider>
                    <CountryProvider>
                        <Component {...pageProps} />
                    </CountryProvider>
                </MaintenanceProvider>
            </StaticRouter>
        </Provider>
    )
};
