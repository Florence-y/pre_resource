import {
    request
} from "./request";




export function saveReimbursement(from) {
    return request({
        url: '/reimbursement/add',
        method: 'post',
        data: from,
    })
}