import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/v1",
  params: {
    api_key: "2c8b895140d4f6043dfe798694fb3545",
    language: "ko-KR",
  },
});

export default instance;
