import React from 'react';

const Card = (props) => {
  return (
    <div onClick={props.onCardClicked} className="cardWrapper" id={props.cardStats.id}>
      <div className={"card " + (props.cardStats.isSelected ? 'selected' : '')}>
        <div className="innerCard">
          <div className="cardTitle">
            <p>{props.cardStats.title}</p>
          </div>
          <div className="cardImage">
            <img src={props.cardStats.imgSrc} alt="cardImage" />
          </div>
          <div className="cardStats">
            <p>{props.cardStats.attack}/{props.cardStats.defense}</p>
            <p>{props.cardStats.cost}</p>
          </div>
          <div className="cardDescription">
            <p>{props.cardStats.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;