import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/zaio--clone-96ecd/us-central1/api", // The API (Cloud function URL)
});

export default instance;
