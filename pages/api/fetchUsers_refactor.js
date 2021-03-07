import axios from "axios";
import { endPoint } from "./endPoint";

async function fetchUsers() {
  try {
    let data = await (await axios.get(`${endPoint}`)).data;
    let format = data.map((val) => ({
      id: val.id,
      name: val.name,
      email: val.email,
    }));
    return format;
  } catch (error) {
    return { data: error.message };
  }
}

module.exports = { fetchUsers };
