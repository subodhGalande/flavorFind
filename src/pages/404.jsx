import { useContext } from "react";
import { ErrorContext } from "../components/errorContext";
import Navbar from "../components/navbar";

const NotFound = () => {
  const error = useContext(ErrorContext);
  return (
    <>
      <Navbar />
      <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-4 overflow-hidden bg-primary p-10 font-inter sm:gap-8">
        <img
          src="/assets/plate.png"
          className="absolute -right-40 -top-20 -rotate-90 sm:-bottom-36 sm:-right-20 sm:top-auto sm:rotate-0"
        />
        <img
          src="/assets/salad.png"
          className="absolute -bottom-28 -left-20 sm:-bottom-40 sm:-left-20"
        />
        <h1 className="text-center text-4xl font-extrabold text-black/80 sm:text-6xl">
          404 Not Found
        </h1>
        <p className="text-center text-black/50 sm:text-xl">
          Oops, that recipe went stale! How about a fresh start on our{" "}
          <a href="/" className="font-medium text-black underline">
            homepage?
          </a>
        </p>
        <p>{error}</p>
      </div>
    </>
  );
};

export default NotFound;
