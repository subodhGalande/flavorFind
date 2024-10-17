import { FaClock } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im";

const HeroCard = () => {
  return (
    // hero card container
    <div className="flex h-full w-full justify-center sm:items-center sm:py-0">
      {/* hero card  */}
      <div className="mt-10 flex h-2/3 w-5/6 flex-col-reverse overflow-hidden rounded-3xl sm:mt-0 sm:h-5/6 sm:w-4/5 sm:flex-row sm:rounded-[3rem]">
        <div className="bg-primary flex h-full w-1/2 flex-col justify-between p-10">
          {/* text and badge */}
          <div className="flex flex-col gap-y-6">
            {/* badge */}
            <div className="flex h-fit w-fit items-center rounded-full bg-white font-inter font-medium sm:gap-x-4 sm:px-4 sm:py-2 sm:text-sm">
              <img
                src="/assets/hotRecipe.png"
                className="h-5 w-5 object-contain"
              />{" "}
              Hot Recipes
            </div>
            {/* heading */}
            <h1 className="font-inter text-[64px] font-bold leading-[4.5rem]">
              Spicy delicious chicken wings
            </h1>
            {/* content */}
            <p className="line-clamp-2 font-inter text-base font-light leading-relaxed text-black/70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              perferendis possimus impedit magnam minima! Rem tenetur nostrum
              vel, quasi, dignissimos expedita dicta sint debitis eveniet
              accusamus officiis eius explicabo quo?{" "}
            </p>
            {/* chips */}
            <div className="flex gap-x-4">
              <div className="flex h-fit w-fit items-center rounded-full bg-black/10 font-inter font-medium sm:gap-x-4 sm:px-4 sm:py-2 sm:text-sm">
                <FaClock />
                <p className="font-inter text-sm text-black/70">30 minutes</p>
              </div>
              <div className="flex h-fit w-fit items-center rounded-full bg-black/10 font-inter font-medium sm:gap-x-4 sm:px-4 sm:py-2 sm:text-sm">
                <ImSpoonKnife />
                <p className="font-inter text-sm text-black/70">Chicken</p>
              </div>
            </div>
          </div>

          {/* source and button */}
          <div className="flex h-fit w-full items-center justify-between">
            <a href="#" className="flex items-center justify-center gap-x-1">
              <p className="font-inter font-semibold">Source Name</p>
              <HiOutlineExternalLink className="h-4 w-4 text-black/70" />
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-x-3 rounded-2xl bg-black p-4 text-white"
            >
              <p className="font-inter text-sm">View Recipes</p>
              <HiMiniArrowRightCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="sm:h-full sm:w-1/2 sm:rounded">
          <img
            src="/assets/chickenWings.png"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
