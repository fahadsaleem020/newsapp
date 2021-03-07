import axios from "axios";
import Link from "next/link";
import { url } from "../url";
export default function Home({ data }) {
  return (
    <>
      {data &&
        data.map((val) => (
          <div
            key={val.id}
            style={{
              border: "1px solid green",
              cursor: "pointer",
              margin: "10px",
            }}
          >
            <Link
              href="/user/[...slug]"
              as={`/user/${val.id}/${val.name}/${val.email}`}
            >
              <div style={{ padding: "15px" }}>
                <p style={{ margin: "0" }}>
                  <b>Name:</b> {val.name}
                </p>
                <p style={{ margin: "0" }}>
                  <b>Email:</b> {val.email}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

export async function getServerSideProps() {
  let res = (await axios.get(`${url}/api/fetchUsers`)).data;
  return {
    props: {
      data: res,
    },
  };
}
