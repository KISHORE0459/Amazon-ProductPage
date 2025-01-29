import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import "../style/navbottom.css";

const Navbottom = () => {
  return (
    <nav id="navbottom">
      <div to="/" id="homelogoctn" className="navitems">
        <IoHomeOutline id="homelogo" className="navitemlogo" />
        <h3>Home</h3>
      </div>
      <div to="/" id="userlogoctn" className="navitems">
        <FaRegUserCircle className="navitemlogo" />
        <h3>You</h3>
      </div>
      <div to="/" id="morelogoctn" className="navitems">
        <CiCircleMore className="navitemlogo" />
        <h3>More</h3>
      </div>
      <div to="/" id="cartlogoctn" className="navitems">
        <FiShoppingCart className="navitemlogo" />
        <h3>cart</h3>
      </div>
    </nav>
  );
};

export default Navbottom;
