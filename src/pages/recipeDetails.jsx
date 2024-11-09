import { BiFoodTag } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
import { RiShareForwardLine } from "react-icons/ri";
import { Link, redirect, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const RecipeDetails = () => {
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");

  let { id } = useParams();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const recipeData = async () => {
      setisLoading(true);
      axios
        .get(
          `${baseUrl}recipes/${id}/information?apiKey=${apiKey}&includeNutirition=true`,
        )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
          setHtmlContent(response.data.summary);
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

    recipeData();
  }, [id]);

  if (Error) {
    return redirect("/404");
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main
        id="recipeDetails"
        className="mx-auto font-inter sm:w-11/12 sm:p-10"
      >
        {/* heading and button */}
        <div className="mx-auto mt-5 flex items-center justify-between px-5 sm:mt-0">
          <h1 className="text-3xl font-bold capitalize sm:w-10/12 sm:text-6xl sm:font-semibold sm:leading-tight">
            {Data && Data.title}{" "}
          </h1>
          <div className="flex flex-col items-center sm:gap-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary sm:h-20 sm:w-20">
              {" "}
              <RiShareForwardLine className="h-4 w-4 sm:h-7 sm:w-7" />
            </div>
            <p className="hidden font-medium tracking-wider sm:block sm:text-xs">
              SHARE
            </p>
          </div>
        </div>

        {/* bento section */}

        <div className="mx-auto mt-7 grid h-[35rem] w-11/12 grid-cols-2 grid-rows-6 gap-2 sm:mt-12 sm:h-[35rem] sm:w-full sm:grid-cols-6 sm:grid-rows-3 sm:gap-4 sm:px-10">
          {/* Images  */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl sm:col-span-3 sm:row-span-2 sm:rounded-3xl">
            <img
              src={Data && Data.image}
              className="h-full w-full object-cover"
            />
            hello
          </div>
          {/* prep time */}
          <div className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2 rounded-2xl bg-primary/70 sm:col-span-1 sm:row-span-1 sm:gap-4 sm:rounded-3xl">
            <div className="flex items-center gap-2">
              {" "}
              <PiClockCountdownFill className="h-4 w-4 sm:h-5 sm:w-5" />
              <h3 className="text-xs font-medium text-black/60 sm:text-base">
                Cooking Time
              </h3>
            </div>

            <p className="text-lg font-bold sm:text-2xl">
              {Data && Data.readyInMinutes} minutes
            </p>
          </div>
          {/* health score - mobile*/}
          <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-primary/75 sm:col-span-1 sm:row-span-1 sm:hidden sm:rounded-3xl">
            <div className="flex items-center gap-2">
              {" "}
              <MdHealthAndSafety className="sm:h-5 sm:w-5" />
              <h3 className="text-xs text-black/70 sm:text-sm">Health Score</h3>
            </div>

            <p className="text-lg font-bold sm:text-3xl">
              {Data && Data.healthScore}
            </p>
          </div>
          {/* nutrition */}
          <div className="col-span-2 row-span-3 overflow-y-scroll rounded-2xl bg-primary scrollbar-none sm:col-span-2 sm:row-span-3 sm:rounded-3xl sm:py-4">
            <div className="px-5">
              <h2 className="sticky p-6 text-center text-xl font-semibold sm:text-2xl">
                Nutritional Information
              </h2>
              <ul>
                <li className="border-b border-black/5 py-2 sm:py-3">
                  <div className="flex justify-between">
                    <p className="text-base font-medium text-black/50 sm:text-lg">
                      Calories
                    </p>
                    <p className="text-base font-medium text-black sm:text-lg">
                      250.0 Kcal
                    </p>
                  </div>
                </li>
                <li className="border-b border-black/5 py-2 sm:py-3">
                  <div className="flex justify-between">
                    <p className="text-base font-medium text-black/50 sm:text-lg">
                      Calories
                    </p>
                    <p className="text-base font-medium text-black sm:text-lg">
                      250.0 Kcal
                    </p>
                  </div>
                </li>
                <li className="border-b border-black/5 py-2 sm:py-3">
                  <div className="flex justify-between">
                    <p className="text-base font-medium text-black/50 sm:text-lg">
                      Calories
                    </p>
                    <p className="text-base font-medium text-black sm:text-lg">
                      250.0 Kcal
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* health score */}
          <div className="hidden flex-col items-center justify-center gap-4 bg-primary/75 sm:col-span-1 sm:row-span-1 sm:flex sm:rounded-3xl">
            <div className="flex items-center gap-2">
              {" "}
              <MdHealthAndSafety className="sm:h-5 sm:w-5" />
              <h3 className="font-medium text-black/70 sm:text-base">
                Health Score
              </h3>
            </div>

            <p className="font-bold sm:text-3xl">{Data && Data.healthScore}</p>
          </div>
          {/* information  */}
          <div className="hidden grid-rows-1 bg-primary/75 sm:col-span-4 sm:grid sm:grid-cols-4 sm:rounded-3xl">
            <div className="flex flex-col items-center justify-center gap-4">
              {" "}
              <p className="text-sm font-semibold text-black/60">Meal Type</p>
              <BiFoodTag
                className={
                  Data && Data.vegetarian
                    ? `h-8 w-8 text-red-700`
                    : `h-8 w-8 text-green-700`
                }
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              {" "}
              <p className="text-sm font-semibold text-black/60">Dish Type</p>
              <p className="text-xl font-bold text-black">
                {Data && Data.dishTypes[0]}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              {" "}
              <p className="text-sm font-semibold text-black/60">Source</p>
              <Link
                to={Data && Data.sourceUrl}
                className="line-clamp-1 px-2 text-center text-xl font-bold text-black underline"
              >
                {Data && Data.sourceName}{" "}
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              {" "}
              <p className="text-sm font-semibold text-black/60">Servings</p>
              <p className="text-xl font-bold text-black">
                {Data && Data.servings}
              </p>
            </div>
          </div>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="px-5 py-10 text-black/50 sm:p-10"
        ></p>

        <section className="p-5 sm:mt-20 sm:grid sm:grid-cols-6">
          {/* ingredients and instructions */}
          <div className="sm:col-span-4">
            {/* ingredients */}
            <div>
              <h2 className="mb-5 text-2xl font-semibold sm:mb-10 sm:text-3xl sm:font-bold">
                Ingredients
              </h2>
              {Data &&
                Data.extendedIngredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className="flex w-full items-center gap-x-4 border-b p-3 sm:gap-x-6 sm:p-5"
                  >
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                      className="h-3 w-3 appearance-none rounded-full border-2 border-black/50 bg-white checked:border-0 checked:bg-black sm:h-4 sm:w-4"
                    />
                    <label
                      htmlFor="vehicle1"
                      className="text-base sm:w-11/12 sm:text-lg"
                    >
                      {ingredient.original}{" "}
                    </label>
                  </div>
                ))}
            </div>

            {/* directions */}
            <div className="mt-20">
              <h2 className="mb-5 text-2xl font-semibold sm:mb-10 sm:text-3xl sm:font-bold">
                Directions
              </h2>
              {Data &&
                Data.analyzedInstructions.map((inst) =>
                  inst.steps.map((step) => (
                    <div
                      key={step.number}
                      className="flex w-full items-center gap-x-4 border-b p-3 sm:gap-x-6 sm:p-5"
                    >
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="h-3 w-3 appearance-none rounded-full border-2 border-black/50 bg-white checked:border-0 checked:bg-black sm:h-4 sm:w-4"
                      />
                      <label
                        htmlFor="vehicle1"
                        className="text-base sm:w-11/12 sm:text-lg"
                      >
                        {step.step}
                      </label>
                    </div>
                  )),
                )}
            </div>
          </div>

          {/* other recipes */}
          <div className="mt-20 sm:col-span-2 sm:mt-0 sm:pl-20">
            <h2 className="mb-5 text-2xl font-semibold sm:mb-10 sm:text-2xl sm:font-semibold">
              Similar Recipes
            </h2>
            <div className="gap-4 space-y-4 sm:mt-6 sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:space-y-0">
              <div className="grid grid-cols-5 grid-rows-1 place-items-center space-x-4 sm:gap-4 sm:space-x-0">
                <img
                  src="/assets/searchImage.png"
                  className="col-span-2 rounded-2xl object-cover"
                />
                <div className="col-span-3">
                  <p className="line-clamp-2 font-bold">
                    Chicken wings Delicious lala
                  </p>
                  <p className="line-clamp-2 pt-2 text-sm text-black/70">
                    by Andrea Poulos
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-5 grid-rows-1 place-items-center space-x-4 sm:gap-4 sm:space-x-0">
                <img
                  src="/assets/searchImage.png"
                  className="col-span-2 rounded-2xl object-cover"
                />
                <div className="col-span-3">
                  <p className="line-clamp-2 font-bold">
                    Chicken wings Delicious lala lala
                  </p>
                  <p className="line-clamp-2 pt-2 text-sm text-black/70">
                    by Andrea Poulos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Subscribe />
      <Footer />
    </>
  );
};

export default RecipeDetails;
