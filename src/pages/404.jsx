import { useContext } from "react";
import { ErrorContext } from "../components/errorContext";

const NotFound = () => {
  const error = useContext(ErrorContext);
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 p-10 font-inter sm:gap-8">
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
  );
};

export default NotFound;
