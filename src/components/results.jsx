import { FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdClose } from "react-icons/md";

const Results = () => {
  return (
    <div className="mt-2 hidden h-screen w-full space-y-6 overflow-scroll rounded-xl border p-5">
      <div className="flex h-fit w-full items-center justify-between">
        <p className="text-xs">search results</p>
        <MdClose />
      </div>
      {/* recipe card */}
      <div className="flex h-fit w-full flex-col gap-y-3 overflow-hidden">
        <div className="h-44 w-full overflow-hidden rounded-2xl">
          {" "}
          <img
            src="/assets/searchImage.png"
            alt="recipe image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold">
            Mixed Tropical Fruit Salad with Superfood Boosts{" "}
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

      <div className="flex h-fit w-full flex-col gap-y-3 overflow-hidden">
        <div className="h-44 w-full overflow-hidden rounded-2xl">
          {" "}
          <img
            src="/assets/searchImage.png"
            alt="recipe image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold">
            Mixed Tropical Fruit Salad with Superfood Boosts{" "}
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

      <div className="flex h-fit w-full flex-col gap-y-3 overflow-hidden">
        <div className="h-44 w-full overflow-hidden rounded-2xl">
          {" "}
          <img
            src="/assets/searchImage.png"
            alt="recipe image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold">
            Mixed Tropical Fruit Salad with Superfood Boosts{" "}
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
  );
};

export default Results;
