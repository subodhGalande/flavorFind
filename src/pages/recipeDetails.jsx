import { BiFoodTag } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import { SlPrinter } from "react-icons/sl";

const RecipeDetails = () => {
  return (
    <section className="mx-auto font-inter sm:w-11/12 sm:p-10">
      {/* heading and button */}
      <div className="mx-auto flex items-center justify-between px-5">
        <h1 className="line-clamp-2 capitalize sm:text-[64px] sm:font-semibold">
          {" "}
          Health Japanese fried Rice
        </h1>
        <div className="flex flex-col items-center sm:gap-y-2">
          <div className="flex w-fit items-center justify-center rounded-full bg-primary sm:h-20 sm:w-20">
            {" "}
            <SlPrinter className="sm:h-5 sm:w-5" />
          </div>
          <p className="text-xs font-medium tracking-wider">PRINT</p>
        </div>
      </div>

      {/* bento section */}

      <div className="mx-auto grid w-full sm:mt-20 sm:h-[35rem] sm:grid-cols-6 sm:grid-rows-3 sm:gap-4 sm:px-10">
        {/* Images  */}
        <div className="col-span-3 row-span-2 overflow-hidden border sm:rounded-3xl">
          <img
            src="/assets/chickenWings.png"
            className="h-full w-full sm:object-cover"
          />
        </div>
        {/* prep time */}
        <div className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-4 bg-primary/50 sm:rounded-3xl">
          <div className="flex items-center gap-2">
            {" "}
            <PiClockCountdownFill className="sm:h-5 sm:w-5" />
            <h3 className="text-black/70 sm:text-sm">Cooking Time</h3>
          </div>

          <p className="font-bold sm:text-2xl">15 minutes</p>
        </div>
        {/* nutrition */}
        <div className="col-span-2 row-span-3 overflow-y-scroll border bg-primary scrollbar-none sm:rounded-3xl sm:py-4">
          <div className="px-5">
            <h2 className="sticky p-6 text-center font-semibold sm:text-2xl">
              Nutritional Information
            </h2>
            <ul>
              <li className="border-b-2 border-black/5 sm:py-3">
                <div className="flex justify-between">
                  <p className="font-medium text-black/50 sm:text-lg">
                    Calories
                  </p>
                  <p className="font-medium text-black sm:text-lg">
                    250.0 Kcal
                  </p>
                </div>
              </li>
              <li className="border-b-2 border-black/5 sm:py-3">
                <div className="flex justify-between">
                  <p className="font-medium text-black/50 sm:text-lg">
                    Calories
                  </p>
                  <p className="font-medium text-black sm:text-lg">
                    250.0 Kcal
                  </p>
                </div>
              </li>
              <li className="border-b-2 border-black/5 sm:py-3">
                <div className="flex justify-between">
                  <p className="font-medium text-black/50 sm:text-lg">
                    Calories
                  </p>
                  <p className="font-medium text-black sm:text-lg">
                    250.0 Kcal
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* health score */}
        <div className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-4 bg-primary/50 sm:rounded-3xl">
          <div className="flex items-center gap-2">
            {" "}
            <MdHealthAndSafety className="sm:h-5 sm:w-5" />
            <h3 className="text-black/70 sm:text-sm">Health Score</h3>
          </div>

          <p className="font-bold sm:text-3xl">19.0</p>
        </div>
        {/* information  */}
        <div className="col-span-4 grid grid-cols-4 grid-rows-1 bg-primary/50 sm:rounded-3xl">
          <div className="flex flex-col items-center justify-center gap-4">
            {" "}
            <p className="text-sm font-semibold text-black/60">Meal Type</p>
            <BiFoodTag className="h-8 w-8" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            {" "}
            <p className="text-sm font-semibold text-black/60">Servings</p>
            <p className="text-2xl font-bold text-black">2</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            {" "}
            <p className="text-sm font-semibold text-black/60">Dish Type</p>
            <p className="text-xl font-bold text-black">Lunch</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            {" "}
            <p className="text-sm font-semibold text-black/60">Source</p>
            <p className="line-clamp-2 px-3 text-center text-base font-bold text-black">
              Full Belly Sisters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
