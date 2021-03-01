import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';
import Router, { useRouter }  from 'next/router'
import store from '@/store'
import { connect } from "react-redux";
import { options, charttypes } from '@/components/ui/charts/options.js'

import Tip from "@/components/ui/tip"
import Card from "@/components/ui/card"
import CardHeader from "@/components/ui/card/header"
import CardBody from "@/components/ui/card/body"
import CardFooter from "@/components/ui/card/footer"
import Charts from '@/components/ui/charts'
import Map from "@/components/ui/map"
import Table from "@/components/ui/table"
import NumberBox from "@/components/ui/numberbox"

import axios from 'axios'
import { WidgetsUrls } from "@/actions/widgets/urls";
import { VisualizationUrls } from "@/actions/visualization/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'
import { FiArrowDown, FiArrowUp, FiMessageSquare, FiX, FiBell, FiLogOut, FiAlertCircle, FiFile, FiChevronDown, FiStar, FiEdit, FiUser, FiSettings, FiHelpCircle, FiMoreVertical, FiMenu, FiWifi, FiShare2, FiMaximize, FiChevronsDown, FiAnchor } from "react-icons/fi";
import {AiOutlineDrag} from "react-icons/ai";
import ResizeAware from 'react-resize-aware';

const Visualization = (props) => {
    const {className, widget_id, widget, dimension, ...otherProps } = props;
    const router = useRouter();
    const { organization_slug, asset_slug } = router.query;
    const [width, setWidth] = useState();
    const [sizes, setSizes] = useState();
    const [visual, setVisual] = useState(null);

    useEffect(() => {
        if (dimension !== undefined){
            setSizes(dimension);
        }
        else if (widget !== undefined) {
            setSizes(widget.container);
        }
        if (widget_id !== undefined ){
            const viewVisualizationURL = VisualizationUrls.viewVisualization;
            const token = getUserToken();
            axios.get(viewVisualizationURL, {
                headers: {
                    authorization: `JWT ${token}`
                },
                params: {
                    widget_id: widget_id
                },
            }).then((response) => {
                if (response.status === 200 || response.status === 201) {
                    let json = response;
                    let data = json.data;
                    return data;
                }
            }).then((data) => {
                if(data !== undefined){
                    if (charttypes[data.data.chartType] === 'map'){
                        setVisual(charttypes[data.data.chartType]);
                    }
                    else if (charttypes[data.data.chartType] === 'table'){
                        setVisual(charttypes[data.data.chartType]);
                    }
                    else {
                        setVisual(charttypes[data.data.chartType]);
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [dimension, widget])

    function handleVisuals(){
        if (visual === 'map'){
            return (
                <>
                {sizes.h > 3 &&
                    <Map {...otherProps} style={{height: "100%", width: "100%", "minHeight": 400}} widget_id={widget_id}/>
                }
                {sizes.h <= 3 && sizes.h >=2 &&
                    <Map {...otherProps} style={{height: "100%", width: "100%", "minHeight": 400}} widget_id={widget_id} height={250}/>
                }
                </>
            )
        }
        else if (visual === 'table'){
            return (
                <>
                {sizes.h > 3 &&
                    <Table {...otherProps} widget_id={widget_id}/>
                }
                {sizes.h <= 3 && sizes.h >=2 &&
                    <Table {...otherProps} widget_id={widget_id} height={250}/>
                }
                </>
            )
        }
        else if (visual === 'numberbox'){
            return (
                <>
                {sizes.h <= 3 &&
                    <>
                        <NumberBox {...otherProps} widget_id={widget_id} showDescription={sizes.w > 2 ? true: false }/>
                    </>
                }
                </>
            )
        }
        else {
            return (
                <>
                {sizes.h > 3 &&
                    <Charts {...otherProps} widget_id={widget_id}/>
                }
                {sizes.h <= 3 && sizes.h >=2 &&
                    <Charts {...otherProps} widget_id={widget_id} height={250}/>
                }
                </>
            )
        }
    }

    return (
        <>
            {widget_id && sizes && visual &&
                <>
                    {handleVisuals()}
                </>
            }
        </>
    )
}

Visualization.propTypes = {
    className: PropTypes.string,
    widget_id: PropTypes.string,
    widget: PropTypes.object,
    dimension: PropTypes.object,
    height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    style: PropTypes.object
};

Visualization.defaultProps = {
}

export default Visualization;