import axios from 'axios'
require('promise.prototype.finally').shim();

const service = axios.create({
  baseURL: '',
  timeout: 5000,
  withCredentials: true
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {

    if (axios.isCancel(error)) {
      // Vue.$log.debug("Cancelled uploading by user.");
      return Promise.reject(error)
    }

    // Vue.$log.error("Response failed", error);

    const response = error.response
    // const status = response ? response.status : -1;
    // Vue.$log.error("Server response status", status);

    const data = response ? response.data : null
    if (data) {
      // Business response
      // Vue.$log.error("Business response status", data.status);
      if (data.status === 400) {
        // TODO handle 400 status error
      } else if (data.status === 401) {
        // TODO Handle 401 status error
      } else if (data.status === 403) {
        // TODO handle 403 status error
      } else if (data.status === 404) {
        // TODO handle 404 status error
      } else if (data.status === 500) {
        // TODO handle 500 status error
      }
    } else {
      // TODO Server unavailable
    }

    return Promise.reject(error)
  }
)

export default service;

let jsonSeq = 0;

export const jsonpRequest = (
  url,
  params = {},
  callbackKey = 'callback',
  onCallback,
  onFailure
) => {
  const jsonpReqId = 'jsonpCallback_'+(++jsonSeq);

  let timer = setTimeout(() => {
    timer = undefined;
    window[jsonpReqId] = undefined;

    const scriptEle = document.getElementById(jsonpReqId);
    if (scriptEle && scriptEle.parentNode) {
      scriptEle.parentNode.removeChild(scriptEle);
    }

    onFailure && onFailure('jsonp request timeout');
    onCallback = undefined;
    onFailure = undefined;
  }, 60000);

  window[jsonpReqId] = (response) => {
    timer && clearTimeout(timer);
    timer = undefined;
    window[jsonpReqId] = undefined;

    const scriptEle = document.getElementById(jsonpReqId);
    if (scriptEle && scriptEle.parentNode) {
      scriptEle.parentNode.removeChild(scriptEle);
    }

    onCallback && onCallback(response);
    onCallback = undefined;
    onFailure = undefined;
  };

  params[callbackKey] = jsonpReqId;

  const paramKeys = Object.keys(params);
  const paramString = paramKeys
    .map(key => `${key}=${params[key]}`)
    .join('&');

  const script = document.createElement('script');
  script.setAttribute('src', `${url}${url.indexOf('?')?'&':'?'}${paramString}`);
  script.id = jsonpReqId;
  document.body.appendChild(script);
};

export const jsonpRequestPromise = (
  url,
  params = {},
  callbackKey = 'callback'
) => {
  return new Promise((resolve, reject) => {
    jsonpRequest(
      url,
      params,
      callbackKey,
      (response) => {
        resolve(response);
      },
      (err) => {
        reject(err);
      }
    );
  });
};