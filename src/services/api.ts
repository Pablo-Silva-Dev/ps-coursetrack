import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export interface IApiResponse {
  code: number;
  error: string;
  status: string;
}

api.interceptors.response.use(
  (response: AxiosResponse<IApiResponse>) => {
    return response;
  },
  (error: AxiosError<IApiResponse>) => {
    if (error.response) {
      console.log('Axios error response:', error.response.data);
      return error;
    } else if (error.request) {
      console.log('Axios error request:', error.request.data);
    }
  }
);

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const requestInfo = `[${config.method?.toUpperCase()}] - ${config.url}`;
  console.log(requestInfo);
  return config;
});
