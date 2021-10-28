import {
    request
} from "./request";

export function login(user) {
    return request({
        url: '/login',
        method: 'POST',
        data: user
    })
}