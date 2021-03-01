import React, { PureComponent, Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import cx from 'classnames';

import { ResearchUrls } from "@/actions/research/urls";
import { getUserToken, getCookie } from  '@/actions/user/actions'

const ResearchGrantForm = (props) => {
    const router = useRouter();
    const { } = router.query;

    const [name, setName] = useState('')
    const [profileLink, setProfileLink] = useState('')
    const [primaryContactNumber, setPrimaryContactNumber] = useState('')
    const [universityEmailAddress, setUniversityEmailAddress] = useState('')
    const [university, setUniversity] = useState('')
    const [universityLink, setUniversityLink] = useState('')
    
    const [currentAddress, setCurrentAddress] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const [country, setCountry] = useState('')

    const [researchLink, setResearchLink] = useState('')
    const [role, setRole] = useState('')

    const [grantDescription, setGrantDescription] = useState('')
    const [description, setDescription] = useState('')
    const [grantUse, setGrantUse] = useState('')
    const [results, setResults] = useState('')

    const [terms, setTerms] = useState(false)

    useEffect(() => {
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data1 = new FormData(event.target);
        const data = {};
        data1.append("logo", logo)
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
            headers: {
                Authorization: `JWT ${getUserToken()}`
            },
            body: data1
        }).then(function(response){
            if (response.status === 200) {
                let json = response.json()
                return json;
            }
            if (response.status === 404) {
                console.log(response.json())
            }
            if (response.status === 400) {
                console.log(response.json())
            }
            if (response.status === 401) {
                logoutUser();
                Router.push('/login');
            }
        })
        .then(function(json) {
            console.log(json)
        });
    };

    return (
        <div className="mg-t-10">
            <form method="POST" onSubmit={event => handleSubmit(event)}>
                <div className="row row-xs">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Name of Applier</label>
                            <input
                                name="name"
                                className="form-control"
                                type="text"
                                label="name"
                                placeholder="Name of Applier"
                                onChange={event => setName(event.target.value)}
                                value={name}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Link to Profile(LinkedIn, Researchgate, etc.)</label>
                            <input
                                name="profileLink"
                                className="form-control"
                                type="text"
                                label="profileLink"
                                placeholder="If not available, please write 'not available'"
                                onChange={event => setProfileLink(event.target.value)}
                                value={profileLink}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row row-xs">
                    <div className="col-6">
                        <div className="form-group">
                            <label>University Name</label>
                            <input
                                name="university"
                                className="form-control"
                                type="text"
                                label="university"
                                placeholder="Name of University"
                                onChange={event => setUniversity(event.target.value)}
                                value={university}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">        
                        <div className="form-group">
                            <label>University Dept. Website</label>
                            <input
                                name="universityLink"
                                className="form-control"
                                type="text"
                                label="universityLink"
                                placeholder="Enter University Dept Website"
                                onChange={event => setUniversityLink(event.target.value)}
                                value={universityLink}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row row-xs">
                    <div className="col-6">        
                        <div className="form-group">
                            <label>University Email Address</label>
                            <input
                                name="universityEmailAddress"
                                className="form-control"
                                type="text"
                                label="universityEmailAddress"
                                placeholder="University Email Address"
                                onChange={event => setUniversityEmailAddress(event.target.value)}
                                value={universityEmailAddress}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">        
                        <div className="form-group">
                            <label>Primary Contact Number</label>
                            <input
                                name="primaryContactNumber"
                                className="form-control"
                                type="text"
                                label="primaryContactNumber"
                                placeholder="University Email Address"
                                onChange={event => setPrimaryContactNumber(event.target.value)}
                                value={primaryContactNumber}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row row-xs">
                    <div className="col-6">        
                        <div className="form-group">
                            <label>Current Address</label>
                            <input
                                name="currentAddress"
                                className="form-control"
                                type="text"
                                label="currentAddress"
                                placeholder="Current Address"
                                onChange={event => setCurrentAddress(event.target.value)}
                                value={currentAddress}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">        
                        <div className="form-group">
                            <label>City</label>
                            <input
                                name="city"
                                className="form-control"
                                type="text"
                                label="city"
                                placeholder="City"
                                onChange={event => setCity(event.target.value)}
                                value={city}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">        
                        <div className="form-group">
                            <label>Zip Code / Pincode</label>
                            <input
                                name="pincode"
                                className="form-control"
                                type="text"
                                label="pincode"
                                placeholder="Zip Code / Pincode"
                                onChange={event => setPincode(event.target.value)}
                                value={pincode}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">        
                        <div className="form-group">
                            <label>Country</label>
                            <input
                                name="country"
                                className="form-control"
                                type="text"
                                label="country"
                                placeholder="Country"
                                onChange={event => setCountry(event.target.value)}
                                value={country}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row row-xs">
                    <div className="col-6">        
                        <div className="form-group">
                            <label>Research Link</label>
                            <input
                                name="researchLink"
                                className="form-control"
                                type="text"
                                label="researchLink"
                                placeholder="Research Link"
                                onChange={event => setResearchLink(event.target.value)}
                                value={researchLink}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">        
                        <div className="form-group">
                            <label>Role</label>
                            <input
                                name="role"
                                className="form-control"
                                type="text"
                                label="role"
                                placeholder="Role"
                                onChange={event => setRole(event.target.value)}
                                value={role}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row row-xs">
                    <div className="col-6">        
                        <div className="form-group">
                            <label>Grant Description</label>
                            <textarea
                                name="grantDescription"
                                className="form-control"
                                type="text"
                                label="grantDescription"
                                placeholder="Current Address"
                                onChange={event => setGrantDescription(event.target.value)}
                                value={grantDescription}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                name="description"
                                className="form-control"
                                type="text"
                                label="description"
                                placeholder="Description"
                                onChange={event => setDescription(event.target.value)}
                                value={description}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">        
                        <div className="form-group">
                            <label>Grant Use</label>
                            <textarea
                                name="grantUse"
                                className="form-control"
                                type="text"
                                label="grantUse"
                                placeholder="Zip Code / Pincode"
                                onChange={event => setGrantUse(event.target.value)}
                                value={grantUse}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">        
                        <div className="form-group">
                            <label>Results</label>
                            <textarea
                                name="results"
                                className="form-control"
                                type="text"
                                label="results"
                                placeholder="Results"
                                onChange={event => setResults(event.target.value)}
                                value={results}
                                required
                            />
                        </div>
                    </div>
                </div>
                <input className="btn btn-brand-02 btn-block" type="submit" value="Send Application"/>
            </form>
        </div>
    );
}

ResearchGrantForm.propTypes = {
    className: PropTypes.string,
    organization_slug: PropTypes.string,
};

ResearchGrantForm.defaultProps = {
    className: ""
};

export default ResearchGrantForm;