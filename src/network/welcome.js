import {
    request
} from "./request";

export function login(user) {
    console.log(user)
    return request({
        url: '/login',
        method: 'POST',
        data: user
    })
}