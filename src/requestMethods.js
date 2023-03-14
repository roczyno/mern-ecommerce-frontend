import axios from "axios";

const BASE_URL = "https://shopeasy-api.onrender.com/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTBhNjIyOTM3NDk3YjE4NGNlNzM5NSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzg4MTI3MTksImV4cCI6MTY3OTI0NDcxOX0.5g6zqTkIkK72vVjek3fggc2VRSnZ4kiWj-1qNZxV1mQ";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
