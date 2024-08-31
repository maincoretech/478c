import axios from "axios";
// import "dotenv/config";

// const config = process.env;

const instance = axios.create({
  baseURL: "http://localhost:47806/server",
  timeout: 10000,
});

async function information() {
  const response = await instance.get("/information");
  if (response.data.status) {
    return response.data;
  } else {
    return false;
  }
}

export default information;
