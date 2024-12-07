import axios from "axios";

const axiosInstance = axios.create({
  //TODO env
  baseURL: "http://127.0.0.1:8088",
});

export default axiosInstance;
