import { useRouter } from "next/router";
function news() {
  const [image, title, description, url, content] = useRouter().query.slug || [
    null,
    null,
    null,
    null,
    null,
  ];
  return (
    <div>
      <a href={url}>
        <img src={image} alt={image} />
        <h1>{title}</h1>
        <div style={{ display: "flex" }}>
          <p>{content}</p>
          <a style={{ color: "blue" }} href={url}>
            Read More -{">"}
          </a>
        </div>
      </a>
    </div>
  );
}

export default news;
