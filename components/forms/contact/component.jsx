import React, { PureComponent, Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import cx from 'classnames';

import { ResearchUrls } from "@/actions/research/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'

const ContactForm = (props) => {
    const router = useRouter();
    const { } = router.query;

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [terms, setTerms] = useState(false)

    useEffect(() => {
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data1 = new FormData(event.target);
        const data = {};
        data1.forEach(function(value, key){
            if(!Reflect.has(data, key)){
                data[key] = value;
                return;
            }
            if(!Array.isArray(data[key])){
                data[key] = [data[key]];    
            }
            data[key].push(value);
        });

        const grantApplyURL = ResearchUrls.grantApply;
        fetch(grantApplyURL, {
            method: 'POST',
            body: data1
        }).then(function(response){
            if (response.status === 200) {
                let json = response.json()
                return json;
            }
        })
        .then(function(json) {
            console.log(json)
        });
    };

    return (
        <div className="mg-t-10 tx-white">
            <form method="POST" onSubmit={event => handleSubmit(event)}>
                <div className="row row-xs">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                name="name"
                                className="form-control"
                                type="text"
                                label="name"
                                placeholder="Your name"
                                onChange={event => setName(event.target.value)}
                                value={name}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                className="form-control"
                                type="email"
                                label="email"
                                placeholder="Email"
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                name="phonenumber"
                                className="form-control"
                                type="text"
                                label="phonenumber"
                                placeholder="Phone Number with Country Code"
                                onChange={event => setPhonenumber(event.target.value)}
                                value={phonenumber}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                className="form-control"
                                type="text"
                                label="message"
                                placeholder="Your Message"
                                onChange={event => setMessage(event.target.value)}
                                value={message}
                                required
                            />
                        </div>
                    </div>
                </div>
                <input className="btn btn-light btn-clock" type="button" value="Send"/>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    className: PropTypes.string,
    organization_slug: PropTypes.string,
};

ContactForm.defaultProps = {
    className: ""
};

export default ContactForm;