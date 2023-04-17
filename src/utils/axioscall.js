import axios from "axios";

export const baseUrl = "https://projectsites.in/silvamethod/api/";

const apiKey = "40bb9d38c66e40a86678979286f4e2b5";

const langugage = "english";

const Device = "Web"

export const axiosinstance = axios.create({
    baseURL: baseUrl
});

axiosinstance.interceptors.request.use(
    function(config) {
        config.headers["ApiKey"] = apiKey;
        // config.headers["Device"] = Device;
        // config.headers["Language"] = langugage;
        return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );