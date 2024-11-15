import { FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";

import { useState, useEffect } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const RandomRecipes = () => {
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const fetchRandomRecipes = async () => {
      setisLoading(true);
      axios
        .get(`${baseUrl}recpes/random?apiKey=${apiKey}&number=6`)
        .then((response) => {
          setData(response.data.recipes);
          setError(false);
          setisLoading(false);
        })
        .catch((e) => {
          if (e) {
            setError(true);
          }
          setisLoading(false);
        })
        .finally(() => {
          setisLoading(false);
        });
    };

    fetchRandomRecipes();
  }, []);

  return (
    <section className="mx-auto mt-10 p-5 font-inter sm:w-10/12">
      <p className="mx-auto text-center text-2xl font-semibold text-black">
        Suggested recipes
      </p>
      {Error && (
        <p className="m-5 text-center text-black/50">
          Oops!, cannot find Recipes. Please Refresh.
        </p>
      )}
      {/* recipe card container */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-5 flex flex-col gap-y-4 sm:w-full sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
          {/* recipe card */}

          {Data &&
            Data.map((recipe, index) => (
              <Link to={`recipe/${recipe.id}`} key={index}>
                <div className="h-fit w-full rounded-3xl bg-gradient-to-t from-primary to-60% p-4 duration-150 hover:scale-105 sm:w-fit">
                  <div className="flex flex-col gap-y-3 overflow-hidden sm:h-fit sm:w-72">
                    <div className="h-44 w-full overflow-hidden rounded-2xl">
                      {" "}
                      {recipe.image && recipe.image ? (
                        <img
                          src={recipe.image}
                          alt="recipe image"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <img
                          src="/assets/foodPlaceholder.jpg"
                          alt="recipe image"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex w-full flex-col justify-around gap-4">
                      <div>
                        {" "}
                        <h2 className="line-clamp-1 font-semibold sm:text-base">
                          {recipe.title}
                        </h2>
                      </div>
                      <div className="flex gap-x-4">
                        <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                          <FaClock />
                          <p className="font-inter text-xs text-black/70 sm:text-sm">
                            {recipe.readyInMinutes} minutes
                          </p>
                        </div>
                        <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                          <ImSpoonKnife />
                          <p className="font-inter text-xs text-black/70 sm:text-sm">
                            {recipe.dishTypes[0]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </section>
  );
};

export default RandomRecipes;
