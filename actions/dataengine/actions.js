import { AuthTypes } from "./types";
import { DataEngineUrls } from "./urls";
import store from "@/store";
import Router  from 'next/router'
import axios from 'axios';
import { getUserToken, getCookie } from  '@/actions/user/actions'

export const listDataEngine(e, data) {
    const listDataEngineURL = DataEngineUrls.listDataEngine;
    e.preventDefault()
    const token = getUserToken();
    if (token) {
        axios.get(listDataEngineURL, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
                Authorization: `JWT ${token}`
            }
        }).then(response => {
            dispatch(setUserProfile(response.data))
        }).catch((error) => {
            // If request is bad...
            // Show an error to the user
            console.log(error);
            // TODO: send notification and redirect
        });
    }
}

export const addDataEngine(e, data) {
    const addDataEngineURL = DataEngineUrls.addDataEngine;
    e.preventDefault()
    await fetch(addDataEngineURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
            Authorization: `JWT ${getUserToken()}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        let token = json.token; 
        localStorage.setItem('token', token);
        store.dispatch(authLogin(token));
        Router.push('/user/profile');
    });
}

export const deleteDataEngine(e, data) {
    const deleteDataEngineURL = DataEngineUrls.deleteDataEngine;
    e.preventDefault()
    await fetch(deleteDataEngineURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
            Authorization: `JWT ${getUserToken()}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        let token = json.token; 
        localStorage.setItem('token', token);
        store.dispatch(authLogin(token));
        Router.push('/user/profile');
    });
}


export const viewDataEngine(e, data) {
    const viewDataEngineURL = DataEngineUrls.viewDataEngine;
    e.preventDefault()
    await fetch(viewDataEngineURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
            Authorization: `JWT ${getUserToken()}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        let token = json.token; 
        localStorage.setItem('token', token);
        store.dispatch(authLogin(token));
        Router.push('/user/profile');
    });
}

export const editDataEngine(e, data) {
    const editDataEngineURL = DataEngineUrls.editDataEngine;
    e.preventDefault()
    await fetch(editDataEngineURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
            Authorization: `JWT ${getUserToken()}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        let token = json.token; 
        localStorage.setItem('token', token);
        store.dispatch(authLogin(token));
        Router.push('/user/profile');
    });
}

export const activateDataEngine(e, data) {
    const activateDataEngineURL = DataEngineUrls.activateDataEngine;
    e.preventDefault()
    await fetch(activateDataEngineURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
            Authorization: `JWT ${getUserToken()}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        let token = json.token; 
        localStorage.setItem('token', token);
        store.dispatch(authLogin(token));
        Router.push('/user/profile');
    });
}

export const deactivateDataEngine(e, data) {
    const deactivateDataEngineURL = DataEngineUrls.deactivateDataEngine;
    e.preventDefault()
    await fetch(deactivateDataEngineURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
            Authorization: `JWT ${getUserToken()}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        let token = json.token; 
        localStorage.setItem('token', token);
        store.dispatch(authLogin(token));
        Router.push('/user/profile');
    });
}
