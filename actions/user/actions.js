import { AuthTypes } from "./types";
import { AuthUrls } from "./urls";
import store from "@/store";
import Router, { withRouter, useRouter } from 'next/router'
import axios from 'axios';

export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export function authLogin(token) {
    return {
        type: AuthTypes.LOGIN,
        payload: token
    };
}

export function authProfile(user){
    return {
        type: AuthTypes.USER_PROFILE,
        payload: user
    }
}

export const getUserToken = () => {
    if (typeof localStorage === "undefined" || localStorage === null) {
        return null;
    }
    else{
        if (localStorage.getItem('token')){
            return localStorage.getItem('token');
        }
        else {
            return null;
        }
    }
}

export function loggedIn() {
    if (typeof localStorage === "undefined" || localStorage === null) {
        return false
    }
    else{
        if (localStorage.getItem('token')){
            currentUser();
            return true;
        }
        else {
            logoutUser();
            return false
        }
    }
}

export function currentUser() {
    return function (dispatch) {
        const viewUserUrl = AuthUrls.viewUser;
        return axios.get(viewUserUrl, {
            headers: {
                authorization: `JWT ${getUserToken()}`
            },
        }).then(function(response){
            if (response.status === 201 || response.status === 200) {
                let json = response.data
                dispatch(authProfile(json));
            }
            if (response.status === 401) {
                logoutUser();
                Router.push('/login');
            }
        });
    }
}

export function logoutUser() {
    localStorage.removeItem("token");
    Router.push('/login');
    return {
        type: AuthTypes.LOGOUT
    };
}

export function registerUser(formValues, dispatch, props) {
    const signupUrl = AuthUrls.register;

    return axios.post(signupUrl, formValues)
        .then((response) => {
            history.push("/signup_done");
        })
        .catch((error) => {
            // If request is bad...
            // Show an error to the user
            const processedError = processServerError(error.response.data);
            throw new SubmissionError(processedError);
        });
}

function setUserProfile(payload) {
    return {
        type: AuthTypes.USER_PROFILE,
        payload: payload
    };
}

export function getUserProfile(no_redirection) {
    return function (dispatch) {
        const token = getUserToken();
        const viewUserUrl = AuthUrls.viewUser;
        return axios.get(viewUserUrl, {
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then(function(response) {
            if (response.status === 201 || response.status === 200) {
                let user = response.data.user;
                dispatch(authProfile(user));
            }
            if (response.status === 401) {
                if (no_redirection == true){
                }
                else {
                    logoutUser();
                    let redirect_url = window.location.pathname;
                    Router.push(`/login?redirect_url=${redirect_url}`);
                }
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
}
