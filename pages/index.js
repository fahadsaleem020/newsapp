import axios from "axios";
import NewsSection from "../components/NewsSection";

export default function Home({ covid19, pakistan, terrorism, islam }) {
  return (
    <>
      <NewsSection type={"covid19 and more"} news={covid19} />
      <NewsSection type={"pakistan and more"} news={pakistan} />
      <NewsSection type={"terrorism and more"} news={terrorism} />
      <NewsSection type={"islam and more"} news={islam} />
    </>
  );
}

export async function getStaticProps() {
  const covid19 = (
    await axios.get(
      "https://newsapi.org/v2/everything?q=covid19&apiKey=acd20f7fdb644d6d8833d4de68b47c3d"
    )
  ).data;
  const covid19_Response = await covid19.articles;

  const pakistan = (
    await axios.get(
      "https://newsapi.org/v2/everything?q=pakistan&apiKey=acd20f7fdb644d6d8833d4de68b47c3d"
    )
  ).data;
  const pakistan_Response = await pakistan.articles;

  const terrorism = (
    await axios.get(
      `https://newsapi.org/v2/everything?q=terrorism&apiKey=acd20f7fdb644d6d8833d4de68b47c3d`
    )
  ).data;
  const terrorism_Response = await terrorism.articles;

  const islam = (
    await axios.get(
      `https://newsapi.org/v2/everything?q=covid19&apiKey=acd20f7fdb644d6d8833d4de68b47c3d`
    )
  ).data;
  const islam_Response = await islam.articles;

  return {
    props: {
      covid19: covid19_Response,
      pakistan: pakistan_Response,
      terrorism: terrorism_Response,
      islam: islam_Response,
    },
    revalidate: 5,
  };
}
