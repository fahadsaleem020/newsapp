import axios from "axios";

const key = "acd20f7fdb644d6d8833d4de68b47c3d";

export default async function getData(req, res) {
  const { query: newstype } = req;
  try {
    const data = await (
      await axios.get(
        `https://newsapi.org/v2/everything?q=${newstype.newstype}&apikey=${key}`
      )
    ).data;
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
