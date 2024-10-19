import { FaClock } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={-100}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1.07}
      centeredSlides={true}
      initialSlide={1}
      className="mt-10 hidden h-[calc(100vh-76px)] max-h-[720px] w-full items-center justify-center overflow-hidden sm:flex"
    >
      {/* hero card  */}

      <SwiperSlide>
        <div className="mx-auto flex overflow-hidden rounded-[3rem] sm:h-[90%] sm:w-[85%]">
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

          {/* imgae and badge */}
          <div className="relative sm:h-full sm:w-1/2 sm:rounded">
            <img
              src="/assets/chickenWings.png"
              className="h-full w-full object-cover"
            />
            <div>
              <img
                src="/assets/Badge.png"
                className="absolute -left-16 top-10 z-50 h-32 w-32 object-cover"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-auto flex overflow-hidden rounded-[3rem] sm:h-[90%] sm:w-[85%]">
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

          {/* imgae and badge */}
          <div className="relative sm:h-full sm:w-1/2 sm:rounded">
            <img
              src="/assets/chickenWings.png"
              className="h-full w-full object-cover"
            />
            <div>
              <img
                src="/assets/Badge.png"
                className="absolute -left-16 top-10 z-50 h-32 w-32 object-cover"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-auto flex overflow-hidden rounded-[3rem] sm:h-[90%] sm:w-[85%]">
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

          {/* imgae and badge */}
          <div className="relative sm:h-full sm:w-1/2 sm:rounded">
            <img
              src="/assets/chickenWings.png"
              className="h-full w-full object-cover"
            />
            <div>
              <img
                src="/assets/Badge.png"
                className="absolute -left-16 top-10 z-50 h-32 w-32 object-cover"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-auto flex overflow-hidden rounded-[3rem] sm:h-[90%] sm:w-[85%]">
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

          {/* imgae and badge */}
          <div className="relative sm:h-full sm:w-1/2 sm:rounded">
            <img
              src="/assets/chickenWings.png"
              className="h-full w-full object-cover"
            />
            <div>
              <img
                src="/assets/Badge.png"
                className="absolute -left-16 top-10 z-50 h-32 w-32 object-cover"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
