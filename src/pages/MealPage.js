import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import { useParams } from "react-router-dom";

const MealPage = () => {
  const { mealID } = useParams();
  const [meal, setMeal] = useState([]);

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ingredient && measure ? `${measure} ${ingredient}` : null;
  }).filter(Boolean);

  useEffect(
    function () {
      async function getMealData() {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
        );
        const data = await res.json();
        console.log(data.meals[0]);
        setMeal(data.meals[0]);
      }

      getMealData();
    },
    [mealID]
  );

  return (
    <>
      <Navbar />

      <div className="container-fluid px-5">
        <h3 className="text-center mb-5">{meal.strMeal}</h3>

        <div className="d-flex justify-content-center gap-5 flex-wrap">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="meal-img"
          ></img>

          <div className="content">
            <h5>Ingredients</h5>
            <ul className="ingredient-list">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* <p>Category: {meal.strCategory}</p>
        <p>Area: {meal.strArea}</p> */}

        <p className="instructions">{meal.strInstructions}</p>

        <div className="buttons d-flex justify-content-center gap-4 mb-5">
          <button>
            <i className="fa-regular fa-heart"></i>
            Add to favorites
            <i className="fa-solid fa-heart"></i>
          </button>

          <button>
            <a href={meal.strYoutube} target="blank">
              <i className="fa-brands fa-youtube"></i> Watch on youtube
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default MealPage;
