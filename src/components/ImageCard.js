import React from "react";
import styled from 'styled-components';


const SiteContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-color: #EAE6DA;
    font-family: 'Lato', sans-serif;
    padding-bottom: 10vh;
    padding-top: 5vh;



`;
const CardContainer = styled.div`


`;

const CardImage = styled.img`

  width:50%;
  height: auto;
  margin-left: auto;
  margin-right:auto;

  
`;

const CardTitle = styled.h1`
font-size:3rem;

`;

const CardDate = styled.h2`
font-size: 1rem;

`;

const CardPhotographer = styled.h3`
font-size: 3 rem;

`;

const CardDescription = styled.p`
font-size: 2 rem;
margin-right: 15%;
margin-left: 15%;
line-height: 2;

`;

const ImgCard = props => {
  return (
    <SiteContainer>
      <CardContainer>
        <CardDate>Today's Date: {props.date}</CardDate>
        <CardTitle>{props.title}</CardTitle>
        <CardImage alt="Outer Space" src = {props.url} />
        <CardPhotographer>Photo by: {props.copyright}</CardPhotographer>
        <CardDescription>{props.explanation}</CardDescription>
      </CardContainer>
    </SiteContainer>
  );
};

export default ImgCard;