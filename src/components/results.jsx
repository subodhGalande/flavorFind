import { FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdClose } from "react-icons/md";

const Results = ({ setIsOpen, isOpen }) => {
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary mx-auto mt-2 h-screen w-full space-y-6 overflow-x-hidden overflow-y-scroll rounded-xl border px-5 pt-5 sm:flex sm:h-96 sm:w-4/5 sm:flex-col sm:rounded-3xl">
      <div className="flex h-fit w-full items-center justify-between bg-white sm:px-5">
        <p className="text-xs sm:text-base">search results</p>
        <button onClick={handleOpen}>
          {" "}
          <MdClose className="sm:h-5 sm:w-5" />
        </button>
      </div>
      {/* recipe card */}
      <div className="h-full w-full space-y-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-10 sm:space-y-0">
        {" "}
        <div className="flex flex-col gap-y-3 overflow-hidden sm:h-fit sm:w-80">
          <div className="h-44 w-full overflow-hidden rounded-2xl">
            {" "}
            <img
              src="/assets/searchImage.png"
              alt="recipe image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <h2 className="line-clamp-2 font-semibold sm:text-lg">
              Mixed Tropical Fruit Salad with Superfood Boosts Mixed Tropical
              Fruit Salad with Superfood Boosts{" "}
            </h2>
            <div className="flex gap-x-4">
              <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                <FaClock />
                <p className="font-inter text-xs text-black/70 sm:text-base">
                  30 minutes
                </p>
              </div>
              <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                <ImSpoonKnife />
                <p className="font-inter text-xs text-black/70 sm:text-base">
                  Chicken
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div className="flex flex-col gap-y-3 overflow-hidden sm:h-fit sm:w-80">
          <div className="h-44 w-full overflow-hidden rounded-2xl">
            {" "}
            <img
              src="/assets/searchImage.png"
              alt="recipe image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <h2 className="line-clamp-2 font-semibold">
              Mixed Tropical Fruit Salad with Superfood Boosts Mixed Tropical
              Fruit Salad with Superfood Boosts{" "}
            </h2>
            <div className="flex gap-x-4">
              <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                <FaClock />
                <p className="font-inter text-xs text-black/70">30 minutes</p>
              </div>
              <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                <ImSpoonKnife />
                <p className="font-inter text-xs text-black/70">Chicken</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-y-3 overflow-hidden sm:h-fit sm:w-80">
          <div className="h-44 w-full overflow-hidden rounded-2xl">
            {" "}
            <img
              src="/assets/searchImage.png"
              alt="recipe image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <h2 className="line-clamp-2 font-semibold">
              Mixed Tropical Fruit Salad with Superfood Boosts Mixed Tropical
              Fruit Salad with Superfood Boosts{" "}
            </h2>
            <div className="flex gap-x-4">
              <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                <FaClock />
                <p className="font-inter text-xs text-black/70">30 minutes</p>
              </div>
              <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                <ImSpoonKnife />
                <p className="font-inter text-xs text-black/70">Chicken</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-y-3 overflow-hidden sm:h-fit sm:w-80">
          <div className="h-44 w-full overflow-hidden rounded-2xl">
            {" "}
            <img
              src="/assets/searchImage.png"
              alt="recipe image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <h2 className="line-clamp-2 font-semibold">
              Mixed Tropical Fruit Salad with Superfood Boosts Mixed Tropical
              Fruit Salad with Superfood Boosts{" "}
            </h2>
            <div className="flex gap-x-4">
              <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                <FaClock />
                <p className="font-inter text-xs text-black/70">30 minutes</p>
              </div>
              <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                <ImSpoonKnife />
                <p className="font-inter text-xs text-black/70">Chicken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
