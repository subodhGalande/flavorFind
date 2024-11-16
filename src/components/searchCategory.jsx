import Results from "./results";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchCategory = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const location = useLocation();

  useEffect(() => {
    // Check for the hash in the URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [IsLoading, setIsLoading] = useState(false);
  const [SearchData, setSearchData] = useState(null);
  const [ErrorSearch, setErrorSearch] = useState(false);

  const queryRef = useRef("");

  const categories = [
    {
      text: "Breakfast",
      img: "/assets/croissant.png",
    },
    {
      text: "lunch",
      img: "/assets/fried-rice.png",
    },
    {
      text: "meat",
      img: "/assets/meat.png",
    },
    {
      text: "chocolate",
      img: "/assets/chocolate-bar.png",
    },
    {
      text: "avocado",
      img: "/assets/avocado.png",
    },
    {
      text: "chicken",
      img: "/assets/chicken-leg.png",
    },
    {
      text: "soup",
      img: "/assets/hot-soup.png",
    },
    {
      text: "vegetarian",
      img: "/assets/vegetable.png",
    },
  ];

  const searchRecipe = async (query) => {
    setIsLoading(true);
    setSearchData(null);
    try {
      const response = await axios.get(`${baseUrl}recipes/complexSearch`, {
        params: {
          apiKey: apiKey,
          ...(query && { query: query }),
        },
      });
      setSearchData(response.data);
      setErrorSearch(false);
    } catch (e) {
      setErrorSearch(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpen = async (e) => {
    e.preventDefault();
    const query = queryRef.current.value.trim();
    if (query) {
      await searchRecipe(query);
      queryRef.current.value = "";
    }
  };
  const handleClick = async (query) => {
    console.log(query);
    await searchRecipe(query);
  };
  return (
    <>
      <section
        id="search"
        className="mt-20 h-full w-full scroll-mt-20 p-4 font-inter sm:mt-10"
      >
        {/* Search Box */}
        <form
          onSubmit={handleOpen}
          className="relative mx-auto w-full rounded-xl border-2 px-4 py-2 sm:h-14 sm:w-2/5"
        >
          <input
            type="text"
            ref={queryRef}
            className="h-full w-[80%] outline-none placeholder:text-sm placeholder:font-light"
            placeholder="search recipes"
            required
          />

          {IsLoading ? (
            <button
              className="absolute bottom-1 right-1 z-20 flex items-center gap-x-2 rounded-lg bg-black/50 px-3 py-1 text-white sm:bottom-[0.4rem] sm:right-2 sm:h-3/4 sm:px-4"
              disabled
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                  opacity="0.25"
                />
                <path
                  fill="currentColor"
                  d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.75s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  />
                </path>
              </svg>
              searching
            </button>
          ) : (
            <button
              type="submit"
              className="absolute bottom-1 right-1 z-20 rounded-lg bg-black px-3 py-1 text-white duration-150 hover:scale-105 sm:bottom-[0.4rem] sm:right-2 sm:h-3/4 sm:px-4"
            >
              Search
            </button>
          )}
        </form>
        {ErrorSearch ||
          (SearchData && SearchData.totalResults === 0 && (
            <p className="p-4 text-center text-xs text-black/60 sm:text-sm">
              Error! could not fetch recipes, try again
            </p>
          ))}

        {/* categories */}
        <div className="mx-auto my-4 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-center">
          {categories &&
            categories.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item.text)}
                className="flex items-center gap-2 rounded-lg border px-2 py-1 text-sm duration-150 hover:scale-110"
              >
                <img src={item.img} height="20px" width="18px" />
                {item.text}
              </button>
            ))}
        </div>

        {/* searchbox results */}
        {SearchData && SearchData.totalResults !== 0 && (
          <Results searchData={SearchData} setSearchData={setSearchData} />
        )}
      </section>
    </>
  );
};

export default SearchCategory;
