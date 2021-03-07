import axios from "axios";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <>
      {data &&
        data.map((val, i) => (
          <Link href="/user/" as={`/user/${val.id}`} key={i}>
            <div
              style={{
                border: "1px solid black",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              <div>
                <b>Name: </b>
                {val.name}
              </div>
              <div>
                <b>Email: </b>
                {val.email}
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}

export async function getStaticProps() {
  let data = await (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;

  return {
    props: {
      data: data,
    },
  };
}
