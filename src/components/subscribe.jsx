const Subscribe = () => {
  return (
    <div className="bg-primary relative mx-auto mt-20 flex h-72 w-11/12 flex-col justify-center gap-y-6 overflow-clip rounded-3xl px-5 font-inter sm:h-96 sm:w-8/12 sm:justify-center sm:gap-y-10">
      <img
        src="/assets/plate.png"
        height="50px"
        width="200px"
        className="absolute -left-20 -top-14 rotate-180 sm:hidden"
      />
      <img
        src="/assets/plate.png"
        height="50px"
        width="300px"
        className="absolute -bottom-24 -right-20 hidden sm:block"
      />
      <img
        src="/assets/salad.png"
        height="50px"
        width="400px"
        className="absolute -bottom-40 -left-20 hidden sm:block"
      />
      <div className="space-y-4">
        <h1 className="px-10 text-center text-3xl font-bold sm:text-4xl">
          Deliciousness to your Inbox
        </h1>
        <p className="mx-auto px-2 text-center text-xs text-black/70 sm:w-1/2 sm:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
          dolor sit amet consectetur,
        </p>
      </div>
      <form className="relative mx-auto w-full rounded-xl border bg-white px-4 py-2 sm:h-14 sm:w-3/5">
        <input
          type="text"
          className="h-full w-[80%] outline-none placeholder:text-sm placeholder:font-light"
          placeholder="enter email"
        />
        <button
          type="submit"
          className="absolute bottom-1 right-1 z-20 rounded-lg bg-black px-3 py-1 text-white sm:bottom-[0.4rem] sm:right-2 sm:h-3/4 sm:px-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
