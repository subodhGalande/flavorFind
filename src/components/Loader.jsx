const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center space-x-2 bg-white">
      <span className="sr-only">Loading...</span>
      <div className="h-6 w-6 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
      <div className="h-6 w-6 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
      <div className="h-6 w-6 animate-bounce rounded-full bg-gray-400"></div>
    </div>
  );
};

export default Loader;
