import Axios from "axios";

const baseURL = "http://10.16.58.46:7001";

const axios = Axios.create({
  baseURL
});

export default axios;
