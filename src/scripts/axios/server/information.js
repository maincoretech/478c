import axios from "axios";
import "dotenv/config";

const config = process.env;

const instance = axios.create({
  baseURL: config.SERVER + "/server",
  timeout: 10000,
});

async function information() {
  instance.get("/information").then((response) => {
    if (response.data.status) {
      console.log("Server is up");
      return response.data;
    } else {
      console.log("Server is down");
      return false;
    }
  });
}

export default information;
