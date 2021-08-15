import axios from "axios";

const instance = axios.create({
  baseURL: "https://next.zarinpal.com"
});

instance.defaults.headers.common["content-type"] =
  "application/json;charset=UTF-8";
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
instance.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Origin, Content-Type, Accept";
instance.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";
export default instance;
