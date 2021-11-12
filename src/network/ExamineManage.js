import {
    request
} from "./request";

export function listResourceRequestRecordsByCondition(data) {
    return request({
        url: '/resourceChange/list',
        method: 'get',
        params: data,
    })
}

export function listReimbursementRequestRecordsByCondition(data) {
    return request({
        url: '/resourceChange/list',
        method: 'get',
        params: data,
    })
}
