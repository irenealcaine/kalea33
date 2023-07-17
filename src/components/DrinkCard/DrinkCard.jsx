import React from "react";
import "./DrinkCard.scss";

const DrinkCard = ({ name, image, ingredients, instructions }) => {
  return (
    <div className="drink-card">
      <img src={image} alt={name} className="drink-card__image" />
      <h2 className="drink-card__name">{name}</h2>
      <h3 className="drink-card__subtitle">Ingredientes:</h3>
      <ul className="drink-card__ingredients">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="drink-card__subtitle">Instrucciones:</h3>
      <ol className="drink-card__instructions">
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default DrinkCard;
