import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-84e05.firebaseio.com//",
});

export default instance;
