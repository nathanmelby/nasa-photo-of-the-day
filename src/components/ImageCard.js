import React from "react";

const ImgCard = props => {
  return (
    <div className="img-card">
        <h1 className="image-title">{props.title}</h1>
        <img className='daily-image' alt="Outer Space" src = {props.url} />
        
        <h2 className='today-date'>{props.date}</h2>
        <h3 className='copyright-holder'>{props.copyright}</h3>
        <p className='explanation'>{props.explanation}</p>
    </div>
  );
};

export default ImgCard;