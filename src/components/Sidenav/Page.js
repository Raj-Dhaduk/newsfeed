"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import playstore from "/public/assets/str_android.svg";
import ios from "/public/assets/str_apple.svg";
import Image from "next/image";
import { useRouter } from "next/router";


const Sidenav = () => {
  const router = useRouter();
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState();

  const items = [
    { id: 1, name: "AllNews", image: undefined },
    { id: 2, name: "Business", image: undefined },
    { id: 3, name: "Technology", image: undefined },
    { id: 4, name: "General", image: undefined },
    { id: 5, name: "Health", image: undefined },
    { id: 6, name: "Science", image: undefined },
    { id: 7, name: "Sports", image: undefined },
    { id: 8, name: "Entertainment", image: undefined },
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const categoryQuery =
          category && category !== "AllNews" ? `&category=${category}` : "";
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=6c25dfff85c043f9a145847bc8f1e468${categoryQuery}`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  if (!news) {
    return <div className="loading">Loading...</div>;
  }


  const redirectToAnotherPage = (article, event) => {
    event.preventDefault(); 
    router.push({
      pathname: "/another",
      query: { article: JSON.stringify(article) },
    });
  };

  return (
    <div className="part2">
      <div className="links">
        <ul>
          {items.map((item) => (
            <li key={item.id} onClick={() => setCategory(item.name)}>
              <div className="circle">{item.name?.[0]}</div>
              <div className={category === item.name ? "redd" : ""}>
                {item.name}
              </div>
            </li>
          ))}
          <div className="line"></div>
          <div className="social">
            <Image src={playstore} alt="Play Store" />
            <Image src={ios} alt="Apple Store" />
          </div>
        </ul>
      </div>
      <div className="newss">
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a
                href={article.url}
                onClick={(event) => redirectToAnotherPage(article, event)}
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    width={700}
                    height={400}
                  />
                )}
                <h5>{article.title}</h5>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
