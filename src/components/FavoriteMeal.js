import React from "react";
import { Link } from "react-router-dom";

const FavoriteMeal = ({ meal, onDeleteFavorite }) => {
  return (
    <li className="favorite d-flex flex-wrap align-items-center gap-5">
      <Link to={`/meal/${meal.mealID}`}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </Link>
      <h5>{meal.strMeal}</h5>
      <button
        className="btn-delete"
        onClick={() => onDeleteFavorite(meal.mealID)}
      >
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </li>
  );
};

export default FavoriteMeal;
