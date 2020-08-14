import axios from 'axios';

const service = axios.create({
  baseURL: process.env.APP_BASE_API,
  // withCredentials: true,
  timeout: 30000, // request timeout,
  // Flag to handle the error directly in the respose
  __handleErrorsInResponse: true,
  // validateStatus: status => status < 204, // Reject only if the status code is greater than or equal to 500
  // Default Headers & empty data. Empty data is used because if it isn't present, this headers are not sent
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  data: {},
});

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const get = (endpoint, token = null) => {
  return service.get(endpoint, {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
};

const post = (endpoint, data, token = null) => {
  return service.post(endpoint, data, {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { service, get, post };
