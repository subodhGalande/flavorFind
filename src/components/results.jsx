import { FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Results = ({ searchData, setSearchData }) => {
  const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClose = () => {
    setSearchData(null);
  };

  return (
    <div
      className={`relative mx-auto mt-2 h-[40rem] w-full overflow-x-hidden overflow-y-scroll rounded-xl border-2 p-5 scrollbar-thin scrollbar-track-transparent ${searchData !== null ? "" : "hidden"} scrollbar-thumb-primary sm:w-[60rem] sm:flex-col sm:space-y-0 sm:rounded-3xl sm:px-5 sm:py-1`}
    >
      {console.log(searchData.results)}
      <div className="flex h-fit w-full items-center justify-between bg-white py-4 sm:px-5">
        <p>search results</p>
        <button onClick={handleClose}>
          <MdClose className="sm:h-5 sm:w-5" />
        </button>
      </div>
      {/* recipe card container */}
      <div className="h-fit w-full space-y-10 sm:grid sm:grid-cols-3 sm:grid-rows-4 sm:place-content-center sm:gap-8 sm:space-y-0 sm:pb-4">
        {/* card */}

        {searchData &&
          searchData.results.map((result) => (
            <Link
              to={`recipe/${result.id}`}
              key={result.id}
              className="flex flex-col gap-y-3 overflow-hidden sm:h-[17rem] sm:w-64"
            >
              <div className="h-44 w-full overflow-hidden rounded-2xl">
                {" "}
                {result.image && result.image ? (
                  <img
                    src={result.image}
                    alt="recipe image"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src="/assets/foodPlaceholder.jpg"
                    alt="recipe image"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="space-y-3">
                <h2 className="line-clamp-2 font-semibold sm:h-12">
                  {result.title}{" "}
                </h2>
                <div className="flex gap-x-4">
                  <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                    <FaClock />
                    <p className="font-inter text-xs text-black/70 sm:text-sm">
                      30 minutes
                    </p>
                  </div>
                  <div className="flex h-fit w-fit items-center gap-x-2 font-inter font-medium">
                    <ImSpoonKnife />
                    <p className="font-inter text-xs text-black/70 sm:text-sm">
                      Chicken
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Results;
