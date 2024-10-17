import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex w-full sm:px-10 border sm:py-5 sm:justify-between ">
      <img
        className="object-contain"
        src="/assets/logo.png"
        alt="logo"
        height="50px"
        width="100px"
      />
      <div className="flex flex-row sm:gap-x-8 font-medium font-inter sm:items-center">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">Contact</a>
      </div>
      <div className="flex flex-row sm:gap-x-4 sm:items-center">
        <a href="">
          <FaSquareXTwitter className=" sm:h-10 sm:w-5" />
        </a>
        <a href="">
          {" "}
          <AiFillInstagram className=" sm:h-10 sm:w-6" />
        </a>
        <a href="">
          <FaSquareFacebook className=" sm:h-10 sm:w-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
