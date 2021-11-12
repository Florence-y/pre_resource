import {
    request
} from "./request";


export function listResourceRequestRecords(data) {
    return request({
        url: '/resourceChange/list',
        method: 'get',
        params: data,
    })
}
export function listReimbursementRequestRecords(data) {
    return request({
        url: '/reimbursement/list',
        method: 'get',
        params: data,
    })
}