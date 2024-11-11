import Results from "./results";
import { useState } from "react";

const SearchCategory = () => {
  const [Search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setSearch(true);
      setIsLoading(false);
    }, 5000);
  };

  return (
    <>
      <section
        id="search"
        className="mt-20 h-full w-full p-4 font-inter sm:mt-10"
      >
        {/* Search Box */}
        <form
          onSubmit={handleOpen}
          className="relative mx-auto w-full rounded-xl border-2 px-4 py-2 sm:h-14 sm:w-2/5"
        >
          <input
            type="text"
            className="h-full w-[80%] outline-none placeholder:text-sm placeholder:font-light"
            placeholder="search recipes"
          />

          {isLoading ? (
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
              </svg>{" "}
              searching...
            </button>
          ) : (
            <button
              type="submit"
              className="absolute bottom-1 right-1 z-20 rounded-lg bg-black px-3 py-1 text-white sm:bottom-[0.4rem] sm:right-2 sm:h-3/4 sm:px-4"
            >
              Search
            </button>
          )}
        </form>
        <div className="mx-auto my-4 flex w-full flex-wrap items-center justify-evenly gap-x-4 gap-y-2 sm:justify-center">
          <button className="rounded-lg border px-2 py-1 text-sm">
            breakfast
          </button>
          <button className="rounded-lg border px-2 py-1 text-sm">lunch</button>
          <button className="rounded-lg border px-2 py-1 text-sm">meat</button>
          <button className="rounded-lg border px-2 py-1 text-sm">
            chocolate
          </button>
          <button className="rounded-lg border px-2 py-1 text-sm">
            vegetarian
          </button>
          <button className="rounded-lg border px-2 py-1 text-sm">
            avocado
          </button>
          <button className="rounded-lg border px-2 py-1 text-sm">
            chicken
          </button>
          <button className="rounded-lg border px-2 py-1 text-sm">soup</button>
        </div>

        {/* searchbox results */}
        <Results searchState={Search} setSearchState={setSearch} />
      </section>
    </>
  );
};

export default SearchCategory;
