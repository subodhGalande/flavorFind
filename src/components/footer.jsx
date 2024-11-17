const Footer = () => {
  return (
    <div className="mt-20 flex h-fit w-full justify-between border-t p-5">
      <a href="">
        {" "}
        <img
          className="object-contain"
          src="/assets/logo.png"
          alt="logo"
          height="50px"
          width="100px"
        />
      </a>

      <div className="flex gap-x-4 font-inter text-sm sm:text-base">
        <p className="text-sm text-black/70">
          Made with ❤️ by{" "}
          <a
            href="https://subodhgalande.netlify.app"
            className="font-semibold underline"
          >
            Subodh Galande
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
