import React, {useState, Fragment, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import fullpageStyles from 'fullpage.js/dist/fullpage.min.css'; // eslint-disable-line no-unused-vars

export const MAIN_SELECTOR = 'fullpage';
export const ID_SELECTOR = `#${MAIN_SELECTOR}`;
export const DEFAULT_SECTION = '.section';
export const DEFAULT_SLIDE = '.SLIDE';

const isFunc = val => typeof val === 'function';
const isEqualArray = (firstArr, secondArr) => {
    if (firstArr.length !== secondArr.length) return false;

    return firstArr.find(el => !secondArr.includes(el)) == null;
};

const fullpageCallbacks = [
    'afterLoad',
    'afterRender',
    'afterResize',
    'afterResponsive',
    'afterSlideLoad',

    'onLeave',
    'onSlideLeave',
];

const FullPage = (props) => {
    const {
        children,
        className,
        slideSelector,
        sectionSelector
    } = props;
    
    const [sectionCount, setSectionCount] = useState();
    const [slideCount, setSlideCount] = useState();
    const [initialized, setInitialized] = useState();

    let fullpageApi, fpUtils, fpEasings;

    useEffect(() => {
        const newSectionCount = getSectionCount();
        const newSlideCount = getSlideCount();

        if (sectionCount === newSectionCount && slideCount === newSlideCount) {
            return;
        }

        init();
    }, [])

    const getSectionCount = () =>  {
        const { sectionSelector = DEFAULT_SECTION } = props;
        const { length } = document.querySelectorAll(sectionSelector);
        return length;
    }

    const getSlideCount =() => {
        const { slideSelector = DEFAULT_SLIDE } = props;
        const { length } = document.querySelectorAll(slideSelector);
        return length;
    }

    const importVendors = () => {
        const { scrollOverflow, easing } = this.props;
        if (scrollOverflow) {
            require('fullpage.js/vendors/scrolloverflow.min');
        }
        if (easing) {
            require('fullpage.js/vendors/easings.min');
        }
    }

    const init = () => {
        fullpageApi = window.fullpage_api;
        fpUtils = window.fp_utils;
        fpEasings = window.fp_easings;
    }

    function markInitialized() {
        setInitialized(true);
        setSectionCount(getSectionCount());
        setSlideCount(getSlideCount())
    }

    return <div id={MAIN_SELECTOR}>{children}</div>;
}

FullPage.defaultProps = {
}

FullPage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default FullPage;