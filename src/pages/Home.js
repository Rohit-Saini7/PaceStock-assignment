import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import { data } from '../data';

const Home = () => {
  const [news, setNews] = useState({});
  useEffect(() => {
    //GET request
    // api URL = https://newsapi.org/v2/everything?q=react&sortBy=publishedAt&apiKey=722d2d70398c4fd286d571529cfeda5f
    setNews(data);
  }, []);

  return (
    <div>
      {news?.articles?.map((article, index) => (
        <Article article={article} key={article.title} index={index} />
      ))}
    </div>
  );
};

export default Home;
