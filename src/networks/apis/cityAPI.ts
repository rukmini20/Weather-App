import api from "./api";
import { weather } from "../urls";

export const getcityAPI = async (value: any) => {
  try {
    return await api
      .get(`${weather}?q=${value}&appid=094aa776d64c50d5b9e9043edd4ffd00`)
      .then((response) => {
        return { status: response.status, body: response.data };
      })
      .catch((err) => {
        return { status: err.response.status, body: err.response.data };
      });
  } catch (err) {
    return { status: 500, body: "Failed to connect" };
  }
};
