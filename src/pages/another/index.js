// another.js
import { useRouter } from "next/router";

const AnotherPage = () => {
  const router = useRouter();
  const {article } = router.query;

  if (!article) {
    return <div>Loading...</div>;
  }

  const clickedArticle = JSON.parse(article);

  return (
    <div className="art">
      {clickedArticle.urlToImage && (
        <img
          src={clickedArticle.urlToImage}
          alt={clickedArticle.title}
          width={950}
          height={500}
        />
      )}
      <h1>{clickedArticle.title}</h1>
      <h3>By:{clickedArticle.author?clickedArticle.author:"Unknown"}</h3>
      <h3>Updated:{clickedArticle.publishedAt}</h3>

      <h4>{clickedArticle.description}</h4>
      <p>{clickedArticle.content}</p>
    </div>
  );
};

export default AnotherPage;
