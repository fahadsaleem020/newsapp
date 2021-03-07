import Link from "next/link";
import { fetchUsers } from "../api/fetchUsers_refactor";

export default function user({ data }) {
  return (
    <div style={{ border: "1px solid green" }}>
      <Link href="/">
        <div style={{ padding: "15px" }}>
          {data && data.map((val) => <div key={val}>{val}</div>)}
        </div>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  let data = await fetchUsers();
  let paths = data.map((val) => ({
    params: { slug: [val.id.toString(), val.name, val.email] },
  }));
  return {
    paths,
    fallback: true,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      data: params.slug,
    },
  };
}
