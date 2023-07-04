import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-food-explorer-bay.vercel.app/"
});
