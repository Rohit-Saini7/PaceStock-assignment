import React from 'react';
import styled from 'styled-components';

const Article = ({ article, index }) => {
  return (
    <Container background={article.urlToImage}>
      <SourceName>
        {article.source.name}
        {/* index > 7 ? (
          <img
            width='40px'
            height='40px'
            loading='lazy'
            src={article.urlToImage}
            alt=''
          />
        ) : (
          <img width='40px' height='40px' src={article.urlToImage} alt='' />
        ) */}
      </SourceName>
      <MainContent>
        <h2>{article.title}</h2>
        <h3>~{article.author}</h3>
        <p>{article.description}</p>
        {/* eslint-disable-next-line*/}
        <a href={article.url} target='_blank'>
          <ReadMoreButton>
            <span>Read more</span>
          </ReadMoreButton>
        </a>
      </MainContent>
    </Container>
  );
};

export default Article;

const Container = styled.div`
  background: url(${({ background }) => background});
  padding: 20px;
  max-width: 35vw;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 10px;
  border-radius: 10px;
`;

const SourceName = styled.p`
  display: flex;
  padding: 10px;
  height: fit-content;
  width: fit-content;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.7em;
  background-color: rgba(255, 255, 255, 0.7);
`;

const MainContent = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  gap: 10px;
  display: flex;
  flex-direction: column;
  & > h3 {
    text-align: right;
  }
`;

const ReadMoreButton = styled.button`
  outline: none;
  border: 1px solid #7053bc;
  background-color: transparent;
  color: #7053bc;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.2s;
  overflow: none;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #7053bc;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
    z-index: 1;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover {
    color: white;
  }
  &:active {
    translate: 0 5px;
  }

  & > span {
    display: inline-block;
    z-index: 2;
    position: relative;
  }
`;
