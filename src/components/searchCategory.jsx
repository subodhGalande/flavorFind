import Results from "./results";
import CategoryCard from "./categoryCard";
const SearchCategory = () => {
  return (
    <>
      <section className="h-full w-full p-4 font-inter">
        {/* Search Box */}
        <form className="relative w-full rounded-xl border px-4 py-2">
          <input
            type="text"
            className="w-[80%] placeholder:text-sm placeholder:font-light"
            placeholder="search recipes"
          />
          <button
            type="submit"
            className="absolute bottom-1 right-1 z-20 rounded-lg bg-black px-3 py-1 text-white"
          >
            Search
          </button>
        </form>
        {/* searchbox results */}
        <Results />

        {/* categories */}

        <div className="mt-10">
          <div className="">
            <h1 className="section-heading">Categories</h1>
            <div className="mt-5 flex h-fit flex-wrap justify-center gap-6">
              <CategoryCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchCategory;
