import axios from "axios";
import CONFIG from "../globals/config";

const infoReq = axios.create({
  baseURL: `${CONFIG.API_ENDPOINT}/info`,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllFormData = async (formID) => {
  try {
    const response = await axios.get(`${CONFIG.FORM_ENDPOINT}/${formID}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching form data:", error);
    throw error;
  }
};

export { infoReq, getAllFormData };
