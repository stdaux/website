import React, { PureComponent, useState, useEffect, createRef, forwardRef, createContext} from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Router  from 'next/router';

import UserContext from "@/providers/user/context";
import { getUserProfile, loggedIn, logoutUser, authLogin, getCookie, getUserToken, authProfile } from "@/actions/user/actions";
import store from "@/store";
import { connect } from "react-redux";
import { AuthTypes } from "@/actions/user/types";
import { AuthUrls } from "@/actions/user/urls";
import axios from 'axios';

const UserProvider = (props) => {
	const {user, getUserProfile, children} = props
    const [parameters, setParameters] = useState({})
    const [error, setError] = useState()

  	useEffect(() => {
	    getUserProfile();
	}, [])

	const addParameters = (extra) => {
        setUser({...user, ...extra});
    }

	return (
		<>
			<UserContext.Provider value={{user, addParameters}}>
				{children}
			</UserContext.Provider>
		</>
	)
}

UserProvider.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    user: PropTypes.object,
    children: PropTypes.node,
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
};

export default connect(mapStateToProps, { getUserProfile })(UserProvider);