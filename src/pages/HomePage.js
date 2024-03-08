import React from "react";
import { useState } from "react";
import Sidebar from "../containers/Sidebar";
import RandomMealResults from "../containers/RandomMealResults";
import MealResults from "../containers/MealResults";
import Navbar from "../containers/Navbar";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [meals, setMeals] = useState([]);

  function handleInputChange(e) {
    setInput(e.target.value);
    if (input) setTitle(`Results for: ${e.target.value}`);
  }

  return (
    <>
      <Navbar value={input} onChange={handleInputChange} isHomePage={true} />

      <div className="d-flex container-fluid">
        <Sidebar setMeals={setMeals} setTitle={setTitle} />

        <div className="content container">
          <RandomMealResults />
          <MealResults
            input={input}
            title={title}
            meals={meals}
            setMeals={setMeals}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
