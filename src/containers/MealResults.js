import { useEffect } from "react";
import Meal from "../components/Meal";
import Text from "../components/Text";
import { Link } from "react-router-dom";

const MealResults = ({ input, setInput, title, meals, setMeals }) => {
  useEffect(
    function () {
      if (input) {
        async function getMeals() {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
          );
          const data = await res.json();
          setMeals((meals) => data.meals);
        }
        getMeals();
      } else setMeals([]);
    },
    [input, setMeals]
  );

  return (
    <div>
      {meals && <Text text={title} />}

      <div className="results d-flex flex-wrap gap-4 py-4">
        {meals &&
          meals.map((meal) => (
            <Link to={`/meal/${meal.idMeal}`}>
              <Meal meal={meal} id={meal.idMeal} key={meal.idMeal} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MealResults;
