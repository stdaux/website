import React, { PureComponent, useState, useContext, useEffect, useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import moment from "moment-timezone";

import axios from 'axios'
import { useInterval } from 'react-use';
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import Loading from '@/components/ui/loading';
import PageNotFound from '@/pages/404';
import NotAvailable from "@/components/ui/notavailable";

const Section = (props) => {
    const { children, className, backgroundImage, comp } = props;
    const router = useRouter();

    const [error, setError] = useState();

    const [didMount, setDidMount] = useState(false);
    
    useEffect(() => {
        setDidMount(true);
        return () => {setDidMount(false)}    
    }, []);

    if(!didMount) return null;

    return (
        <>
            <section className={`section ${className}`} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} >
                {children}
            </section>
        </>
    );
}

Section.propTypes = {
    className: PropTypes.string,
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
};

Section.defaultProps = {
};

export default Section;
