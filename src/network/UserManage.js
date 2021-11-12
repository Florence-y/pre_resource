import {
    request
} from "./request";

export function userList() {
    return request({
        url: '/user/list',
        method: 'get',
    })
}