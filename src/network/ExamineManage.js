import {
    request
} from "./request";

export function listResourceRequestRecordsByCondition(data) {
    return request({
        url: '/resourceChange/listToExamine',
        method: 'get',
        params: data,
    })
}

export function listReimbursementRequestRecordsByCondition(data) {
    return request({
        url: '/reimbursement/list',
        method: 'get',
        params: data,
    })
}

export function updateResourceChange(data) {
    return request({
        url: '/resourceChange/update',
        method: 'post',
        data: data,
    })
}

export function updateReimbursement(data) {
    return request({
        url: '/reimbursement/update',
        method: 'POST',
        data: data,
    })
}
