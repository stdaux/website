import React, { PureComponent, useState, useEffect, createRef, forwardRef, createContext} from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import Router  from 'next/router'
import cx from 'classnames';
import axios from 'axios';
import moment from 'moment-timezone';

import MaintenanceContext from "@/providers/maintenance/context";

const MaintenanceProvider = (props) => {
    const {children} = props;
    const [maintenance, setMaintenance] = useState(false)

    useEffect(() => {
	}, [])

    if (maintenance) return null;

    return (
        <MaintenanceContext.Provider value={{maintenance}}>
            {children}
        </MaintenanceContext.Provider>
    );
}

MaintenanceProvider.propTypes = {
    children: PropTypes.node,
};

MaintenanceProvider.defaultProps = {
};

export default MaintenanceProvider;
