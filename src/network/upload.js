import {
    request
} from "./request";

export function upload(data) {
    return request({
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        url: '/upload',
        method: 'POST',
        data: data
    })
}
export function resourceRequest(data) {
    return request({
        url: '/resourceChange/add',
        method: 'POST',
        data: data
    })
}