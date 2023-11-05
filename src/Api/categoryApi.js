import { axiosInstance } from "./axiosInstance";

const categoryApi = {
  getAll(params) {
    const url = "/categories";
    return axiosInstance.get(url, { params });
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosInstance.get(url);
  },
  add(data) {
    const url = "/categories";
    return axiosInstance.post(url, data);
  },
  update(id, data) {
    const url = `/categories/${id}`;
    return axiosInstance.put(url, data);
  },
  delete(id) {
    const url = `/categories/${id}`;
    return axiosInstance.delete(url);
  },
};

export default categoryApi;
