import { getAction } from "common/request";

export const fetchTitle = () => {
  return getAction("/");
};
