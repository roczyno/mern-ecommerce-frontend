import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmY3ZDk0ZmQzZjAwM2JiNzE5YjBkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Nzg1MTMyNywiZXhwIjoxNjc4MjgzMzI3fQ.lINuiItvWy5P-CumoZtL0RfHsDCszXKFIqLAMBnNIcc";

export const publicRequest = axios.create({
  baseUrl: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
