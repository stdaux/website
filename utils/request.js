import axios from 'axios';
import { getUserToken, getCookie, logoutUser } from  '@/actions/user/actions'
import Router  from 'next/router'

export const request = (url, auth=true, method=null, headers=null, data=null, params=null, options=null) => {
    const option = {...options}
    option['url'] = url;
    option['method'] = method? method:'GET';
    option['header'] = header? header:{};
    if (auth === true){
        option['header'] = {
            ...option['header'],
            authorization: `JWT ${getUserToken()}`
        }
    }
    if(params !== null){
        option['params'] = params? params:{};
    }
    if(data !== null){
        option['data'] = data;
    }
    axios(option).then(function(response){
        if (response.status === 200) {
            let json = response.data
            return json;
        }
        if (response.status === 201) {
            let json = response.data
            return json;
        }
        if (response.status === 404) {
            console.log("Not Found")
            Router.push('/login');
        }
        if (response.status === 403) {
            console.log("Forbidden")
            Router.push('/login');
        }
        if (response.status === 400) {
            console.log("Bad Request")
            console.log(response.json)
        }
        if (response.status === 204) {
            console.log("No Content")
            console.log(response.json)
        }
        if (response.status === 401) {
            logoutUser();
            Router.push('/login');
        }
        if (response.status === 500) {
            console.log("Internal Server Error")
            Router.push('/login');
        }
        if (response.status === 503) {
            console.log("Service Unavailable")
            Router.push('/login');
        }
    })
}