import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

const Toast = (props) => {
    const {
        className,
        theme,
        src,
        heading,
        body,
    } = props;

    let toast = null;
    const [seconds, setSeconds] = React.useState(0);
    React.useEffect(() => {
        setTimeout(() => setSeconds(seconds + 1), 1000);
    });

    toast = (
        <>
        <Toast className={cx(
            theme,
            className
            )}>
            <Toast.Header>
                <img src={src} className="rounded mr-2" alt="" />
                <strong className="mr-auto">{heading}</strong>
                <small>{moment.duration(-seconds, "seconds").humanize(true)}</small>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>
        </Toast>
        </>
    );
    return toast;
};

Toast.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    src: PropTypes.string,
    heading: PropTypes.string,
    body: PropTypes.string,
};

export default Toast;
