import Head from '@/components/ui/head';
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer';

import Link from 'next/link'

const OpenPage = () => (
  <>
    <Head
        title="Open Source Data and Research | StdAux"
        description="Open Source Data and Research."
    />
    <Header/>
    <div className="content content-auth-alt pd-0 bg-black">
        <div className="container pd-t-40">
            <div className="d-flex flex-column align-items-center justify-content-center ht-100v">
                <div className="wd-70p wd-sm-250 wd-lg-300 mg-b-15"><img src="/images/img19.png" className="img-fluid" alt=""/></div>
                <h1 className="tx-white tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">Under Construction</h1>
                <h5 className="wd-50p tx-sm-18 tx-lg-20 tx-white mg-b-20">Page is still under construction. We request you to be check back later.</h5>
            </div>
        </div>
    </div>
  </>
);

export default OpenPage;
