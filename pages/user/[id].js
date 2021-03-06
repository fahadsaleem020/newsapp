import Link from "next/link";
import getUsers from "../api/getUsers/index";

function user({ data }) {
  return (
    <div>
      {data &&
        data.map((val, i) => (
          <div
            key={i}
            style={{
              border: "1px solid black",
              margin: "5px",
              padding: "10px",
            }}
          >
            <p> {val[0].id} </p>
            <p> {val[0].name} </p>
            <p> {val[0].email} </p>
          </div>
        ))}

      <div style={{ padding: "10px" }}>
        <Link href="/"> go back</Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await getUsers();
  const paths = data.map((val) => ({
    params: { id: val.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let data = await getUsers();
  data = data.filter((val) => val.id === parseInt(params.id));
  const users = data.map((val) => [
    { id: val.id, name: val.name, email: val.email },
  ]);

  return {
    props: {
      data: users,
    },
  };
}

export default user;
