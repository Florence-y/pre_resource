import axios from "axios";
import baseurl from '../common/const'

export function request(config) {
  const instance = axios.create({
    baseURL:baseurl,
    timeout:5000
  })
  return instance(config);
}
