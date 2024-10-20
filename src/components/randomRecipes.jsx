import { FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";

const RandomRecipes = () => {
  const random = [1, 2, 3, 4, 5, 6];
  return (
    <section className="mx-auto mt-10 p-5 font-inter sm:w-10/12">
      <p className="mx-auto text-center text-2xl font-semibold text-black">
        Suggested recipes
      </p>
      {/* recipe card container */}
      <div className="mt-5 flex flex-col gap-y-4 sm:w-full sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
        {random &&
          random.map((recipe, index) => (
            <div
              key={index}
              className="from-primary h-fit w-full rounded-3xl bg-gradient-to-t to-60% p-4 sm:w-fit"
            >
              <div className="flex flex-col gap-y-3 overflow-hidden sm:h-fit sm:w-72">
                <div className="h-44 w-full overflow-hidden rounded-2xl">
                  {" "}
                  <img
                    src="/assets/searchImage.png"
                    alt="recipe image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h2 className="line-clamp-2 font-semibold sm:text-base">
                    Mixed Tropical Fruit Salad with Superfood Boosts Mixed
                    Tropical Fruit Salad with Superfood Boosts{" "}
                  </h2>
                  <div className="flex gap-x-4">
                    <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                      <FaClock />
                      <p className="font-inter text-xs text-black/70 sm:text-sm">
                        30 minutes
                      </p>
                    </div>
                    <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                      <ImSpoonKnife />
                      <p className="font-inter text-xs text-black/70 sm:text-sm">
                        Chicken
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {/* recipe card */}
      </div>
    </section>
  );
};

export default RandomRecipes;
