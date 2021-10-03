import React, { PureComponent, useState, useContext, useEffect, useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import moment from "moment-timezone";

import axios from 'axios'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official' 
import { options, charttypes } from '@/components/ui/charts/options.js'

import { WidgetsUrls } from "@/actions/widgets/urls";
import { VisualizationUrls } from "@/actions/visualization/urls";
import { DataEngineUrls } from "@/actions/dataengine/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'
import { useInterval } from 'react-use';

import ResizeAware from 'react-resize-aware';
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import Loading from '@/components/ui/loading';
import PageNotFound from '@/pages/404';
import NotAvailable from "@/components/ui/notavailable";

const NumberBox = (props) => {
    const { widget_id, className, showDescription } = props;

    const [data, setData] = useState({"value": "No Value", "time": "---", "name": "---"});
    const [visualization, setVisualization] = useState();
    const [queries, setQueries] = useState(undefined);
    
    const router = useRouter();

    const parentRef = useRef(null);
    const [error, setError] = useState();
    const context = useContext(WidgetParametersContext)

    const [didMount, setDidMount] = useState(false);

    const fetchData = () => {
        const dataServerLink = DataEngineUrls.dataServerLink;
        axios.get(dataServerLink, {
            params: {
                queries: context.widget.query_ids,
                ...context.parameters,
                license_id: context.widget.license_id
            },
        }).then((response) => {
            if (response.status === 200 || response.status === 201) {
                let d = response.data
                console.log(d)
                let array = d["data"].pop()
                setData({"value": array["data"].pop()[1], "time": array["data"].pop()[0], "name": array["name"]})
            }
        }).catch((error) => {
            setError(error);
        });
    }

    useInterval(fetchData, 5000);
    
    useEffect(() => {
        if (widget_id !== undefined){            
            setQueries(context.widget.queries);
            setVisualization(context.widget.visualization);
            fetchData()
        }
        setDidMount(true);
        return () => {setDidMount(false)}    
    }, [widget_id, queries]);

    if(!didMount) return null;

    return (
        <>
            <div className="pos-absolute t-10 l-20 z-index-10">
                <div className="d-flex align-items-baseline">
                    <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5">{data.value}</h3>
                    <p className="tx-11 tx-color-03 mg-b-0"><span className="tx-medium tx-success">0.3% <FiArrowDown/></span> than last month</p>
                </div>
                {showDescription &&
                <>
                <p className="tx-12 mg-b-0">{data.name}</p>
                </>
                }
            </div>
        </>
    );
}

NumberBox.propTypes = {
    widget_id: PropTypes.string,
    className: PropTypes.string,
    showDescription: PropTypes.bool
};

NumberBox.defaultProps = {
    showDescription: true
};

export default NumberBox;
