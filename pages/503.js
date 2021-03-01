import Head from '@/components/ui/head';
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer';

import Link from 'next/link'

const ServiceUnavailable = () => (
  <>
    <Head
      title="503 Internal Server Error | Fermat | StdAux"
      description="503 Internal Server Error"
    />
    <div className="content content-fixed content-auth-alt">
      <Header withoutSearch={true}/>
        <div className="container ht-100p tx-center">
            <div className="ht-100p d-flex flex-column align-items-center justify-content-center">
                <div className="wd-70p wd-sm-250 wd-lg-300 mg-b-15"><img src="/images/img19.png" className="img-fluid" alt=""/></div>
                <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">503 Service Unavailable</h1>
                <h5 className="tx-16 tx-sm-18 tx-lg-20 tx-normal mg-b-20">Oopps. The service is temporarily unavailable.</h5>
                <p className="tx-color-03 mg-b-30">The server is unable to service your request due to maintenance downtime or capacity problems.</p>
                <div className="mg-b-40"><button className="btn btn-white bd-2 pd-x-30">Back to Home</button></div>
            </div>
        </div>
    </div>
    <Footer/>
  </>
);

export default ServiceUnavailable;
