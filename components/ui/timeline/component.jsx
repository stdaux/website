import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Timeline extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    }

    render() {
        const { className, children } = this.props;
        let timeline=null;
        timeline = (
            <>
                <div
                    className={cx(
                        "timeline-group",
                        className,
                    )}
                >
                    {children}
                </div>
            </>
        )
        return timeline;
    }
}

class TimelineItem extends Component {
    static propTypes = {
        time: PropTypes.string,
        title: PropTypes.string,
        user: PropTypes.string,
        level: PropTypes.string,
        description: PropTypes.string,
    }

    render() {
        const { time, title, user, level, description } = this.props;
        let timelineItem=null;
        timelineItem = (
            <>
            <div className="timeline-item">
                <div className="timeline-time">{time}</div>
                <div className="timeline-body">
                <h6 className="mg-b-0">{title}</h6>
                <p><a href="">{user}</a> {level}</p>

                <p>{description}</p>
                <nav className="nav nav-row mg-t-15">
                    <a href="" className="nav-link">Like</a>
                    <a href="" className="nav-link">Comment</a>
                </nav>
                </div>
            </div>
            </>
        )
        return timelineItem;
    }
}

export default Timeline;
export default TimelineItem;