import {
    request
} from "./request";


export function getResourceByCondition(condition) {
    return request({
        url: '/resource/listByCondition',
        method: 'get',
        params: condition
    })
}