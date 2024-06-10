import axios from "axios";
import CONFIG from "../globals/config";

const getInfo = async () => {
  try {
    const response = await axios.get(`${CONFIG.API_ENDPOINT}/info`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

const sendFormData = async (formID, formData) => {
  try {
    if (formID && formData) {
      const response = await axios.post(`${CONFIG.FORM_ENDPOINT}/${formID}`, {
        body: formData,
      });
      return response;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

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
    if (NIM) {
      const url = `${CONFIG.FORM_ENDPOINT}/download/${formID}?NIM=${NIM}`;
      window.location.href = url;
    }
  } catch (error) {
    console.error("Error fetching form files:", error);
    throw error;
  }
};

const deleteFormData = async (formID, NIM) => {
  try {
    if (NIM) {
      const formData = new FormData();
      formData.append("NIM", NIM);
      const response = await axios.delete(`${CONFIG.FORM_ENDPOINT}/${formID}`, {
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const login = async (NIM, password) => {
  try {
    if (NIM && password) {
      const formData = new FormData();
      formData.append("NIM", NIM);
      formData.append("password", password);
      const response = await axios.post(
        `${CONFIG.API_ENDPOINT}/login`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      }
    } else {
      return "Please complete the login form";
    }
  } catch {
    return "Invalid NIM or Password";
  }
};
export {
  sendFormData,
  getInfo,
  getAllFormData,
  downloadFormFiles,
  deleteFormData,
  login,
};
