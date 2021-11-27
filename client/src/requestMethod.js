import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTIwYjEyOTNkMzBjMTdkMDU4NWYzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzM4ODk0MiwiZXhwIjoxNjM3NDc1MzQyfQ.KT11i_VHLJp8tXjCBw1xUmC8FKKSk3aq3ek4MDZcxe0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: TOKEN },
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: TOKEN },
});
