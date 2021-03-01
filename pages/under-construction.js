import Head from '@/components/ui/head';
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer';

import Link from 'next/link'

const PageNotFound = () => (
  <>
    <Head
        title="Under Construction | Fermat | StdAux"
        description="Page is Under Construction."
    />
    <div className="content content-fixed content-auth-alt">
        <Header withoutSearch={true}/>
        <div className="container ht-100p tx-center">
            <div className="ht-100p d-flex flex-column align-items-center justify-content-center">
                <div className="wd-70p wd-sm-250 wd-lg-300 mg-b-15"><img src="/images/img19.png" className="img-fluid" alt=""/></div>
                <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">Hello World, Page is under Construction</h1>
                <h5 className="tx-16 tx-sm-18 tx-lg-20 tx-normal mg-b-20">You can login into the fermat system by clicking the button below.</h5>
                <div className="d-flex mg-b-40">
                    <Link 
                        href={{ 
                            pathname: '/login',
                        }}
                    >
                        <a className="btn btn-primary dark d-inline-flex align-items-center mg-l-5">Login</a>
                    </Link>
                    <Link 
                        href={{ 
                            pathname: '/help',
                        }}
                    >
                        <a className="btn btn-white d-inline-flex align-items-center mg-l-5">Contact Support</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
  </>
);

export default PageNotFound;
