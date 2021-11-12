import {
    request
} from "./request";

export function test() {
    return request({
        url: '/test'
    })
    }

export function loadResourceList(Page) {
    return request({
                url: '/resource/list',
                method: 'GET',
                params: Page
    })
}