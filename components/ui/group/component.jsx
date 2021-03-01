import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Card from '../card'

class Group extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        className: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node,
    }

    render() {
        const { className, children } = this.props;
        let timeline=null;
        timeline = (
            <>
                <div className="col-sm-6 col-md-4 mg-t-10">
                    <Card
                        minWidth='500px'
                        minHeight='500px'
                    >
                    <div className="card card-profile">
                        <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="">
                        <div className="card-body tx-13">
                        <div>
                            <a href="">
                            <div className="avatar avatar-lg"><span className="avatar-initial rounded-circle bg-teal">B</span></div>
                            </a>
                            <h5><a href="">Bootstrap Wizards</a></h5>
                            <p>1,032,292 Members</p>

                            <div className="img-group img-group-sm mg-b-5">
                            <img src="../https://via.placeholder.com/500" className="img wd-40 ht-40 rounded-circle" alt="">
                            <img src="../https://via.placeholder.com/500" className="img wd-40 ht-40 rounded-circle" alt="">
                            <img src="../https://via.placeholder.com/500" className="img wd-40 ht-40 rounded-circle" alt="">
                            </div>
                            <div className="mg-b-25"><span className="tx-12 tx-color-03">3 Connections</span></div>

                            <button className="btn btn-block btn-white">Join</button>
                        </div>
                        </div>
                    </div>
                    </Card>
                </div>
            </>
        )
        return group;
    }
}

export default Timeline;
