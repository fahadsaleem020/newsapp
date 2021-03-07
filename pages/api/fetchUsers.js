import axios from "axios";
import { endPoint } from "./endPoint";
export default async function fetch(req, res) {
  let data = await (await axios.get(endPoint)).data;
  let format = data.map((val) => ({
    id: val.id,
    name: val.name,
    email: val.email,
  }));
  res.status(200).json(format);
}
