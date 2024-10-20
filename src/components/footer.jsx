const Footer = () => {
  return (
    <div className="mt-20 flex h-fit w-full justify-between border-t p-5">
      <img
        className="object-contain"
        src="/assets/logo.png"
        alt="logo"
        height="50px"
        width="100px"
      />
      <div className="flex gap-x-4 font-inter text-sm sm:text-base">
        <a href="">Home</a>
        <a href="">Recipes</a>
      </div>
    </div>
  );
};

export default Footer;
