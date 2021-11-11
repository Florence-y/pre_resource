import {
    request
} from "./request";



export function isLogin() {
    return request({
        url: '/islogin',
        method: 'get',
    })
}