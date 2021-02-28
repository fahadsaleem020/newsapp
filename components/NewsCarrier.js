import Link from "next/link";
import cardstyle from "../styles/card.module.css";

function NewsCarrier({ data }) {
  return (
    <div className={cardstyle.card}>
      {data &&
        data.map((val, i) => (
          <Link
            href={`/news/`}
            as={`/news/${encodeURIComponent(val.image)}/${encodeURIComponent(
              val.title
            )}/${encodeURIComponent(val.description)}/${encodeURIComponent(
              val.url
            )}/${encodeURIComponent(val.content)}`}
            key={i}
          >
            <div>
              <img src={val.image} alt="no-preview" />
              <h1>{val.title}</h1>
              <p>{val.description}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default NewsCarrier;
