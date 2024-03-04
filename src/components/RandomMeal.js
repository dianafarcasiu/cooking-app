import React, { useEffect, useState } from "react";

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(function () {
    async function getRandomMeal() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      console.log(data);
      setRandomMeal(data.meals[0]);
    }

    getRandomMeal();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default RandomMeal;
