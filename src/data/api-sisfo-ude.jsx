import axios from "axios";
import CONFIG from "../globals/config";

const infoReq = axios.create({
  baseURL: `${CONFIG.API_ENDPOINT}/info`,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllFormData = async (formID, NIM) => {
  try {
    if (NIM) {
      const response = await axios.get(
        `${CONFIG.FORM_ENDPOINT}/${formID}?NIM=${NIM}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.data;
    } else {
      const response = await axios.get(`${CONFIG.FORM_ENDPOINT}/${formID}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data.data;
    }
  } catch (error) {
    console.error("Error fetching form data:", error);
    throw error;
  }
};

const downloadFormFiles = async (formID, NIM) => {
  try {
    const url = `${CONFIG.FORM_ENDPOINT}/download/${formID}?NIM=${NIM}`;
    window.location.href = url;
  } catch (error) {
    console.error("Error fetching form files:", error);
    throw error;
  }
};

export { infoReq, getAllFormData, downloadFormFiles };
