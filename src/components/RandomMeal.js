import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(function () {
    async function getRandomMeal() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      setRandomMeal(data.meals[0]);
    }

    getRandomMeal();
  }, []);

  return (
    <Link to={`/meal/${randomMeal.idMeal}`}>
      <div
        className="card random"
        style={{
          background: `url(${randomMeal.strMealThumb}) center/cover no-repeat`,
          height: "300px",
          color: "#fff",
        }}
      >
        <div className="card random text">
          <h4>{randomMeal.strMeal}</h4>
          <p>-{randomMeal.strArea}-</p>
        </div>
      </div>
    </Link>
  );
};

export default RandomMeal;
