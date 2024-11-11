import Results from "./results";
import { useState } from "react";

const SearchCategory = () => {
  const [Search, setSearch] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setSearch(true);
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
          <button
            type="submit"
            className="absolute bottom-1 right-1 z-20 rounded-lg bg-black px-3 py-1 text-white sm:bottom-[0.4rem] sm:right-2 sm:h-3/4 sm:px-4"
          >
            Search
          </button>
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
