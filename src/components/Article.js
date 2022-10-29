import React from 'react';
import styled from 'styled-components';

const Article = ({ article, index }) => {
  console.log(index);
  return (
    <Container>
      <h5>{article.source.name}</h5>
      {index > 7 ? (
        <img
          width='40px'
          height='40px'
          loading='lazy'
          src={article.urlToImage}
          alt=''
        />
      ) : (
        <img width='40px' height='40px' src={article.urlToImage} alt='' />
      )}

      <h1>{article.title}</h1>
      <h3>~{article.author}</h3>
      <p>{article.description}</p>
      <a href={article.url}>Read more...</a>
    </Container>
  );
};

export default Article;

const Container = styled.div`
  margin: 20px;
`;
