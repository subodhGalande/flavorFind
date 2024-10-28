import { FaClock } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  const slides = [1, 2, 3, 4];

  const windowWidth = window.innerWidth > 450 ? true : false;
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={windowWidth ? -100 : 100}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={windowWidth ? 1.07 : 1}
      centeredSlides={true}
      initialSlide={1}
      className="my-5 h-full items-center justify-center overflow-hidden px-5 sm:mt-10 sm:flex sm:h-[calc(100vh-76px)] sm:max-h-[720px] sm:px-0"
    >
      {/* hero card  */}
      {slides.map((slide, index) => (
        <div key={index}>
          <SwiperSlide>
            <div className="col mx-auto flex w-full flex-col-reverse overflow-hidden rounded-3xl sm:h-[90%] sm:w-[85%] sm:flex-row sm:rounded-[3rem]">
              <div className="flex flex-col justify-between bg-primary p-5 sm:h-full sm:w-1/2 sm:p-10">
                {/* text and badge */}
                <div className="flex flex-col gap-y-4 sm:gap-y-6">
                  {/* badge */}
                  <div className="flex h-fit w-fit items-center gap-x-2 rounded-full bg-white px-4 py-2 font-inter text-xs font-medium sm:gap-x-4 sm:px-4 sm:py-2 sm:text-sm">
                    <img
                      src="/assets/hotRecipe.png"
                      className="h-5 w-5 object-contain"
                    />{" "}
                    Hot Recipes
                  </div>
                  {/* heading */}
                  <h1 className="line-clamp-2 font-inter text-2xl font-bold sm:text-[64px] sm:leading-[4.5rem]">
                    Spicy delicious chicken wings
                  </h1>
                  {/* content */}
                  <p className="line-clamp-2 font-inter text-sm font-light leading-relaxed text-black/70 sm:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod perferendis possimus impedit magnam minima! Rem tenetur
                    nostrum vel, quasi, dignissimos expedita dicta sint debitis
                    eveniet accusamus officiis eius explicabo quo?{" "}
                  </p>
                  {/* chips */}
                  <div className="flex gap-x-4">
                    <div className="flex h-fit w-fit items-center gap-x-2 rounded-full bg-black/10 px-4 py-2 font-inter font-medium sm:gap-x-4 sm:px-4 sm:py-2 sm:text-sm">
                      <FaClock />
                      <p className="font-inter text-xs text-black/70 sm:text-sm">
                        30 minutes
                      </p>
                    </div>
                    <div className="flex h-fit w-fit items-center gap-x-2 rounded-full bg-black/10 px-4 py-2 font-inter font-medium sm:gap-x-4 sm:px-4 sm:py-2 sm:text-sm">
                      <ImSpoonKnife />
                      <p className="font-inter text-xs text-black/70 sm:text-sm">
                        Chicken
                      </p>
                    </div>
                  </div>
                </div>
                {/* source and button */}
                <div className="mt-10 flex h-fit w-full items-center justify-between sm:mt-0">
                  <a
                    href="#"
                    className="flex w-full items-center justify-start gap-x-1 pr-2"
                  >
                    <p className="truncate font-inter text-xs font-semibold sm:text-base">
                      Source Name
                    </p>
                    <HiOutlineExternalLink className="h-4 w-4 text-black/70" />
                  </a>
                  <a
                    href="#"
                    className="flex w-60 items-center justify-center gap-x-3 rounded-2xl bg-black p-3 text-white sm:p-4"
                  >
                    <p className="font-inter text-xs sm:text-sm">
                      View Recipes
                    </p>
                    <HiMiniArrowRightCircle className="sm:h-6 sm:w-6" />
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
                    className="absolute -bottom-10 right-3 z-50 h-20 w-20 object-cover sm:-left-16 sm:top-10 sm:h-32 sm:w-32"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Hero;
