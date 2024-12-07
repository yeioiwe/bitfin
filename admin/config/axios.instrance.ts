import axios from "axios";

const axiosInstance = axios.create({
  //TODO env
  baseURL: "http://109.120.139.129:8088",
});

export default axiosInstance;
