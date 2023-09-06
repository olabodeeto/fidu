import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
// import { environment } from "../../envionment/env";

// import { getStoredAuthToken } from "../../Utils/ls";
// import authService from "../../services/authService";
// https: //fidu-backend.onrender.com/api/earlybirds
const http = axios.create({
  baseURL: "https://fidu-backend.onrender.com",
});

http.interceptors.request.use(
  (request: any) => {
    request.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "" ? `Bearer ""` : "",
    };
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error?.response?.data.status === false) {
      toast.error(error?.response.data.message);
      // authService.logout();
    }
    // console.log(error);
    return Promise.reject(error);
  }
);

//Promised-based Error handler
export const handleAxiosError = (error: AxiosError) => {
  const axiosError = error as AxiosError<any>;
  if (axiosError.response?.data?.error.status === 403) {
  }
  return axiosError.response?.data?.error;
};
//Observable Error handler

export default http;
