import React, { PureComponent, useState, useContext, useEffect, useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter }  from 'next/router'

import axios from 'axios'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official' 
import { options, charttypes } from '@/components/ui/charts/options.js'

import { WidgetsUrls } from "@/actions/widgets/urls";
import { VisualizationUrls } from "@/actions/visualization/urls";
import { DataEngineUrls } from "@/actions/dataengine/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'
import {useInterval} from 'react-use';

import WidgetParametersContext from "@/components/widgets/widgets/context/widgetParametersContext";

import ResizeAware from 'react-resize-aware';
import Loading from '@/components/ui/loading';
import PageNotFound from '@/pages/404';
import NotAvailable from "@/components/ui/notavailable";

const Charts = (props) => {
    const {
        title, subtitle, xAxisTitle, xAxisType, yAxisTitle, widget_id, className, maxSize, height, zoomType, xAxisLineWidth,
        xAxisGridLineWidth, yAxisLineWidth, yAxisGridLineWidth, width, constructorType, allowChartUpdate, immutable, legendEnable, 
        xAxisLabelsEnabled, yAxisLabelsEnabled
    } = props;

    const [series1, setSeries] = useState();
    const [visualization, setVisualization] = useState();
    const [queries, setQueries] = useState(undefined);
    
    const router = useRouter();
    const { organization_slug, asset_slug, lang, counter } = router.query;

    const parentRef = useRef(null);
    const [error, setError] = useState();
    const chart = React.createRef();
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
                let data= response.data
                setSeries(data.data);
                return data;
            }
        }).catch((error) => {
            setError(error);
        });
    }

    useInterval(fetchData, 5000);
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        
        if (widget_id !== undefined){
            setVisualization(context.widget.visualization);
            const viewWidgetsURL = WidgetsUrls.viewWidgets;
            const token = getUserToken();
        }
        
        setDidMount(true);
        return () => {setDidMount(false)}
    
    }, [widget_id]);

    function handleResize(width, height){
        for (const chart of Highcharts.charts) {
            if (chart) {
                chart.reflow();
            }
        }
    };

    const chartOption = options;
    chartOption['chart']['zoomType'] = zoomType;
    chartOption['series'] = series1;
    chartOption['xAxis']['type'] = xAxisType;
    chartOption['xAxis']['title']['text'] = xAxisTitle;
    chartOption['xAxis']['labels']['enabled'] = xAxisLabelsEnabled;
    chartOption['yAxis']['title']['text'] = yAxisTitle;
    chartOption['yAxis']['labels']['enabled'] = yAxisLabelsEnabled;
    chartOption['legend']['enabled'] = legendEnable;
    chartOption['chart']['reflow'] = true;

    if(!didMount) {
        return null;
    }

    if (error) {
        if(error.response != undefined){
            if (error.response.status == 404) {
                return <PageNotFound/>
            }
            else if (error.response.status == 403) {
                return <PageNotFound/>
            }
            else if (error.response.status == 401) {
                Router.push('/login');
            }
        }
        else{
            return <NotAvailable title="No Data Available" body="" support_redirect={false} className="mg-t-40"/>
        }
    }
    if (!series1) return <NotAvailable title="Loading..." body="" support_redirect={false}/>
    if (context.widget.query_ids == null || context.widget.query_ids.length == 0) return <NotAvailable title="No Queries Configured" body="" support_redirect={false} className="mg-t-40"/>
    if (series1.length == 0) return <NotAvailable title="No Data Available" body="" support_redirect={false}/>

    return (
        <>
            <ResizeAware
                style={{ position: 'relative', height: '100%', width: '100%' }}
                onlyEvent
                onResize={handleResize}
            >
            {visualization && 
                <div className={`${widget_id}-visualization`, "d-flex", "pos-relative"} ref={parentRef} style={{ height: '100%', width: '100%' }}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        containerProps={{ style: { height: '100%', width: '100%' } }}
                        constructorType={'chart'}
                        options={chartOption}
                        allowChartUpdate={allowChartUpdate}
                        immutable={immutable}
                        updateArgs = {[true, true, true]}
                        ref={ chart }
                    />
                </div>
            }
            </ResizeAware>
        </>
    );
}

Charts.propTypes = {
    title: PropTypes.string,
    chartType: PropTypes.string,
    subtitle: PropTypes.string,
    xAxisTitle: PropTypes.string,
    xAxisType: PropTypes.string,
    yAxisTitle: PropTypes.string,
    widget_id: PropTypes.string,
    className: PropTypes.string,
    maxSize: PropTypes.number,
    height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    constructorType: PropTypes.string,
    allowChartUpdate: PropTypes.bool,
    immutable: PropTypes.bool,
    zoomType: PropTypes.string,
    xAxisLineWidth: PropTypes.number,
    xAxisGridLineWidth: PropTypes.number,
    xAxisLabelsEnabled: PropTypes.bool,
    yAxisLineWidth: PropTypes.number,
    yAxisGridLineWidth: PropTypes.number,
    yAxisLabelsEnabled: PropTypes.bool,
    legendEnable: PropTypes.bool,
};

Charts.defaultProps = {
    constructorType: 'chart',
    allowChartUpdate: true,
    immutable: false,
    subtitle: '',
    xAxisType: 'datetime',
    xAxisTitle: '',
    yAxisTitle: '',
    height: 400,
    zoomType: 'xy',
    xAxisLineWidth: 0,
    xAxisGridLineWidth: 0,
    xAxisLabelsEnabled: true,
    yAxisLineWidth: 0,
    yAxisGridLineWidth: 0,
    yAxisLabelsEnabled: true,
    legendEnable: true,
};

export default Charts;
