import React from "react";
import ListItem from "../components/ListItem.js";

const Sidebar = ({ setMeals, setTitle }) => {
  async function getMealsByCategory(category) {
    setTitle(`${category} Dishes`);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await res.json();
    setMeals((meals) => data.meals);
  }

  async function getMealsByArea(area) {
    setTitle(`${area} Dishes`);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const data = await res.json();
    setMeals((meals) => data.meals);
  }

  return (
    <div className="sidebar text-start d-none d-md-block p-3 col-md-2">
      <p className="lead my-2">Categories</p>
      <ul className="list-group list-group-flush">
        <ListItem item="Breakfast" onClick={getMealsByCategory} />
        <ListItem item="Pasta" onClick={getMealsByCategory} />
        <ListItem item="Vegetarian" onClick={getMealsByCategory} />
        <ListItem item="Dessert" onClick={getMealsByCategory} />
      </ul>
      <br></br>
      <p className="lead my-2">Area</p>
      <ul className="list-group list-group-flush">
        <ListItem item="Mexican" onClick={getMealsByArea} />
        <ListItem item="American" onClick={getMealsByArea} />
        <ListItem item="Italian" onClick={getMealsByArea} />
        <ListItem item="French" onClick={getMealsByArea} />
        <ListItem item="Japanese" onClick={getMealsByArea} />
        <ListItem item="Chinese" onClick={getMealsByArea} />
      </ul>
    </div>
  );
};

export default Sidebar;
