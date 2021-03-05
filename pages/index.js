import Axios from "axios";

export default function Home({ data }) {
  return <>{data}</>;
}

export async function getStaticProps() {
  return {
    props: {
      data: process.env.data,
    },
    revalidate: 5,
  };
}
