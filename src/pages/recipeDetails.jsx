import { SlPrinter } from "react-icons/sl";

const RecipeDetails = () => {
  return (
    <section className="font-inter sm:p-10">
      {/* heading and button */}
      <div className="flex items-center justify-between px-5">
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

      <div className="grid w-full sm:mt-10 sm:h-[80vh] sm:grid-cols-6 sm:grid-rows-3 sm:gap-4 sm:px-10">
        {/* first  */}
        <div className="col-span-3 row-span-2 overflow-hidden border sm:rounded-3xl">
          <img
            src="/assets/chickenWings.png"
            className="h-full w-full sm:object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 border bg-primary sm:rounded-3xl">
          hello per
        </div>
        <div className="col-span-2 row-span-3 border bg-primary sm:rounded-3xl">
          hello per
        </div>
        <div className="col-span-1 row-span-1 border bg-primary sm:rounded-3xl">
          hello per
        </div>
        {/* second */}
        <div className="col-span-4 border bg-primary sm:rounded-3xl">
          hello per
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
