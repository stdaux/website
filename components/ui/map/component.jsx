import React, { PureComponent, useState, useEffect, useRef, createRef } from 'react';
import PropTypes from 'prop-types';

import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

import ReactMapGL, { FlyToInterpolator, TRANSITION_EVENTS } from 'react-map-gl';
import MapGL from 'react-map-gl';

import WebMercatorViewport from 'viewport-mercator-project';

import { easeCubic } from 'd3-ease';

import '@/node_modules/mapbox-gl/dist/mapbox-gl.css';

const DEFAULT_VIEWPORT = {
    latitude: 23.94,
    longitude: 80.56,
    zoom: 2.64,
    bearing: 0,
    pitch: 0,
    altitude: 1.5
};

const Map = (props) => {
    const {
        className,children, getCursor, dragPan, dragRotate, latitude, longitude, bearing, pitch, mapStyle, zoom, scrollZoom, touchZoom, touchRotate, doubleClickZoom, ...mapboxProps
    } = props;

    let mapRef = createRef(null);
    let mapContainer = createRef(null);

    const [viewport, setViewport] = useState({...DEFAULT_VIEWPORT, ...props.viewport});
    const [flying, setFlying] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
    }, [])

    const onLoad = () => {
        const { onLoad } = props;
        const map = mapRef.current.getMap();
        setLoaded(true);
        onLoad({
            map: map,
            mapContainer: mapContainer,
        });
    };

    const onViewportChange = (v) => {
        const { onViewportChange } = props;
        setViewport(v);
        onViewportChange(v);
    };

    const onResize = (v) => {
        const { onViewportChange } = props;
        const newViewport = {
            ...viewport,
            ...v,
        };
        setViewport(newViewport);
        onViewportChange(newViewport);
    };

    const onMoveEnd = () => {
        const { onViewportChange } = props;
        const map = mapRef.current.getMap();

        if (map) {
            const bearing = map.getBearing();
            const pitch = map.getPitch();
            const zoom = map.getZoom();
            const { lng, lat } = map.getCenter();

            const newViewport = {
                ...viewport,
                bearing,
                pitch,
                zoom,
                latitude: lat,
                longitude: lng,
            };

            setViewport(newViewport);
            onViewportChange(newViewport);
        }
    };

    const fitBounds = () => {
        const { bounds, onViewportChange } = this.props;
        const { bbox, options } = bounds;

        const v = {
            width: mapContainer.offsetWidth,
            height: mapContainer.offsetHeight,
            ...viewport,
        };

        try {
            const { longitude, latitude, zoom } = new WebMercatorViewport(
                v
            )?.fitBounds(
                [
                    [bbox[0], bbox[1]],
                    [bbox[2], bbox[3]],
                ],
                options
            );
            const newViewport = {
                ...viewport,
                longitude,
                latitude,
                zoom,
                transitionDuration: 2500,
                transitionInterruption: TRANSITION_EVENTS.UPDATE,
            };
            setFlying(true);
            setViewport(newViewport);
            onViewportChange(newViewport);
            setTimeout(() => {
                setFlying(true);
            }, 2500);
        } catch (err) {
            console.error(err);
        }
    };
    
    let map = null;
    map = (
        <>
            <div ref={mapContainer} className={`map-visualization, map`} style={{height: '100%', width: '100%', minHeight: 400}}>
                <ReactMapGL
                    ref={mapRef}
                    mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
                    style={{height: '100%', width: '100%', minHeight: 400}}
                    {...viewport}
                    {...mapboxProps}
                    mapStyle={mapStyle}
                    width="100%"
                    height="100%"
                    dragPan={!flying && dragPan}
                    dragRotate={!flying && dragRotate}
                    scrollZoom={!flying && scrollZoom}
                    touchZoom={!flying && touchZoom}
                    touchRotate={!flying && touchRotate}
                    doubleClickZoom={!flying && doubleClickZoom}
                    onViewportChange={onViewportChange}
                    onResize={onResize}
                    onLoad={onLoad}
                    getCursor={getCursor}
                    transitionInterpolator={new FlyToInterpolator()}
                    transitionEasing={easeCubic}
                    preventStyleDiffing
                />
            </div>
        </>
    )
    return map
}

Map.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    
    viewport: PropTypes.shape({}),
    bounds: PropTypes.shape({
        bbox: PropTypes.array,
        options: PropTypes.shape({}),
    }),
    dragPan: PropTypes.bool,
    dragRotate: PropTypes.bool,
    scrollZoom: PropTypes.bool,
    touchZoom: PropTypes.bool,
    touchRotate: PropTypes.bool,
    keyboard: PropTypes.bool,
    minZoom: PropTypes.number,
    maxZoom: PropTypes.number,
    minPitch: PropTypes.number,
    maxPitch: PropTypes.number,
    doubleClickZoom: PropTypes.bool,
    
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
    height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    bearing: PropTypes.number,
    pitch: PropTypes.number,
    altitude: PropTypes.number,
    viewState: PropTypes.object,
    mapStyle: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
    
    onLoad: PropTypes.func,
    onResize: PropTypes.func,
    onError: PropTypes.func,
    onViewportChange: PropTypes.func,
    onViewStateChange: PropTypes.func,
    onInteractionStateChange: PropTypes.func,
    onHover: PropTypes.func,
    onClick: PropTypes.func,
    getCursor: PropTypes.func,
};

Map.defaultProps = {
    
    viewport: DEFAULT_VIEWPORT,
    bounds: {},
    mapStyle:"mapbox://styles/mapbox/satellite-streets-v11",
    dragPan: true,
    dragRotate: true,    
    scrollZoom: true,
    touchZoom: true,
    touchRotate: true,
    keyboard: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 180,
    doubleClickZoom: true,
    
    latitude: 37.7751,
    longitude: -122.4193,
    zoom: 11,
    pitch: 0,
    bearing: 0,
    
    onLoad: () => {},
    onViewportChange: () => {},
    getCursor: ({ isHovering, isDragging }) => {
        if (isDragging) return 'grabbing';
        if (isHovering) return 'pointer';
        return 'grab';
    },
};

export default Map;
