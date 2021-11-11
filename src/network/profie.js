import {
    request
} from "./request";


export function updateUser(user) {
    return request({
        url: '/user/update',
        method: 'post',
        data: user
    })
}