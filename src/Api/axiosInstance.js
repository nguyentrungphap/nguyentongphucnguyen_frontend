import AppUrl from "./AppUrl";
import axios from "axios";
const axiosInstanceConfig = {
  baseURL: AppUrl.BaseURL,
  headers: {
    Authorization: `Bearer ${AppUrl.token}`,
    "Content-Type": "application/json",
  },
};
export const axiosInstance = axios.create(axiosInstanceConfig);
