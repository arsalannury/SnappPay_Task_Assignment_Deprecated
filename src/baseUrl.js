import axios from "axios";

export const BaseUrl = axios.create({
  baseURL: "http://localhost:1337",
});
