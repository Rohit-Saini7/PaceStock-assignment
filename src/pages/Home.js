import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Article from '../components/Article';
import Navbar from '../components/NavBar';
import { data } from '../data';

const Home = () => {
  const [news, setNews] = useState(data);
  useEffect(() => {
    //GET request
    // api URL = https://newsapi.org/v2/everything?q=react&sortBy=publishedAt&apiKey=722d2d70398c4fd286d571529cfeda5f
    setNews(data);
  }, []);

  return (
    <Container>
      <Navbar />
      {news.articles.map((article, index) => (
        <Article article={article} key={article.title} index={index} />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 20px;
  margin-top: 14vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  text-align: center;
`;
