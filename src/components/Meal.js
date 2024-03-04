import React from "react";

const Meal = ({ meal }) => {
  const tags = meal.strTags?.split(",");
  return (
    <div>
      <div className="card results">
        <div className="d-flex align-items-center gap-3 py-2">
          <img
            className="card-img"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          ></img>
          <div className="mealcard-content">
            <h5 className="card-title my-3">{meal.strMeal}</h5>
            <p className="meal-description">
              {meal.strArea} {meal.strCategory}
            </p>

            {meal.strTags && (
              <p className="d-flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <span className="badge rounded-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
