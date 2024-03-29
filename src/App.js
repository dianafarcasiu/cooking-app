import "./index.css";
import HomePage from "./pages/HomePage";
import MealPage from "./pages/MealPage";
import FavoritesPage from "./pages/FavoritesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/cooking-app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="meal/:mealID" element={<MealPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
