import axios from "axios";
import Link from "next/link";

function user({ user }) {
  return (
    <div>
      {user &&
        user.map((val, i) => (
          <div
            key={i}
            style={{
              border: "1px solid black",
              margin: "5px",
              padding: "10px",
            }}
          >
            <p> {val.id} </p>
            <p> {val.name} </p>
            <p> {val.email} </p>
          </div>
        ))}
      <div style={{ padding: "10px" }}>
        <Link href="/"> go back</Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let res = await (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;
  let paths = res.map((val) => ({ params: { id: val.id.toString() } }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let res = await (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;
  let user = res.filter((val) => val.id === parseInt(params.id));
  return {
    props: {
      user: user,
    },
  };
}

export default user;
