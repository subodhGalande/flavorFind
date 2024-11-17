import { FaClock } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Hero = () => {
  const slideContent = [
    {
      title: "sweet potatoe casserole with pecan crumble toppings",
      time: "45 minutes",
      dish: "Side Dish",
      srcName: "Foodista",
      srcUrl: "https://www.foodista.com/recipe/BJ23ZP3F/sweet-potato-casserole",
      id: 662560,
      image: "assets/sweetPotatoe.jpg",
      summary:
        "Sweet Potato Casserole with Pecan Crumble is a creamy, nutty, and irresistibly cozy treat.",
    },
    {
      title: "Farfalle With Broccoli, Carrots And Tomatoes ",
      time: "45 minutes",
      dish: "Side Dish",
      srcName: "Foodista",
      srcUrl:
        " https://www.foodista.com/recipe/YV88GS5Z/farfalle-with-broccoli-carrots-and-tomatoes",
      id: 642582,
      image: "assets/farfalle.jpg",
      summary:
        "Farfalle with Broccoli, Carrots, and Tomatoes is a vibrant, wholesome medley of flavors and textures.",
    },
    {
      title: "Chai Pani’s Malabar Chicken Curry",
      time: "45 minutes",
      dish: "Lunch",
      srcName: "Foodista",
      srcUrl:
        " https://www.foodista.com/recipe/SZ8F8FWX/chai-panis-malabar-chicken-curry",
      id: 637391,
      image: "assets/chaipani.webp",
      summary:
        "Chai Pani’s Malabar Chicken Curry is a rich, aromatic dish bursting with coastal spices, creamy coconut, and a hint of tangy tamarind.",
    },
    {
      title: "Chicken Tikka Masala Indian",
      time: "45 minutes",
      dish: "Lunch",
      srcName: "Foodista",
      srcUrl:
        " https://www.foodista.com/recipe/P7ZX4DTZ/chicken-tikka-masala-indian",
      id: 638389,
      image: "assets/chickenTikka.jpg",
      summary:
        "Chicken Tikka Masala is a rich and smoky Indian classic, featuring tender grilled chicken in a luscious, spiced tomato-cream sauce.",
    },
    {
      title: "Indian Sweet Jackfruit Dessert",
      time: "45 minutes",
      dish: "Dessert",
      srcName: "Foodista",
      srcUrl:
        "https://www.foodista.com/recipe/KQNV4HKP/indian-sweet-jackfruit-dessert-recipe-paleo-aip",
      id: 1095688,
      image: "assets/jackfruit.jpg",
      summary:
        "Indian Sweet Jackfruit Dessert is a tropical delight, blending tender jackfruit with creamy sweetness and aromatic spices.",
    },
  ];

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
      className="my-5 flex h-full w-full overflow-hidden p-5 sm:flex sm:h-screen sm:w-full sm:items-center sm:justify-center sm:px-0"
    >
      {/* hero card  */}
      {slideContent.map((slide, index) => (
        <div key={slide.id}>
          <SwiperSlide>
            <div className="mx-auto flex h-fit w-full flex-col-reverse overflow-hidden rounded-3xl sm:mt-24 sm:h-[80%] sm:w-[85%] sm:flex-row sm:rounded-[3rem]">
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
                  <h1 className="font-inter text-2xl font-bold sm:text-6xl">
                    {slide.title}{" "}
                  </h1>
                  {/* content */}
                  <p className="line-clamp-2 font-inter text-sm font-light leading-relaxed text-black/70 sm:text-base">
                    {slide.summary}
                  </p>
                  {/* chips */}
                  <div className="flex gap-x-4">
                    <div className="flex h-fit w-fit items-center gap-x-2 rounded-full bg-black/10 px-4 py-2 font-inter font-medium sm:gap-x-4 sm:px-4 sm:py-2 sm:text-sm">
                      <FaClock />
                      <p className="font-inter text-xs text-black/70 sm:text-sm">
                        {slide.time}{" "}
                      </p>
                    </div>
                    <div className="flex h-fit w-fit items-center gap-x-2 rounded-full bg-black/10 px-4 py-2 font-inter font-medium sm:gap-x-4 sm:px-4 sm:py-2 sm:text-sm">
                      <ImSpoonKnife />
                      <p className="font-inter text-xs text-black/70 sm:text-sm">
                        {slide.dish}
                      </p>
                    </div>
                  </div>
                </div>
                {/* source and button */}
                <div className="mt-10 flex h-fit w-full items-center justify-between sm:mt-0">
                  <a
                    href={slide.srcUrl}
                    target="_blank"
                    className="flex w-full items-center justify-start gap-x-1 pr-2"
                  >
                    <p className="truncate font-inter text-xs font-semibold sm:text-base">
                      {slide.srcName}{" "}
                    </p>
                    <HiOutlineExternalLink className="h-4 w-4 text-black/70" />
                  </a>
                  <Link
                    to={`recipe/${slide.id}`}
                    className="flex w-60 items-center justify-center gap-x-3 rounded-2xl bg-black p-3 text-white sm:p-4"
                  >
                    <p className="font-inter text-xs sm:text-sm">View Recipe</p>
                    <HiMiniArrowRightCircle className="sm:h-6 sm:w-6" />
                  </Link>
                </div>
              </div>
              {/* imgae and badge */}
              <div className="relative sm:h-full sm:w-1/2 sm:rounded">
                <img src={slide.image} className="h-full w-full object-cover" />
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
