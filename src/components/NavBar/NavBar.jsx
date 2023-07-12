import "./NavBar.scss";
// import logo from "../../images/letter-k.svg";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { LiaCocktailSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          {/* <img src={logo} alt="logo" className="icon" /> */}
          <svg
            className="icon"
            width="30px"
            height="30px"
            viewBox="0 0 64 64"
            role="img"
          >
            <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m6.016 44.508l-8.939-12.666l-2.922 2.961v9.705h-5.963V17.492h5.963v11.955l11.211-11.955h7.836L33.293 29.426l12.518 17.082h-7.795"></path>
          </svg>
          <span>Inicio</span>
        </li>
        <li>
          <LiaCocktailSolid className="icon" />
          <span>Página 1</span>
        </li>
        <li>
          <AiFillDribbbleCircle className="icon" />
          <span>Página 2</span>
        </li>
        <li>
          <AiFillDribbbleCircle className="icon" />
          <span>Página 3</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
