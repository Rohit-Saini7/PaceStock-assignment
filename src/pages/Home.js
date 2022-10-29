import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Article from '../components/Article';
import Navbar from '../components/NavBar';

const Home = ({ setUser }) => {
  const [news, setNews] = useState();
  useEffect(() => {
    var url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=722d2d70398c4fd286d571529cfeda5f';
    var req = new Request(url);
    fetch(req).then(function (response) {
      let result = response.json();
      result.then((val) => {
        console.log('val', val);
        setNews(val);
      });
    });
  }, []);

  return (
    <Container>
      <Navbar setUser={setUser} />
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
  gap: 30px;
  text-align: center;

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;
