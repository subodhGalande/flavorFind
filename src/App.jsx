import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SearchCategory from "./components/searchCategory";
import RandomRecipes from "./components/randomRecipes";
import Landing from "./components/landing";
import RecipeDetails from "./pages/recipeDetails";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
