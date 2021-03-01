import React, { PureComponent, useState, useEffect, useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import MarkdownIT from 'markdown-it/dist/markdown-it.js'

const Markdown = (props) => {
    const {
        className, children, container, options,
    } = props;

    const [markdown, setMarkdown] = useState(new MarkdownIT(options))

    useEffect(() => {
        setMarkdown(new MarkdownIT(options));
    }, [options])
    
    var Container = container;

    return (
        <>
            <Container className={className}>
                <span dangerouslySetInnerHTML={{__html: markdown.render(children)}}/>
            </Container>
        </>
    )
}

Markdown.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    container: PropTypes.string,
    options: PropTypes.object,
};

Markdown.defaultProps = {
    className: '',
    container: 'div',
    options: {},
    children: ''
};

export default Markdown;
