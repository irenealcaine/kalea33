import "./NavBar.scss";
import logo from "../../images/letter-k.svg";
import { AiFillDribbbleCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <img src={logo} alt="logo" className="icon" />
          <span>adfhadfh</span>
        </li>
        <li>
          <AiFillDribbbleCircle className="icon" />
          <span>adfhadfh</span>
        </li>
        <li>
          <AiFillDribbbleCircle className="icon" />
          <span>adfhadfh</span>
        </li>
        <li>
          <AiFillDribbbleCircle className="icon" />
          <span>adfhadfh</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
