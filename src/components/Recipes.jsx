import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";
import { Recipecontext } from "../contexts/RecipeContext";

const Recipes = () => {
  const [recipes, setrecipes] = useContext(Recipecontext);
  const { pathname } = useLocation();

  useEffect(() => {
    setrecipes(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <div className="">
      <h1 className="text-center text-2xl font-semibold mt-8">OUR RECIPES</h1>
      <p className="text-center text-zinc-400 text-md mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam?
      </p>
      <div className="recipe-cards mt-[5%]  flex flex-wrap p-5">
        {recipes.length > 0 ? (
          recipes.map((r) => <Card key={r.id} recipe={r} />)
        ) : (
          <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-0">
            No Recipe Found
          </h1>
        )}
      </div>
      {pathname === "/recipes" && (
        <Link
          to="/create-recipe"
          className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[12%]  bg-green-200 gap-x-3 flex items-center"
        >
          <i className="text-3xl text-green-600 ri-add-box-line"></i>
          Create Recipe
        </Link>
      )}
    </div>
  );
};

export default Recipes;
