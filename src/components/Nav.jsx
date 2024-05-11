import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="h-[10vh] w-full flex items-center justify-center gap-[12rem]">
      <img
        className="h-full"
        src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
        alt=""
      />
      <div className="flex gap-x-12 text-md items-center">
        <Link className="hover:text-green-600 duration-200 font-semibold" to="/">
          Home
        </Link>
        <Link className="hover:text-green-600 duration-200 font-semibold" to="/recipes">
        Recipes
        </Link>
        <Link className="hover:text-green-600 duration-200 font-semibold" to="/about">
          About
        </Link>
        <Link className="hover:text-green-600 duration-200 font-semibold" to="/contact">
          Contact
        </Link>
      </div>
      <i className="text-3xl ri-grid-fill text-green-600"></i>
    </nav>
  );
};

export default Nav;
