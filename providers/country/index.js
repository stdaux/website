import React, { PureComponent, useState, useEffect, createRef, forwardRef, createContext} from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import Router  from 'next/router'
import cx from 'classnames';
import axios from 'axios';
import moment from 'moment-timezone';

import CountryContext from "@/providers/country/context";

const CountryProvider = (props) => {
    const {children} = props;
    const [country, setCountry] = useState({"lang": "eng"})
    const [timezone, setTimezone] = useState()

    useEffect(() => {
        setTimezone({"timezone": moment.tz.zone(moment.tz.guess(true))});
	}, [])

    const addCountry = (extra) => {
        setCountry({...country,...extra});
    }

    const handleCountry = (country) => {
        setCountry(country);
    }

    return (
        <CountryContext.Provider value={{country, timezone, addCountry, handleCountry}}>
            {children}
        </CountryContext.Provider>
    );
}

CountryProvider.propTypes = {
    children: PropTypes.node,
};

CountryProvider.defaultProps = {
};

export default CountryProvider;
