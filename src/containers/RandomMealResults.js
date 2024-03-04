// Import the random meals div

import React from "react";
import RandomMeal from "../components/RandomMeal";
import Text from "../components/Text";

const RandomMealResults = () => {
  return (
    <div>
      <Text text="Try something new!" />

      <div id="random-container" className="random d-flex gap-4 py-4">
        <RandomMeal />
        <RandomMeal />
        <RandomMeal />
        <RandomMeal />
      </div>
    </div>
  );
};

export default RandomMealResults;
