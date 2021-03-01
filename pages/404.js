import Head from '@/components/ui/head';
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer';

import Link from 'next/link'

const PageNotFound = () => (
  <>
    <Head
        title="404 Page Not Found | Fermat | StdAux"
        description="Page Nof Found."
    />
    <div className="content content-fixed content-auth-alt">
        <Header withoutSearch={true}/>
        <div className="container ht-100p tx-center">
            <div className="ht-100p d-flex flex-column align-items-center justify-content-center">
                <div className="wd-70p wd-sm-250 wd-lg-300 mg-b-15"><img src="/images/img19.png" className="img-fluid" alt=""/></div>
                <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">404 Page Not Found</h1>
                <h5 className="tx-16 tx-sm-18 tx-lg-20 tx-normal mg-b-20">Oopps. The page you were looking for doesn't exist.</h5>
                <p className="tx-color-03 mg-b-30">You may have mistyped the address or the page may have moved. Try searching below.</p>
                <div className="d-flex mg-b-40">
                    <input type="text" className="form-control wd-200 wd-sm-250" placeholder="Search"/>
                    <button className="btn btn-brand-02 bd-0 mg-l-5 pd-sm-x-25">Search</button>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
  </>
);

export default PageNotFound;
