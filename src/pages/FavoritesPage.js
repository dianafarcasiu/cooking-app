import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import FavoriteMeal from "../components/FavoriteMeal";

const FavoritesPage = () => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  useEffect(function () {
    const storedMeals = JSON.parse(localStorage.getItem("mealsForLS")) || [];
    setFavoriteMeals(storedMeals);
  }, []);

  function handleDeleteFavorite(mealID) {
    const updatedFavoriteMeals = favoriteMeals.filter(
      (meal) => meal.mealID !== mealID
    );
    setFavoriteMeals(updatedFavoriteMeals);
    localStorage.setItem("mealsForLS", JSON.stringify(updatedFavoriteMeals));
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid px-5">
        <h2 className="text-center my-5">
          {favoriteMeals.length > 0
            ? "Your favorite meals"
            : "Start adding some meals to your favorites!"}
        </h2>
        <ul className="favorites-list">
          {favoriteMeals.map((meal) => (
            <FavoriteMeal
              key={meal.mealID}
              meal={meal}
              onDeleteFavorite={handleDeleteFavorite}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FavoritesPage;
