import axios from "axios";
import CONFIG from "../globals/config";

const infoReq = axios.create({
  baseURL: `${CONFIG.API_ENDPOINT}/info`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { infoReq };
