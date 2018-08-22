import axios from "axios";

export const getAction = (path, params = {}) => {
  return axios.get(path, params);
};
