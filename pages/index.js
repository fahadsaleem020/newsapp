import Axios from "axios";

export default function Home() {
  return <>hello world</>;
}

export async function getStaticProps() {
  return {
    props: {
      data: "hello world",
    },
    revalidate: 5,
  };
}
