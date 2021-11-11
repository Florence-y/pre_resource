import axios from "axios";
axios.defaults.withCredentials = true
export function request(config) {
  let instance;
  if (config.headers !== null) {
    instance = axios.create({
          baseURL: "http://localhost:8080",
      timeout: 5000,
        headers: config.headers
      })
  } else {
    instance = axios.create({
      baseURL: "http://localhost:8080",
      timeout: 5000
    })
  }
  return instance(config);
}