import NewsCarrier from "./NewsCarrier";
import newsStyle from "../styles/newsCarouselStyle.module.css";

function NewsSection({ type, news }) {
  const data = news.map((val) => {
    return {
      title: val.title,
      description: val.description,
      image: val.urlToImage,
      url: val.url,
      content: val.content,
    };
  });
  return (
    <div className={newsStyle.container}>
      <h1>{type}</h1>
      <NewsCarrier data={data} />
    </div>
  );
}

export default NewsSection;
