import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MealPage = () => {
  const { mealID } = useParams();
  const [meal, setMeal] = useState([]);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const [error, setError] = useState(null);

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ingredient && measure ? `${measure} ${ingredient}` : null;
  }).filter(Boolean);

  // LS
  const mealsFromLS = JSON.parse(localStorage.getItem("mealsForLS")) || [{}];
  const [mealsForLS, setMealsForLS] = useState(mealsFromLS);

  useEffect(
    function () {
      localStorage.setItem("mealsForLS", JSON.stringify(mealsForLS));
    },
    [mealsForLS]
  );

  function handleAddToFavorites() {
    const isMealInFavorites = mealsFromLS.some(
      (item) => item.mealID === mealID
    );

    if (!isMealInFavorites) {
      const newFavorites = [
        ...mealsFromLS,
        {
          strMeal: meal.strMeal,
          mealID: mealID,
          strMealThumb: meal.strMealThumb,
        },
      ];
      localStorage.setItem("mealsForLS", JSON.stringify(newFavorites));
      setMealsForLS(newFavorites);

      setIsAddedToFavorites((is) => !is);
    } else alert("Meal already added to favorites!");
  }

  useEffect(
    function () {
      async function getMealData() {
        try {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
          );
          if (!res.ok)
            throw new Error(
              `Something went wrong, meal data not found. Status: ${res.status}`
            );

          const data = await res.json();
          console.log(data.meals[0]);
          setMeal(data.meals[0]);
        } catch (error) {
          console.error(error.message);
          setError(error.message);
        }
      }

      getMealData();
    },
    [mealID]
  );

  useEffect(
    function () {
      document.title = meal.strMeal;

      return function () {
        document.title = "FoodieZ";
      };
    },
    [meal]
  );

  return (
    <>
      <Navbar />

      <div className="container-fluid px-5">
        {error ? (
          <div className="alert alert-danger my-5" role="alert">
            {error}
          </div>
        ) : (
          <>
            <Link to="/" className="arrow">
              <i className="fa-solid fa-arrow-left-long"></i>
            </Link>
            <h3 className="text-center mb-5">{meal.strMeal}</h3>

            <div className="d-flex justify-content-center gap-5 flex-wrap">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="meal-img"
              ></img>

              <div className="content">
                <h5 className="pb-2">Ingredients</h5>
                <ul className="ingredient-list">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>- {ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="meal-info text-center mt-5 mb-0">
              <span>Category:</span> {meal.strCategory}
            </p>
            <p className="meal-info text-center mt-1">
              <span>Area:</span> {meal.strArea}
            </p>

            <p className="instructions">{meal.strInstructions}</p>

            <div className="buttons d-flex justify-content-center gap-4 mb-5">
              <button onClick={handleAddToFavorites}>
                {isAddedToFavorites ? (
                  <i className="fa-solid fa-heart"></i>
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
                {isAddedToFavorites
                  ? " Added to favorites"
                  : " Add to favorites"}
              </button>

              <button>
                <a href={meal.strYoutube} target="blank">
                  <i className="fa-brands fa-youtube"></i> Watch on youtube
                </a>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MealPage;
