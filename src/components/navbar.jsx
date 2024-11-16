import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { RiMenu5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleOpen = () => setisOpen(!isOpen);

  const navigate = useNavigate();

  const handleNavigateToSection = () => {
    navigate("/#search");
  };

  return (
    <>
      {/* desktop navbar */}
      <nav className="fixed top-0 z-50 mx-auto hidden bg-white sm:flex sm:w-full sm:justify-between sm:border sm:p-4">
        <Link className="self-center" to="#">
          <img
            className="object-contain"
            src="/assets/logo.png"
            alt="logo"
            height="50px"
            width="100px"
          />
        </Link>

        <div className="flex flex-row font-inter font-medium sm:items-center sm:gap-x-8 sm:text-base">
          <Link to="/">Home</Link>
          <button onClick={handleNavigateToSection}>Search</button>
        </div>
        <div className="flex flex-row sm:items-center sm:gap-x-4">
          <a href="">
            <FaSquareXTwitter className="sm:h-10 sm:w-5" />
          </a>
          <a href="">
            {" "}
            <AiFillInstagram className="sm:h-10 sm:w-6" />
          </a>
          <a href="">
            <FaSquareFacebook className="sm:h-10 sm:w-5" />
          </a>
        </div>
      </nav>
      {/* mobile navbar */}
      <nav
        className={`relative flex items-center justify-between ${isOpen ? "" : "border"} px-4 py-4 sm:hidden`}
      >
        <Link to="#">
          <img src="/assets/logo.png" height="50px" width="100px" />
        </Link>

        {isOpen ? (
          <CgClose onClick={toggleOpen} className="h-6 w-6" />
        ) : (
          <RiMenu5Line onClick={toggleOpen} className="h-6 w-6" />
        )}

        <div
          className={`absolute ${isOpen ? "flex" : "hidden"} inset-0 top-full z-50 h-fit w-full flex-col gap-y-6 rounded-2xl border-b bg-white px-10 py-4`}
        >
          <div className="flex flex-col gap-y-4 font-inter font-medium sm:text-base">
            <Link href="#">Home</Link>
            <button className="text-left" onClick={handleNavigateToSection}>
              Search Recipes
            </button>
          </div>
          <div className="flex flex-row gap-x-4 sm:items-center">
            <a href="">
              <FaSquareXTwitter className="h-10 w-6" />
            </a>
            <a href="">
              {" "}
              <AiFillInstagram className="h-10 w-8" />
            </a>
            <a href="">
              <FaSquareFacebook className="h-10 w-6" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
