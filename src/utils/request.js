import Axios from "axios";

const baseURL = "http://121.36.37.117:7001";

const axios = Axios.create({
  baseURL
});

export default axios;
